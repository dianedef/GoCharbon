# BMAD Method Installation Guide for webinde

## Prerequisites

Before installing BMAD Method, ensure you have:

- **Node.js**: Version 20.0.0 or higher
- **npm/pnpm**: Package manager (webinde uses pnpm@8.6.0)
- **IDE**: Claude Code, Cursor, Windsurf, or VS Code with AI capabilities
- **Git**: For version control
- **Terminal Access**: Command line access to your development environment

## Installation Process

### Step 1: Install BMAD Method

Run the following command in your webinde project root:

```bash
# Using npx (recommended for v6 Alpha)
npx bmad-method@alpha install

# Or for stable v4 (if you prefer production stability)
npx bmad-method install
```

**What happens during installation:**

1. Interactive installer launches
2. You'll be prompted to choose:
   - Installation location (recommended: `_bmad/` in project root)
   - Language preferences for agent communication
   - IDE type for optimal integration
   - Module selection (BMad Method, Creative Intelligence Suite, BMad Builder)
3. Creates folder structure with agents and workflows
4. Sets up configuration files

### Step 2: Verify Installation

After installation completes, verify the setup:

```bash
# Check that _bmad directory was created
ls -la _bmad/

# You should see:
# - agents/        (12+ specialized AI agents)
# - workflows/     (50+ guided workflows)
# - config/        (configuration files)
# - modules/       (BMad Method, CIS, BMB)
```

### Step 3: Configure for webinde Project

#### Update Project Settings

Create or update `.bmad-config.yaml` in your project root:

```yaml
# BMAD Configuration for webinde
project:
  name: "webinde"
  type: "documentation-site"
  stack:
    - "Astro"
    - "TypeScript"
    - "UnoCSS"
    - "Markdown"
  
language:
  communication: "en" # or "fr" for French
  code_comments: "en"
  
documentation:
  location: "./docs"
  format: "markdown"
  
workflow:
  default_track: "bmad-method" # Quick Flow, BMad Method, or Enterprise
  phase_tracking: true
```

#### IDE-Specific Configuration

Choose your IDE and follow the specific setup:

##### For VS Code / Cursor / Windsurf

1. **Install AI Extension** (if not already installed):
   - Cursor: Built-in AI
   - Windsurf: Built-in AI
   - VS Code: GitHub Copilot or similar

2. **Configure Agent Access**:
   - Create `.vscode/settings.json`:
   ```json
   {
     "bmad.agentPath": "_bmad/agents",
     "bmad.workflowPath": "_bmad/workflows",
     "bmad.autoLoadMenu": true
   }
   ```

3. **Load an Agent**:
   - Open Command Palette (Cmd/Ctrl + Shift + P)
   - Search for "BMAD: Load Agent"
   - Select desired agent (e.g., Analyst, PM, Developer)

##### For Claude Code

1. **Agent files are already compatible** with Claude Code
2. **To load an agent**:
   - Open agent file from `_bmad/agents/`
   - Copy content to Claude Code chat
   - Agent menu will appear automatically

3. **Best Practice**: Keep agent files in separate tabs for quick switching

### Step 4: Initialize Your Workflow

Now that BMAD is installed, initialize it for your webinde project:

1. **Start a new chat in your IDE**
2. **Load the Analyst agent** (`_bmad/agents/analyst.md`)
3. **Run the initialization workflow**:
   ```
   Run workflow-init
   ```
   or simply type:
   ```
   *workflow-init
   ```

4. **Answer the initialization questions**:
   - **Project description**: "webinde is an Astro-based neobrutalist theme for documentation and content sites"
   - **Project type**: "Existing codebase (brownfield)"
   - **Project size**: "Medium - 160+ documentation files, multiple content types"
   - **Development focus**: "Documentation optimization and feature enhancement"

5. **Select your track**:
   - For documentation updates: **Quick Flow**
   - For new features: **BMad Method**
   - For major architectural changes: **BMad Method** or **Enterprise**

### Step 5: Verify Workflow Status

After initialization, verify your workflow status:

1. **Load any agent** in a new chat
2. **Ask for status**:
   ```
   workflow-status
   ```

3. **You should see**:
   - Current phase
   - Completed workflows
   - Next recommended steps
   - Required vs. optional workflows

## Post-Installation Setup

### Create Documentation Structure

BMAD works best with organized documentation. Create these folders if they don't exist:

```bash
# Create standard BMAD documentation structure
mkdir -p docs/planning
mkdir -p docs/architecture
mkdir -p docs/implementation
mkdir -p docs/testing

# The docs/ folder already contains BMAD integration docs
# Now add project-specific documentation as you work
```

### Integrate with Existing Workflow

Update your development workflow to include BMAD:

1. **For Bug Fixes**: Use Quick Flow track
   - Load Barry (Quick Flow Solo Dev)
   - Create tech-spec
   - Implement and test

2. **For New Features**: Use BMad Method track
   - Analysis phase (optional): Brainstorm with Analyst
   - Planning phase: Create PRD with PM
   - Solutioning phase: Architecture with Architect
   - Implementation phase: Story breakdown with SM, code with Developer

3. **For Documentation**: Use appropriate agent
   - Tech Writer for technical documentation
   - PM for product/business documentation
   - UX Designer for user-facing content

### Configure Git Integration

Update `.gitignore` to manage BMAD files:

```bash
# Add to .gitignore if you want to keep BMAD local
# (Recommended: commit BMAD to share with team)

# Optional: Ignore local BMAD customizations
_bmad/config/local-*.yaml

# Optional: Ignore workflow status (if personal)
# docs/bmm-workflow-status.yaml
```

**Recommendation for webinde**: Commit `_bmad/` to repository to ensure team consistency.

## IDE-Specific Instructions

### Detailed Setup by IDE

For detailed instructions on using BMAD with your specific IDE, see:

- **Claude Code**: [docs/ide-info/claude-code.md](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/docs/ide-info/claude-code.md)
- **Cursor**: [docs/ide-info/cursor.md](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/docs/ide-info/cursor.md)
- **Windsurf**: [docs/ide-info/windsurf.md](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/docs/ide-info/windsurf.md)
- **VS Code**: [docs/ide-info/vscode.md](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/docs/ide-info/vscode.md)

## Customization Options

### Agent Customization

You can customize agents to match your team's style:

1. **Copy default agent** to create custom version:
   ```bash
   cp _bmad/agents/developer.md _bmad/agents/developer-custom.md
   ```

2. **Edit agent personality, expertise, or communication style**

3. **Load custom agent** instead of default

See [Agent Customization Guide](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/docs/agent-customization-guide.md) for details.

### Workflow Customization

Create custom workflows for webinde-specific tasks:

1. **Use BMAD Builder module** to create workflows
2. **Store in** `_bmad/workflows/custom/`
3. **Reference in agent menus**

See [BMAD Builder documentation](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/src/modules/bmb/README.md) for details.

## Troubleshooting

### Common Issues

**Issue**: Agent menu doesn't appear
- **Solution**: Ensure you've loaded the agent file completely in your IDE
- **Solution**: Try typing `*help` to trigger menu display

**Issue**: Workflows not found
- **Solution**: Verify `_bmad/workflows/` directory exists
- **Solution**: Check file paths in agent configuration

**Issue**: npm installation fails
- **Solution**: Ensure Node.js >= 20.0.0
- **Solution**: Try with `--legacy-peer-deps` flag

**Issue**: Agent responses are generic
- **Solution**: Use fresh chat for each workflow to avoid context limitations
- **Solution**: Provide more detailed context in workflow initialization

### Getting Help

If you encounter issues:

1. **Check official documentation**: https://github.com/bmad-code-org/BMAD-METHOD
2. **Join Discord community**: https://discord.gg/gk8jAdXWmj
3. **Review video tutorials**: https://www.youtube.com/@BMadCode
4. **Open GitHub issue**: https://github.com/bmad-code-org/BMAD-METHOD/issues

## Next Steps

1. ✅ Installation complete
2. 📖 Read [BMAD-INTEGRATION-STRATEGY.md](./BMAD-INTEGRATION-STRATEGY.md) for implementation plan
3. 📋 Review [BMAD-BEST-PRACTICES.md](./BMAD-BEST-PRACTICES.md) for guidelines
4. 🚀 Start your first workflow with `workflow-init`

## Updating BMAD

To update to the latest version:

```bash
# Update to latest alpha
npx bmad-method@alpha update

# Or update stable version
npx bmad-method update
```

Your customizations will be preserved during updates.

---

*Installation guide for webinde project*
*BMAD Method Version: 6.0 (Alpha)*
*Last updated: December 2025*
