# VS Code Marketplace Publish Plan

## What We're Publishing

A VS Code extension that registers the Trunk MCP server (`https://mcp.trunk.io/mcp`) with GitHub Copilot. The extension is fully functional and tested locally — MCP server registration, OAuth flow, tool discovery, and onboarding UX all confirmed working.

- **Marketplace ID:** `Trunk.mcp`
- **Display name:** Trunk MCP Server
- **Repo:** https://github.com/trunk-io/vscode-trunk-mcp

This will sit alongside the existing [Trunk Code Quality](https://marketplace.visualstudio.com/items?itemName=Trunk.io) extension (`Trunk.io`, 209k installs) under the same publisher account.

---

## What I Need From the Team

### 1. Publisher Account Access

The existing Trunk extension (`Trunk.io`) was published under the **Trunk** publisher account on the VS Code Marketplace. I need one of:

- **A Personal Access Token (PAT)** from the Azure DevOps org that owns the `Trunk` publisher — scoped to `Marketplace (Manage)`. This is what `vsce` uses to authenticate.
- **Or** someone with access to run `vsce login Trunk` and hand off the session.
- **Or** someone with access to publish on my behalf after I hand them the `.vsix` file.

**Who set up the original `Trunk.io` extension?** They'd have the Azure DevOps org access.

### 2. Copy Review

All user-facing text was written during scaffolding and needs a review pass. Everything is in the repo at `trunk-io/vscode-trunk-mcp`:

| What | File | Lines |
|------|------|-------|
| Display name + subtitle | `package.json` | 3-4 |
| Command titles | `package.json` | 44-53 |
| Walkthrough title + steps | `package.json` | 56-93 |
| Marketplace detail page | `README.md` | entire file |
| Walkthrough step content | `assets/walkthrough/*.md` | 4 files |
| Runtime notifications | `src/extension.ts` | 42, 46, 72 |

### 3. Logo Confirmation

Current logo: white Trunk mark on black background, 128x128 PNG. If the team prefers a different treatment (brand color background, padded, etc.), swap out `assets/logo.png` — must be PNG, at least 128x128.

---

## Publish Steps

Once I have the PAT and copy sign-off:

```bash
# Install the publishing CLI
npm install -g @vscode/vsce

# Authenticate with the Trunk publisher
vsce login Trunk

# Build and package
cd ~/TRUNK/vscode-trunk-mcp
npm run build
npx @vscode/vsce package

# Publish
vsce publish
```

The extension will be live at:
`https://marketplace.visualstudio.com/items?itemName=Trunk.mcp`

---

## Pre-Publish Checklist

- [ ] Copy reviewed and approved by team
- [ ] Logo confirmed (or updated)
- [ ] Publisher account PAT obtained
- [ ] `package.json` publisher field verified to match account (currently `"trunk"` — may need to be `"Trunk"` to match existing extension's publisher casing)
- [ ] Final `npm run build && npx @vscode/vsce package` — clean build
- [ ] Install VSIX locally for final smoke test
- [ ] `vsce publish`
- [ ] Verify listing live on marketplace
- [ ] Test install from marketplace on a clean VS Code profile

---

## Publisher Casing Note

Our `package.json` has `"publisher": "trunk"` (lowercase). The existing Trunk Code Quality extension shows as `Trunk.io` on the marketplace, which suggests the publisher ID might be `Trunk` (capitalized). If `vsce publish` rejects due to publisher mismatch, update `package.json` to `"publisher": "Trunk"`.

---

## Post-Publish

- Update the registry tracking file in `trunk-io/mcp-server` (`.claude/registries/vscode-marketplace.md`)
- Add marketplace badge to the extension repo README
- Consider adding the marketplace link to the Trunk MCP docs at docs.trunk.io
- Update the Slack thread with the live listing URL
