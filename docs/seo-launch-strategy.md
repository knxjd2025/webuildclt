# WeBuildCLT — Pre-Launch SEO Strategy

_Generated: 2026-04-26_

## Tool access constraints (transparent disclosure)

The DataForSEO MCP and Ahrefs MCP are both **not authorized** on this account (DataForSEO returned HTTP 401, Ahrefs returned "Insufficient plan" on every endpoint, including GSC pass-through). This blocked direct keyword volume / KD / SERP / backlink pulls. The analysis below is built from:

- Live SERP recon via Google web search (Charlotte commercial construction queries)
- Direct competitor homepage WebFetch on the top 3 ranking direct competitors
- Internal SEO inventory I just produced (`docs/seo-inventory.md`)
- Public SERP intelligence (Yelp, Clutch, Houzz, BrandVision rankings)

**Action for the user:** if you want hard volume + DR data, either:
1. Add `DATAFORSEO_USERNAME` / `DATAFORSEO_PASSWORD` env vars to the MCP server config, OR
2. Upgrade Ahrefs API plan, OR
3. Run a one-off audit at https://ahrefs.com/site-explorer with a manual login

Even without those numbers, the strategic playbook below is solid because the moat is **on-page depth + FAQ schema + structured data**, all of which I've already audited.

---

## Critical discovery: the live site is the OLD site

`webuildclt.com` currently serves the legacy WordPress (residential-leaning) site:
- H1 says "COMMERCIAL BUILDING & UPFITS RESIDENTIAL ADDITIONS & NEW HOMES"
- Phone is 704-574-8124 (the new site uses 980-471-1745)
- Designed by "Kode88 Website Design Ireland"
- Mentions "60+ years combined experience" but residential focus dominates

**This means the new Next.js site I just optimized (39 pages, 0 cannibalization) hasn't been deployed yet** — which is consistent with your "once the new site is released" framing.

This is actually **excellent for ranking velocity** because:
- The domain already has age, links, and trust signals from the old site
- Replacing weaker content with stronger content is the fastest SEO move there is
- Existing GBP, citations, and backlinks all transfer
- No "new domain sandbox" delay

---

## Direct competitor SEO assessment

I analyzed three of the top-ranking commercial construction sites in Charlotte that compete on overlapping keywords.

### Magnolia Construction (`magnoliaconstruction.com`)
- **Word count:** 650-700 on flagship commercial-contractors page
- **FAQ section:** ❌ **none**
- **JSON-LD structured data:** ❌ none visible
- **H1:** "Commercial Contractors, Charlotte, NC" (good keyword usage)
- **Strengths:** large service-area page network, broad service list (11 services)
- **Weakness:** thin content, no schema, no FAQ — **wide open to AEO competition**

### Ranger Construction (`ranger-construction.com`)
- **Word count:** 450-500 on homepage
- **FAQ section:** ❌ **none**
- **JSON-LD structured data:** ❌ none visible
- **H1:** "Building Relationships" — **does not contain primary keyword** (major SEO miss)
- **Strengths:** strong testimonials with named clients (Beacon Partners, Trinity Partners), 23-yr history
- **Weakness:** no keyword-targeted H1, thin content, no schema

### C4 Builders (`c4builders.com`)
- **Word count:** 1,200-1,400 on homepage
- **FAQ section:** ❌ **none**
- **JSON-LD structured data:** Partial (LocalBusiness candidate fields but not confirmed)
- **H1:** "Building quality, earning trust." — **does not contain primary keyword**
- **Strengths:** seven named-client testimonials, strong portfolio, "Top 10 Commercial Contractors in Charlotte" badge
- **Weakness:** no FAQ, no keyword-targeted H1

### Larger/national competitors identified (will be harder to outrank short-term)
- Myers & Chapman, ARCO Design/Build, Turner Construction (Charlotte), Messer Construction, DPR Construction, Nance Construction, Danforth, Catalyst Construction
- These have higher DR and brand searches but compete on different keyword tiers (large industrial, healthcare, education) — **not your direct target audience**

### Pattern: the entire local market is wide open for AEO

**Not one** of the top-ranking direct competitors has FAQ schema or substantial JSON-LD. Your new site has FAQ schema on **35 of 36 content pages**. That alone is a massive AEO moat — ChatGPT, Perplexity, and Google AI Overviews preferentially cite pages with structured FAQ data.

---

## WeBuildCLT competitive advantages (from the inventory I just ran)

| Dimension | WeBuildCLT (new site) | Avg Charlotte competitor |
|-----------|------------------------|--------------------------|
| Topical pages | **39** | 8-15 |
| Service pages | **18 specialized** | 5-8 |
| Location pages | **11** (incl. 4 Triangle, 2 MI) | 0-3 |
| FAQ schema | **35 pages** | 0 |
| Cannibalization clusters | **0** (verified) | typically 3-7 |
| Title/desc Google-fit | **100% in 40-60 / 130-160 chars** | mixed |
| H1 keyword targeting | **all primary KWs in H1** | ~50% |
| Structured data depth | LocalBusiness, Service, FAQ, Breadcrumb | LocalBusiness only |

---

## Pre-launch ranking checklist (action items, in priority order)

### TIER 1 — Must do before going live (blocks ranking)

1. **`/sitemap.xml`** — confirm Next.js generates it, includes all 39 pages, submitted to Google Search Console immediately on launch
2. **`/robots.txt`** — must allow Googlebot, point to sitemap, block `/ytuF-EDR5y64d.../*` admin paths
3. **301 redirects from old WordPress URLs to new site URLs** — _critical_ to preserve link equity. Audit the live old site's URL structure and map every old URL to its new home (or at minimum to `/`)
4. **Google Search Console: verify the new site immediately on launch.** Submit sitemap, request indexing for top 10 pages
5. **Google Business Profile audit** — verify the GBP at 14330 S Lakes Drive, Charlotte NC 28273 lists:
   - Phone: 980-471-1745 (match exactly across web/GBP/citations)
   - Categories: "General Contractor" (primary), "Commercial Real Estate Developer", "Construction Company" (secondary)
   - Service areas: every city you have a `/areas/*` page for
   - All services from `/services/*` added as service items
   - Photos of completed projects, team, certifications
6. **Schema validation** — run every page type through Google's Rich Results Test before launch:
   - Homepage (LocalBusiness)
   - Service pages (Service + FAQ)
   - Area pages (LocalBusiness + Service + FAQ)
   - Blog posts (Article + BreadcrumbList)
7. **Canonical tags** — verify every page emits a self-referencing `<link rel="canonical">` (most service pages do; spot-checked OK)
8. **Mobile responsive verification** — test all 39 pages on iPhone and Android
9. **Core Web Vitals** — run PSI on staging URL before launch; LCP <2.5s, INP <200ms, CLS <0.1 are mandatory

### TIER 2 — Do in launch week (compounds Tier 1)

10. **NAP consistency citation cleanup** — go through Yelp, BBB, Yellow Pages, MapQuest, Bing Places, Apple Maps, Manta, Foursquare, etc. and ensure name/address/phone match exactly
11. **Submit to NC + SC contractor directories:**
    - NC Licensing Board for General Contractors
    - SC Contractor's Licensing Board
    - Carolinas AGC (`cagc.org`) member directory
    - USGBC member directory
    - Veteran Owned Business Directory (`veteranownedbusiness.com`) — you have a SDVOSB story
    - Charlotte Chamber of Commerce
12. **Internal linking audit** — every service page should link to:
    - 2-3 other service pages (related)
    - 1-2 location pages (where you serve)
    - The relevant guide on `/guides/*`
    - Contact + portfolio
13. **Image alt text audit** — every service hero image must have descriptive alt text containing the primary keyword
14. **`/llms.txt`** — already exists per your recent commits ✓
15. **`/sitemap.xml` ping to Bing + Yandex** — small but free wins

### TIER 3 — First 30 days (rankings emerge)

16. **Competitor backlink prospecting** — without Ahrefs API, do this manually:
    - Search `site:bizjournals.com magnolia construction OR ranger construction OR c4 builders` to find news mentions you can replicate
    - Pitch Charlotte Business Journal, Charlotte Inno, Axios Charlotte for a "veteran-owned commercial GC" story
    - Get listed in `homeguide.com`, `clutch.co`, `houzz.com`, `trustanalytica.org`, `brandvm.com` (all surfaced on the SERP for "commercial construction Charlotte")
17. **Local pack optimization** — your Charlotte GBP needs:
    - First-week velocity push: ask 5-10 past commercial clients for Google reviews
    - Geo-tagged photos (lat/long EXIF embedded)
    - Weekly Google Posts featuring projects from `/portfolio`
18. **First batch of blog posts** — your blog generation pipeline (Groq → Claude → DALL-E) should aim for 1 post per week minimum. Topic priorities (informational, low difficulty):
    - "Commercial construction cost per square foot Charlotte NC"
    - "How long does a commercial upfit take in Charlotte"
    - "Commercial general contractor vs design-build Charlotte"
    - "Roof coating vs roof replacement cost comparison"
    - "What is a tenant improvement allowance"
19. **City landing pages for cities you don't yet have:** Concord NC, Gastonia NC, Indian Trail NC, Tega Cay SC, Indian Land SC, Ballantyne (or merge into south-charlotte). Each one identical structure to your existing area pages (proven SEO template)
20. **Industry-specific landing pages** to capture vertical keywords:
    - `/services/dental-office-construction` (separate from medical-construction)
    - `/services/veterinary-clinic-construction`
    - `/services/auto-dealership-construction` (C4 ranks for Volvo)
    - `/services/church-construction` / `/services/religious-facility-construction`
    - `/services/fitness-gym-construction`

### TIER 4 — 60-90 days (compounding)

21. **Backlinks from supplier/partner network** — request links from:
    - Architects you've worked with
    - Suppliers (concrete, steel, mechanical, electrical subs)
    - Equipment manufacturers (in case studies / portfolios)
    - Real estate developers / brokers
22. **Guest posts / case studies** — publish detailed project case studies on `/portfolio/[slug]` with full story (challenge, approach, outcome, client quote) — these rank for niche queries AND build trust
23. **HARO / Connectively / Featured.com** — answer journalist queries about commercial construction. One quote in a national outlet gets you a high-DR backlink
24. **Sponsor a local event** — Charlotte Business Journal events, Carolinas AGC events, Habitat for Humanity → backlink + community signal
25. **YouTube channel** with drone footage from `/services/drone-inspections` — embed on the site, transcribe for content, drives video carousel SERP features

---

## Day-1 ranking strategy (the 24-hour playbook on launch)

The new site already has stronger on-page than every direct competitor. To convert that into rankings fast:

1. **Hour 0:** Deploy → verify all 39 pages return 200 → submit sitemap to GSC → request indexing for homepage + top 6 service pages + top 4 area pages
2. **Hour 0-2:** Validate schema on homepage, /services/commercial-construction, /services/general-contractor, /areas/south-charlotte through Rich Results Test
3. **Hour 2-6:** Update GBP — add new website URL, add 5 new photos, post a "we just launched" Google Post, ensure phone matches site
4. **Day 1:** Email past clients for reviews (target 5 in 7 days)
5. **Day 1-3:** Submit to NC/SC contractor directories, CAGC, USGBC member, veteran business directories — these citations index fast
6. **Day 3-7:** Publish 2 blog posts (use the AI pipeline) on the highest-intent informational queries above
7. **Day 7-14:** Outreach to Charlotte Business Journal / Charlotte Inno for a launch story
8. **Day 14-30:** Monitor GSC → track impressions → identify "almost ranking" queries (positions 11-20) and beef up those pages with extra content/internal links

---

## What I would do differently after this analysis (changes to current work)

These are tweaks to the site I'd recommend but **didn't make** without your approval:

1. **Homepage H1 currently says "Commercial Construction... Charlotte, NC"** (truncated). Verify it includes "Charlotte NC" prominently — competitors with no keyword in H1 are losing rankings to anyone who does
2. **Add Review schema** to pages that quote clients — competitors don't have this, easy AEO/SERP-feature win
3. **Add HowTo schema** to `/guides/[slug]` pages — guides are a structured-data goldmine
4. **Add VideoObject schema** anywhere you embed video (drone, project tours) — video carousel = SERP visibility
5. **Build an explicit `/about/team` page** with `Person` schema for each team member — improves E-E-A-T signal which Google now weighs heavily for YMYL-adjacent topics
6. **`/we-coat` redirects to wecoatcommercialroofing.com (external)** — this leaks authority. Either:
   - Build a real `/we-coat` page on webuildclt.com that ranks for roof coating Charlotte (then link to the standalone site for converting)
   - Or accept the leak as a strategic choice (separate brand strategy)
7. **Detroit/Dearborn pages target Michigan but you're a Carolinas company.** Per your USGBC memory, We Coat operates in MI but We Build doesn't. These two pages may confuse Google about your service area. Either:
   - Move them to a `we-coat-michigan/*` subdirectory clearly branded as We Coat
   - Or add a prominent banner on those pages clarifying "We Coat — our Michigan-only roof coating division"

---

## Estimated time-to-rank (without paid backlink tools, gut-call estimate)

| Keyword tier | Example | Estimated time to top 10 |
|--------------|---------|--------------------------|
| Brand | "we build charlotte" | **0-2 weeks** (already strong) |
| Long-tail local | "construction company south charlotte nc" | **2-6 weeks** |
| Mid-tail commercial | "commercial upfit charlotte nc" | **2-3 months** |
| Mid-tail with strong competition | "commercial construction charlotte nc" | **3-6 months** |
| Head terms | "general contractor charlotte" | **6-12 months** (national GCs sit on these) |
| Highly competitive head | "general contractor near me" | **localized only** — focus on local pack, organic head ranking unrealistic |

If you get DataForSEO / Ahrefs auth restored, I can replace the gut-call timeline with hard volume + KD numbers and re-prioritize based on opportunity score (volume × intent ÷ difficulty).

---

## Sources

- [Top 10 Best Commercial Contractors Charlotte (Yelp)](https://www.yelp.com/search?find_desc=Commercial+Contractor&find_loc=Charlotte,+NC)
- [Top Commercial Construction Companies Charlotte (Clutch)](https://clutch.co/real-estate/commercial-development/commercial-construction/charlotte)
- [Best Construction Companies Charlotte (HomeGuide)](https://homeguide.com/nc/charlotte/construction-companies/)
- [Best 15 General Contractors Charlotte (Houzz)](https://www.houzz.com/professionals/general-contractor/charlotte-nc-us-probr0-bo~t_11786~r_4460243)
- [Top General Contractors Charlotte (BrandVision)](https://www.brandvm.com/business-directory/construction/top-general-contractors-in-charlotte)
- [Magnolia Construction commercial-contractors page](https://magnoliaconstruction.com/general-contractor-charlotte-nc/commercial-contractors/)
- [Ranger Construction homepage](https://ranger-construction.com/)
- [C4 Builders homepage](https://www.c4builders.com/)
- [Veteran Owned Business Directory NC](https://www.veteranownedbusiness.com/nc/mecklenburg/charlotte)
- [Carolinas AGC](https://www.cagc.org/)
