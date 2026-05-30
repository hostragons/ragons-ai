const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const bcrypt = require('bcrypt');

const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

const db = new Database(path.join(DATA_DIR, 'app.db'));
db.pragma('journal_mode = WAL');

db.exec(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS sessions (
  token TEXT PRIMARY KEY,
  user_id INTEGER NOT NULL,
  created_at INTEGER NOT NULL,
  expires_at INTEGER NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS clis (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  command TEXT NOT NULL,
  args TEXT NOT NULL DEFAULT '[]',
  env TEXT NOT NULL DEFAULT '{}',
  icon TEXT DEFAULT '',
  color TEXT DEFAULT '#7c3aed',
  description TEXT DEFAULT '',
  builtin INTEGER NOT NULL DEFAULT 0,
  enabled INTEGER NOT NULL DEFAULT 1,
  sort_order INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS conversations (
  id TEXT PRIMARY KEY,
  user_id INTEGER NOT NULL,
  cli_id TEXT NOT NULL,
  title TEXT NOT NULL DEFAULT 'New conversation',
  pinned INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  conversation_id TEXT NOT NULL,
  role TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  FOREIGN KEY(conversation_id) REFERENCES conversations(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_messages_conv ON messages(conversation_id);
CREATE INDEX IF NOT EXISTS idx_conv_user ON conversations(user_id);
`);

function seedBuiltinClis() {
  const count = db.prepare('SELECT COUNT(*) AS n FROM clis WHERE builtin = 1').get().n;
  if (count > 0) return;
  const insert = db.prepare(`INSERT INTO clis (id, name, command, args, env, icon, color, description, builtin, enabled, sort_order)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1, 1, ?)`);
  const items = [
    ['claude', 'Claude Code', '/root/.local/bin/claude', '[]', '{}', 'C', '#d97757', 'Anthropic Claude Code CLI', 0],
    ['codex', 'OpenAI Codex', '/usr/bin/codex', '[]', '{}', 'O', '#10a37f', 'OpenAI Codex CLI', 1],
    ['gemini', 'Gemini', '/usr/bin/gemini', '[]', '{}', 'G', '#4285f4', 'Google Gemini CLI', 2],
  ];
  const tx = db.transaction(() => { for (const it of items) insert.run(...it); });
  tx();
}
seedBuiltinClis();

const Users = {
  count() { return db.prepare('SELECT COUNT(*) AS n FROM users').get().n; },
  create(username, password) {
    const hash = bcrypt.hashSync(password, 12);
    const info = db.prepare('INSERT INTO users (username, password_hash, created_at) VALUES (?, ?, ?)').run(username, hash, Date.now());
    return info.lastInsertRowid;
  },
  findByUsername(username) {
    return db.prepare('SELECT * FROM users WHERE username = ?').get(username);
  },
  findById(id) {
    return db.prepare('SELECT id, username, created_at FROM users WHERE id = ?').get(id);
  },
  verifyPassword(user, password) {
    return bcrypt.compareSync(password, user.password_hash);
  },
  updatePassword(id, newPassword) {
    const hash = bcrypt.hashSync(newPassword, 12);
    db.prepare('UPDATE users SET password_hash = ? WHERE id = ?').run(hash, id);
  },
  updateUsername(id, newUsername) {
    db.prepare('UPDATE users SET username = ? WHERE id = ?').run(newUsername, id);
  },
};

const Sessions = {
  create(userId, ttlMs = 30 * 24 * 60 * 60 * 1000) {
    const token = crypto.randomBytes(32).toString('hex');
    const now = Date.now();
    db.prepare('INSERT INTO sessions (token, user_id, created_at, expires_at) VALUES (?, ?, ?, ?)').run(token, userId, now, now + ttlMs);
    return token;
  },
  get(token) {
    if (!token) return null;
    const row = db.prepare('SELECT * FROM sessions WHERE token = ?').get(token);
    if (!row) return null;
    if (row.expires_at < Date.now()) {
      db.prepare('DELETE FROM sessions WHERE token = ?').run(token);
      return null;
    }
    return row;
  },
  destroy(token) {
    db.prepare('DELETE FROM sessions WHERE token = ?').run(token);
  },
};

const Clis = {
  all() {
    return db.prepare('SELECT * FROM clis ORDER BY sort_order, name').all().map(parseCliRow);
  },
  enabled() {
    return db.prepare('SELECT * FROM clis WHERE enabled = 1 ORDER BY sort_order, name').all().map(parseCliRow);
  },
  get(id) {
    const row = db.prepare('SELECT * FROM clis WHERE id = ?').get(id);
    return row ? parseCliRow(row) : null;
  },
  create({ id, name, command, args = [], env = {}, icon = '', color = '#7c3aed', description = '' }) {
    const sort = db.prepare('SELECT COALESCE(MAX(sort_order), 0) + 1 AS n FROM clis').get().n;
    db.prepare(`INSERT INTO clis (id, name, command, args, env, icon, color, description, builtin, enabled, sort_order)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, 0, 1, ?)`).run(id, name, command, JSON.stringify(args), JSON.stringify(env), icon, color, description, sort);
    return this.get(id);
  },
  update(id, patch) {
    const fields = [];
    const values = [];
    const allowed = ['name', 'command', 'args', 'env', 'icon', 'color', 'description', 'enabled'];
    for (const k of allowed) {
      if (patch[k] === undefined) continue;
      fields.push(`${k} = ?`);
      if (k === 'args' || k === 'env') values.push(JSON.stringify(patch[k]));
      else if (k === 'enabled') values.push(patch[k] ? 1 : 0);
      else values.push(patch[k]);
    }
    if (!fields.length) return this.get(id);
    values.push(id);
    db.prepare(`UPDATE clis SET ${fields.join(', ')} WHERE id = ?`).run(...values);
    return this.get(id);
  },
  delete(id) {
    const row = db.prepare('SELECT builtin FROM clis WHERE id = ?').get(id);
    if (!row) return false;
    if (row.builtin) return false;
    db.prepare('DELETE FROM clis WHERE id = ?').run(id);
    return true;
  },
};

function parseCliRow(row) {
  return {
    id: row.id,
    name: row.name,
    command: row.command,
    args: JSON.parse(row.args || '[]'),
    env: JSON.parse(row.env || '{}'),
    icon: row.icon,
    color: row.color,
    description: row.description,
    builtin: !!row.builtin,
    enabled: !!row.enabled,
    sort_order: row.sort_order,
  };
}

const Conversations = {
  list(userId) {
    return db.prepare('SELECT * FROM conversations WHERE user_id = ? ORDER BY pinned DESC, updated_at DESC').all(userId);
  },
  get(id, userId) {
    return db.prepare('SELECT * FROM conversations WHERE id = ? AND user_id = ?').get(id, userId);
  },
  create(userId, cliId, title = 'New conversation') {
    const id = crypto.randomBytes(12).toString('hex');
    const now = Date.now();
    db.prepare('INSERT INTO conversations (id, user_id, cli_id, title, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)').run(id, userId, cliId, title, now, now);
    return this.get(id, userId);
  },
  rename(id, userId, title) {
    db.prepare('UPDATE conversations SET title = ?, updated_at = ? WHERE id = ? AND user_id = ?').run(title, Date.now(), id, userId);
    return this.get(id, userId);
  },
  pin(id, userId, pinned) {
    db.prepare('UPDATE conversations SET pinned = ? WHERE id = ? AND user_id = ?').run(pinned ? 1 : 0, id, userId);
    return this.get(id, userId);
  },
  touch(id) {
    db.prepare('UPDATE conversations SET updated_at = ? WHERE id = ?').run(Date.now(), id);
  },
  delete(id, userId) {
    db.prepare('DELETE FROM messages WHERE conversation_id IN (SELECT id FROM conversations WHERE id = ? AND user_id = ?)').run(id, userId);
    db.prepare('DELETE FROM conversations WHERE id = ? AND user_id = ?').run(id, userId);
  },
};

const Messages = {
  list(conversationId) {
    return db.prepare('SELECT id, role, content, created_at FROM messages WHERE conversation_id = ? ORDER BY id').all(conversationId);
  },
  add(conversationId, role, content) {
    db.prepare('INSERT INTO messages (conversation_id, role, content, created_at) VALUES (?, ?, ?, ?)').run(conversationId, role, content, Date.now());
    Conversations.touch(conversationId);
  },
};

module.exports = { db, Users, Sessions, Clis, Conversations, Messages };
