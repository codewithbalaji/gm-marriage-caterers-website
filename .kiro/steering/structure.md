# Project Structure

## Directory Organization

```
/app                    # Next.js App Router pages
  /about               # About page
  /booknow             # Booking/inquiry page
  /gallery             # Photo gallery page
  /menu                # Menu showcase page
  /services            # Services page
  layout.tsx           # Root layout with Navbar, Footer, WhatsApp button
  page.tsx             # Homepage
  providers.tsx        # Client-side providers wrapper
  globals.css          # Global styles

/components            # React components
  /about              # About page components
  /booknow            # Booking form components
  /gallery            # Gallery components
  /home               # Homepage sections (Hero, ServicesGrid, etc.)
  /icons              # Custom icon components
  /layout             # Layout components (Navbar, Footer, WhatsApp)
  /menu               # Menu display components
  /services           # Services page components
  /ui                 # shadcn/ui components (50+ files)
  NavLink.tsx         # Custom navigation link component

/context               # React Context providers
  LanguageContext.tsx  # Bilingual support (English/Tamil)

/hooks                 # Custom React hooks
  use-mobile.tsx       # Mobile detection hook
  use-toast.ts         # Toast notification hook

/lib                   # Utility functions
  utils.ts             # cn() helper for class merging

/public                # Static assets
  *.jpg                # Images (food, gallery, hero, logo)
```

## Architecture Patterns

### Page Structure
- Each route has a `page.tsx` in `/app` directory
- Pages import and compose section components
- Keep pages minimal - delegate to components

### Component Organization
- Group by feature/page (e.g., `/components/home`, `/components/menu`)
- Shared UI components in `/components/ui` (shadcn)
- Layout components (Navbar, Footer) in `/components/layout`

### Client vs Server Components
- Use `"use client"` directive for:
  - Components with interactivity (onClick, useState, etc.)
  - Components using Context (useLanguage)
  - Components with animations (motion)
- Server components by default (no directive needed)

### Styling Conventions
- Use Tailwind utility classes
- Use `cn()` helper from `@/lib/utils` for conditional classes
- Custom colors defined in globals.css (gold, forest, ivory)
- Responsive design: mobile-first with `md:` and `lg:` breakpoints

### Internationalization
- All text content stored in `LanguageContext.tsx` translations object
- Use `useLanguage()` hook to access `t()` function
- Format: `t("section.key")` (e.g., `t("hero.heading")`)
- Support for English (`en`) and Tamil (`ta`)

### Image Handling
- Use Next.js `<Image>` component from `next/image`
- Images stored in `/public` directory
- Use `fill` prop for background images with `object-cover`
- Add `priority` for above-the-fold images

## Naming Conventions

- **Files**: PascalCase for components (`Hero.tsx`), kebab-case for pages (`page.tsx`)
- **Components**: PascalCase (`ServicesGrid`, `CTABanner`)
- **Utilities**: camelCase (`cn`, `useLanguage`)
- **CSS classes**: Tailwind utilities, custom classes in kebab-case
