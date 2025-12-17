# BMAD Method Implementation Guide - Immediate Next Steps

## Quick Start: Your First 48 Hours with BMAD

This guide provides actionable, step-by-step instructions for implementing the BMAD Method in the webinde project **starting today**.

## Day 1: Setup and Orientation (4-6 hours)

### Morning Session (2-3 hours): Installation & Familiarization

#### Step 1: Install BMAD Method (30 minutes)

```bash
# Navigate to webinde project
cd /path/to/webinde

# Install BMAD Method v6 Alpha
npx bmad-method@alpha install
```

**During installation, choose**:
- Installation location: `_bmad` (default)
- Communication language: English (or French if preferred)
- IDE: Your primary IDE (VS Code, Cursor, Windsurf, or Claude Code)
- Modules: Install all three (BMad Method, Creative Intelligence Suite, BMad Builder)

**Verify installation**:
```bash
# Check that _bmad directory was created
ls -la _bmad/

# You should see:
# _bmad/agents/
# _bmad/workflows/
# _bmad/config/
```

#### Step 2: Configure Your IDE (30 minutes)

**For VS Code/Cursor/Windsurf**:
1. Install AI extension if not already installed
2. Locate agent files in `_bmad/agents/`
3. Practice loading an agent:
   - Open `_bmad/agents/analyst.md`
   - Copy to AI chat
   - Wait for menu to appear

**For Claude Code**:
1. Agent files are ready to use
2. Open `_bmad/agents/analyst.md`
3. Copy to Claude Code chat
4. Menu appears automatically

#### Step 3: Initialize Your First Workflow (1 hour)

1. **Start fresh chat in your IDE**
2. **Load the Analyst agent** (`_bmad/agents/analyst.md`)
3. **Type**: `*workflow-init` or "Run workflow-init"
4. **Answer questions about webinde**:

```
Q: Describe your project
A: "webinde is an Astro-based neobrutalist theme for documentation sites 
    with 160+ markdown files organized in content categories. We need to 
    optimize our internal documentation and integrate BMAD methodology."

Q: Is this a new project or existing codebase?
A: "Existing codebase (brownfield)"

Q: What's the project size and complexity?
A: "Medium - Multiple content types, complex documentation structure, 
    TypeScript/Astro stack"

Q: What's your primary goal?
A: "Optimize and reorganize internal documentation to align with BMAD 
    principles while maintaining development velocity"
```

5. **Select track**: BMad Method (recommended for documentation reorganization)
6. **Review output**: Check that `docs/bmm-workflow-status.yaml` was created

#### Step 4: Review Generated Documentation (1 hour)

**Read the documentation you've received**:
- [ ] BMAD-METHOD-OVERVIEW.md - Understand the framework
- [ ] BMAD-INSTALLATION.md - Verify your setup
- [ ] BMAD-INTEGRATION-STRATEGY.md - Review the roadmap
- [ ] BMAD-BEST-PRACTICES.md - Learn dos and don'ts
- [ ] DEVELOPMENT.md - Understand the tech stack

**Take notes on**:
- Questions you have
- Concerns about adoption
- Ideas for first project
- Team training needs

### Afternoon Session (2-3 hours): First Workflow Exercise

#### Step 5: Run Your First Real Workflow (2 hours)

**Goal**: Document the current state of webinde documentation structure

1. **Start new chat** (important: fresh chat for each workflow)

2. **Load Tech Writer agent** (`_bmad/agents/tech-writer.md`)

3. **Run content audit workflow**:
   ```
   *workflow-status
   ```
   
4. **Follow agent guidance** to create a content audit:
   - Current documentation structure
   - Strengths and weaknesses
   - Gaps in documentation
   - Recommendations for improvement

5. **Save output**:
   ```bash
   # Create file
   touch docs/planning/content-audit-2024-12.md
   
   # Paste agent's output
   # Review and edit as needed
   ```

#### Step 6: Reflect and Document (30 minutes)

Create a personal learning log:
```bash
# Create your learning log
touch docs/my-bmad-learning-log.md
```

Document:
- What went well
- What was confusing
- Questions for team
- Ideas for next steps

#### Step 7: Share with Team (30 minutes)

**Prepare team introduction**:
1. Schedule 30-minute team meeting
2. Prepare brief presentation:
   - What is BMAD
   - Why we're adopting it
   - Expected benefits
   - Timeline for adoption

3. Share documentation links:
   - Send link to `docs/BMAD-METHOD-OVERVIEW.md`
   - Provide `docs/BMAD-INSTALLATION.md`
   - Request team members install BMAD

## Day 2: First Real Project (4-6 hours)

### Morning Session (3 hours): Plan Documentation Reorganization

#### Step 8: Create Planning Document (2 hours)

**Goal**: Create a PRD or tech-spec for reorganizing webinde documentation

1. **Decide on track**:
   - If simple reorganization (< 15 stories): **Quick Flow** → Use tech-spec
   - If comprehensive overhaul (10-50 stories): **BMad Method** → Use PRD

**For Quick Flow approach**:

2. **Start fresh chat**
3. **Load PM agent** (`_bmad/agents/pm.md`)
4. **Run tech-spec workflow**:
   ```
   *tech-spec
   ```

5. **Describe the project**:
   ```
   Project: Documentation Reorganization for webinde
   
   Goal: Restructure /afr directory to align with BMAD principles
   
   Scope:
   - Audit current 160+ markdown files
   - Define new organizational structure
   - Create navigation system
   - Standardize frontmatter
   - Add cross-references
   
   Constraints:
   - Don't delete existing content
   - Maintain SEO (URLs should redirect)
   - Complete in 2 weeks
   
   Success Criteria:
   - Clear documentation hierarchy
   - Easy to find content
   - Consistent formatting
   - Improved onboarding experience
   ```

6. **Collaborate with agent** to refine spec
7. **Save output**: `docs/planning/tech-spec-doc-reorganization.md`

**For BMad Method approach** (if you chose comprehensive):

2. **Start fresh chat**
3. **Load PM agent** (`_bmad/agents/pm.md`)
4. **Run PRD workflow**:
   ```
   *prd
   ```

5. **Work through PRD sections**:
   - Problem statement
   - User stories
   - Acceptance criteria
   - Success metrics
   - Timeline

6. **Save output**: `docs/planning/PRD-doc-reorganization.md`

#### Step 9: Break Down into Stories (1 hour)

1. **Start fresh chat**
2. **Load Scrum Master agent** (`_bmad/agents/scrum-master.md`)
3. **Run story breakdown workflow**:
   ```
   *breakdown-stories
   ```

4. **Provide context**: Share your tech-spec or PRD
5. **Review stories** generated by agent
6. **Estimate stories**: S (Small), M (Medium), L (Large)
7. **Prioritize**: Which stories first?
8. **Save output**: `docs/planning/stories-doc-reorganization.md`

### Afternoon Session (2-3 hours): Begin Implementation

#### Step 10: Implement First Story (2 hours)

**Choose smallest story** from your breakdown (probably "Audit current structure")

1. **Start fresh chat**
2. **Load Developer agent** (`_bmad/agents/developer.md`) or **Tech Writer**
3. **Describe story**:
   ```
   Story: Create comprehensive audit of current /afr directory structure
   
   Acceptance Criteria:
   - Document all directories and file counts
   - Identify organizational patterns
   - Note inconsistencies
   - List frontmatter variations
   ```

4. **Work with agent** to complete the story
5. **Document findings**
6. **Commit changes**:
   ```bash
   git add docs/
   git commit -m "[BMAD:Implementation] Complete documentation audit story"
   git push
   ```

#### Step 11: Validate and Review (30 minutes)

1. **Review what you've created**:
   - [ ] Planning document (spec or PRD)
   - [ ] Story breakdown
   - [ ] First story implemented
   - [ ] Findings documented

2. **Check workflow status**:
   - Start fresh chat
   - Load any agent
   - Type: `*workflow-status`
   - Review next recommended steps

#### Step 12: Team Sync (30 minutes)

**Share your progress**:
1. Demo what you've accomplished
2. Show team the workflow
3. Answer questions
4. Get feedback

**Discuss next steps**:
1. Who will work on next stories?
2. When is next team sync?
3. Any blockers or concerns?

## Week 1: Continued Implementation (20 hours)

### Daily Workflow (4 hours/day)

#### Daily Structure

**Morning (2 hours)**:
1. Check workflow status
2. Pick next story
3. Load appropriate agent
4. Work through implementation

**Afternoon (2 hours)**:
1. Complete story
2. Document findings
3. Commit changes
4. Update team

### Story Implementation Pattern

**For each story**:
1. ✅ **Start fresh chat** (cannot emphasize enough)
2. ✅ **Load appropriate agent**:
   - Developer for code
   - Tech Writer for docs
   - Architect for structure decisions
   - UX Designer for UI work
3. ✅ **Describe story clearly**
4. ✅ **Work with agent to complete**
5. ✅ **Validate result**
6. ✅ **Commit with BMAD-style message**
7. ✅ **Update team**

### Mid-Week Review (Wednesday)

**Team meeting (1 hour)**:
- Review completed stories
- Demo progress
- Address blockers
- Adjust plan if needed
- Celebrate wins

### End of Week Retrospective (Friday)

**Team retrospective (1 hour)**:
1. **What went well?**
   - Wins with BMAD
   - Smooth workflows
   - Good outcomes

2. **What didn't go well?**
   - Struggles or confusion
   - Workflow friction
   - Time constraints

3. **What will we change?**
   - Process improvements
   - Better practices
   - Documentation updates

4. **Next week plan**
   - Stories for Week 2
   - Team assignments
   - Timeline check

## Week 2-4: Scale Up (60 hours)

### Week 2: Complete First Project (20 hours)

**Goals**:
- [ ] Complete documentation reorganization
- [ ] All stories implemented
- [ ] Documentation updated
- [ ] Team trained on workflows

**Deliverables**:
- [ ] Reorganized `/afr` directory
- [ ] Updated navigation
- [ ] Standardized frontmatter
- [ ] Cross-references added
- [ ] Migration guide created

### Week 3: Start Second Project (20 hours)

**Choose new project**:
- New feature addition
- Content strategy initiative
- Theme enhancement
- Performance optimization

**Apply learnings**:
- Use track that fits complexity
- Start with workflow-init
- Follow phases properly
- Keep team synced

### Week 4: Optimization (20 hours)

**Focus areas**:
1. **Process refinement**:
   - What workflows work best?
   - Which agents are most helpful?
   - Where do we need custom workflows?

2. **Documentation**:
   - Update best practices
   - Add team-specific guidelines
   - Create templates

3. **Custom content** (optional):
   - Consider custom agents
   - Design webinde-specific workflows
   - Use BMAD Builder

## Success Metrics

### Track These Metrics

**Adoption Metrics**:
- [ ] % of team using BMAD
- [ ] Number of workflows run
- [ ] Stories completed using BMAD

**Quality Metrics**:
- [ ] Documentation completeness
- [ ] Rework/revision rate
- [ ] Bug reports (should decrease)

**Velocity Metrics**:
- [ ] Time from idea to implementation
- [ ] Story completion rate
- [ ] Planning effectiveness

**Satisfaction Metrics**:
- [ ] Team satisfaction survey
- [ ] Process clarity rating
- [ ] BMAD helpfulness rating

### Weekly Check-Ins

**Every Friday**:
1. Review metrics
2. Discuss in team meeting
3. Celebrate progress
4. Identify improvements

## Common Challenges and Solutions

### Challenge 1: "Too Much Overhead"
**Solution**: Use Quick Flow track for small tasks. BMAD adapts to size.

### Challenge 2: "Don't Know Which Agent"
**Solution**: Check `workflow-status` - it will guide you.

### Challenge 3: "Forgot to Use Fresh Chat"
**Solution**: Agent responses getting weird? Start fresh chat immediately.

### Challenge 4: "Not Sure About Track"
**Solution**: Run `workflow-init` - let it recommend. Ask BMad Master if unsure.

### Challenge 5: "Takes Too Long to Plan"
**Solution**: Planning saves time in implementation. Measure end-to-end time.

### Challenge 6: "Team Not Adopting"
**Solution**: 
- Start with volunteers
- Demonstrate value
- Make it easy (good docs)
- Celebrate wins publicly

## Getting Unstuck

### If You're Confused:
1. Check `workflow-status`
2. Ask BMad Master agent for guidance
3. Review BMAD-BEST-PRACTICES.md
4. Ask in team channel
5. Check BMAD Discord

### If Workflow Isn't Working:
1. Verify fresh chat
2. Check agent loaded correctly
3. Ensure clear instructions
4. Try rephrasing request
5. Try different agent

### If Team Has Questions:
1. Point to documentation
2. Demo the workflow
3. Pair programming/working
4. Create FAQ document
5. Schedule training session

## Resources Checklist

### Documentation Created
- [x] BMAD-METHOD-OVERVIEW.md
- [x] BMAD-INSTALLATION.md
- [x] BMAD-INTEGRATION-STRATEGY.md
- [x] BMAD-BEST-PRACTICES.md
- [x] DEVELOPMENT.md
- [x] IMPLEMENTATION-GUIDE.md (this document)

### Team Resources Needed
- [ ] Team meeting scheduled
- [ ] Slack/Discord channel for BMAD questions
- [ ] Shared calendar for retrospectives
- [ ] Git branch conventions documented
- [ ] PR template updated

### External Resources
- Official: https://github.com/bmad-code-org/BMAD-METHOD
- Community: https://discord.gg/gk8jAdXWmj
- Videos: https://www.youtube.com/@BMadCode
- Web Bundles: https://bmad-code-org.github.io/bmad-bundles/

## Next Actions Summary

### Today (Day 1):
1. [ ] Install BMAD Method
2. [ ] Configure IDE
3. [ ] Run workflow-init
4. [ ] Read documentation
5. [ ] Do first workflow exercise
6. [ ] Share with team

### Tomorrow (Day 2):
1. [ ] Create planning document (spec/PRD)
2. [ ] Break down into stories
3. [ ] Implement first story
4. [ ] Commit changes
5. [ ] Team sync

### This Week:
1. [ ] Complete 3-5 stories
2. [ ] Daily commits with BMAD workflow
3. [ ] Mid-week review
4. [ ] End-week retrospective

### This Month:
1. [ ] Complete first project
2. [ ] Start second project
3. [ ] Refine processes
4. [ ] Measure success

## Conclusion

You now have everything you need to start using BMAD Method in the webinde project. The key is to **start small, learn progressively, and iterate**.

**Remember**:
- Fresh chat for each workflow
- Trust the process
- Document as you go
- Celebrate wins
- Share learnings

**You're ready to Build More, Architect Dreams!** 🚀

---

*Implementation guide for webinde project*
*Your roadmap to BMAD success*
*Last updated: December 2025*
