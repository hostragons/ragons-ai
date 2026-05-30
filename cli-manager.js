const pty = require('node-pty');
const path = require('path');
const fs = require('fs');
const os = require('os');
const crypto = require('crypto');
const { Clis, Messages, Conversations } = require('./db');

const SESSIONS_DIR = path.join(__dirname, 'sessions');
if (!fs.existsSync(SESSIONS_DIR)) fs.mkdirSync(SESSIONS_DIR, { recursive: true });

const ACTIVE = new Map();

function sessionKey(userId, conversationId) {
  return `${userId}::${conversationId}`;
}

function workdirFor(conversationId) {
  const dir = path.join(SESSIONS_DIR, conversationId);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  return dir;
}

function spawnSession({ userId, conversationId, cli, cols = 120, rows = 32 }) {
  const key = sessionKey(userId, conversationId);
  if (ACTIVE.has(key)) return ACTIVE.get(key);

  const env = {
    ...process.env,
    TERM: 'xterm-256color',
    COLORTERM: 'truecolor',
    LANG: process.env.LANG || 'en_US.UTF-8',
    HOME: process.env.HOME || '/root',
    PATH: process.env.PATH || '/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin',
    ...cli.env,
  };

  const cwd = workdirFor(conversationId);
  const proc = pty.spawn(cli.command, cli.args || [], {
    name: 'xterm-256color',
    cols,
    rows,
    cwd,
    env,
  });

  const session = {
    key,
    userId,
    conversationId,
    cliId: cli.id,
    proc,
    buffer: '',
    sockets: new Set(),
    closed: false,
    startedAt: Date.now(),
  };

  proc.onData((data) => {
    session.buffer += data;
    if (session.buffer.length > 200000) {
      session.buffer = session.buffer.slice(-150000);
    }
    for (const ws of session.sockets) {
      try { ws.send(JSON.stringify({ type: 'data', data })); } catch (e) {}
    }
  });

  proc.onExit(({ exitCode, signal }) => {
    session.closed = true;
    for (const ws of session.sockets) {
      try { ws.send(JSON.stringify({ type: 'exit', exitCode, signal })); } catch (e) {}
    }
    ACTIVE.delete(key);
  });

  ACTIVE.set(key, session);
  return session;
}

function getSession(userId, conversationId) {
  return ACTIVE.get(sessionKey(userId, conversationId));
}

function killSession(userId, conversationId) {
  const s = getSession(userId, conversationId);
  if (!s) return false;
  try { s.proc.kill(); } catch (e) {}
  ACTIVE.delete(s.key);
  return true;
}

function attach(session, ws) {
  session.sockets.add(ws);
  if (session.buffer.length) {
    try { ws.send(JSON.stringify({ type: 'data', data: session.buffer })); } catch (e) {}
  }
}

function detach(session, ws) {
  session.sockets.delete(ws);
}

function resize(session, cols, rows) {
  try { session.proc.resize(cols, rows); } catch (e) {}
}

function write(session, data) {
  if (session.closed) return;
  try { session.proc.write(data); } catch (e) {}
}

function activeCount() { return ACTIVE.size; }
function listActive() {
  const out = [];
  for (const s of ACTIVE.values()) {
    out.push({ key: s.key, userId: s.userId, conversationId: s.conversationId, cliId: s.cliId, startedAt: s.startedAt });
  }
  return out;
}

module.exports = { spawnSession, getSession, killSession, attach, detach, resize, write, activeCount, listActive };
