# Development Guide

Welcome to the RagonsAI development guide. This document explains the architecture and how to contribute to the project.

## Architecture Overview

### 1. Backend (Node.js & Express)
- **Entry Point:** `server.js` - Handles API routes, authentication, and WebSocket initialization.
- **Process Management:** `cli-manager.js` - Uses `node-pty` to manage OS-level pseudo-terminals.
- **Data Layer:** `db.js` - SQLite database management with `better-sqlite3`.

### 2. Frontend (Vanilla JS & xterm.js)
- **Interface:** `public/index.html` & `public/style.css`.
- **Application Logic:** `public/app.js` - A custom, lightweight SPA framework handling state, translations, and WebSocket communication.
- **Terminal:** `xterm.js` handles the rendering of CLI output.

## Environment Variables
Copy `.env.example` to `.env` and configure the following:
- `PORT`: The port the server listens on (default: 8787).
- `SESSION_SECRET`: A random string for securing session cookies.
- `DATA_DIR`: Directory for SQLite database.
- `SESSIONS_DIR`: Directory for temporary CLI working directories.

## Adding a New CLI Tool
To add a new AI CLI tool by default, modify the `seedBuiltinClis` function in `db.js`.

## Contribution Workflow
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes.
4. Push to the branch.
5. Open a Pull Request.

---
Part of the [Hostragons®](https://hostragons.com) Open Source Initiative.
