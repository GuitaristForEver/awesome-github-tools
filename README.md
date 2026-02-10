# Awesome GitHub Tools [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

Tools, apps, and extensions that enhance the GitHub experience. Prefer a compact view? See [TABLE.md](TABLE.md).

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

- [GitHub Mobile](https://docs.github.com/en/mobile) - Official mobile app for notifications, code review, issues, and discussions.
  - [iOS](https://apps.apple.com/app/github/id1477376905) · [Android](https://play.google.com/store/apps/details?id=com.github.android)

## 🧩 Browser Extensions

- [Material Icons for GitHub](https://chromewebstore.google.com/detail/material-icons-for-github/bggfcpfjbdkhfhfmkjpbhnkhnpjjeomc) - Adds rich file and folder icons to GitHub's file browser for better scannability.

- [Refined GitHub](https://github.com/refined-github/refined-github) - Browser extension that simplifies the GitHub interface and adds useful features (repos, issues, PRs, file management, comments, keyboard shortcuts).

## 💻 CLI & Desktop

- [act](https://github.com/nektos/act) - Run GitHub Actions locally for fast debugging.

- [Peacock](https://github.com/johnpapa/vscode-peacock) - VS Code extension that colors your workspace so you can tell which editor window or project you're in.
  - [Marketplace](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock)

## 🤖 Integrations & Automation

### AI Assistants

- [Claude Code Action](https://github.com/anthropics/claude-code-action) - AI-powered code review using Anthropic's Claude via AWS Bedrock for automatic PR reviews and architecture guidance.
  - [Setup Guide](docs/AI_ASSISTANTS_DEMO.md)

- [Gemini CLI](https://github.com/google-gemini/gemini-cli) - Autonomous AI agent powered by Google's Gemini for code changes, issue triage, and automated workflows with approval.
  - [Setup Guide](docs/AI_ASSISTANTS_DEMO.md)

### Model Context Protocol (MCP) Servers

- [GitHub MCP Server](https://docs.github.com/en/copilot/concepts/context/copilot-extensions) - Official MCP server from GitHub enabling AI agents to access repositories, issues, pull requests, and code.

- [Atlassian Remote MCP Server](https://github.com/atlassian/atlassian-mcp-server) - Official MCP server for connecting AI agents to Jira and Confluence to read, write, search, and create issues.
  - [Docs](https://www.atlassian.com/platform/remote-mcp-server)

- [Coralogix MCP Server](https://github.com/coralogix/coralogix-mcp-server) - Observability MCP server enabling AI agents to query logs, traces, and metrics from Coralogix using Dataprime and PromQL.

### Development Tools

- [pre-commit](https://pre-commit.com) - Framework for managing and running code-quality hooks.

- [tox](https://tox.wiki) - Standardize and reproduce test and lint environments locally and in CI.

## 📊 Insights & Analytics

## 🔒 Security & Compliance

- [gitleaks](https://github.com/zricethezav/gitleaks) - Fast, customizable secret scanner for Git repositories to detect hardcoded secrets, credentials, and API keys.
  - [Docs](https://docs.gitleaks.io/)

- [detect-secrets](https://github.com/Yelp/detect-secrets) - Enterprise-grade tool from Yelp for detecting and preventing secrets in source code with baseline management and audit capabilities.

---

## Contributing

See [contributing.md](contributing.md) for how to add a tool. Suggestions welcome—open an issue or PR with a link and one-line description.

---

## Footnotes

- [TABLE.md](TABLE.md) - Compact table view of this list.
- TABLE.md is synced from this readme via GitHub Actions on merge to main.
- This repository requires pull request reviews before merging to main.
