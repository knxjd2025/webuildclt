# Performance Matrix — webuildclt.com
**Date**: 2026-03-28
**Status**: PRE-LAUNCH (site in development, not yet in production)
**Method**: SERP position analysis via web search (DataForSEO API unavailable — 401 auth)
**Note**: Current rankings are for the OLD WordPress site at webuildclt.com. The new Next.js site is not live yet. This report establishes the competitive baseline and launch-readiness checklist.

---

## Domain Overview

| Metric | Status |
|--------|--------|
| **Indexed pages (Google)** | ~9 pages visible in site: search (old WordPress URLs still indexed) |
| **New Next.js site** | URL structure has changed — old WP URLs still appearing in Google |
| **Total content pages** | 50+ pages (23 services, 9 areas, 6 core pages, guides, blog, portfolio) |
| **FAQPage schema** | Present on 37+ pages |
| **Sitemap** | Dynamic, includes WP + Supabase + static content |

### Critical Issue: URL Migration

Google is still indexing the **old WordPress URLs**:
- `webuildclt.com/about-us/` (old) vs `/about` (new)
- `webuildclt.com/contact-us/` (old) vs `/contact` (new)
- `webuildclt.com/we-coat-roof-restoration/` (old) vs `/we-coat` (new)
- `webuildclt.com/comercial-roof-we-coat/` (old) — no new equivalent
- `webuildclt.com/portfolio-category/residential/` (old) — no new equivalent

**Impact**: Ranking equity is split between old and new URLs. New service pages (`/services/*`) and area pages (`/areas/*`) may not be indexed yet.

**Action**: Verify 301 redirects from all old WP URLs to new Next.js equivalents. Check `next.config.ts` redirects section.

---

## Performance Quadrants

### 1. Stars (Maintain & Expand)

**No confirmed stars yet.** The site is in a transitional phase — migrating from WordPress to Next.js. The old site had some brand-term visibility but no confirmed top-10 rankings for competitive commercial keywords.

**Brand terms** (likely ranking):
- "we build charlotte" / "webuildclt" — branded, probably position 1-3
- "we build clt" — branded

### 2. Overperformers (High Potential, Not Yet Ranking)

These pages have **strong on-page SEO** (long-form content, FAQs, JSON-LD, keyword targeting) but are **not visible in SERPs** yet:

| Page | Target Keyword | Est. Monthly Volume | Why Not Ranking |
|------|---------------|---------------------|-----------------|
| `/services/commercial-construction` | commercial construction charlotte nc | 500-1K | Competing against Magnolia, C4, KMD, Ranger, Marand — all established |
| `/services/general-contractor` | general contractor charlotte nc | 1K-2K | Extremely competitive — dominated by established players |
| `/services/design-build` | design build charlotte nc | 300-500 | GC Design Build, DiFabion, Urban Building Group dominating |
| `/services/commercial-upfits` | commercial upfit charlotte nc | 200-400 | Magnolia, KMD, Ranger, Gibson, DM Management ranking |
| `/services/roof-coating` | roof coating charlotte nc | 200-400 | CDS Roofing, Weathercoat, USA Coating, Elite Roofing ranking |
| `/we-coat` | commercial roof coating charlotte | 100-200 | Same competitors as above |
| `/services/restaurant-construction` | restaurant construction charlotte nc | 100-200 | Gais (30+ years), Liles, J. Forrest ranking |
| `/services/medical-construction` | medical office construction charlotte nc | 100-200 | Marand, Choate, J. Forrest, Interstruct ranking |
| `/services/brewery-construction` | brewery construction charlotte nc | 50-100 | Niche — Gais, Doerre have case studies |

**Action**: These are the highest-ROI pages. Focus link building and content freshness here. Many competitors have 10-30+ year track records — We Build's differentiators (veteran-owned, USGBC, design center, drone inspections) need to be amplified.

### 3. Underperformers (Fix CTR / Get Indexed)

These pages exist but may not be indexed or have weak metadata:

| Page | Issue | Action |
|------|-------|--------|
| `/services/drone-inspections` | **Unique differentiator** — competitors are drone-only companies, not contractors. But may not be indexed | Verify indexing, add internal links from other service pages |
| `/services/adaptive-reuse` | Niche term with low competition | Verify indexing, could rank quickly |
| `/services/value-engineering` | Niche term with low competition | Verify indexing, could rank quickly |
| `/services/owners-representative` | Niche term with low competition | Verify indexing, could rank quickly |
| `/services/site-development` | Niche term | Verify indexing |
| `/services/ada-compliance` | Niche term, few competitors targeting this | Verify indexing, high conversion intent |
| `/about/certifications` | USGBC membership is a differentiator | Add internal links from service pages |

### 4. Not Yet Competing (New Market — Detroit)

| Page | Target Keyword | Status |
|------|---------------|--------|
| `/areas/detroit` | construction company detroit | **Not ranking** — market dominated by 30+ year firms (Sachse, CCC, Boldt, ARCO) |
| `/areas/dearborn` | construction company dearborn mi | **Not ranking** — need local authority signals |

**Action**: Detroit market entry requires:
- Google Business Profile for Detroit office
- Local backlinks (Detroit Chamber, local directories)
- Case studies from Detroit projects
- Detroit-specific blog content

### 5. Low-Competition Opportunities (Quick Wins)

| Page | Keyword Opportunity | Est. Volume | Competition |
|------|-------------------|-------------|-------------|
| `/services/brewery-construction` | brewery construction charlotte nc | 50-100 | LOW — only Gais and Doerre have dedicated pages |
| `/services/drone-inspections` | drone inspection construction charlotte | 30-50 | LOW — no other contractor offers this |
| `/services/adaptive-reuse` | adaptive reuse construction charlotte | 20-50 | VERY LOW — almost no competitors |
| `/services/value-engineering` | value engineering construction charlotte | 20-30 | VERY LOW — few competitor pages |
| `/services/green-building` | green building contractor charlotte nc | 50-100 | LOW-MED — USGBC membership is a strong signal |
| `/services/warehouse-construction` | warehouse construction charlotte nc | 100-200 | MEDIUM — growing demand, fewer specialists |

---

## Competitive Landscape

### Charlotte Market — Top Competitors

| Competitor | Domain Age | Speciality | Threat Level |
|------------|-----------|------------|--------------|
| **Magnolia Construction** | 20+ years | Commercial, upfits, design-build | HIGH — ranks for many target terms |
| **KMD Construction** | 35+ years | Commercial upfits, general contracting | HIGH |
| **Ranger Construction** | Established | Industrial, office, retail, medical upfits | HIGH |
| **Gibson Custom Construction** | Established | Commercial upfits, small business | MEDIUM |
| **C4 Builders** | Established | Commercial general contracting | MEDIUM |
| **Marand Builders** | 27 years | Healthcare, corporate, financial | MEDIUM (specialized) |
| **Gais Construction** | 30+ years | Restaurants, breweries, upfits | MEDIUM (niche overlap) |
| **J. Forrest Development** | Established | Build-outs, medical, commercial | MEDIUM |
| **DM Management** | Established | Upfits, buildouts | LOW-MEDIUM |

### We Build's Competitive Advantages (not yet leveraged in SEO)

1. **Drone inspections** — No other Charlotte GC offers this as a service page
2. **USGBC membership** — Few competitors have this credential
3. **Design Center** — Physical showroom differentiator (DiFabion has one too)
4. **Veteran-owned** — Government contracting preference
5. **Dual-market** (Charlotte + Detroit) — Unique positioning
6. **Adaptive reuse** — Growing niche, few competitors
7. **Value engineering** — Process differentiator, few have dedicated pages

---

## Priority Actions (Ranked by Impact)

### P0 — Critical (This Week)

1. **Verify 301 redirects** from old WordPress URLs to new Next.js equivalents
   - Check: `/about-us/` → `/about`, `/contact-us/` → `/contact`, `/we-coat-roof-restoration/` → `/we-coat`
   - Missing redirects = split ranking equity

2. **Check Google indexing** of new service/area pages
   - Run `site:webuildclt.com/services/` and `site:webuildclt.com/areas/` searches
   - Submit sitemap to Google Search Console if not done

3. **Request indexing** for all 23 service pages + 9 area pages via GSC

### P1 — High (This Sprint)

4. **Expand FAQs to 12-15 per page** (per the AEO plan at `.claude/plan/aeo-faq-expansion.md`)
   - Prioritize quick-win pages first: brewery, drone-inspections, adaptive-reuse, value-engineering, green-building
   - AEO-optimized phrasing for AI search engine extraction

5. **Add internal linking matrix** — Every service page should link to 3-5 related services
   - Currently each page is somewhat isolated
   - Cross-linking builds topical authority

6. **Create Charlotte-specific blog content** targeting long-tail keywords
   - "How much does a commercial upfit cost in Charlotte NC 2026"
   - "Charlotte brewery construction permits and requirements"
   - "Medical office construction costs Mecklenburg County"

### P2 — Medium (Next 2-4 Weeks)

7. **Build backlinks** — Get listed in:
   - Charlotte Chamber of Commerce
   - USGBC Charlotte chapter
   - Charlotte Business Journal (project announcements)
   - Local construction directories

8. **Google Business Profile optimization**
   - Verify categories match service pages
   - Add all service areas
   - Post weekly updates
   - Request reviews from past clients

9. **Detroit market launch content**
   - 3-5 Detroit-specific blog posts
   - Detroit GBP listing
   - Local directory submissions

### P3 — Low (Ongoing)

10. **Monitor competitor content** — Set up alerts for competitor blog posts
11. **Track keyword rankings** monthly once GSC data accumulates
12. **Schema expansion** — Add `HowTo` schema to process-heavy service pages

---

## Expected Timeline to Rankings

| Page Category | Time to Page 2 | Time to Page 1 | Notes |
|--------------|----------------|----------------|-------|
| Branded terms | Already there | Already there | "we build charlotte", "webuildclt" |
| Niche services (brewery, drone, adaptive reuse) | 1-2 months | 3-4 months | Low competition, unique content |
| Mid-tier services (warehouse, green building, ADA) | 2-3 months | 4-6 months | Moderate competition |
| Core services (commercial construction, GC, upfits) | 3-6 months | 6-12 months | High competition, need backlinks |
| Area pages (Charlotte suburbs) | 2-4 months | 4-6 months | Need local signals |
| Detroit market | 6-12 months | 12-18 months | New market, zero authority |

---

## Metrics to Track

Once GSC/GA4 are connected:

| Metric | Tool | Frequency |
|--------|------|-----------|
| Impressions by page | GSC | Weekly |
| Click-through rate by page | GSC | Weekly |
| Average position by keyword | GSC | Weekly |
| Organic sessions | GA4 | Weekly |
| FAQ rich result impressions | GSC (Search Appearance filter) | Monthly |
| Pages indexed | GSC (Coverage report) | Monthly |
| Core Web Vitals | GSC (Experience report) | Monthly |
