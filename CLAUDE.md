# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev        # Start development server with Turbopack
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

## Architecture Overview

This is a Next.js 15.1.6 landing page with internationalization (Japanese/English) using next-intl. Key architectural patterns:

### Routing & Internationalization
- Dynamic `[locale]` segments handle language routing (ja as default, en supported)
- Translations in `/messages/{locale}.json`
- Use `useTranslations("namespace")` hook for translations
- Metadata and SEO tags are locale-aware

### Component Architecture
- Server Components by default, `"use client"` for interactivity
- UI components follow shadcn/ui pattern (copied, not imported)
- Components use `cn()` utility from `lib/utils` for className merging
- Path alias: `@/*` maps to `./src/*`

### Key Patterns
```typescript
// Component pattern
import { useTranslations, useLocale } from "next-intl";
import { cn } from "@/lib/utils";

// Locale-aware assets
const logoSrc = locale === "ja" ? "/logo-jp.svg" : "/logo-en.svg";
```

### Important Files
- `/src/i18n/routing.ts` - i18n configuration
- `/src/app/[locale]/layout.tsx` - Main layout with locale setup
- `/src/lib/utils.ts` - Utility functions including `cn()`
- `/src/app/globals.css` - CSS variables for theming

### Analytics & External Integrations
- Google Analytics (GA4) and Microsoft Clarity
- HubSpot forms integration (global types available)
- Analytics components wrapped in Suspense boundaries

### Development Notes
- No testing framework configured
- ESLint with Next.js core-web-vitals rules
- Tailwind CSS with custom theme and CSS variables
- Framer Motion for animations
- Images optimized with Next.js Image component