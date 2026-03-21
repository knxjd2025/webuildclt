# Phase 1: SEO Research & Architecture Plan

## Current State

### webuildclt.com Rankings (DataForSEO, March 2026)
| Keyword | Volume | Position | URL |
|---------|--------|----------|-----|
| webuild construction | 70 | 5 | / |
| webuilds | 880 | 9 | / |
| we building | 320 | 12 | / |
| webuild | 880 | 13 | / |
| we build it construction | 40 | 18 | / |
| big build construction | 70 | 21 | / |
| charlotte nc construction companies | 1,000 | 35 | / |
| construction charlotte nc | 260 | 37 | / |
| commercial construction companies in charlotte nc | 110 | 84 | / |

**Observation**: Site ranks well for branded terms but poorly (35+) for high-volume commercial keywords. No dedicated service pages exist to target specific keyword clusters.

---

## Keyword Research

### Tier 1: Highest Volume Service Keywords (Monthly SV)
| Keyword | Volume | CPC | Competition | Intent |
|---------|--------|-----|-------------|--------|
| charlotte nc general contractor | 1,600 | $5.92 | HIGH | commercial |
| general contractor in charlotte nc | 1,600 | $5.92 | HIGH | commercial |
| home builder in charlotte nc | 1,300 | $8.65 | HIGH | commercial |
| charlotte nc custom home builder | 1,000 | $9.58 | HIGH | commercial |
| construction company charlotte nc | 1,000 | $3.35 | HIGH | commercial |
| general contractor charlotte nc | 390 | $11.89 | HIGH | commercial |
| new home builder charlotte nc | 260 | $9.43 | HIGH | commercial |

### Tier 2: Service-Specific Keywords
| Keyword | Volume | CPC | Competition |
|---------|--------|-----|-------------|
| roof coating contractor near me | 210 | $24.61 | HIGH |
| metal roof coating contractor near me | 170 | $19.98 | MEDIUM |
| luxury home builder charlotte nc | 170 | $8.06 | HIGH |
| commercial construction companies in charlotte nc | 110 | $1.06 | MEDIUM |
| spray-on roof coating contractors near me | 110 | $8.47 | HIGH |
| best home builder in charlotte nc | 110 | $7.06 | HIGH |
| custom home builder charlotte nc | 90 | $7.19 | MEDIUM |
| commercial roof coating contractors near me | 90 | $48.38 | HIGH |
| commercial construction charlotte nc | 50 | $8.46 | MEDIUM |
| roof sealing companies near me | 50 | $18.31 | HIGH |
| commercial general contractor charlotte nc | 20 | $4.68 | HIGH |
| residential general contractor charlotte nc | 10 | $4.82 | HIGH |
| roof coating charlotte nc | 10 | n/a | HIGH |

### Tier 3: Blog-Worthy Long-Tail / Informational
| Keyword | Volume | CPC | Intent |
|---------|--------|-----|--------|
| roofing contractors | 90,500 | $29.24 | navigational |
| home addition contractors | 22,200 | $10.72 | navigational |
| home renovation contractors | 18,100 | $13.94 | navigational |
| concrete driveway contractors | 18,100 | $10.83 | navigational |
| demolition contractors | 14,800 | $12.49 | navigational |
| roof maxx | 27,100 | $12.42 | commercial |
| metal roof coating companies near me | 50 | $7.39 | navigational |
| silicone roof coating contractors near me | 30 | $26.67 | transactional |
| build on your lot charlotte | 70 | n/a | commercial |

---

## Competitor Analysis

### Direct SERP Competitors (Charlotte construction keywords)
| Domain | Relevant SERP Items | Avg Position | Est. Traffic |
|--------|-------------------|--------------|-------------|
| f2construction.com | 2 | 2.0 | 123 |
| distinctivedesignbuild.com | 2 | 2.0 | 20 |
| barringerconstruction.com | 2 | 2.0 | 20 |
| qcgeneralcontractors.com | 2 | 3.5 | 81 |
| charlottearchitects.org | 3 | 13.0 | 3 |
| gcdesignbuild.com | 3 | 16.0 | 24 |
| mcfarlandconstructionus.com | 3 | 23.0 | 23 |
| magnoliaconstruction.com | 3 | 18.7 | 2 |
| messer.com | 3 | 24.7 | 12 |
| edificeinc.com | 3 | 25.7 | 4 |

### Key Takeaways
- **f2construction.com** dominates with avg position 2.0 and 123 est. traffic
- **qcgeneralcontractors.com** is the strongest local competitor with position 3.5
- **distinctivedesignbuild.com** and **barringerconstruction.com** rank well for design-build terms
- Most competitors have dedicated service pages for each keyword cluster — WeBuildCLT does not
- Roof coating is a low-competition niche where WeBuildCLT can dominate quickly

---

## 10 New Pages (Prioritized by Keyword Opportunity)

### Service Pages (7)
| # | Page | Route | Primary Keyword | Volume | Why |
|---|------|-------|-----------------|--------|-----|
| 1 | General Contractor Charlotte | `/services/general-contractor` | general contractor charlotte nc | 1,600 | Highest volume, highest CPC target |
| 2 | Custom Home Builder Charlotte | `/services/custom-home-builder` | custom home builder charlotte nc | 1,000 | High CPC ($9.58), strong commercial intent |
| 3 | Commercial Construction Charlotte | `/services/commercial-construction` | commercial construction charlotte nc | 110 | Core service, high CPC ($8.46) |
| 4 | Commercial Upfits Charlotte | `/services/commercial-upfits` | commercial upfit charlotte nc | ~20 | Low competition niche, high-value clients |
| 5 | Roof Coating Charlotte | `/services/roof-coating` | roof coating contractor near me | 210 | High CPC ($24.61), existing We Coat brand |
| 6 | Residential Additions | `/services/residential-additions` | home addition contractors | 22,200 | Massive national volume, localize to Charlotte |
| 7 | Design Build Charlotte | `/services/design-build` | design build charlotte nc | ~50 | Differentiator, existing Design Center page |

### Location Pages (3)
| # | Page | Route | Primary Keyword | Why |
|---|------|-------|-----------------|-----|
| 8 | Fort Mill SC | `/areas/fort-mill-sc` | construction company fort mill sc | SC license, proven projects (Pure Physique) |
| 9 | Lake Norman / Cornelius | `/areas/lake-norman` | home builder lake norman | Affluent area, custom home demand |
| 10 | South Charlotte / Ballantyne | `/areas/south-charlotte` | contractor south charlotte | Company HQ at S Lakes Dr is in this area |

### Page Template Specs
Each service/location page will include:
- **H1** with primary keyword
- **H2s** with secondary keywords from research
- **FAQ section** with FAQ schema (JSON-LD) — targets "People Also Ask"
- **JSON-LD** structured data (LocalBusiness + Service schema)
- **Internal links** to related portfolio projects and blog posts
- **CTA sections** (contact form, phone number)
- **Testimonial** relevant to the service
- **Before/After** or project gallery where applicable

---

## Blog Infrastructure

### Architecture
```
/blog                       → Blog index with pagination (10 per page)
/blog/[slug]                → Individual post (from WordPress)
/blog/category/[slug]       → Category archive page
```

### Blog Post Template Features
- Article schema (JSON-LD)
- Auto-generated table of contents
- Related posts sidebar/footer
- Social share buttons
- Breadcrumbs
- Author bio
- Reading time estimate
- Category/tag badges

### Technical Requirements
- WordPress GraphQL queries already scaffolded in `src/lib/queries.ts`
- ISR with 60s revalidation for blog posts
- On-demand revalidation via existing `/api/revalidate` endpoint
- Sitemap integration for all blog posts

---

## SEO Infrastructure

### Must-Build
| Component | Route/File | Purpose |
|-----------|-----------|---------|
| Dynamic Sitemap | `/sitemap.xml` (via `app/sitemap.ts`) | Auto-generates from all pages + WP posts |
| Robots.txt | `/robots.txt` (via `app/robots.ts`) | Points to sitemap, blocks admin paths |
| SEO Component | `components/SEO.tsx` | Reusable meta, OG, JSON-LD per page |
| Breadcrumbs | `components/Breadcrumbs.tsx` | BreadcrumbList schema on every page |
| JSON-LD Templates | `lib/structured-data.ts` | LocalBusiness, Service, Article, FAQ, HowTo |
| 404 Page | `app/not-found.tsx` | Custom 404 with search and nav |

### Schema Types per Page
| Page Type | JSON-LD Schemas |
|-----------|----------------|
| Homepage | Organization, LocalBusiness, WebSite |
| Service pages | Service, LocalBusiness, FAQ, BreadcrumbList |
| Location pages | LocalBusiness (per area), Service, FAQ, BreadcrumbList |
| Blog posts | Article, BreadcrumbList, FAQ (if FAQ section) |
| Portfolio | CreativeWork, ImageGallery, BreadcrumbList |
| Contact | LocalBusiness, ContactPoint |

---

## 100 Blog Topics — Content Calendar (Clustered by Theme)

### Cluster 1: Commercial Construction (15 posts)
| # | Title | Target Keyword | Volume |
|---|-------|---------------|--------|
| 1 | Complete Guide to Commercial Construction in Charlotte NC | commercial construction charlotte nc | 50 |
| 2 | How Much Does a Commercial Upfit Cost in Charlotte? | commercial upfit cost | ~20 |
| 3 | Office Upfit vs. Full Renovation: Which Is Right for Your Business? | office upfit vs renovation | ~10 |
| 4 | 7 Signs Your Commercial Space Needs an Upfit | commercial space upfit | ~10 |
| 5 | How to Choose a Commercial General Contractor in Charlotte | commercial general contractor charlotte nc | 20 |
| 6 | Restaurant Build-Out Guide: Timeline, Costs & Permits in Charlotte | restaurant build out charlotte | ~10 |
| 7 | Medical Office Construction: Compliance and Design Requirements | medical office construction | ~170 |
| 8 | Warehouse Construction: What Charlotte Businesses Need to Know | warehouse construction charlotte | ~10 |
| 9 | Retail Upfit Trends: Modernizing Your Storefront in 2026 | retail upfit trends | ~10 |
| 10 | The Commercial Construction Permitting Process in Mecklenburg County | commercial construction permits charlotte | ~10 |
| 11 | Tenant Upfit: Landlord vs. Tenant Responsibilities Explained | tenant upfit responsibilities | ~20 |
| 12 | Sustainable Commercial Construction: LEED and Green Building in Charlotte | sustainable commercial construction | ~30 |
| 13 | How Long Does a Commercial Build Take? Project Timeline Guide | commercial construction timeline | ~40 |
| 14 | Commercial Construction Financing Options for Small Businesses | commercial construction financing | ~50 |
| 15 | ADA Compliance in Commercial Construction: A Complete Checklist | ada compliance commercial construction | ~90 |

### Cluster 2: Residential Construction & Custom Homes (15 posts)
| # | Title | Target Keyword | Volume |
|---|-------|---------------|--------|
| 16 | How Much Does It Cost to Build a Custom Home in Charlotte NC? | cost to build custom home charlotte nc | ~50 |
| 17 | Build on Your Lot in Charlotte: A Step-by-Step Guide | build on your lot charlotte | 70 |
| 18 | Custom Home Builder Checklist: 10 Things to Ask Before You Sign | custom home builder checklist | ~30 |
| 19 | New Construction vs. Buying an Existing Home in Charlotte | new construction vs existing home charlotte | ~20 |
| 20 | Home Addition Ideas That Add the Most Value in Charlotte | home addition ideas charlotte | ~30 |
| 21 | Second Story Addition: Cost, Timeline, and What to Expect | second story addition cost | ~170 |
| 22 | Mother-in-Law Suite Addition: Costs and Design Ideas | mother in law suite addition cost | ~110 |
| 23 | Garage Conversion: Transform Unused Space Into Living Area | garage conversion contractors | 18,100 |
| 24 | Open Floor Plan Remodel: Removing Walls Safely | open floor plan remodel cost | ~50 |
| 25 | How to Finance New Home Construction in North Carolina | finance new home construction nc | ~20 |
| 26 | Charlotte New Home Construction Trends for 2026 | charlotte new home trends | ~10 |
| 27 | Luxury Home Building in Charlotte: What Sets It Apart | luxury home builder charlotte nc | 170 |
| 28 | Energy-Efficient Home Building: A Charlotte Homeowner's Guide | energy efficient home building | ~110 |
| 29 | The Design-Build Process Explained: Why One Team Is Better | design build process explained | ~50 |
| 30 | Choosing the Right Lot for Your Custom Home in Charlotte | choosing lot custom home charlotte | ~10 |

### Cluster 3: Roof Coating & Restoration (15 posts)
| # | Title | Target Keyword | Volume |
|---|-------|---------------|--------|
| 31 | Commercial Roof Coating: The Complete Guide for Building Owners | commercial roof coating | ~90 |
| 32 | Roof Coating vs. Roof Replacement: Cost Comparison and Lifespan | roof coating vs replacement | ~170 |
| 33 | Silicone Roof Coating: Pros, Cons, and Best Applications | silicone roof coating | ~590 |
| 34 | How Long Does Roof Coating Last? Lifespan by Material Type | how long does roof coating last | ~70 |
| 35 | Metal Roof Coating: Extending Your Roof's Life by 15+ Years | metal roof coating | ~170 |
| 36 | Flat Roof Coating Options for Commercial Buildings | flat roof coating | ~210 |
| 37 | Roof Maxx vs. Traditional Roof Coating: Which Is Better? | roof maxx vs roof coating | ~50 |
| 38 | SPF Roof Coating: Spray Polyurethane Foam Explained | spf roof coating | ~110 |
| 39 | Cool Roof Coatings: Reducing Energy Costs in Charlotte's Heat | cool roof coatings | ~70 |
| 40 | Elastomeric Roof Coating: Application and Benefits | elastomeric roof coating | ~210 |
| 41 | How Much Does Commercial Roof Coating Cost per Square Foot? | commercial roof coating cost | ~50 |
| 42 | Signs Your Flat Roof Needs Coating (Not Replacement) | flat roof needs coating signs | ~10 |
| 43 | Roof Coating Maintenance: How to Maximize Your Investment | roof coating maintenance | ~20 |
| 44 | Acrylic vs. Silicone Roof Coating: A Side-by-Side Comparison | acrylic vs silicone roof coating | ~90 |
| 45 | The Environmental Benefits of Roof Restoration vs. Tear-Off | environmental benefits roof restoration | ~10 |

### Cluster 4: Design Center & Design-Build (10 posts)
| # | Title | Target Keyword | Volume |
|---|-------|---------------|--------|
| 46 | What Is a Design-Build Contractor? Benefits Over Traditional Bidding | design build contractor benefits | ~50 |
| 47 | How to Use a Design Center: Getting the Most From Your Selections | how to use design center | ~30 |
| 48 | Kitchen Design Trends Charlotte Homeowners Love in 2026 | kitchen design trends charlotte | ~20 |
| 49 | Bathroom Design Trends: What's In and What's Out | bathroom design trends 2026 | ~210 |
| 50 | Choosing Countertops: Quartz vs. Granite vs. Marble | quartz vs granite countertops | ~1,300 |
| 51 | Flooring Options for New Construction: Hardwood, LVP, and Tile | flooring options new construction | ~50 |
| 52 | The Matterport Virtual Tour: Preview Your Design Center Visit | matterport virtual tour design center | ~10 |
| 53 | Exterior Design Choices: Siding, Brick, and Stone Options | exterior siding options | ~170 |
| 54 | How Design-Build Saves Time and Money on Your Project | design build saves time money | ~20 |
| 55 | Selecting Fixtures and Finishes: A First-Time Builder's Guide | selecting fixtures finishes guide | ~10 |

### Cluster 5: Charlotte Area Guides & Market (10 posts)
| # | Title | Target Keyword | Volume |
|---|-------|---------------|--------|
| 56 | Best Neighborhoods to Build a Custom Home in Charlotte NC | best neighborhoods build charlotte | ~30 |
| 57 | Building in Fort Mill SC: Permits, Costs, and Contractors | building in fort mill sc | ~10 |
| 58 | Lake Norman Custom Homes: Building on the Waterfront | lake norman custom homes | ~50 |
| 59 | South Charlotte Construction Boom: What Homeowners Should Know | south charlotte construction | ~10 |
| 60 | Charlotte Building Permits: A Complete Application Guide | charlotte building permits | ~40 |
| 61 | Mecklenburg County Zoning Laws for Residential Construction | mecklenburg county zoning laws | ~30 |
| 62 | Construction Costs in Charlotte NC: 2026 Price Guide | construction costs charlotte nc 2026 | ~20 |
| 63 | Charlotte's Fastest Growing Suburbs for New Home Construction | charlotte fastest growing suburbs | ~30 |
| 64 | Building in the Carolinas: NC vs. SC Contractor Licensing | nc vs sc contractor license | ~10 |
| 65 | Charlotte Commercial Real Estate: Upfit Opportunities by Neighborhood | charlotte commercial real estate upfit | ~10 |

### Cluster 6: Construction Tips & How-To (15 posts)
| # | Title | Target Keyword | Volume |
|---|-------|---------------|--------|
| 66 | How to Hire a General Contractor: The Complete Guide | how to hire general contractor | ~720 |
| 67 | Questions to Ask a Contractor Before Signing a Contract | questions to ask contractor | ~390 |
| 68 | Understanding Construction Contracts: What to Look For | understanding construction contracts | ~50 |
| 69 | Construction Project Timeline: What to Expect from Start to Finish | construction project timeline | ~110 |
| 70 | How to Read a Construction Estimate (And Spot Red Flags) | how to read construction estimate | ~30 |
| 71 | 10 Common Construction Mistakes and How to Avoid Them | common construction mistakes | ~50 |
| 72 | Construction Change Orders: How They Work and What They Cost | construction change orders | ~40 |
| 73 | When Do You Need a Building Permit? A Homeowner's Guide | when do you need building permit | ~170 |
| 74 | How to Prepare Your Property for Construction | prepare property for construction | ~10 |
| 75 | What Is a Punch List in Construction? | what is punch list construction | ~110 |
| 76 | Construction Insurance: What Your Contractor Should Have | construction insurance requirements | ~50 |
| 77 | How to Communicate Effectively With Your Contractor | communicate with contractor | ~10 |
| 78 | Choosing Between Renovation and New Construction | renovation vs new construction | ~90 |
| 79 | What Is Value Engineering in Construction? | value engineering construction | ~50 |
| 80 | How to Vet a Construction Company: License, Insurance, Reviews | vet construction company checklist | ~10 |

### Cluster 7: Green Building & Sustainability (10 posts)
| # | Title | Target Keyword | Volume |
|---|-------|---------------|--------|
| 81 | What Is USGBC and Why It Matters for Your Construction Project | what is usgbc | ~110 |
| 82 | Green Building Certifications Explained: LEED, WELL, and More | green building certifications | ~170 |
| 83 | Sustainable Building Materials for Commercial Construction | sustainable building materials commercial | ~50 |
| 84 | Energy-Efficient Commercial Building Design in Charlotte | energy efficient commercial building | ~30 |
| 85 | How Green Building Practices Save Money Long-Term | green building saves money | ~20 |
| 86 | Solar-Ready Construction: Preparing Your New Build for Solar | solar ready construction | ~30 |
| 87 | Low-VOC Materials: Healthier Buildings for Workers and Residents | low voc building materials | ~50 |
| 88 | Water Conservation in New Construction: Systems and Strategies | water conservation new construction | ~20 |
| 89 | The ROI of Green Building: Data Charlotte Business Owners Need | roi green building | ~20 |
| 90 | How to Choose an Eco-Friendly Contractor in Charlotte NC | eco friendly contractor charlotte | ~10 |

### Cluster 8: Veteran/Family Business & Company Stories (10 posts)
| # | Title | Target Keyword | Volume |
|---|-------|---------------|--------|
| 91 | Why Veteran-Owned Construction Companies Build Different | veteran owned construction company | ~50 |
| 92 | Family-Owned vs. Corporate Contractors: The Advantages | family owned contractor benefits | ~20 |
| 93 | Our Story: How We Build Went From Startup to Charlotte's Trusted Builder | we build charlotte story | ~10 |
| 94 | Project Spotlight: Pure Physique Commercial Upfit Fort Mill | pure physique fort mill upfit | ~10 |
| 95 | Before and After: Our Best Commercial Upfit Transformations | commercial upfit before after | ~10 |
| 96 | What Does a Day on a Construction Site Look Like? | day on construction site | ~30 |
| 97 | How We Build Ensures Quality Control on Every Project | construction quality control | ~40 |
| 98 | The Importance of Communication in Construction Projects | communication construction projects | ~10 |
| 99 | Meet the We Build Team: Experience Behind Every Project | we build team charlotte | ~10 |
| 100 | Why Charlotte Businesses Choose We Build for Their Upfits | charlotte businesses we build | ~10 |

---

## Implementation Order (Phases 2-4)

### Phase 2: SEO Infrastructure + Blog System
1. SEO component (meta, OG, JSON-LD)
2. Structured data templates (`lib/structured-data.ts`)
3. Dynamic sitemap (`app/sitemap.ts`)
4. Robots.txt (`app/robots.ts`)
5. Breadcrumbs component
6. Blog index page (`/blog`)
7. Blog post template (`/blog/[slug]`)
8. Blog category pages (`/blog/category/[slug]`)
9. Custom 404 page
10. Verify all existing pages have proper meta tags

### Phase 3: 10 Service/Location Pages
- Build in priority order (1-10 from table above)
- Each page: ~1,500 words, FAQ, JSON-LD, internal links, CTAs
- Code review after each batch of 3-4 pages

### Phase 4: 100 Blog Posts (Batched by Cluster)
- Start with **Cluster 3 (Roof Coating)** — lowest competition, highest CPC
- Then **Cluster 1 (Commercial Construction)** — core service, medium competition
- Then **Cluster 2 (Residential)** — highest volume keywords
- Remaining clusters in order: 6, 7, 4, 5, 8
- Batch size: 10 posts per session
- Publish to WordPress via REST API or manual entry

---

## Success Metrics (3-6 months post-launch)
- **Organic traffic**: 500+ monthly visitors (from current ~56)
- **Keyword rankings**: Top 10 for 5+ service keywords
- **Blog traffic**: 200+ monthly visitors from long-tail keywords
- **Conversion**: Contact form submissions up 50%+
