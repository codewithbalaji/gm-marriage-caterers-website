# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
npm start        # Start production server
```

No test suite is configured.

## Architecture

### Framework & Stack
- **Next.js 16** with App Router (`/app` directory)
- **TypeScript** (strict mode, path alias `@/*` → root)
- **Tailwind CSS v4** — config is defined inline via `@theme` in `app/globals.css` (no `tailwind.config.js`)
- **shadcn/ui** (Radix UI + Tailwind) for UI primitives in `components/ui/`
- **Motion** (`motion` package) for animations
- Purely static/client-side — no API routes, no backend, no database

### Routing
All routes are under `app/`:
- `/` → home (composes 8 section components from `components/home/`)
- `/about`, `/services`, `/menu`, `/gallery`, `/booknow`

Each route's page file simply renders a single component from the matching `components/<route>/` directory.

### i18n (English/Tamil)
`context/LanguageContext.tsx` is the central i18n system:
- `useLanguage()` hook provides `lang`, `setLang()`, and `t(key)` (dot-notation keys)
- All translation strings live inside this context file (~200+ keys)
- Language is persisted to localStorage under key `"gm-lang"`
- Components conditionally apply fonts: `lang === "ta" ? "font-tamil" : "font-garamond"`

### Styling Conventions
Custom design tokens are defined in `app/globals.css` `@theme` block:
- Colors: `forest` (#1B3A2D), `gold` (#C9A84C), `ivory` (#FDFAF2), `saffron` (#D4880A)
- Fonts: `font-garamond` (Cormorant Garamond, headings/EN), `font-lato` (body), `font-tamil` (Noto Sans Tamil)
- Utility classes: `.gold-divider`, `.section-padding`, `.kolam-pattern`

Use `cn()` from `lib/utils.ts` (clsx + tailwind-merge) for conditional class merging.

### Forms
`react-hook-form` + `zod` are set up for use in `components/booknow/BookNow.tsx`. Use the `@hookform/resolvers/zod` pattern when adding/modifying forms.

### Dependencies Available but Unused
- `@tanstack/react-query` — ready for future API integration
- `recharts`, `embla-carousel-react` — available for data/carousel features
