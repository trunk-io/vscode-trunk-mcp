import * as vscode from 'vscode'

const MCP_SERVER_URL = 'https://mcp.trunk.io/mcp'
const DOCS_URL = 'https://docs.trunk.io/'
const FIRST_RUN_KEY = 'trunk.mcp.firstRunComplete'

export function activate(context: vscode.ExtensionContext) {
  const didChangeEmitter = new vscode.EventEmitter<void>()

  // Register the MCP server definition provider
  if (!vscode.lm?.registerMcpServerDefinitionProvider) {
    return
  }

  context.subscriptions.push(
    vscode.lm.registerMcpServerDefinitionProvider('trunk-mcp', {
      onDidChangeMcpServerDefinitions: didChangeEmitter.event,

      provideMcpServerDefinitions: async () => {
        return [
          new vscode.McpHttpServerDefinition(
            'Trunk MCP Server',
            vscode.Uri.parse(MCP_SERVER_URL),
          ),
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
      // Open Copilot Chat — the MCP server connects automatically when Copilot needs it
      const availableCommands = await vscode.commands.getCommands(true)

      if (availableCommands.includes('workbench.panel.chat.view.copilot.focus')) {
        await vscode.commands.executeCommand('workbench.panel.chat.view.copilot.focus')
        vscode.window.showInformationMessage(
          'Trunk MCP Server is available in Copilot Chat. Try asking: "fix my flaky tests"'
        )
      } else {
        const action = await vscode.window.showInformationMessage(
          'Trunk MCP Server requires GitHub Copilot. Install and sign in to Copilot, then the MCP server will be available automatically.',
          'Open Docs'
        )
        if (action === 'Open Docs') {
          await vscode.commands.executeCommand('trunk.mcp.openDocs')
        }
      }
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
    'Trunk MCP Server is ready! Connect your account to detect flaky tests and get fix suggestions.',
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
