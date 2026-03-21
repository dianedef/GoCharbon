# AGENTS.md

This repository contains shared instructions for coding agents working on GoCharbon.

## Core Rules

- Preserve the current taxonomy: `blog`, `outils`, `tutos`, `parcours`.
- Do not reintroduce `apps` as a section or route.
- Treat content categorization, local qualification, and responsibility rating as separate concerns.
- Prefer conservative metadata over optimistic guesses.
- Never label an outil as French on branding alone.
- Remember that these metadata also drive a public-facing `Engagement français` badge.

## Founder Voice Memory

For any editorial writing or rewriting task, retain this context by default:

- GoCharbon is founder-led by **Diane**
- Diane is **French**, **36 years old**, **female**, and deeply product-minded
- She builds because she likes making useful things that can help people and businesses
- Her worldview is pragmatic: build the best thing you can, and maybe the world gets a bit better
- The desired voice is **human, clear, witty, lightly funny, direct, anti-bullshit**
- Avoid AI-sounding phrasing, generic startup storytelling, and inflated "mission" copy
- When writing about the team/personnel, do not invent a large company structure; default to **independent project led by Diane**

For source material:

- use [`src/data/_founder.md`](/home/claude/GoCharbon/src/data/_founder.md) for "about", "bio", "team", "manifesto", founder, and brand-positioning content
- use [`src/data/_vision.md`](/home/claude/GoCharbon/src/data/_vision.md) for entrepreneurial vision and reader-facing business-construction content

## Tool Qualification Protocol

When the task involves qualifying tool pages for local, economic, or responsible positioning:

1. Use the skill at [`skills/outils-qualification-locale/SKILL.md`](/home/claude/GoCharbon/skills/outils-qualification-locale/SKILL.md).
2. Follow the public methodology in [`src/pages/methodologie.astro`](/home/claude/GoCharbon/src/pages/methodologie.astro).
3. Update only the qualification frontmatter fields unless the task explicitly asks for editorial rewriting.
4. Record sources in `sourcesVerification`.
5. Prefer `indetermine` or `partiel` when evidence is incomplete.
6. Treat the public badge as a consequence of metadata, not as a decorative label to optimize.
7. Default to one canonical fiche per outil; keep multiple fiches only when the editorial angle and search intent are genuinely different.

Useful scripts:

- [`scripts/audit_outils_qualification.py`](/home/claude/GoCharbon/scripts/audit_outils_qualification.py)
- [`scripts/prioritize_outils_qualification.py`](/home/claude/GoCharbon/scripts/prioritize_outils_qualification.py)
- [`scripts/qa_outils_qualification.py`](/home/claude/GoCharbon/scripts/qa_outils_qualification.py)
- [`skills/outils-qualification-locale/scripts/build_qualification_batch.py`](/home/claude/GoCharbon/skills/outils-qualification-locale/scripts/build_qualification_batch.py)

Recommended batch workflow:

1. Build a prioritized backlog.
2. Split work by lane (`admin-finance`, `assurance-crm`, `communication-productivite`, `general`).
3. Qualify only `todo` or `partial` items in the current lane.
4. Run QA before validating a batch.
5. Re-run the audit after each wave.

## Frontmatter Fields For Tool Qualification

- `qualificationLocale`
- `ancrageEconomique`
- `niveauResponsabilite`
- `paysSiege`
- `paysFiscal`
- `paysFondateurs`
- `hebergementDonnees`
- `societeMere`
- `sourcesVerification`
- `notesQualification`
- `methodologieVersion`

## Badge Rule

- The public `Engagement français` badge is computed from qualification metadata.
- Never inflate metadata to obtain a stronger badge.
- If evidence is weak, let the badge stay weak or pending.

## Editing Guidance

- Keep `section: outils` and `type: outil` on tool pages.
- Do not mass-rewrite article bodies when the actual problem is metadata.
- If a fact cannot be verified locally, document the gap instead of inventing confidence.
- If duplicate tool pages are nearly identical, keep one canonical URL and surface it through tags/listings instead of maintaining two self-canonical pages.
- If duplicate tool pages have very high content similarity, merge by default; keep two pages only when the use case and search intent are materially different and the copy is genuinely rewritten.
