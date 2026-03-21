# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

WeBuildCLT is a headless WordPress + Next.js 16 website for **We Build**, a veteran and family-owned construction company in Charlotte, NC. The site uses WordPress as a CMS (via WPGraphQL) and Next.js App Router for the frontend, deployed on Vercel.

**Business**: Commercial & residential construction, upfits, roof coatings, design-build. Based at 14330 S Lakes Drive, Charlotte NC 28273. Phone: (704) 574-8124.

**Membership**: U.S. Green Building Council (USGBC) member. USGBC logos are at `/USGBC Member.png` (white on teal background) and `/USGBC Member 1.png` (teal on white background). **Not** a member of "We Are Neutral" — all references to carbon neutrality and We Are Neutral should be replaced with USGBC membership.

## Development Commands

```bash
npm run dev        # Start dev server (localhost:3000)
npm run build      # Production build
npm run start      # Start production server
npm run lint       # ESLint (next/core-web-vitals + typescript)
```

## Environment Variables

```env
WORDPRESS_API_URL=https://your-wordpress-site.com/graphql
WORDPRESS_PREVIEW_SECRET=your-preview-secret
REVALIDATION_SECRET=your-revalidation-secret
```

No `.env.example` exists yet — create one if adding new env vars.

## Architecture

### Tech Stack
- **Next.js 16** (App Router, React 19, RSC by default)
- **Tailwind CSS v4** + **shadcn/ui** (new-york style, Radix primitives)
- **Headless WordPress** via WPGraphQL plugin
- **Vercel** deployment (region: `iad1`)
- **Zod** + **react-hook-form** for form validation

### Data Flow
WordPress CMS → WPGraphQL → `src/lib/wordpress.ts` (fetchGraphQL client) → Next.js Server Components → ISR with on-demand revalidation via `/api/revalidate`

### Key Files
- `src/lib/wordpress.ts` — GraphQL client with ISR and tag-based revalidation support
- `src/lib/queries.ts` — All WPGraphQL queries (pages, posts, portfolio, services, testimonials, certifications)
- `src/types/wordpress.ts` — TypeScript interfaces for all WordPress data types
- `src/components/PageHero.tsx` — Reusable hero banner component used across pages
- `src/components/layout/Header.tsx` — Fixed header with scroll-based transparency toggle (client component)
- `src/components/layout/Footer.tsx` — Footer with nav, services, contact info, and certification logos

### WordPress Custom Post Types
The GraphQL queries expect: `portfolio`, `testimonial`, `service`, `certification` (plus standard pages and posts). Required WP plugins: WPGraphQL, WPGraphQL for ACF, Yoast SEO + WPGraphQL Yoast addon.

### Page Structure
| Route | Status | Notes |
|-------|--------|-------|
| `/` | Built | Hero, about, services, portfolio preview, testimonials, CTA |
| `/about` | Built | Company story, values, certifications grid |
| `/portfolio` | Built | Filterable project gallery (commercial/residential) |
| `/design-center` | Built | Showroom info, Matterport virtual tour |
| `/we-coat` | Built | Roof coating service details |
| `/contact` | Built | Contact form (email integration commented out) |
| `/news` | Built | Blog/news listing |
| `/blog` | Not built | Blog infrastructure planned (see build plan) |

### API Routes
- `POST /api/contact` — Contact form handler (Resend email and WP Gravity Forms integrations are scaffolded but commented out)
- `POST|GET /api/revalidate` — On-demand ISR revalidation endpoint, authenticated via `REVALIDATION_SECRET`

### Brand Colors & Theming
Defined as CSS custom properties in `src/app/globals.css` using OKLCH:
- **Primary**: Orange/gold (`oklch(0.65 0.18 50)`) — used for CTAs, accents, links
- **Secondary**: Dark blue-gray (`oklch(0.25 0.02 240)`) — used for footer, testimonials
- Brand variables: `--brand`, `--brand-dark`, `--brand-light`
- Dark mode theme is defined but not toggled in the UI

### Path Alias
`@/*` maps to `./src/*` (configured in `tsconfig.json`)

## Build Plan

A multi-phase content and SEO expansion is planned in `website-build-plan-claude.md` (located at `C:\Users\james\OneDrive\Desktop\Kynex Apps\Apps and Sites\kynexpro-website\website-build-plan-claude.md`):
1. SEO research & architecture plan (DataForSEO keyword research, competitor analysis)
2. SEO infrastructure + blog system (`/blog/[slug]`, sitemap, structured data, JSON-LD)
3. 10 service/location pages with keyword targeting
4. 100 SEO-optimized blog posts batched by topic cluster

## Known Placeholder Content

These need real assets before launch:
- All `/images/*` paths reference placeholder images (hero, about, portfolio, logo, certifications)
- No `/public/images/` directory with actual images exists yet
- Contact form email integration is commented out (needs Resend API key or WP Gravity Forms setup)
- Google verification code in `layout.tsx` metadata is placeholder
- Portfolio items on homepage are hardcoded placeholders (not fetched from WordPress)

## Design Loop Log

### /design:audit — Phase 1
- **Files:** globals.css, layout.tsx, Header.tsx, Footer.tsx
- **What changed:**
  - Added prefers-reduced-motion, touch-action: manipulation, focus-visible states, text-wrap: balance on headings
  - Added skip link for keyboard accessibility in layout.tsx
  - Fixed transition-all → explicit transition properties on header
  - Added aria-hidden on decorative icons, aria-expanded + keyboard support on services dropdown
  - Fixed heading hierarchy in footer (h3 → h2)
  - Reordered services navigation: commercial services listed first
  - Updated all metadata/descriptions to lead with commercial construction focus
  - Removed placeholder Google verification code, added theme-color meta
- **Why:** Foundation compliance with Vercel Web Interface Guidelines — accessibility, performance, and SEO baseline
- **Commit:** design:audit — fix Web Interface Guidelines violations across foundation files

### /design:polish — Phase 2
- **Files:** globals.css, layout.tsx
- **What changed:**
  - Replaced Geist fonts with Plus Jakarta Sans (headings) + DM Sans (body) for construction brand character
  - Established 8px spacing grid with CSS custom properties (--space-xs through --space-4xl)
  - Added shadow depth system (4 levels: sm, md, lg, xl) using OKLCH
  - Added premium transition easing curves (expo, back)
  - Set heading typography to font-bold, line-height 1.15, responsive base sizes
  - Set body line-height 1.7, text-wrap: pretty on paragraphs
  - Polished image hover with 600ms expo easing
- **Why:** Construction brand needs authoritative, distinctive typography — not generic tech fonts
- **Commit:** design:polish — replace Geist with Plus Jakarta Sans/DM Sans, add spacing scale + shadow depth system

### /design:animate — Phase 2
- **Files:** globals.css, ScrollReveal.tsx (new)
- **What changed:**
  - Added CSS scroll-reveal system: reveal, reveal-left, reveal-right, reveal-scale classes
  - Added stagger-children for sequenced entrance animations (80ms intervals, up to 8 children)
  - Added micro-interactions: hover-lift (buttons), card-hover (cards), icon-hover-rotate
  - Added CTA pulse-glow keyframe for primary call-to-action emphasis
  - Created ScrollReveal component with IntersectionObserver + reduced motion respect
  - All animations use transform/opacity only (GPU-composited)
- **Why:** Purposeful motion guides the eye, creates hierarchy, and makes the site feel alive — construction sites are dynamic, the website should be too
- **Commit:** design:animate — add scroll-reveal system, staggered entrances, micro-interactions

### /design:bolder — Phase 2
- **Files:** globals.css
- **What changed:**
  - Pushed h1 to text-5xl/6xl/7xl with 800 weight and -0.035em letter-spacing
  - Pushed h2 to lg:text-5xl with 700 weight
  - Deepened hero gradient with brand-tinted OKLCH dark overlay (blue-black)
  - Added section-divider (brand accent bar), stat-value, section-label utilities
  - Pushed foreground to deeper near-black with subtle blue-gray tint
- **Why:** A construction company needs to look authoritative, not timid — bolder typography and contrast communicates strength
- **Commit:** design:bolder — larger headings, heavier weights, dramatic hero gradient, bolder contrast

### /design:colorize — Phase 2
- **Files:** globals.css
- **What changed:**
  - Boosted primary orange to richer oklch(0.67 0.2 48) — more saturated construction brand
  - Deepened secondary to steel blue-black for commercial authority
  - Added warm amber accent and brand-warm/brand-steel semantic tokens
  - Added texture-noise SVG overlay, gradient-warm, gradient-steel utilities
  - Harmonized chart colors to brand palette
  - All colors in OKLCH for perceptual uniformity
- **Why:** Construction orange + steel authority = commercial confidence. Generic palette replaced with intentional dominant + accent system
- **Commit:** design:colorize — richer construction orange, steel blue-black, warm amber system
