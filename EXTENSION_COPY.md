Trunk MCP Server — Extension Copy Inventory
All user-facing text in the extension, organized by location. Copy-paste into a Google Doc for review.

package.json — Metadata
Field
Current Copy
displayName
Trunk MCP Server
description
Trunk’s MCP server to get flaky tests insights, root causes, and fix suggestions.
MCP Server label
Trunk

package.json — Commands
Command
Title
trunk.mcp.connect
Connect to Trunk
trunk.mcp.openDocs
Open Trunk MCP Documentation

package.json — Walkthrough
Walkthrough title: Get Started with Trunk’s MCP Server

Walkthrough description: Get flaky tests insights, root causes, and fix suggestions right in your editor.
Step 1: Connect to Trunk
Panel description:

Sign in to your Trunk account to connect the MCP server to your workspace.

[Connect to Trunk]

Sidebar content (connect.md):

Click Connect to Trunk to sign in to your Trunk account. The MCP server uses OAuth — VS Code will open a browser window to authenticate.

Once connected, Copilot can use Trunk's tools to analyze your test suite and suggest fixes for flaky tests.
Step 2: Fix a Flaky Test
Panel description:

Ask Copilot to fix a flaky test using Trunk. Try it in chat:

@trunk fix my flaky tests

Or use the tool directly — Copilot will call fix-flaky-test when you ask about test failures.

Sidebar content (fix-flaky-test.md):

The fix-flaky-test tool analyzes your flaky tests and provides:

Root cause analysis — why the test is flaking
Fix suggestions — code changes to stabilize the test
Historical context — how often the test fails and in what patterns

Ask Copilot in chat, or let it call the tool automatically when you ask about test failures.
Step 4: Learn More
Panel description:

Read the full documentation for Trunk's MCP server.

[Open Documentation]

Sidebar content (learn-more.md):

Trunk Documentation — https://docs.trunk.io/
Trunk Website — https://trunk.io
GitHub Repository — https://github.com/trunk-io/vscode-trunk-mcp
Notification Messages (extension.ts)
When Copilot is available (user clicks "Connect to Trunk"):
Trunk MCP Server is available in Copilot Chat. Try asking: "fix my flaky tests"
When Copilot is NOT installed:
Trunk MCP Server requires GitHub Copilot. Install and sign in to Copilot, then the MCP server will be available automatically.

Button: Open Docs
First-run welcome message:
Trunk MCP Server is ready! Connect your account to detect flaky tests and get fix suggestions.

Buttons: Get Started | Open Docs | Dismiss
README.md
Title: Trunk MCP Server — VS Code Extension

Tagline: Detect flaky tests, get root cause analysis, and fix suggestions right in your editor.

Description: This extension registers the Trunk MCP server with VS Code, giving GitHub Copilot access to flaky test detection and fix tools.

Tools table:

Tool
Description
fix-flaky-test
Analyze a flaky test, identify the root cause, and suggest a fix
setup-trunk-uploads
Configure your CI pipeline to upload test results to Trunk

Getting Started:

Install this extension
Click Connect to Trunk when prompted (or run Trunk: Connect to Trunk MCP Server from the command palette)
Sign in to your Trunk account
Ask Copilot about your flaky tests

Requirements:

VS Code 1.99+
GitHub Copilot extension
A Trunk account with test uploads configured

Notes for Review
Naming: Every instance currently says "Trunk Flaky Tests" — should be updated to "Trunk MCP" per product decision.
setup-trunk-uploads tool: Referenced in walkthrough Step 3, README tools table, and setup-uploads.md. Alex wants this removed — pending Tyler's confirmation.
@trunk chat participant: Step 2 references @trunk fix my flaky tests — confirm this participant name is correct for the extension's chat integration.
