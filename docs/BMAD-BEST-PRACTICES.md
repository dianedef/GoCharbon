# BMAD Method Best Practices for webinde

## Introduction

This guide provides best practices for using the BMAD Method effectively within the webinde project. These practices are based on BMAD's official recommendations, adapted specifically for our documentation-focused Astro project.

## Core Principles

### 1. Always Use Fresh Chats for Workflows
**Why**: Context accumulation leads to hallucinations and degraded responses.

**Practice**:
- Start a new chat for each workflow
- Don't reuse chats across multiple workflows
- Keep workflow conversations focused on single objectives

**Example**:
```
❌ Bad: Run PRD workflow, then tech-spec, then architecture in same chat
✅ Good: New chat for PRD → Close → New chat for tech-spec → Close → New chat for architecture
```

### 2. Let Agents Guide You
**Why**: Agents know their workflows better than we do.

**Practice**:
- Always check `workflow-status` when unsure
- Trust agent recommendations for next steps
- Follow the suggested workflow order
- Don't skip required workflows

**Example**:
```
Developer: "I need to add a feature"
✅ First: Load Analyst → Run workflow-status
✅ Then: Follow the recommended workflow path
❌ Don't: Jump straight to coding
```

### 3. Choose the Right Track
**Why**: Overhead should match complexity.

**Practice**:
- Use Quick Flow for simple tasks (< 15 stories)
- Use BMad Method for complex features (10-50 stories)
- Use Enterprise Method for governance needs (30+ stories)
- When in doubt, run `workflow-init` and let it recommend

**webinde-specific guidelines**:
- Content updates → Quick Flow
- New sections/categories → BMad Method
- Theme overhaul → BMad Method or Enterprise

### 4. Document Everything
**Why**: BMAD is document-driven; future you will thank present you.

**Practice**:
- Save all workflow outputs (PRDs, specs, architecture docs)
- Store in `/docs` directory with clear naming
- Cross-reference related documents
- Keep docs updated as project evolves

**Naming convention**:
```
docs/
├── planning/
│   ├── PRD-[feature-name].md
│   └── tech-spec-[feature-name].md
├── architecture/
│   ├── architecture-[feature-name].md
│   └── ux-design-[feature-name].md
└── implementation/
    └── implementation-notes-[feature-name].md
```

## Agent-Specific Best Practices

### Analyst (AN)
**Best for**: Initial exploration, research, problem definition

**Best practices**:
- Use for brainstorming new content categories
- Great for competitive analysis (other documentation sites)
- Can help define product vision for major updates
- Use `workflow-init` to start any new initiative

**webinde use cases**:
- "Should we add a new content category?"
- "What content gaps do we have?"
- "How does our SEO documentation compare to competitors?"

### Product Manager (PM)
**Best for**: Requirements, prioritization, roadmap

**Best practices**:
- Create PRDs for all major features
- Create tech-specs for Quick Flow work
- Define acceptance criteria clearly
- Include user stories for UX-impacting work

**webinde use cases**:
- PRD for new theme features
- Tech-spec for content reorganization
- User story definition for navigation improvements

**Template checklist**:
- [ ] Problem statement
- [ ] User stories
- [ ] Acceptance criteria
- [ ] Success metrics
- [ ] Timeline estimate

### Architect (ARCH)
**Best for**: System design, technical decisions, architecture

**Best practices**:
- Use for 10+ story projects
- Document architectural decisions (ADRs)
- Consider scalability and maintainability
- Think about integration points

**webinde use cases**:
- Content structure redesign
- Search implementation architecture
- Multi-language support design
- CMS integration planning

**Key questions to answer**:
- What are the major components?
- How do they interact?
- What are the data flows?
- What are the extension points?

### UX Designer (UX)
**Best for**: User experience, interface design, usability

**Best practices**:
- Include for all user-facing features
- Create wireframes/mockups when helpful
- Think about responsive design
- Consider accessibility

**webinde use cases**:
- Homepage redesign
- Navigation improvements
- Content layout optimization
- Mobile experience enhancement

**Deliverables**:
- User flows
- Wireframes (can be text descriptions)
- Design principles
- Accessibility checklist

### Developer (DEV)
**Best for**: Implementation, coding, technical problem-solving

**Best practices**:
- Always have a spec/PRD before starting
- Follow architecture decisions
- Write tests for new features
- Document complex logic

**webinde use cases**:
- Implement new Astro components
- Add TypeScript utilities
- Integrate third-party libraries
- Optimize build performance

**Code quality checklist**:
- [ ] Follows project conventions
- [ ] TypeScript types defined
- [ ] No console errors/warnings
- [ ] Responsive on mobile
- [ ] Accessible markup

### Tech Writer (TW)
**Best for**: Documentation, technical writing, clarity

**Best practices**:
- Review all public-facing docs
- Ensure consistency in terminology
- Add examples and use cases
- Keep docs updated with code changes

**webinde use cases**:
- Content creation for `/afr` directory
- README updates
- API documentation
- Tutorial writing

**Documentation checklist**:
- [ ] Clear and concise
- [ ] Examples included
- [ ] Proper formatting
- [ ] Links verified
- [ ] Frontmatter complete

### Scrum Master (SM)
**Best for**: Story breakdown, sprint planning, workflow management

**Best practices**:
- Break PRDs into manageable stories
- Estimate story complexity
- Sequence stories logically
- Track dependencies

**webinde use cases**:
- Break down content migration project
- Plan theme enhancement work
- Organize documentation reorganization
- Coordinate multi-developer work

**Story breakdown template**:
```markdown
## Epic: [Epic Name]

### Story 1: [Title]
- Description: ...
- Acceptance Criteria: ...
- Estimate: S/M/L
- Dependencies: None

### Story 2: [Title]
- ...
```

### Test Architect (TA)
**Best for**: Testing strategy, quality assurance, validation

**Best practices**:
- Define test strategy early
- Consider unit, integration, and e2e tests
- Automate where possible
- Test accessibility

**webinde use cases**:
- Validate content frontmatter
- Test build process
- Check responsive design
- Verify link integrity

**Testing levels**:
- Unit: Component logic, utilities
- Integration: Content rendering, build
- E2E: Full user flows
- Manual: Visual design, UX

### BMad Master (BM)
**Best for**: Methodology guidance, workflow selection, process questions

**Best practices**:
- Consult when unsure about process
- Ask about track selection
- Get guidance on workflow order
- Understand phase transitions

**webinde use cases**:
- "Should this be Quick Flow or BMad Method?"
- "Can I skip the Architecture phase?"
- "What's the right workflow for this situation?"

## Workflow Best Practices

### Starting a New Feature

**Step-by-step**:
1. **Analyze** (if complex or unclear):
   ```
   Load Analyst
   Run: *workflow-init OR *brainstorm-project
   Output: Understanding of problem space
   ```

2. **Plan**:
   ```
   Load PM
   Run: *prd (for BMad Method) OR *tech-spec (for Quick Flow)
   Output: Requirements document
   ```

3. **Design** (if needed):
   ```
   Load Architect
   Run: *create-architecture
   Output: Architecture document
   
   Load UX Designer (if UI work)
   Run: *create-ux-design
   Output: UX design document
   ```

4. **Break Down**:
   ```
   Load Scrum Master
   Run: *breakdown-stories
   Output: Story list with estimates
   ```

5. **Implement**:
   ```
   For each story:
     Load Developer
     Run: *implement-story
     Load Test Architect (if needed)
     Run: *create-tests
   ```

6. **Document**:
   ```
   Load Tech Writer
   Run: *update-documentation
   Output: Updated docs
   ```

### Updating Existing Documentation

**Quick Flow approach**:
1. **Spec**:
   ```
   Load PM
   Run: *tech-spec
   Describe: Content changes needed
   Output: Technical specification
   ```

2. **Implement**:
   ```
   Load Tech Writer OR Developer
   Make changes following spec
   Output: Updated content
   ```

3. **Validate**:
   ```
   Load Test Architect (optional)
   Verify: Links work, formatting correct, frontmatter valid
   Output: Validated content
   ```

### Reorganizing Content Structure

**BMad Method approach**:
1. **Analyze**:
   ```
   Load Analyst
   Run: *research
   Analyze: Current structure, pain points, best practices
   Output: Analysis report
   ```

2. **Plan**:
   ```
   Load PM
   Run: *prd
   Define: New structure, migration plan, success criteria
   Output: PRD for reorganization
   ```

3. **Design**:
   ```
   Load Architect
   Run: *create-architecture
   Design: New directory structure, navigation, cross-references
   Output: Architecture document
   ```

4. **Implement**:
   ```
   Load Scrum Master
   Run: *breakdown-stories
   Break into: Manageable migration chunks
   
   For each story:
     Load Developer OR Tech Writer
     Migrate content
     Update links
   ```

5. **Validate**:
   ```
   Load Test Architect
   Verify: All links work, no orphaned content, proper structure
   Output: Validation report
   ```

## Common Scenarios

### Scenario 1: Quick Bug Fix
**Track**: Quick Flow
**Agents**: Barry (Quick Flow Solo Dev) OR Developer
**Process**:
1. Identify issue
2. Create quick tech-spec (can be minimal)
3. Fix and test
4. Update docs if needed

**Time**: 30 min - 2 hours

### Scenario 2: Add New Content Section
**Track**: BMad Method
**Agents**: PM, Architect, Tech Writer
**Process**:
1. Create PRD defining content scope
2. Design content structure (architecture)
3. Write content (Tech Writer)
4. Review and publish

**Time**: 1-3 days

### Scenario 3: Major Feature Addition
**Track**: BMad Method
**Agents**: Full team
**Process**:
1. Brainstorm with Analyst
2. Create PRD with PM
3. Design architecture with Architect
4. Design UX with UX Designer
5. Break down stories with SM
6. Implement with Developer
7. Test with Test Architect
8. Document with Tech Writer

**Time**: 1-4 weeks

### Scenario 4: Theme Redesign
**Track**: Enterprise Method
**Agents**: Extended team
**Process**:
1. Full analysis phase
2. Comprehensive PRD
3. Detailed architecture
4. Complete UX design
5. Security review
6. DevOps planning
7. Phased implementation
8. Comprehensive testing

**Time**: 1-3 months

## Anti-Patterns to Avoid

### ❌ Don't: Skip Planning
**Why it's bad**: Leads to rework, unclear requirements, scope creep
**Instead**: Always create at least a tech-spec, even for small work

### ❌ Don't: Use Same Chat for Everything
**Why it's bad**: Context pollution, hallucinations, poor responses
**Instead**: Fresh chat for each workflow

### ❌ Don't: Ignore Track Recommendations
**Why it's bad**: Either too much overhead or too little planning
**Instead**: Trust workflow-init recommendations or ask BMad Master

### ❌ Don't: Default to Developer for Everything
**Why it's bad**: Miss specialized expertise, poor planning
**Instead**: Use appropriate specialized agent for each phase

### ❌ Don't: Skip Documentation
**Why it's bad**: Future confusion, knowledge loss, onboarding difficulties
**Instead**: Document as you go, use Tech Writer for review

### ❌ Don't: Mix Phases in One Workflow
**Why it's bad**: Unclear deliverables, confused agents
**Instead**: Complete one phase before moving to next

### ❌ Don't: Ignore Workflow Status
**Why it's bad**: Might skip required steps, work out of order
**Instead**: Check workflow-status regularly

## Tips and Tricks

### Efficiency Tips

1. **Use workflow shorthands**:
   ```
   Instead of: "Please run the PRD creation workflow"
   Use: *prd
   ```

2. **Batch similar workflows**:
   - Multiple content updates → Batch in one tech-spec
   - Multiple related stories → Group in one sprint

3. **Reuse templates**:
   - Save successful PRD/spec templates
   - Copy structure for similar features
   - Build library of common scenarios

4. **Set up IDE shortcuts**:
   - Quick agent loading
   - Workflow status check
   - Common workflow commands

### Quality Tips

1. **Review outputs immediately**:
   - Check PRDs for completeness
   - Validate architecture decisions
   - Ensure specs are clear

2. **Get second opinions**:
   - Use different agents for review
   - Party mode for complex decisions
   - Team review for major work

3. **Iterate on specs**:
   - Don't settle for first draft
   - Refine until crystal clear
   - Add examples and edge cases

4. **Track decisions**:
   - Document why, not just what
   - Keep decision log
   - Reference in future work

### Collaboration Tips

1. **Share workflow outputs**:
   - Commit specs to git
   - Share in team channels
   - Review together

2. **Standardize naming**:
   - Consistent file names
   - Clear document titles
   - Logical organization

3. **Cross-reference liberally**:
   - Link related specs
   - Reference architecture docs
   - Connect stories to epics

4. **Communicate phase transitions**:
   - "Moving from Planning to Solutioning"
   - "Ready for Implementation phase"
   - "In review/validation"

## Measuring Success

### Individual Success Indicators
- [ ] Comfortable choosing appropriate track
- [ ] Can select right agent for task
- [ ] Workflows feel natural, not forced
- [ ] Documents are clear and useful
- [ ] Less rework and confusion

### Project Success Indicators
- [ ] All features have planning docs
- [ ] Architecture decisions documented
- [ ] Fewer bugs and issues
- [ ] Faster onboarding for new team members
- [ ] Improved code/content quality

### Team Success Indicators
- [ ] Consistent process across team
- [ ] Better collaboration and handoffs
- [ ] Shared understanding of goals
- [ ] Reduced miscommunication
- [ ] Higher team satisfaction

## Getting Help

### When Stuck
1. Check `workflow-status`
2. Ask BMad Master for guidance
3. Review this best practices guide
4. Check official BMAD docs
5. Ask in Discord community

### Resources
- **This guide**: `/docs/BMAD-BEST-PRACTICES.md`
- **Official docs**: https://github.com/bmad-code-org/BMAD-METHOD
- **Community**: https://discord.gg/gk8jAdXWmj
- **Videos**: https://www.youtube.com/@BMadCode

## Continuous Improvement

### Regular Reviews
- **Weekly**: What worked well? What didn't?
- **Monthly**: Track metrics, adjust practices
- **Quarterly**: Major process improvements

### Feedback Loop
1. Try BMAD workflow
2. Note pain points and wins
3. Discuss with team
4. Update this guide
5. Share with BMAD community

### Stay Updated
- Watch for BMAD updates
- Join community discussions
- Share your learnings
- Contribute improvements

---

*Best practices for webinde project*
*Living document - update as we learn*
*Last updated: December 2025*
