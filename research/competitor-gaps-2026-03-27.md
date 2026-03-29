# Competitor Gap Analysis — WeBuildCLT.com
**Date:** 2026-03-27
**Domain:** webuildclt.com
**Markets:** Charlotte, NC + Detroit Metro Area — commercial construction
**Previous Analysis:** 2026-03-24 (v2)

---

## Methodology

DataForSEO API returned 401 (auth credentials need updating). Analysis performed via comprehensive web search across 10+ competitors and cross-referencing against webuildclt.com's current 23 service pages, 9 area pages, 30+ guides, and 90+ blog posts.

---

## Current Site Inventory (as of 2026-03-27)

**23 Service Pages:** commercial-construction, commercial-upfits, commercial-renovation, office-buildouts, retail-construction, restaurant-construction, medical-construction, industrial-construction, warehouse-construction, brewery-construction, tenant-improvements, design-build, general-contractor, construction-management, pre-construction, roof-coating, green-building, ada-compliance, drone-inspections, site-development, value-engineering, owners-representative, adaptive-reuse

**9 Area Pages:** south-charlotte, lake-norman, fort-mill-sc, huntersville, matthews, mooresville, rock-hill-sc, detroit, dearborn

**Other:** 30+ guides, 90+ blog posts, portfolio, design-center, we-coat, about/certifications

---

## Competitors Analyzed (10)

### Direct Competitors (Charlotte)
| # | Competitor | Domain | Key Strengths |
|---|-----------|--------|---------------|
| 1 | J. Forrest Development | jforrestdevelopment.com | Ranks #1 for "commercial build-out Charlotte", strong portfolio with case studies, dedicated Charlotte landing page |
| 2 | Broad Reach Construction | broadreachconstructionnc.com | Ranks for "warehouse construction Charlotte", "construction management Charlotte", "office fit-out Charlotte" — deep individual service pages |
| 3 | Magnolia Construction | magnoliaconstruction.com | Multi-city service pages (Charlotte + Raleigh + High Point), pre-construction content, commercial upfit authority |
| 4 | Nance Construction | nancegc.com | Tenant improvement specialist, strong Charlotte metro coverage |
| 5 | Danforth Construction Group | danforthcg.com | Ranks on page 1 for "commercial construction Charlotte NC", covers retail/restaurant/healthcare/energy |
| 6 | McFarland Construction | mcfarlandconstructionus.com | "Construction management Charlotte", "design-build Southeast" — broad SE footprint |
| 7 | Gibson Custom Construction | gibsoncustomconstruction.com | LEED AP certified, Charlotte + Lake Norman, blog content on commercial upfits |

### Content/National Competitors
| # | Competitor | Domain | Why They Matter |
|---|-----------|--------|-----------------|
| 8 | Liles Construction | lilesconstruction.com | Ranks for "restaurant contractor Charlotte", dedicated food & beverage construction pages |
| 9 | ARCO Charlotte | arcodb.com | Ranks for "industrial construction Charlotte", "warehouse construction Charlotte" — national brand, local office |
| 10 | Charlotte UAV | charlotteuav.com | Ranks for "drone inspection Charlotte" — direct competitor for drone services |

### Detroit Market Competitors
| # | Competitor | Domain | Key Strengths |
|---|-----------|--------|---------------|
| 11 | Schonsheck Inc | schonsheck.com | Top commercial GC in Detroit metro, multi-sector (healthcare, retail, industrial, banking) |
| 12 | Metro General Contractors | metrogeneralcontractorsinc.com | "Michigan commercial construction", tenant build-outs, project management |
| 13 | Matick Construction | matickconstruction.com | Tenant build-outs, medical, retail, office, light industrial — SE Michigan since 1999 |

---

## CRITICAL PRIORITY GAPS (Immediate Action — Week 1)

### Gap 1: "commercial construction cost" pricing content
- **Who ranks:** Autodesk (Digital Builder blog), Carolina Classic Builders, HomeGuide, Angi
- **Search volume:** ~2,400/mo national, ~200/mo local
- **Keywords:** `commercial construction cost per square foot`, `commercial building cost Charlotte NC`, `how much does commercial construction cost`, `office build-out cost per square foot`
- **CPC:** $4-8 (high commercial intent)
- **Why you're missing:** NO pricing/cost content anywhere on the site. Every prospect Googles cost before calling.
- **Content type:** Long-form guide (2,500+ words)
- **Action:** Create `/guides/commercial-construction-costs-charlotte` covering:
  - Cost per sqft by building type (office $150-250, retail $100-200, medical $200-350, warehouse $80-150, restaurant $250-450)
  - Charlotte-specific factors (labor, permits, materials)
  - Comparison tables with visuals
  - "Get a free estimate" CTA
- **Opportunity Score:** 97/100

### Gap 2: "tenant improvement allowance" educational content
- **Who ranks:** Nance GC, J. Forrest Development, generalcontractors.org, Reliable Restorations
- **Search volume:** ~1,800/mo national, ~150/mo local
- **Keywords:** `what is a TI allowance`, `tenant improvement allowance Charlotte`, `how to negotiate tenant improvements`, `commercial lease build out guide`
- **CPC:** $6-12 (very high intent — people with leases ready to build)
- **Why you're missing:** `/services/tenant-improvements` exists but has NO educational content explaining TI allowances, negotiation, or the process
- **Content type:** Guide + supporting blog post
- **Action:** Create `/guides/tenant-improvement-allowance-guide` explaining:
  - What TI allowances are and typical $/sqft ranges
  - Negotiation tips for tenants
  - Landlord vs. tenant responsibilities
  - Timeline from lease signing to move-in
  - Charlotte market TI benchmarks
- **Opportunity Score:** 95/100

### Gap 3: No services hub/index page visible in SERPs
- **Who ranks:** J. Forrest (dedicated services page), Broad Reach, Magnolia (clear service categories)
- **Why it matters:** WeBuildCLT has a `/services` page (newly created) but competitors use their services hub as a keyword-rich landing page linking all services. This is the top internal linking node for service discovery by both Google and users.
- **Action:** Ensure `/services/page.tsx` has:
  - H1 targeting "Commercial Construction Services Charlotte NC"
  - Brief descriptions of each service category with links
  - Structured data (ItemList schema)
  - Internal links from homepage and area pages
- **Opportunity Score:** 93/100

---

## HIGH PRIORITY GAPS (Sprint — Weeks 1-2)

### Gap 4: Area + Service combo pages (Magnolia's strategy)
- **Who ranks:** Magnolia has `/what-we-do-charlotte-nc/upfits-and-renovations/commercial-upfits/`, `/what-we-do-raleigh-nc/...` etc.
- **Search volume:** 50-200/mo each for long-tail combos
- **Keywords:** `commercial upfit Fort Mill SC`, `general contractor Huntersville NC`, `office buildout Lake Norman`, `construction company Matthews NC`, `warehouse construction Rock Hill SC`
- **Why you're missing:** Area pages exist but aren't paired with service-specific content per area. Missing ~100+ long-tail keyword opportunities.
- **Content type:** Hybrid service+area pages OR structured area pages with service sections
- **Action:** Start with top 5 services x top 5 areas = 25 combo content sections. Can be structured as expandable sections within existing area pages rather than 25 new pages:
  - General contractor + [each area]
  - Commercial upfits + [each area]
  - Office buildouts + [each area]
  - Commercial renovation + [each area]
  - Roof coating + [each area]
- **Opportunity Score:** 90/100

### Gap 5: "Charlotte building permit" / permitting process guide
- **Who ranks:** Mecklenburg County (hard to navigate), various blogs
- **Search volume:** ~1,000/mo local
- **Keywords:** `Charlotte NC building permit`, `commercial building permit Charlotte`, `how to get a building permit Charlotte NC`, `Mecklenburg County permit process`
- **CPC:** $2-5
- **Why you're missing:** No permitting guide content. County site ranks but is confusing — opportunity for better UX.
- **Content type:** Comprehensive guide
- **Action:** Create `/guides/charlotte-building-permit-guide` with step-by-step process, costs, timelines, required documents, links to county portal, commercial vs. residential differences
- **Opportunity Score:** 88/100

### Gap 6: "drone roof inspection Charlotte NC" content depth
- **Who ranks:** Charlotte UAV (charlotteuav.com), Americas Choice Inspections, various national drone companies
- **Search volume:** ~200/mo local
- **CPC:** $15-25 (extremely high intent)
- **Current status:** `/services/drone-inspections` exists (created 2026-03-24)
- **Gap:** Charlotte UAV has dedicated pages for structural inspections, thermal imaging, facade inspections. WeBuildCLT has one page.
- **Action:** Create 3-5 supporting blog posts:
  - "Drone vs. Manual Roof Inspection: Cost & Accuracy Comparison"
  - "Thermal Drone Inspection: What Property Managers Need to Know"
  - "How Drone Inspections Save Charlotte Building Owners Money"
  - "FAA Certified Drone Inspections for Commercial Buildings"
- **Opportunity Score:** 87/100

### Gap 7: Restaurant/brewery construction content depth
- **Who ranks:** Liles Construction (dedicated food & beverage page with portfolio), Ratzlaff Construction, Gais Construction
- **Search volume:** ~150/mo for restaurant, ~80/mo for brewery (local)
- **Keywords:** `restaurant construction Charlotte NC`, `brewery construction Charlotte NC`, `commercial kitchen build out Charlotte`, `restaurant renovation Charlotte`
- **Gap:** WeBuildCLT has `/services/restaurant-construction` and `/services/brewery-construction` but Liles has a full portfolio section with 30+ years of F&B projects and case studies
- **Action:** Add project case studies/before-after galleries to restaurant and brewery pages. Create blog content: "Restaurant Build-Out Costs Charlotte NC", "Charlotte Brewery Taproom Design & Construction Guide"
- **Opportunity Score:** 85/100

---

## MEDIUM PRIORITY GAPS (Weeks 2-4)

### Gap 8: Detroit market content is thin
- **Who ranks:** Schonsheck, Metro General Contractors, Matick Construction, JC Beal, Commercial Contracting Corp (CCC)
- **Keywords:** `commercial construction Detroit`, `general contractor Detroit MI`, `commercial upfit Detroit`, `tenant improvement Detroit`
- **Gap:** WeBuildCLT has `/areas/detroit` and `/areas/dearborn` but established Detroit firms have 20+ years of local content, project portfolios, and Google Business Profile authority. Content on Detroit pages needs deepening.
- **Action:**
  - Expand Detroit/Dearborn area pages with Detroit-specific service details
  - Create blog posts targeting Detroit commercial construction keywords
  - Set up Google Business Profile for Detroit location (if not done)
  - Create Detroit-specific portfolio/case study content
- **Opportunity Score:** 82/100

### Gap 9: "LEED construction Charlotte" / green building authority
- **Who ranks:** Gibson Custom Construction (LEED AP certified page), USGBC, Precision Walls, Miller Architecture
- **Keywords:** `LEED certified contractor Charlotte`, `green building Charlotte NC`, `sustainable construction Charlotte`, `LEED AP builder Charlotte`
- **Gap:** WeBuildCLT has `/services/green-building` and USGBC membership but Gibson's LEED AP page is more authoritative with certifications prominently displayed
- **Action:**
  - Ensure USGBC membership is prominently featured on green-building page
  - Add certification details and LEED project examples
  - Create blog post: "USGBC Member Contractor Charlotte: What It Means for Your Project"
- **Opportunity Score:** 78/100

### Gap 10: Case studies / project detail pages
- **Who ranks:** J. Forrest (curated portfolio with project details), Shelco (detailed project pages with sqft, scope, challenges), Gilbane
- **Gap:** WeBuildCLT has `/portfolio` but competitors showcase detailed case studies with: square footage, timeline, budget range, challenges solved, before/after photos, client testimonials
- **Action:** Create 5-10 detailed project case study pages at `/portfolio/[slug]` with structured data (Project schema), client quotes, metrics
- **Opportunity Score:** 76/100

### Gap 11: "adaptive reuse Charlotte NC" / "building renovation Charlotte"
- **Who ranks:** J. Forrest (adaptive reuse portfolio), national architecture blogs
- **Keywords:** `adaptive reuse Charlotte`, `building renovation Charlotte NC`, `warehouse to office conversion Charlotte`
- **Gap:** `/services/adaptive-reuse` exists but Charlotte's booming warehouse-to-office/brewery conversion market is underserved in content
- **Action:** Blog content: "Charlotte's Best Adaptive Reuse Projects", "Converting Warehouse Space in Charlotte: Costs & Process"
- **Opportunity Score:** 74/100

### Gap 12: "construction company near me" / local pack optimization
- **Who ranks:** BBB, Yelp, Houzz, ClearlyRated directories + top local firms with optimized GBP
- **Why it matters:** Directory sites dominate "near me" queries. The path to ranking is via Google Business Profile, not just the website.
- **Action:**
  - Optimize Google Business Profile (Charlotte + Detroit)
  - Get listed on: BBB, Houzz, Yelp, NARI Charlotte, ClearlyRated, Charlotte Architects directory
  - Ensure NAP consistency across all listings
  - Solicit Google reviews from past clients
- **Opportunity Score:** 72/100

---

## NEW GAPS NOT IN PREVIOUS ANALYSIS

### Gap 13: "commercial construction timeline" / project planning content
- **Who ranks:** National content sites, Autodesk, construction blogs
- **Keywords:** `how long does commercial construction take`, `commercial build out timeline`, `construction project phases`
- **Action:** Create `/guides/commercial-construction-timeline-guide` with typical timelines by project type, Gantt chart visuals, factors affecting timeline
- **Opportunity Score:** 70/100

### Gap 14: "construction financing Charlotte" / financing education
- **Who ranks:** Banks, SBA, financial advisors
- **Keywords:** `commercial construction loan Charlotte`, `SBA construction financing`, `how to finance a commercial build out`
- **Gap:** WeBuildCLT has a FinanceSection on homepage but no dedicated financing guide
- **Action:** Create `/guides/commercial-construction-financing-guide` covering SBA loans, construction loans, TI allowances as financing, owner financing options
- **Opportunity Score:** 68/100

### Gap 15: "owner's representative Charlotte" educational content
- **Who ranks:** Very few local competitors target this specifically
- **Keywords:** `what is an owners representative construction`, `owners rep Charlotte NC`, `construction project management Charlotte`
- **Gap:** `/services/owners-representative` exists but this is a LOW-competition, HIGH-value keyword that most Charlotte GCs don't target
- **Action:** Support with blog content: "Do You Need an Owner's Rep for Your Charlotte Construction Project?", "Owner's Rep vs. Construction Manager: What's the Difference?"
- **Opportunity Score:** 65/100

---

## COMPETITOR CONTENT STRATEGIES WORTH NOTING

### J. Forrest Development (top performer)
- Dedicated Charlotte landing page with city name in URL
- Portfolio organized by project type with detailed descriptions
- Blog with Charlotte-specific construction content
- Strong internal linking between services and portfolio

### Broad Reach Construction
- Individual landing pages for each service type
- "Company in Charlotte, NC" in every page title
- Blog posts targeting "how much does X cost" queries
- Warehouse construction is their standout differentiator page

### Magnolia Construction
- **Multi-city service pages** — biggest structural advantage
- Pre-construction services content with detailed process
- Charlotte + Raleigh + High Point + Winston-Salem coverage
- Each city has its own service sub-pages

### Liles Construction
- 30+ years of food & beverage project portfolio
- Dedicated restaurant contractor service page
- Project gallery organized by industry vertical

---

## ACTION PLAN — PRIORITIZED

### Week 1 (CRITICAL)
1. **Create** `/guides/commercial-construction-costs-charlotte` (Gap 1) — highest search volume
2. **Create** `/guides/tenant-improvement-allowance-guide` (Gap 2) — high CPC/intent
3. **Optimize** `/services/page.tsx` hub page with proper H1, descriptions, schema (Gap 3)
4. **Verify** all service pages indexed in Google Search Console

### Week 2 (HIGH)
5. **Expand** area pages with service-specific sections (Gap 4) — start with south-charlotte + fort-mill-sc
6. **Create** `/guides/charlotte-building-permit-guide` (Gap 5)
7. **Write** 3 drone inspection blog posts (Gap 6)
8. **Add** case studies to restaurant + brewery service pages (Gap 7)

### Week 3-4 (MEDIUM)
9. **Expand** Detroit/Dearborn area pages with deeper content (Gap 8)
10. **Enhance** green-building page with USGBC details (Gap 9)
11. **Create** 5 detailed portfolio case study pages (Gap 10)
12. **Write** adaptive reuse blog content (Gap 11)
13. **Optimize** Google Business Profile + directory listings (Gap 12)

### Month 2
14. Create construction timeline guide (Gap 13)
15. Create financing guide (Gap 14)
16. Support owner's rep page with blog content (Gap 15)
17. Begin area + service combo pages for remaining areas

---

## ESTIMATED MONTHLY SEARCH OPPORTUNITY

| Priority | Gaps | Est. Monthly Searches | Est. Monthly Clicks (if top 5) |
|----------|------|----------------------|-------------------------------|
| CRITICAL | 1-3 | 3,800 | 380-760 |
| HIGH | 4-7 | 2,500 | 250-500 |
| MEDIUM | 8-12 | 1,800 | 180-360 |
| NEW | 13-15 | 1,200 | 120-240 |
| **TOTAL** | **15** | **~9,300** | **~930-1,860** |

*Note: Estimates based on web research, not verified GSC data. Actual volumes may vary. Connect GSC + GA4 for accurate tracking.*

---

## CHANGES SINCE LAST ANALYSIS (2026-03-24)

| Item | Status |
|------|--------|
| Gap 1 (cost content) | Still missing — CRITICAL |
| Gap 2 (TI allowance) | Still missing — CRITICAL |
| Gap 3 (permit guide) | Still missing — moved to HIGH |
| Gap 4 (multi-city pages) | Partially addressed — area pages exist but need service combo content |
| New pages (7 services, 6 areas) | Created 2026-03-24, indexing status unknown |
| Services hub page | `/services/page.tsx` now exists (new since last analysis) |
| DataForSEO auth | Still failing — needs credential update |

### New Competitors Identified
- **Danforth Construction Group** — ranking on page 1 for "commercial construction Charlotte NC"
- **Charlotte UAV** — direct competitor for drone inspection keywords
- **ARCO Charlotte** — national brand ranking locally for industrial/warehouse keywords
- **Keen Building Company** — ranking for "commercial construction Charlotte"

---

*Next steps: Fix DataForSEO API credentials for automated keyword research. Connect Google Search Console for actual ranking data. Run `/research-serp` on top 3 CRITICAL gap keywords.*
