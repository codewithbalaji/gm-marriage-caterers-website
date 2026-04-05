# Technology Stack

## Framework & Runtime

- **Next.js 16.2.2** - React framework with App Router
- **React 19.2.4** - UI library
- **TypeScript 5** - Type-safe JavaScript

## Styling & UI

- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Component library built on Radix UI
- **Radix UI** - Unstyled, accessible component primitives
- **Motion (Framer Motion)** - Animation library
- **Lucide React** - Icon library
- **class-variance-authority** - Component variant management
- **tailwind-merge + clsx** - Utility for merging Tailwind classes

## State & Data Management

- **React Context API** - Language switching (LanguageContext)
- **TanStack Query** - Server state management
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## Build System

- **npm** - Package manager
- **ESLint** - Code linting
- **PostCSS** - CSS processing

## Common Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:3000

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## Path Aliases

The project uses `@/*` alias for imports:
- `@/components` → `./components`
- `@/lib` → `./lib`
- `@/hooks` → `./hooks`
- `@/context` → `./context`
- `@/app` → `./app`

Always use path aliases instead of relative imports.
