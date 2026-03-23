<!-- mcp-name: Trunk MCP Server -->

# Trunk MCP Server

This extension connects [Trunk](https://trunk.io) to GitHub Copilot through VS Code's MCP support. Once installed, Copilot can pull flaky test data from Trunk and suggest fixes directly in chat.

## What You Get

The extension registers Trunk's MCP server with VS Code. Copilot picks it up automatically and gains access to the `fix-flaky-test` tool, which can:

- Identify flaky tests in your repo
- Explain why a test is flaking (root cause analysis)
- Suggest code changes to fix it
- Show historical failure patterns

No configuration files to edit. No API keys to manage. The MCP server handles auth via OAuth when Copilot first connects.

## Getting Started

1. Install this extension
2. Open Copilot Chat and ask something like `fix my flaky tests`
3. Trunk will prompt you to sign in the first time (OAuth via browser)
4. That's it. Copilot now has access to your Trunk data.

You can also run `Trunk: Connect to Trunk` from the command palette to kick off the connection manually.

## Requirements

- VS Code 1.99+
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) extension
- A [Trunk](https://trunk.io) account with CI test uploads configured

If you haven't set up test uploads yet, check the [Trunk docs](https://docs.trunk.io/) to get your CI pipeline reporting test results.

## Links

- [Trunk Documentation](https://docs.trunk.io/)
- [Trunk Website](https://trunk.io)
- [Source Code](https://github.com/trunk-io/vscode-trunk-mcp)
- [Report an Issue](https://github.com/trunk-io/vscode-trunk-mcp/issues)
