# GM Marriage Caterers Website

A modern, bilingual marketing website for GM Marriage Caterers - a traditional South Indian Brahmin wedding catering service with 25+ years of experience serving families across Tamil Nadu.

## Features

- 🌐 Bilingual support (English & Tamil)
- 📱 Fully responsive design
- ✨ Smooth animations with Framer Motion
- 🎨 Modern UI with shadcn/ui components
- 📋 Booking inquiry form
- 🖼️ Photo gallery showcase
- 📞 WhatsApp integration
- 🍽️ Menu display with traditional feast items

## Tech Stack

- **Framework**: Next.js 16.2.2 (App Router)
- **UI Library**: React 19.2.4
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Components**: shadcn/ui + Radix UI
- **Animations**: Motion (Framer Motion)
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 20+ installed
- npm package manager

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Linting

```bash
# Run ESLint
npm run lint
```

## Project Structure

```
/app                    # Next.js App Router pages
/components             # React components organized by feature
  /home                # Homepage sections
  /layout              # Navbar, Footer, WhatsApp button
  /ui                  # shadcn/ui components
/context               # React Context (Language switching)
/hooks                 # Custom React hooks
/lib                   # Utility functions
/public                # Static assets (images)
```

## Key Pages

- `/` - Homepage with hero, services, testimonials
- `/about` - Company history and values
- `/services` - Detailed service offerings
- `/menu` - Traditional menu showcase
- `/gallery` - Photo gallery
- `/booknow` - Booking inquiry form

## Development Guidelines

- Use `@/*` path aliases for imports
- Follow Next.js App Router conventions
- Add `"use client"` for interactive components
- Use `useLanguage()` hook for translations
- Apply Tailwind utilities with `cn()` helper
- Keep components focused and feature-organized

## License

Private project for GM Marriage Caterers.
