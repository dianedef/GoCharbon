# GoCharbon — Tasks

### Audit: Code (2026-02-28)

**Fixed:**
- [x] 🔴 Remove ~45 console.log lines in production (static-responses.ts)
- [x] 🔴 Remove copy protection blocking accessibility (Default.astro)
- [x] 🔴 Add mobile hamburger menu — no navigation on mobile (BaseNavigation.astro)
- [x] 🔴 Fix "ElianCodes" branding reference in social links (BaseNavigation.astro)
- [x] 🟠 Remove `data-tags={JSON.stringify()}` dead code from PostGrid (PostGrid.astro)
- [x] 🟠 Remove `transition:name` from listing cards — 3 per card × 2000+ posts (PostSummaryCard.astro)
- [x] 🟠 Switch `client:load` to `client:visible` on tag pages ([tag].astro, [tag]/[page].astro)
- [x] 🟠 Add recent posts section to homepage (index.astro)
- [x] 🟠 Add `<label>` to newsletter email input (index.astro)
- [x] 🟡 Fix robots.txt — remove deprecated `Host:` directive
- [x] 🟡 Improve image alt tags — use description instead of title (PostSummaryCard.astro, Post.astro)
- [x] 🟡 dist reduced from 637 MB to 553 MB (84 MB / 13% saved)

**Remaining:**
- [ ] 🟡 Complete legal pages (CGU, mentions légales, confidentialité) — empty placeholders, required by French law
- [ ] 🟡 Optimize tagHierarchy serialization — full object passed as prop to every tag page
- [ ] 🟡 `trailingSlash: 'ignore'` in astro.config.ts — should be `'never'` per CLAUDE.md
