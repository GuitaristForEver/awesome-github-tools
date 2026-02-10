# Awesome GitHub Tools [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

A curated list of tools, apps, and extensions that enhance the GitHub experience. Inspired by the style of "The Book of Secret Knowledge."

Suggestions welcome! Open an issue or PR with a link and one‑line description.

Prefer a compact overview? See the table view: TABLE.md

---

## Contents
- 📱 Mobile Apps
- 🧩 Browser Extensions
- 💻 CLI & Desktop
- 🤖 Integrations & Automation
  - AI Assistants
  - Model Context Protocol (MCP) Servers
  - Development Tools
- 📊 Insights & Analytics
- 🔒 Security & Compliance

## 📱 Mobile Apps

- **GitHub Mobile** — Official mobile app for notifications, code review, issues, and discussions.
  - iOS: https://apps.apple.com/app/github/id1477376905
  - Android: https://play.google.com/store/apps/details?id=com.github.android
  - Docs: https://docs.github.com/en/mobile

## 🧩 Browser Extensions

- **Material Icons for GitHub** — Adds rich file/folder icons to GitHub's file browser for better scannability.
  - Link: https://chromewebstore.google.com/detail/material-icons-for-github/bggfcpfjbdkhfhfmkjpbhnkhnpjjeomc

## 💻 CLI & Desktop

- **act** — Run GitHub Actions locally for fast debugging.
  - Repo: https://github.com/nektos/act

## 🤖 Integrations & Automation

### AI Assistants

- <img src="https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/claude.png" width="16" alt="Claude"> **Claude Code Action** — AI-powered code review using Anthropic's Claude via AWS Bedrock for automatic PR reviews and architecture guidance.
  - Repo: https://github.com/anthropics/claude-code-action
  - Demo: Try `@claude` in this repo | [Setup Guide](docs/AI_ASSISTANTS_DEMO.md)

- <img src="https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/gemini.png" width="16" alt="Gemini"> **Gemini CLI** — Autonomous AI agent powered by Google's Gemini for code changes, issue triage, and automated workflows with approval.
  - Repo: https://github.com/google-gemini/gemini-cli
  - Demo: Try `@gemini-cli` in this repo | [Setup Guide](docs/AI_ASSISTANTS_DEMO.md)

### Model Context Protocol (MCP) Servers

- **GitHub MCP Server** — Official MCP server from GitHub enabling AI agents to access repositories, issues, pull requests, and code.
  - Docs: https://docs.github.com/en/copilot/concepts/context/copilot-extensions
  - Used by: GitHub Copilot Chat, Coding Agent
  - Features: OAuth/PAT auth, configurable toolsets, fine-grained permissions

- **Atlassian Remote MCP Server** — Official MCP server for connecting AI agents to Jira and Confluence to read/write documentation, search pages, and create issues.
  - Repo: https://github.com/atlassian/atlassian-mcp-server
  - Docs: https://www.atlassian.com/platform/remote-mcp-server
  - Platforms: Confluence, Jira, Compass

- **Coralogix MCP Server** — Observability MCP server enabling AI agents to query logs, traces, and metrics from Coralogix platform using Dataprime and PromQL.
  - Repo: https://github.com/coralogix/coralogix-mcp-server
  - Features: Alert management, incident tracking, log/trace queries with Dataprime, metrics with PromQL, schema exploration
  - Use Cases: Debugging, monitoring, incident response, performance analysis

### Development Tools

- **pre-commit** — Framework for managing and running code-quality hooks.
  - Link: https://pre-commit.com

- **tox** — Standardize and reproduce test/lint environments locally and in CI.
  - Link: https://tox.wiki

## 📊 Insights & Analytics

## 🔒 Security & Compliance

- **gitleaks** — Fast, customizable secret scanner for Git repositories to detect hardcoded secrets, credentials, and API keys in commits, branches, and files.
  - Repo: https://github.com/zricethezav/gitleaks
  - Docs: https://docs.gitleaks.io/
  - Features: Built-in leak rules, custom regex support, CI/CD integration, pre-commit hooks

- **detect-secrets** — Enterprise-grade tool from Yelp for detecting and preventing secrets in source code with baseline management and audit capabilities.
  - Repo: https://github.com/Yelp/detect-secrets
  - Features: Multiple detection methods (regex, entropy, keywords), baseline/audit functionality, pre-commit integration, customizable filters

---

## Contributing

### How to Add a Tool

- Add the tool under the correct emoji category.
- Follow the format: `- **Tool Name** — Brief description.`
- Add indented bullets for links: `  - Repo:`, `  - Docs:`, etc.
- Keep descriptions concise and focused on value.
- Prefer official sources (repos, store pages, docs) when linking.

### Auto-Sync TABLE.md

TABLE.md is automatically synchronized from README.md via GitHub Actions. When you update README.md, the table view will be regenerated automatically on merge to main. No manual updates to TABLE.md needed!

### Branch Protection

This repository requires pull request reviews before merging to main. All changes must be approved by a maintainer.

<!-- Keep this list simple and link-only. -->
