# Quick Start Guide for webinde Team

## Welcome to BMAD Method!

This is your 5-minute quick start guide. If you want more details, see [IMPLEMENTATION-GUIDE.md](./IMPLEMENTATION-GUIDE.md).

## What You Need to Know Right Now

### 1. What is BMAD?
**BMAD** = **Build More, Architect Dreams**

It's an AI-driven development framework with specialized agents that guide you through:
- Planning (PRDs, specs)
- Architecture (design decisions)
- Implementation (coding)
- Testing (quality assurance)

Think of it as having expert consultants for every part of development.

### 2. Why Are We Using It?

✅ **Structured approach** - No more "figure it out as we go"
✅ **Better documentation** - Everything is documented from the start
✅ **Right-sized process** - Quick for small tasks, comprehensive for big ones
✅ **AI-powered** - Specialized agents with deep expertise
✅ **Proven methodology** - Based on agile best practices

## Your First 30 Minutes

### Step 1: Install BMAD (10 minutes)

```bash
# In your webinde project directory
npx bmad-method@alpha install
```

**During installation:**
- Location: `_bmad` (just press Enter)
- Language: English (or your preference)
- IDE: Choose your IDE (VS Code, Cursor, etc.)
- Modules: Install all (recommended)

### Step 2: Load Your First Agent (5 minutes)

1. Open `_bmad/agents/analyst.md` in your IDE
2. Copy the content
3. Paste into your AI chat (Claude, Cursor, etc.)
4. Wait for the menu to appear

That's it! You've loaded an agent.

### Step 3: Run workflow-init (15 minutes)

In your chat with the Analyst agent, type:
```
*workflow-init
```

Answer the questions about webinde. The agent will guide you.

**Done!** You now have BMAD set up and initialized.

## The Three Tracks (Choose Based on Task Size)

### ⚡ Quick Flow - For Small Tasks
**Examples**: Bug fixes, typos, small content updates

**Process**: Spec → Code → Done

**Time**: Hours

**Agent**: Barry (Quick Flow Solo Dev)

### 📋 BMad Method - For Medium Tasks
**Examples**: New features, content reorganization, theme updates

**Process**: Plan → Design → Code → Document

**Time**: Days

**Agents**: PM, Architect, Developer, Tech Writer

### 🏢 Enterprise - For Large Projects
**Examples**: Complete redesigns, major integrations, security overhauls

**Process**: Full planning, security review, comprehensive testing

**Time**: Weeks

**Agents**: Full team + specialists

## Daily Usage

### When You Start a New Task

1. **Start fresh chat** (important!)
2. **Load appropriate agent** (when in doubt, load Analyst and ask)
3. **Run workflow-status** to see what's next
4. **Follow the agent's guidance**

### Which Agent for What?

| Task | Agent |
|------|-------|
| "What should I do?" | Analyst |
| "I need requirements" | PM (Product Manager) |
| "I need architecture" | Architect |
| "I need to code" | Developer |
| "I need to write docs" | Tech Writer |
| "I need to break down work" | Scrum Master |
| "I'm confused about BMAD" | BMad Master |

## The Golden Rules

### ✅ DO:
- **Use fresh chat for each workflow** (most important!)
- **Follow the recommended track** (Quick Flow for small, BMad for medium)
- **Document as you go** (save workflow outputs)
- **Ask workflow-status when unsure**

### ❌ DON'T:
- Don't reuse chats across workflows (causes confusion)
- Don't skip planning (even for "quick" tasks)
- Don't jump straight to coding (plan first)
- Don't ignore the agent's guidance

## Common Scenarios

### "I need to fix a typo"
**Track**: Quick Flow
```
1. Load Barry or Developer
2. Tell them: "Fix typo in [file]"
3. Done
```

### "I need to add a content section"
**Track**: BMad Method
```
1. Load PM → Create tech-spec or PRD
2. Load Architect → Design structure
3. Load Developer/Tech Writer → Implement
4. Done
```

### "I need to add a major feature"
**Track**: BMad Method or Enterprise
```
1. Load Analyst → Brainstorm and research
2. Load PM → Create PRD
3. Load Architect → Design architecture
4. Load UX Designer → Design interface
5. Load Scrum Master → Break into stories
6. Load Developer → Implement each story
7. Load Test Architect → Test
8. Load Tech Writer → Document
9. Done
```

## Getting Help

### If You're Stuck:
1. **Check workflow-status** - Load any agent, type `*workflow-status`
2. **Ask BMad Master** - Load BMad Master agent and ask your question
3. **Check docs** - [BMAD-BEST-PRACTICES.md](./BMAD-BEST-PRACTICES.md)
4. **Ask the team** - Someone has probably done it before
5. **Check BMAD Discord** - https://discord.gg/gk8jAdXWmj

### Common Questions:

**Q: Which track should I use?**
A: Run `workflow-init` and let it recommend. Or use these guidelines:
- 1-15 stories, clear scope = Quick Flow
- 10-50 stories, needs architecture = BMad Method
- 30+ stories, needs governance/compliance = Enterprise

Note: It's about planning needs, not just story count. When in doubt, ask BMad Master.

**Q: Do I really need a fresh chat every time?**
A: YES! This is the #1 most important rule. Context pollution causes bad responses.

**Q: Can I skip the planning?**
A: No, but planning can be quick. Quick Flow only needs a tech-spec.

**Q: Which agent do I use?**
A: When in doubt, check `workflow-status` or ask BMad Master.

**Q: This seems like a lot of overhead?**
A: BMAD adapts to size. Quick Flow is fast. BMad Method is for when you need it.

## Your First Real Task

Let's say you need to reorganize some documentation:

### Step 1: Initialize (5 min)
```
Load Analyst
Type: *workflow-init
Describe: "Reorganize /afr/seo directory"
Choose: Quick Flow (if simple) or BMad Method (if complex)
```

### Step 2: Plan (15 min)
```
Load PM
Type: *tech-spec (for Quick Flow) or *prd (for BMad Method)
Work with agent to create planning doc
Save output to docs/planning/
```

### Step 3: Design (15 min, if BMad Method)
```
Load Architect
Type: *create-architecture
Design new structure
Save output to docs/architecture/
```

### Step 4: Break Down (10 min)
```
Load Scrum Master
Type: *breakdown-stories
Get list of stories
Save to docs/planning/
```

### Step 5: Implement (varies)
```
For each story:
  Load Developer or Tech Writer
  Implement the story
  Commit changes
```

### Step 6: Validate
```
Load Test Architect (if needed)
Verify links, structure, formatting
Done!
```

## Key Resources

### Quick Links
- [Full Implementation Guide](./IMPLEMENTATION-GUIDE.md) - Detailed 48-hour plan
- [Best Practices](./BMAD-BEST-PRACTICES.md) - Complete guidelines
- [BMAD Overview](./BMAD-METHOD-OVERVIEW.md) - Framework details
- [Installation Guide](./BMAD-INSTALLATION.md) - Setup help

### Cheat Sheet
```
*workflow-init       # Initialize project
*workflow-status     # Check what's next
*prd                 # Create PRD (BMad Method)
*tech-spec          # Create spec (Quick Flow)
*create-architecture # Design architecture
*breakdown-stories   # Break into stories
*help               # Show agent menu
```

### External Resources
- Official Docs: https://github.com/bmad-code-org/BMAD-METHOD
- Community: https://discord.gg/gk8jAdXWmj
- Videos: https://www.youtube.com/@BMadCode

## Next Steps

1. **Today**: Install BMAD, run workflow-init
2. **Tomorrow**: Start using for real work
3. **This week**: Complete first project with BMAD
4. **This month**: Master the workflows

## Success Checklist

After your first week, you should be able to:
- [ ] Install and configure BMAD
- [ ] Load agents in your IDE
- [ ] Run workflow-init
- [ ] Choose appropriate track for tasks
- [ ] Create planning documents (specs/PRDs)
- [ ] Break down work into stories
- [ ] Implement with agent guidance
- [ ] Use fresh chats for workflows
- [ ] Know when to ask for help

## Remember

**BMAD is here to help, not to slow you down.**

- Small tasks → Quick Flow → Fast
- Medium tasks → BMad Method → Thorough
- Large tasks → Enterprise → Comprehensive

**Start simple, learn progressively, and ask questions!**

---

*Quick start guide for webinde team*
*For detailed instructions, see [IMPLEMENTATION-GUIDE.md](./IMPLEMENTATION-GUIDE.md)*
*Last updated: December 2025*
