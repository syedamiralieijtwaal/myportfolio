# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev    # Start development server (port 3000)
npm run build  # Production build
npm start      # Start production server
npm run lint   # Run ESLint
```

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **UI**: React 19, TypeScript 5
- **Styling**: Tailwind CSS v4 with PostCSS
- **Linting**: ESLint with Next.js core-web-vitals and TypeScript configs

## Architecture

This is a single-page portfolio website with a modular component structure:

- **`src/app/page.tsx`**: Main page that composes all section components
- **`src/app/layout.tsx`**: Root layout with metadata and font configuration
- **`src/app/globals.css`**: Tailwind setup and custom CSS theme variables
- **`src/components/`**: Section components (Navbar, Hero, Experience, Projects, Skills, Education, Footer)

### Key Patterns

- **Data-Driven Components**: Experience, Projects, Skills, and Education components use local data arrays mapped to JSX
- **Theme System**: Dark theme with CSS custom properties in `globals.css` (e.g., `--color-bg`, `--color-accent`)
- **Path Alias**: `@/*` maps to `./src/*`
- **Responsive Design**: Mobile-first with `sm:` breakpoint pattern (e.g., `grid-cols-1 sm:grid-cols-2`)
