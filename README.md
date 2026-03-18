<!-- mcp-name: Trunk Flaky Tests -->

# Trunk Flaky Tests — VS Code Extension

Detect flaky tests, get root cause analysis, and fix suggestions right in your editor.

This extension registers the [Trunk](https://trunk.io) MCP server with VS Code, giving GitHub Copilot access to flaky test detection and fix tools.

## What It Does

| Tool | Description |
|------|-------------|
| `fix-flaky-test` | Analyze a flaky test, identify the root cause, and suggest a fix |
| `setup-trunk-uploads` | Configure your CI pipeline to upload test results to Trunk |

## Getting Started

1. Install this extension
2. Click **Connect to Trunk** when prompted (or run `Trunk: Connect to Trunk Flaky Tests` from the command palette)
3. Sign in to your Trunk account
4. Ask Copilot about your flaky tests

## Requirements

- VS Code 1.99+
- GitHub Copilot extension
- A [Trunk](https://trunk.io) account with test uploads configured

## Links

- [Documentation](https://docs.trunk.io/flaky-tests/use-mcp-server)
- [Trunk Website](https://trunk.io)
- [Source Code](https://github.com/trunk-io/vscode-trunk-mcp)
