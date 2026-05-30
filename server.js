const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs');
const os = require('os');
const url = require('url');
const child_process = require('child_process');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const { WebSocketServer } = require('ws');

const { Users, Sessions, Clis, Conversations, Messages } = require('./db');
const cliMgr = require('./cli-manager');

const SESSIONS_DIR = path.join(__dirname, 'sessions');
if (!fs.existsSync(SESSIONS_DIR)) fs.mkdirSync(SESSIONS_DIR, { recursive: true });

function workdirFor(conversationId) {
  const dir = path.join(SESSIONS_DIR, conversationId);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  return dir;
}

function safeName(n) {
  return String(n || 'file').replace(/[^a-zA-Z0-9._-]/g, '_').replace(/^\.+/, '').slice(0, 180) || 'file';
}

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const conv = req.params.id;
      cb(null, workdirFor(conv));
    },
    filename: (req, file, cb) => {
      const dir = workdirFor(req.params.id);
      let base = safeName(file.originalname);
      let target = base;
      let i = 1;
      while (fs.existsSync(path.join(dir, target))) {
        const ext = path.extname(base);
        const stem = base.slice(0, base.length - ext.length);
        target = `${stem}-${i}${ext}`;
        i++;
      }
      cb(null, target);
    },
  }),
  limits: { fileSize: 200 * 1024 * 1024, files: 20 },
});

const app = express();
const server = http.createServer(app);

app.use(express.json({ limit: '2mb' }));
app.use(cookieParser());

const PORT = process.env.PORT || 8787;
const COOKIE_NAME = 'ai_cli_sid';

function getSessionFromReq(req) {
  const token = req.cookies?.[COOKIE_NAME];
  if (!token) return null;
  const sess = Sessions.get(token);
  if (!sess) return null;
  const user = Users.findById(sess.user_id);
  if (!user) return null;
  return { token, user };
}

function requireAuth(req, res, next) {
  const ctx = getSessionFromReq(req);
  if (!ctx) return res.status(401).json({ error: 'unauthorized' });
  req.ctx = ctx;
  next();
}

app.get('/api/health', (req, res) => res.json({ ok: true }));

app.get('/api/bootstrap', (req, res) => {
  res.json({ needsSetup: Users.count() === 0 });
});

app.post('/api/setup', (req, res) => {
  if (Users.count() > 0) return res.status(400).json({ error: 'already_setup' });
  const { username, password } = req.body || {};
  if (!username || !password || username.length < 3 || password.length < 8) {
    return res.status(400).json({ error: 'invalid_credentials', message: 'Username must be at least 3 and password at least 8 characters.' });
  }
  const id = Users.create(username, password);
  const token = Sessions.create(id);
  setSessionCookie(res, token);
  res.json({ ok: true, user: { id, username } });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) return res.status(400).json({ error: 'invalid' });
  const user = Users.findByUsername(username);
  if (!user || !Users.verifyPassword(user, password)) {
    return res.status(401).json({ error: 'bad_credentials', message: 'Invalid username or password.' });
  }
  const token = Sessions.create(user.id);
  setSessionCookie(res, token);
  res.json({ ok: true, user: { id: user.id, username: user.username } });
});

app.post('/api/logout', (req, res) => {
  const token = req.cookies?.[COOKIE_NAME];
  if (token) Sessions.destroy(token);
  res.clearCookie(COOKIE_NAME);
  res.json({ ok: true });
});

app.get('/api/me', requireAuth, (req, res) => {
  res.json({ user: { id: req.ctx.user.id, username: req.ctx.user.username } });
});

app.post('/api/me/password', requireAuth, (req, res) => {
  const { currentPassword, newPassword } = req.body || {};
  if (!newPassword || newPassword.length < 8) return res.status(400).json({ error: 'weak_password' });
  const fresh = Users.findByUsername(req.ctx.user.username);
  if (!Users.verifyPassword(fresh, currentPassword || '')) return res.status(401).json({ error: 'bad_current' });
  Users.updatePassword(req.ctx.user.id, newPassword);
  res.json({ ok: true });
});

app.post('/api/me/username', requireAuth, (req, res) => {
  const { newUsername, currentPassword } = req.body || {};
  if (!newUsername || newUsername.length < 3) return res.status(400).json({ error: 'invalid_username' });
  const fresh = Users.findByUsername(req.ctx.user.username);
  if (!Users.verifyPassword(fresh, currentPassword || '')) return res.status(401).json({ error: 'bad_current' });
  if (Users.findByUsername(newUsername) && newUsername !== req.ctx.user.username) return res.status(400).json({ error: 'taken' });
  Users.updateUsername(req.ctx.user.id, newUsername);
  res.json({ ok: true });
});

app.get('/api/clis', requireAuth, (req, res) => {
  res.json({ clis: Clis.all() });
});

app.post('/api/clis', requireAuth, (req, res) => {
  const { id, name, command, args, env, icon, color, description } = req.body || {};
  if (!id || !name || !command) return res.status(400).json({ error: 'missing_fields' });
  if (!/^[a-z0-9_-]{2,32}$/i.test(id)) return res.status(400).json({ error: 'invalid_id', message: 'ID can only contain letters, numbers, _, -.' });
  if (Clis.get(id)) return res.status(400).json({ error: 'exists' });
  const cli = Clis.create({ id, name, command, args: args || [], env: env || {}, icon: icon || (name[0] || '?').toUpperCase(), color: color || '#7c3aed', description: description || '' });
  res.json({ cli });
});

app.patch('/api/clis/:id', requireAuth, (req, res) => {
  const cli = Clis.get(req.params.id);
  if (!cli) return res.status(404).json({ error: 'not_found' });
  const patch = req.body || {};
  if (cli.builtin) {
    const allowed = ['env', 'enabled', 'color', 'icon', 'description', 'args'];
    for (const k of Object.keys(patch)) if (!allowed.includes(k)) delete patch[k];
  }
  const updated = Clis.update(req.params.id, patch);
  res.json({ cli: updated });
});

app.delete('/api/clis/:id', requireAuth, (req, res) => {
  const ok = Clis.delete(req.params.id);
  if (!ok) return res.status(400).json({ error: 'cannot_delete' });
  res.json({ ok: true });
});

app.get('/api/conversations', requireAuth, (req, res) => {
  res.json({ conversations: Conversations.list(req.ctx.user.id) });
});

app.post('/api/conversations', requireAuth, (req, res) => {
  const { cliId, title } = req.body || {};
  const cli = Clis.get(cliId);
  if (!cli) return res.status(400).json({ error: 'invalid_cli' });
  const conv = Conversations.create(req.ctx.user.id, cliId, title || `${cli.name} sohbeti`);
  res.json({ conversation: conv });
});

app.patch('/api/conversations/:id', requireAuth, (req, res) => {
  const conv = Conversations.get(req.params.id, req.ctx.user.id);
  if (!conv) return res.status(404).json({ error: 'not_found' });
  const { title } = req.body || {};
  if (title) Conversations.rename(req.params.id, req.ctx.user.id, title);
  res.json({ conversation: Conversations.get(req.params.id, req.ctx.user.id) });
});

app.delete('/api/conversations/:id', requireAuth, (req, res) => {
  const conv = Conversations.get(req.params.id, req.ctx.user.id);
  if (!conv) return res.status(404).json({ error: 'not_found' });
  cliMgr.killSession(req.ctx.user.id, req.params.id);
  Conversations.delete(req.params.id, req.ctx.user.id);
  // Recursively remove session workdir
  const dir = path.join(SESSIONS_DIR, req.params.id);
  if (dir.startsWith(SESSIONS_DIR + path.sep) && fs.existsSync(dir)) {
    try { fs.rmSync(dir, { recursive: true, force: true }); } catch (e) {}
  }
  res.json({ ok: true });
});

app.post('/api/conversations/:id/pin', requireAuth, (req, res) => {
  const conv = Conversations.get(req.params.id, req.ctx.user.id);
  if (!conv) return res.status(404).json({ error: 'not_found' });
  const pinned = !!req.body?.pinned;
  Conversations.pin(req.params.id, req.ctx.user.id, pinned);
  res.json({ conversation: Conversations.get(req.params.id, req.ctx.user.id) });
});

// ----- Workdir files: list / upload / download / delete -----
function resolveInsideWorkdir(conv, rel) {
  const dir = path.join(SESSIONS_DIR, conv);
  const resolved = path.resolve(dir, rel || '');
  if (!resolved.startsWith(dir + path.sep) && resolved !== dir) return null;
  return resolved;
}

app.get('/api/conversations/:id/files', requireAuth, (req, res) => {
  const conv = Conversations.get(req.params.id, req.ctx.user.id);
  if (!conv) return res.status(404).json({ error: 'not_found' });
  const dir = workdirFor(req.params.id);
  let entries = [];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
      .filter(e => !e.name.startsWith('.'))
      .map(e => {
        const fp = path.join(dir, e.name);
        let stat = null;
        try { stat = fs.statSync(fp); } catch {}
        return {
          name: e.name,
          dir: e.isDirectory(),
          size: stat ? stat.size : 0,
          mtime: stat ? stat.mtimeMs : 0,
        };
      })
      .sort((a, b) => (a.dir === b.dir ? b.mtime - a.mtime : (a.dir ? -1 : 1)));
  } catch {}
  res.json({ workdir: dir, files: entries });
});

app.post('/api/conversations/:id/files', requireAuth, (req, res, next) => {
  const conv = Conversations.get(req.params.id, req.ctx.user.id);
  if (!conv) return res.status(404).json({ error: 'not_found' });
  next();
}, upload.array('files', 20), (req, res) => {
  res.json({ ok: true, files: (req.files || []).map(f => ({ name: f.filename, size: f.size })) });
});

app.get('/api/conversations/:id/files/download', requireAuth, (req, res) => {
  const conv = Conversations.get(req.params.id, req.ctx.user.id);
  if (!conv) return res.status(404).json({ error: 'not_found' });
  const rel = req.query.name || '';
  const fp = resolveInsideWorkdir(req.params.id, rel);
  if (!fp || !fs.existsSync(fp)) return res.status(404).json({ error: 'not_found' });
  res.download(fp);
});

app.delete('/api/conversations/:id/files', requireAuth, (req, res) => {
  const conv = Conversations.get(req.params.id, req.ctx.user.id);
  if (!conv) return res.status(404).json({ error: 'not_found' });
  const rel = req.query.name || '';
  const fp = resolveInsideWorkdir(req.params.id, rel);
  if (!fp || !fs.existsSync(fp)) return res.status(404).json({ error: 'not_found' });
  try {
    const stat = fs.statSync(fp);
    if (stat.isDirectory()) fs.rmSync(fp, { recursive: true, force: true });
    else fs.unlinkSync(fp);
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: 'delete_failed', message: e.message }); }
});

// Export full conversation transcript
app.get('/api/conversations/:id/export', requireAuth, (req, res) => {
  const conv = Conversations.get(req.params.id, req.ctx.user.id);
  if (!conv) return res.status(404).json({ error: 'not_found' });
  const msgs = Messages.list(req.params.id);
  const cli = Clis.get(conv.cli_id);
  const lines = [];
  lines.push(`# ${conv.title}`);
  lines.push(`CLI: ${cli?.name || conv.cli_id}`);
  lines.push(`Created: ${new Date(conv.created_at).toISOString()}`);
  lines.push(`Updated: ${new Date(conv.updated_at).toISOString()}`);
  lines.push('');
  for (const m of msgs) {
    lines.push(`## [${new Date(m.created_at).toISOString()}] ${m.role}`);
    lines.push(m.content);
    lines.push('');
  }
  res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
  res.setHeader('Content-Disposition', `attachment; filename="${safeName(conv.title)}.md"`);
  res.send(lines.join('\n'));
});

// System stats
let _bootTime = Date.now();
app.get('/api/stats', requireAuth, (req, res) => {
  const mem = { total: os.totalmem(), free: os.freemem() };
  mem.used = mem.total - mem.free;
  const load = os.loadavg();
  const cpus = os.cpus();
  let dfOut = '';
  try { dfOut = child_process.execSync("df -kP / | tail -1", { encoding: 'utf-8', timeout: 800 }); } catch {}
  let disk = null;
  if (dfOut) {
    const parts = dfOut.trim().split(/\s+/);
    if (parts.length >= 5) {
      const total = parseInt(parts[1], 10) * 1024;
      const used = parseInt(parts[2], 10) * 1024;
      const avail = parseInt(parts[3], 10) * 1024;
      disk = { total, used, avail, usedPct: total ? Math.round((used / total) * 1000) / 10 : 0 };
    }
  }
  res.json({
    host: os.hostname(),
    platform: `${os.type()} ${os.release()}`,
    uptimeSec: Math.floor(os.uptime()),
    procUptimeSec: Math.floor((Date.now() - _bootTime) / 1000),
    load,
    cpu: { count: cpus.length, model: cpus[0]?.model || '' },
    mem,
    disk,
    activeSessions: cliMgr.activeCount?.() || 0,
    node: process.version,
  });
});

app.get('/api/conversations/:id/messages', requireAuth, (req, res) => {
  const conv = Conversations.get(req.params.id, req.ctx.user.id);
  if (!conv) return res.status(404).json({ error: 'not_found' });
  res.json({ conversation: conv, messages: Messages.list(req.params.id) });
});

function setSessionCookie(res, token) {
  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 30 * 24 * 60 * 60 * 1000,
    path: '/',
  });
}

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  if (req.method !== 'GET') return next();
  if (req.path.startsWith('/api/') || req.path.startsWith('/ws/')) return next();
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const wss = new WebSocketServer({ noServer: true });

// Heartbeat: ping every 30s and drop sockets that stop answering. Keeps NAT
// mappings warm and reaps half-open connections so the client reconnects cleanly.
const HEARTBEAT_MS = 30000;
const heartbeat = setInterval(() => {
  for (const ws of wss.clients) {
    if (ws.isAlive === false) { try { ws.terminate(); } catch {} continue; }
    ws.isAlive = false;
    try { ws.ping(); } catch {}
  }
}, HEARTBEAT_MS);
wss.on('close', () => clearInterval(heartbeat));

server.on('upgrade', (req, socket, head) => {
  const { pathname, query } = url.parse(req.url, true);
  if (pathname !== '/ws/terminal') {
    socket.destroy();
    return;
  }
  const cookies = parseCookies(req.headers.cookie || '');
  const token = cookies[COOKIE_NAME];
  const sess = Sessions.get(token);
  if (!sess) {
    socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
    socket.destroy();
    return;
  }
  const user = Users.findById(sess.user_id);
  if (!user) { socket.destroy(); return; }
  wss.handleUpgrade(req, socket, head, (ws) => {
    handleWs(ws, user, query);
  });
});

function parseCookies(str) {
  const out = {};
  for (const part of str.split(';')) {
    const idx = part.indexOf('=');
    if (idx < 0) continue;
    const k = part.slice(0, idx).trim();
    const v = part.slice(idx + 1).trim();
    out[k] = decodeURIComponent(v);
  }
  return out;
}

function handleWs(ws, user, query) {
  ws.isAlive = true;
  ws.on('pong', () => { ws.isAlive = true; });
  const { conversationId } = query;
  if (!conversationId) { ws.close(); return; }
  const conv = Conversations.get(conversationId, user.id);
  if (!conv) { ws.close(); return; }
  const cli = Clis.get(conv.cli_id);
  if (!cli) { ws.close(); return; }

  let session = cliMgr.getSession(user.id, conversationId);
  let started = !!session;
  if (!session) {
    try {
      session = cliMgr.spawnSession({ userId: user.id, conversationId, cli });
    } catch (e) {
      try { ws.send(JSON.stringify({ type: 'error', message: 'CLI could not be started: ' + e.message })); } catch {}
      ws.close();
      return;
    }
  }
  cliMgr.attach(session, ws);
  try { ws.send(JSON.stringify({ type: 'ready', resumed: started, cli: { id: cli.id, name: cli.name } })); } catch {}

  ws.on('message', (raw) => {
    let msg;
    try { msg = JSON.parse(raw.toString()); } catch { return; }
    if (msg.type === 'input') {
      cliMgr.write(session, msg.data || '');
    } else if (msg.type === 'resize') {
      cliMgr.resize(session, msg.cols || 120, msg.rows || 32);
    } else if (msg.type === 'kill') {
      cliMgr.killSession(user.id, conversationId);
    } else if (msg.type === 'log_user_message') {
      if (typeof msg.content === 'string' && msg.content.length < 100000) {
        Messages.add(conversationId, 'user', msg.content);
      }
    }
  });
  ws.on('close', () => {
    cliMgr.detach(session, ws);
  });
}

server.listen(PORT, '127.0.0.1', () => {
  console.log(`[ai-cli] Listening on http://127.0.0.1:${PORT}`);
});
