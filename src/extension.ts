import * as vscode from 'vscode'

const MCP_SERVER_URL = 'https://mcp.trunk.io/mcp'
const DOCS_URL = 'https://docs.trunk.io/flaky-tests/use-mcp-server'
const FIRST_RUN_KEY = 'trunk.mcp.firstRunComplete'

export function activate(context: vscode.ExtensionContext) {
  const didChangeEmitter = new vscode.EventEmitter<void>()

  // Register the MCP server definition provider
  context.subscriptions.push(
    vscode.lm.registerMcpServerDefinitionProvider('trunk-mcp', {
      onDidChangeMcpServerDefinitions: didChangeEmitter.event,

      provideMcpServerDefinitions: async () => {
        return [
          new vscode.McpHttpServerDefinition({
            label: 'Trunk Flaky Tests',
            uri: MCP_SERVER_URL,
            version: '0.1.0',
          }),
        ]
      },

      resolveMcpServerDefinition: async (server) => {
        return server
      },
    })
  )

  // Register commands
  context.subscriptions.push(
    vscode.commands.registerCommand('trunk.mcp.connect', async () => {
      // Trigger the MCP server connection — VS Code handles OAuth
      await vscode.commands.executeCommand(
        'github.copilot.chat.mcp.startServer',
        'trunk-mcp',
        'Trunk Flaky Tests'
      )
    })
  )

  context.subscriptions.push(
    vscode.commands.registerCommand('trunk.mcp.openDocs', () => {
      vscode.env.openExternal(vscode.Uri.parse(DOCS_URL))
    })
  )

  // Show walkthrough on first activation
  const firstRunComplete = context.globalState.get<boolean>(FIRST_RUN_KEY)
  if (!firstRunComplete) {
    showWelcome(context)
  }
}

async function showWelcome(context: vscode.ExtensionContext) {
  const action = await vscode.window.showInformationMessage(
    'Trunk Flaky Tests is ready! Connect your account to detect flaky tests and get fix suggestions.',
    'Get Started',
    'Open Docs',
    'Dismiss'
  )

  if (action === 'Get Started') {
    await vscode.commands.executeCommand(
      'workbench.action.openWalkthrough',
      'trunk.mcp#trunk-mcp-getting-started'
    )
  } else if (action === 'Open Docs') {
    await vscode.commands.executeCommand('trunk.mcp.openDocs')
  }

  await context.globalState.update(FIRST_RUN_KEY, true)
}

export function deactivate() {}
