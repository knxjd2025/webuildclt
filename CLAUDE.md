# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository

**GitHub**: https://github.com/knxjd2025/webuildclt.git

## Project Overview

WeBuildCLT is a headless WordPress + Next.js 16 website for **We Build**, a veteran and family-owned construction company in Charlotte, NC. The site uses WordPress as a CMS (via WPGraphQL) and Next.js App Router for the frontend, with a Supabase backend for admin/blog features, deployed on Vercel.

**Business**: Commercial & residential construction, upfits, roof coatings, design-build. Based at 14330 S Lakes Drive, Charlotte NC 28273. Phone: (704) 574-8124.

**Membership**: U.S. Green Building Council (USGBC) member. USGBC logos are at `/USGBC Member.png` (white on teal) and `/USGBC Member 1.png` (teal on white). **Not** a member of "We Are Neutral" — replace any references to carbon neutrality/We Are Neutral with USGBC membership.

## Development Commands

```bash
npm run dev        # Start dev server (localhost:3000)
npm run build      # Production build
npm run start      # Start production server
npm run lint       # ESLint (next/core-web-vitals + typescript)
```

No test runner is configured.

## Environment Variables

```env
# WordPress (headless CMS)
WORDPRESS_API_URL=https://your-wordpress-site.com/graphql
WORDPRESS_PREVIEW_SECRET=your-preview-secret
REVALIDATION_SECRET=your-revalidation-secret

# Supabase (admin/blog backend)
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# AI content generation
ANTHROPIC_API_KEY=your-key       # Claude — blog refinement, project descriptions
GROQ_API_KEY=your-key            # Groq (Kimi K2) — blog research + drafting

# Vercel Cron
CRON_SECRET=your-cron-secret     # Auth for /api/cron/weekly-blog
```

## Architecture

### Tech Stack
- **Next.js 16** (App Router, React 19, RSC by default)
- **Tailwind CSS v4** + **shadcn/ui** (new-york style, Radix primitives)
- **Headless WordPress** via WPGraphQL plugin (portfolio, testimonials, news)
- **Supabase** PostgreSQL (projects, blogs, admin features — bypasses WordPress for content management)
- **AI Pipeline**: Groq (Kimi K2) for research/drafting, Claude for refinement
- **Vercel** deployment (region: `iad1`)

### Dual Data Sources

The site has two content backends:

1. **WordPress/WPGraphQL** — Original CMS for pages, posts, portfolio, testimonials, services, certifications. Fetched via `src/lib/wordpress.ts` → Server Components → ISR with tag-based revalidation.

2. **Supabase** — Newer backend for admin-managed projects and AI-generated blogs. Used by `/admin/*` pages and `/api/admin/*` routes. Two client patterns:
   - `createServerClient()` in `src/lib/supabase.ts` — cookie-based, for Server Components
   - `createAdminClient()` in `src/lib/supabase.ts` — service role key, bypasses RLS, API routes only
   - `createBrowserClient()` in `src/lib/supabase-browser.ts` — client-side

### Key Files
- `src/lib/wordpress.ts` — GraphQL client with ISR and tag-based revalidation
- `src/lib/queries.ts` — All WPGraphQL queries
- `src/lib/supabase.ts` — Supabase server + admin clients
- `src/lib/ai-content.ts` — Claude-based project description generator
- `src/lib/ai/blog-pipeline.ts` — Blog generation: Groq research → Groq draft → Claude refine
- `src/lib/ai/groq-client.ts` — Groq/Kimi K2 client for fast blog drafting
- `src/lib/ai/claude-refiner.ts` — Claude refinement pass for blog content
- `src/lib/ai/lsi-keyword-finder.ts` — LSI keyword discovery for blog topic selection
- `src/lib/structured-data.ts` — JSON-LD generators for SEO (LocalBusiness, Service, etc.)
- `src/data/guides.ts` — Static guide content (construction guides)
- `src/data/blog-posts.ts` — Static blog post data

### Page Structure

**Public pages:**
| Route Pattern | Notes |
|---------------|-------|
| `/` | Homepage — hero slideshow, services, portfolio, testimonials, CTA |
| `/about` | Company story, values, certifications |
| `/portfolio` | Filterable project gallery + `/portfolio/[slug]` detail pages |
| `/services/{slug}` | 6 service pages: commercial-construction, commercial-upfits, design-build, general-contractor, residential-additions, custom-home-builder, roof-coating |
| `/areas/{slug}` | 3 location pages: south-charlotte, lake-norman, fort-mill-sc |
| `/guides` + `/guides/[slug]` | Construction guides (static data from `src/data/guides.ts`) |
| `/blog` + `/blog/[slug]` | Blog with category filtering at `/blog/category/[slug]` |
| `/design-center` | Showroom info, Matterport virtual tour |
| `/we-coat` | Roof coating service |
| `/contact` | Contact form (ContactForm component with Zod validation) |
| `/news` | WordPress blog/news listing |

**Admin pages** (`/admin/*`):
| Route | Notes |
|-------|-------|
| `/admin/login` | Admin authentication |
| `/admin` | Dashboard |
| `/admin/projects` | Project CRUD with AI content generation |
| `/admin/blogs` | Blog CRUD with AI generation pipeline |
| `/admin/automation` | Automation settings |

### API Routes

| Route | Method | Purpose |
|-------|--------|---------|
| `/api/contact` | POST | Contact form handler |
| `/api/revalidate` | POST/GET | On-demand ISR revalidation (auth via `REVALIDATION_SECRET`) |
| `/api/admin/projects` | GET/POST | Project CRUD |
| `/api/admin/projects/[id]` | PATCH/DELETE | Project update/delete |
| `/api/admin/projects/[id]/generate` | POST | AI-generate project content (Claude) |
| `/api/admin/blogs` | GET/POST | Blog CRUD |
| `/api/admin/blogs/[id]` | PATCH/DELETE | Blog update/delete |
| `/api/admin/blogs/[id]/generate` | POST | AI-generate blog (Groq→Claude pipeline, 120s timeout) |
| `/api/admin/blogs/[id]/publish` | POST | Publish blog |
| `/api/admin/upload` | POST | Media upload to Supabase Storage |
| `/api/cron/weekly-blog` | GET | Vercel Cron — auto-generates one blog per week (Mondays 9am UTC) |

### AI Blog Pipeline

The blog generation system uses a multi-model pipeline (`src/lib/ai/`):
1. **LSI Keyword Finder** — selects next topic to avoid duplicates
2. **Groq/Kimi K2 Research** — fast, cheap research pass
3. **Groq/Kimi K2 Draft** — generates initial blog draft
4. **Claude Refinement** — polishes content, ensures brand voice and SEO quality

Automated via Vercel Cron (`vercel.json` → `/api/cron/weekly-blog`, Mondays 9am UTC). Blog generation and cron routes have 120s function timeout.

### Database (Supabase)

Migrations in `migrations/` (plain SQL). Tables include `projects` and `blogs` (see `migrations/002_blogs.sql`).

### Brand & Design System

Colors defined in `src/app/globals.css` using OKLCH:
- **Primary**: Construction orange (`oklch(0.67 0.2 48)`)
- **Secondary**: Steel blue-black
- **Brand tokens**: `--brand`, `--brand-dark`, `--brand-light`, `--brand-warm`, `--brand-steel`

Typography: Plus Jakarta Sans (headings) + DM Sans (body). 8px spacing grid. Full dark mode with light/dark/system toggle (`ThemeToggle.tsx`).

Design token reference is documented in the comment block at the top of `globals.css`. Available utility classes: `reveal`, `reveal-left`, `reveal-right`, `reveal-scale`, `stagger-children`, `hover-lift`, `card-hover`, `card-glow`, `btn-shimmer`, `cta-pulse`, `section-divider`, `section-label`, `stat-value`, `gradient-warm`, `gradient-steel`, `skeleton`, `empty-state`, `text-truncate`, `line-clamp`.

### WordPress Custom Post Types

The GraphQL queries expect: `portfolio`, `testimonial`, `service`, `certification` (plus standard pages and posts). Required WP plugins: WPGraphQL, WPGraphQL for ACF, Yoast SEO + WPGraphQL Yoast addon.

### Path Alias
`@/*` maps to `./src/*` (configured in `tsconfig.json`)

## Important Conventions

1. **Commercial construction focus** — all copy, metadata, and service ordering should lead with commercial services, not residential.
2. **Two Supabase clients** — use `createServerClient()` for Server Components, `createAdminClient()` (service role) only in API routes. Never expose the service role key to the browser.
3. **Image sources** — configured in `next.config.ts` for `webuildclt.com`, `wp.com`, `gravatar.com`, and `supabase.co`.
4. **Function timeouts** — most API routes have 10s default; AI generation routes (`/api/admin/blogs/[id]/generate`, `/api/cron/weekly-blog`) have 120s (configured in `vercel.json`).
5. **Security headers** — `X-DNS-Prefetch-Control`, `X-Content-Type-Options`, `Referrer-Policy` set in `next.config.ts`.
6. **Static assets** — `/images/*` cached with 1-year immutable headers.
7. **Admin shell** — admin pages use `AdminShell` component for consistent sidebar layout.

## Known Placeholder Content

- Many `/images/*` paths reference placeholder images not yet in `/public/images/`
- Contact form email integration is commented out (needs Resend API key or WP Gravity Forms)
- Portfolio items on homepage are hardcoded placeholders (not fetched from WordPress)

## Build Plan

A multi-phase SEO/content expansion is planned:
1. SEO research & architecture (DataForSEO keyword research, competitor analysis)
2. SEO infrastructure + blog system (sitemap, structured data, JSON-LD)
3. Service/location pages with keyword targeting
4. SEO-optimized blog posts batched by topic cluster
