# 🚀 RagonsAI: The Ultimate Web Interface for AI CLIs

**RagonsAI** is a professional, open-source web platform designed to manage and interact with AI-powered Command Line Interface (CLI) tools like Anthropic Claude Code, Google Gemini CLI, and OpenAI Codex from a single, centralized dashboard.

### 🌟 Current Features
- **Real-time Terminal:** Powered by `xterm.js` and `node-pty`, providing a low-latency, fully functional terminal experience directly in your browser.
- **Multi-CLI Management:** Configure and switch between multiple AI models and custom CLI tools effortlessly.
- **Persistent Sessions:** Built-in session management using SQLite ensures your terminal sessions and history are preserved.
- **Modern UI:** An aesthetic, high-performance dark-mode interface designed for power users.
- **File Management:** Seamlessly upload files and images directly into the CLI's working directory.

### 🔮 Future Roadmap (Upcoming Updates)
We are evolving RagonsAI into a comprehensive AI orchestration platform:
- **Simultaneous AI Comparison:** Run multiple AI CLIs side-by-side to compare outputs and performance in real-time.
- **Hosted Infrastructure:** Deploy RagonsAI instances on our managed high-performance servers, removing the need for local setup.
- **Bring Your Own Key (BYOK):** Seamlessly manage your own API keys for Claude, OpenAI, and Gemini within a secure vault.
- **Marketplace Integration:** Directly purchase and provision AI-optimized server resources through our portal.
- **Advanced Collaboration:** Shared terminal sessions for team debugging and pair programming with AI.
- **Universal API Bridge:** A unified interface to talk to different AI engines via CLI even if they don't have a native one.

### 🛠️ Tech Stack
- **Backend:** Node.js, Express, WebSocket (WS), node-pty
- **Database:** SQLite (Better-SQLite3)
- **Frontend:** Pure JavaScript/CSS, xterm.js
- **Auth:** Bcrypt & Cookie-based Sessions

### 🚀 Getting Started

#### Prerequisites
- Node.js (v18+)
- A Linux-based environment (required for `node-pty`)

#### Installation
```bash
# Clone the repository
git clone https://github.com/hostragons/ragons-ai.git
cd ragons-ai

# Install dependencies
npm install

# Start the server
npm start
```
The application will be available at `http://localhost:8787`.

### 🛡️ License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
Built with ❤️ by [Hostragons®](https://hostragons.com)
