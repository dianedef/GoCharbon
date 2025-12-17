# webinde Development Stack Documentation

## Project Overview

**webinde** is a neobrutalist Astro theme designed for documentation and content-rich websites. This document provides comprehensive information about the development stack, architecture, and workflows.

## Technology Stack

### Core Framework
- **Astro** `5.2.5` - Static site generator with component islands architecture
  - Zero JavaScript by default
  - Component framework agnostic
  - Content collections for type-safe content
  - File-based routing

### Language & Runtime
- **TypeScript** - Type-safe JavaScript
  - Configuration: `tsconfig.json`
  - Strict type checking enabled
  - Enhanced IDE support

- **Node.js** `>=20.0.0` - JavaScript runtime
  - Required for build and development

### Package Management
- **pnpm** `8.6.0` - Fast, disk space efficient package manager
  - Lockfile: `pnpm-lock.yaml`
  - Workspace support
  - Faster than npm/yarn

### Styling
- **UnoCSS** `0.57.7` - Instant on-demand atomic CSS engine
  - Configuration: `uno.config.ts`
  - TailwindCSS compatible
  - PureCSS icons support
  - Zero runtime
  - Build-time generation

### UI Components
- **@eliancodes/brutal-ui** `0.2.3` - Neobrutalist UI component library
  - Pre-built components
  - Consistent design system
  - Astro-native components

### Icons
- **lucide-astro** `0.473.0` - Beautiful & consistent icons
  - SVG-based
  - Tree-shakeable
  - Accessible

### Build Tools
- **Vite** (via Astro) - Lightning-fast build tool
  - HMR (Hot Module Replacement)
  - Optimized builds
  - Plugin ecosystem

### Content Management
- **Astro Content Collections** - Type-safe content management
  - Schema validation
  - TypeScript types
  - Markdown/MDX support
  - Frontmatter validation

### SEO & Optimization
- **@astrojs/sitemap** `3.2.1` - Automatic sitemap generation
- **@astrojs/rss** `4.0.11` - RSS feed generation
- **satori** `0.5.0` & **satori-html** `0.3.2` - OG image generation
- **@resvg/resvg-js** `2.6.0` - SVG to PNG conversion

### Development Tools
- **ESLint** `8.56.0` - JavaScript/TypeScript linting
  - Configuration: `eslint.config.mjs`
  - Astro plugin: `eslint-plugin-astro`
  - JSX accessibility: `eslint-plugin-jsx-a11y`

- **Prettier** `3.1.1` - Code formatting
  - Configuration: `prettier.config.mjs`
  - Astro plugin: `prettier-plugin-astro`

### Additional Features
- **astro-breadcrumbs** `3.3.1` - Breadcrumb navigation
- **astro-font** `0.0.80` - Font optimization
- **Vue** `3.4.21` (optional) - For Vue components via `@astrojs/vue`
- **Sass** `1.84.0` - CSS preprocessor support

## Project Structure

```
webinde/
├── .git/                       # Git repository
├── .github/                    # GitHub workflows (if any)
├── _bmad/                      # BMAD Method (after installation)
│   ├── agents/                # AI agents
│   ├── workflows/             # Workflow definitions
│   └── config/                # BMAD configuration
│
├── afr/                       # Main content directory
│   ├── seo/                   # SEO guides and documentation
│   ├── analytics/             # Analytics documentation
│   ├── responsabilite-sociale/ # Social responsibility content
│   └── [other categories]/    # Various content categories
│
├── docs/                      # Project documentation
│   ├── BMAD-METHOD-OVERVIEW.md
│   ├── BMAD-INSTALLATION.md
│   ├── BMAD-INTEGRATION-STRATEGY.md
│   ├── BMAD-BEST-PRACTICES.md
│   ├── planning/              # PRDs and specs
│   ├── architecture/          # Architecture docs
│   └── implementation/        # Implementation notes
│
├── public/                    # Static assets
│   ├── fonts/                 # Web fonts
│   ├── images/                # Images
│   └── [other assets]/        # Other static files
│
├── scripts/                   # Build and utility scripts
│
├── src/                       # Source code
│   ├── _app.ts               # Application entry
│   ├── assets/               # Source assets
│   ├── components/           # Astro/Vue components
│   ├── composables/          # Vue composables
│   ├── config/               # Configuration files
│   ├── content.config.ts     # Content collections config
│   ├── data/                 # Static data
│   ├── env.d.ts              # TypeScript environment types
│   ├── layouts/              # Page layouts
│   ├── pages/                # Route pages
│   ├── styles/               # Global styles
│   ├── types/                # TypeScript types
│   └── utils/                # Utility functions
│
├── .cursorrules              # Cursor IDE rules
├── .gitignore                # Git ignore patterns
├── .prettierignore           # Prettier ignore patterns
├── astro.config.mjs          # Astro configuration
├── astro.config.ts           # Astro TypeScript config
├── check_frontmatter.js      # Frontmatter validation script
├── eslint.config.mjs         # ESLint configuration
├── LICENSE                   # MIT License
├── package.json              # Node dependencies
├── pnpm-lock.yaml            # pnpm lockfile
├── prettier.config.mjs       # Prettier configuration
├── README.md                 # Project README
├── tsconfig.json             # TypeScript configuration
└── uno.config.ts             # UnoCSS configuration
```

## Development Workflow

### Setup

```bash
# Clone repository (replace with your fork if applicable)
git clone https://github.com/dianedef/webinde.git
cd webinde

# Install dependencies
pnpm install

# Start development server
pnpm dev
# Server runs at http://localhost:3000
```

### Available Commands

| Command | Description |
|---------|-------------|
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start development server at localhost:3000 |
| `pnpm start` | Alias for `pnpm dev` |
| `pnpm build` | Build production site to `./dist/` |
| `pnpm preview` | Preview production build locally |
| `pnpm astro ...` | Run Astro CLI commands |
| `pnpm astro --help` | Get help with Astro CLI |

### Development Server Features

- **Hot Module Replacement (HMR)**: Changes reflect instantly
- **Fast Refresh**: Component state preserved on edit
- **Error Overlay**: Detailed error messages in browser
- **TypeScript Support**: Type checking in editor and terminal

## Configuration Files

### astro.config.mjs / astro.config.ts
Main Astro configuration:
- Site URL
- Integrations (sitemap, RSS, Vue, UnoCSS)
- Build options
- Server options

### tsconfig.json
TypeScript configuration:
- Compiler options
- Path aliases
- Type checking rules

### uno.config.ts
UnoCSS configuration:
- Presets (uno, attributify, icons)
- Theme customization
- Shortcuts
- Rules

### package.json
Project metadata and scripts:
- Dependencies
- Scripts
- Package manager config

## Content Management

### Content Structure

Content is primarily organized in the `/afr` directory with markdown files:

```markdown
---
title: "Page Title"
description: "Page description"
pubDate: 2024-12-16
tags: ["tag1", "tag2"]
---

# Content here
```

### Frontmatter Validation

Use `check_frontmatter.js` to validate frontmatter:

```bash
node check_frontmatter.js
```

### Content Collections

Content collections provide type-safe content access:

```typescript
// src/content.config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()).optional(),
  }),
});
```

## Styling System

### UnoCSS Usage

UnoCSS is fully compatible with TailwindCSS syntax:

```html
<!-- Utility classes -->
<div class="flex items-center justify-center p-4 bg-blue-500 text-white">
  Content
</div>

<!-- Attributify mode -->
<div flex items-center justify-center p-4 bg-blue-500 text-white>
  Content
</div>

<!-- Icons -->
<div class="i-lucide-user w-6 h-6"></div>
```

### Adding Custom Styles

1. **Utility classes**: Use UnoCSS utilities
2. **Global styles**: Add to `src/styles/`
3. **Component styles**: Use `<style>` tags in Astro components
4. **Sass/SCSS**: Import `.scss` files

### Theme Customization

Modify `uno.config.ts` to customize:
- Colors
- Spacing
- Typography
- Breakpoints

## Component Development

### Astro Components

```astro
---
// Component script (runs at build time)
interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;
---

<!-- Component template -->
<div class="card">
  <h2>{title}</h2>
  {description && <p>{description}</p>}
</div>

<style>
  .card {
    /* Scoped styles */
  }
</style>
```

### Vue Components (Optional)

```vue
<script setup lang="ts">
interface Props {
  title: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="vue-component">
    <h2>{{ title }}</h2>
  </div>
</template>

<style scoped>
.vue-component {
  /* Scoped styles */
}
</style>
```

### Component Best Practices

1. **Type your props** - Use TypeScript interfaces
2. **Keep components focused** - Single responsibility
3. **Reuse existing components** - Check `@eliancodes/brutal-ui`
4. **Document complex components** - Add JSDoc comments
5. **Test responsiveness** - Check all breakpoints

## Build Process

### Development Build

```bash
pnpm dev
```
- Fast rebuild on changes
- Source maps enabled
- No optimization
- Full error details

### Production Build

```bash
pnpm build
```
- Optimized output
- Minified JavaScript/CSS
- Compressed assets
- Tree-shaking
- Static HTML generation

### Build Output

```
dist/
├── _astro/          # Optimized assets (CSS, JS, images)
├── fonts/           # Web fonts
├── images/          # Optimized images
├── [pages]/         # Static HTML pages
├── sitemap.xml      # Generated sitemap
└── feed.xml         # Generated RSS feed
```

## Performance Optimization

### Built-in Optimizations

1. **Zero JavaScript by default** - Only ship what's needed
2. **Optimized images** - Automatic WebP conversion
3. **CSS optimization** - Atomic CSS, minimal overhead
4. **Font optimization** - Astro Font integration
5. **Static generation** - Pre-rendered HTML

### Manual Optimizations

1. **Use static imports** - Better tree-shaking
2. **Lazy load components** - Use `client:*` directives sparingly
3. **Optimize images** - Use appropriate sizes
4. **Minimize dependencies** - Keep bundle small
5. **Use content collections** - Type-safe, optimized queries

### Monitoring

- **Build time** - Track with each build
- **Bundle size** - Check `dist/_astro/`
- **Lighthouse scores** - Run audits regularly
- **Core Web Vitals** - Monitor in production

## SEO Features

### Automatic Sitemap

Configured in `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://your-domain.com',
  integrations: [sitemap()],
});
```

Generated at: `dist/sitemap.xml`

### RSS Feed

Location: `src/pages/feed.xml.js`
Output: `https://your-domain.com/feed.xml`

Customize by modifying the RSS page file.

### OG Images

Generated with Satori:
- Automatic for blog posts
- Customizable templates
- SVG to PNG conversion

## Testing

### Frontmatter Validation

```bash
node check_frontmatter.js
```

Validates:
- Required fields present
- Correct data types
- Valid date formats
- Proper YAML syntax

### Manual Testing

1. **Visual testing** - Check all pages locally
2. **Responsive testing** - Test mobile, tablet, desktop
3. **Link checking** - Verify internal/external links
4. **Accessibility** - Use browser dev tools
5. **Performance** - Run Lighthouse audits

### Future Testing (with BMAD)

- Use Test Architect agent for test strategy
- Implement automated tests
- Set up CI/CD pipelines
- Add visual regression testing

## Deployment

### Build for Production

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

### Deployment Targets

- **Netlify** - Drop `dist/` folder
- **Vercel** - Connect Git repository
- **GitHub Pages** - Use GitHub Actions
- **Cloudflare Pages** - Connect repository
- **Any static host** - Upload `dist/` folder

### Environment Variables

Create `.env` file for sensitive data:
```bash
# .env
PUBLIC_API_URL=https://api.example.com
SECRET_API_KEY=your-secret-key
```

**Note**: Only `PUBLIC_*` variables are exposed to client.

## BMAD Integration

### BMAD-Aligned Development Stack

The webinde tech stack aligns well with BMAD Method principles:

1. **Document-driven** - Markdown content matches BMAD's approach
2. **Type-safe** - TypeScript and content collections ensure quality
3. **Modular** - Component-based architecture
4. **Scalable** - Static generation scales infinitely
5. **Maintainable** - Clear structure, good tooling

### Using BMAD with webinde

See comprehensive BMAD documentation:
- [BMAD Method Overview](./docs/BMAD-METHOD-OVERVIEW.md)
- [BMAD Installation Guide](./docs/BMAD-INSTALLATION.md)
- [BMAD Integration Strategy](./docs/BMAD-INTEGRATION-STRATEGY.md)
- [BMAD Best Practices](./docs/BMAD-BEST-PRACTICES.md)

### Recommended Workflows

**Quick Flow** (Bug fixes, small updates):
1. Load Barry (Quick Flow Solo Dev)
2. Create tech-spec
3. Implement and test

**BMad Method** (New features):
1. Planning: Create PRD with PM agent
2. Solutioning: Design with Architect/UX
3. Implementation: Code with Developer
4. Documentation: Update with Tech Writer

## Troubleshooting

### Common Issues

**Build fails with TypeScript errors**:
```bash
# Check tsconfig.json
# Verify all types are properly defined
# Run: pnpm astro check
```

**HMR not working**:
```bash
# Clear cache and restart
rm -rf node_modules/.vite
pnpm dev
```

**Styles not updating**:
```bash
# UnoCSS might be cached
# Restart dev server
# Check uno.config.ts for errors
```

**Content not showing**:
```bash
# Verify frontmatter is valid
node check_frontmatter.js
# Check content collection schema
```

### Getting Help

- **Astro Discord**: https://astro.build/chat
- **Astro Docs**: https://docs.astro.build
- **UnoCSS Docs**: https://uno.antfu.me
- **BMAD Community**: https://discord.gg/gk8jAdXWmj

## Contributing

### Code Style

- **TypeScript**: Strict mode enabled
- **Formatting**: Prettier (auto-format on save)
- **Linting**: ESLint (fix with `pnpm lint:fix`)
- **Commits**: Descriptive messages

### Pull Request Process

1. Create feature branch
2. Make changes following style guide
3. Test locally (`pnpm dev`, `pnpm build`)
4. Run validation (`node check_frontmatter.js`)
5. Create PR with clear description
6. Address review feedback

### Documentation Updates

When making changes:
1. Update relevant docs
2. Keep README.md current
3. Update this DEVELOPMENT.md if stack changes
4. Document breaking changes

## Resources

### Official Documentation
- **Astro**: https://docs.astro.build
- **TypeScript**: https://www.typescriptlang.org/docs
- **UnoCSS**: https://uno.antfu.me
- **pnpm**: https://pnpm.io
- **BMAD Method**: https://github.com/bmad-code-org/BMAD-METHOD

### Learning Resources
- **Astro Tutorial**: https://docs.astro.build/en/tutorial/0-introduction/
- **UnoCSS Interactive**: https://uno.antfu.me/play/
- **TypeScript Handbook**: https://www.typescriptlang.org/docs/handbook/intro.html

### Community
- **Astro Discord**: https://astro.build/chat
- **BMAD Discord**: https://discord.gg/gk8jAdXWmj

---

*Development documentation for webinde project*
*Aligned with BMAD Method principles*
*Last updated: December 2025*
