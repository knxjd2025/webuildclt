# Implementation Plan: AEO-Optimized FAQ Expansion (10-15 per page)

## Task Type
- [x] Frontend (page content + structured data)
- [ ] Backend
- [ ] Fullstack

## Objective

Expand every page to 10-15 AEO-optimized FAQs with FAQPage JSON-LD structured data, ensuring each FAQ set is:
1. **Page-specific** — questions directly address the content/service/area on that page
2. **AEO-optimized** — phrased as natural-language questions AI search engines (ChatGPT, Perplexity, Gemini, Copilot) extract and cite
3. **Schema-complete** — every page has `FAQPage` JSON-LD so Google and AI crawlers can parse Q&A pairs

## Current State Audit

### Pages WITH FAQs + JSON-LD (already wired up)

| Page | Current Count | Target | Gap |
|------|--------------|--------|-----|
| **Homepage** (`/`) | 11 | 12-15 | +1-4 |
| **Services (23 pages)** | 10-12 each | 12-15 | +0-5 each |
| **Areas (9 pages)** | 10 each | 12-15 | +2-5 each |
| **About** (`/about`) | 10 | 12-15 | +2-5 |
| **Contact** (`/contact`) | 10 | 12-15 | +2-5 |
| **Design Center** | 10 | 12-15 | +2-5 |
| **Portfolio** (`/portfolio`) | 10 | 12-15 | +2-5 |
| **We Coat** (`/we-coat`) | 10 | 12-15 | +2-5 |
| **Certifications** (`/about/certifications`) | has FAQs | 12-15 | verify count |

### Pages MISSING FAQs entirely

| Page | Status | Action |
|------|--------|--------|
| **Services Index** (`/services/page.tsx`) | No FAQs, no JSON-LD | Add 12-15 FAQs + schema |

### Existing Infrastructure (no changes needed)
- `FaqAccordion` component — accessible accordion with aria attributes
- `faqSchema()` in `structured-data.ts` — generates FAQPage JSON-LD
- `JsonLd` component — renders structured data in `<head>`
- Pattern: `const faqs = [...]` → `<FaqAccordion faqs={faqs} />` + `faqSchema(faqs)` in JsonLd

## AEO FAQ Writing Strategy

### What Makes a FAQ "AEO-Optimized"

AI search engines (ChatGPT, Perplexity, Google AI Overviews, Copilot) pull answers from pages that:

1. **Match natural-language queries** — Questions should mirror how users actually ask ("How much does commercial construction cost in Charlotte?" not "Commercial construction pricing")
2. **Provide concise, authoritative answers** — First 1-2 sentences should be a direct answer (the "snippet"), followed by supporting detail
3. **Include entity-rich content** — Location names, service names, specific numbers, certifications, timelines
4. **Use question diversity** — Mix of How/What/Why/When/How much/Do you/Can I/Is it
5. **Target long-tail queries** — "What permits do I need for a restaurant build-out in Charlotte NC" not "restaurant permits"
6. **Include comparison/vs questions** — "Design-build vs traditional bidding for commercial projects" (AI loves comparison content)
7. **Avoid generic filler** — Every FAQ must be directly relevant to that page's specific service/area

### Question Types to Include Per Page (mix of these)

| Type | Example | AEO Value |
|------|---------|-----------|
| **Cost/pricing** | "How much does [service] cost in [area]?" | Very high — #1 query type |
| **Process/how-to** | "What is the process for [service]?" | High — AI pulls step sequences |
| **Timeline** | "How long does [service] take?" | High — specific numbers get cited |
| **Comparison** | "[Service A] vs [Service B] — which is better for [use case]?" | Very high — AI loves comparisons |
| **Permits/regulations** | "What permits are needed for [service] in Charlotte?" | High — location-specific authority |
| **Qualification** | "Do I need [service] for my [building type]?" | Medium — intent-matching |
| **Local-specific** | "Are there [specific regulations] in Mecklenburg County?" | Very high — local SEO + AEO |
| **ROI/benefits** | "What is the ROI of [service]?" | High — decision-making content |
| **Troubleshooting** | "What happens if [common problem] during [service]?" | Medium — problem-solving queries |
| **Eligibility** | "Does my building qualify for [certification/program]?" | Medium-high |

### Answer Structure (AEO-optimized format)

```
[Direct answer in 1-2 sentences — this is what AI will extract as the citation]
[Supporting detail with specific numbers, location references, or examples — 2-3 more sentences]
```

**Target answer length**: 60-120 words per answer. Long enough to be authoritative, short enough that AI can extract cleanly.

## Implementation Steps

### Step 1: Expand existing FAQ arrays (pages with 10 FAQs → 12-15)

For each page, add 2-5 new AEO-optimized questions. New questions should:
- Target long-tail queries not covered by existing FAQs
- Include at least 1 cost question, 1 comparison question, 1 local-specific question per page
- Mirror how users ask AI assistants (conversational phrasing)

**Files to modify** (37 pages):

**Services (23 pages)**:
1. `src/app/services/commercial-construction/page.tsx` — 10 → 13
2. `src/app/services/general-contractor/page.tsx` — 10 → 13
3. `src/app/services/design-build/page.tsx` — 10 → 13
4. `src/app/services/commercial-renovation/page.tsx` — 12 → 14
5. `src/app/services/commercial-upfits/page.tsx` — 10 → 13
6. `src/app/services/office-buildouts/page.tsx` — 12 → 14
7. `src/app/services/tenant-improvements/page.tsx` — 11 → 13
8. `src/app/services/construction-management/page.tsx` — 11 → 13
9. `src/app/services/pre-construction/page.tsx` — 12 → 14
10. `src/app/services/industrial-construction/page.tsx` — 11 → 13
11. `src/app/services/medical-construction/page.tsx` — 11 → 13
12. `src/app/services/restaurant-construction/page.tsx` — 12 → 14
13. `src/app/services/retail-construction/page.tsx` — 12 → 14
14. `src/app/services/warehouse-construction/page.tsx` — 10 → 13
15. `src/app/services/roof-coating/page.tsx` — 10 → 13
16. `src/app/services/green-building/page.tsx` — 12 → 14
17. `src/app/services/ada-compliance/page.tsx` — 12 → 14
18. `src/app/services/drone-inspections/page.tsx` — 12 → 14
19. `src/app/services/brewery-construction/page.tsx` — 10 → 13
20. `src/app/services/adaptive-reuse/page.tsx` — 10 → 13
21. `src/app/services/site-development/page.tsx` — 10 → 13
22. `src/app/services/value-engineering/page.tsx` — 10 → 13
23. `src/app/services/owners-representative/page.tsx` — 10 → 13

**Areas (9 pages)**:
24. `src/app/areas/south-charlotte/page.tsx` — 10 → 13
25. `src/app/areas/lake-norman/page.tsx` — 10 → 13
26. `src/app/areas/fort-mill-sc/page.tsx` — 10 → 13
27. `src/app/areas/detroit/page.tsx` — 10 → 13
28. `src/app/areas/dearborn/page.tsx` — 10 → 13
29. `src/app/areas/huntersville/page.tsx` — 10 → 13
30. `src/app/areas/matthews/page.tsx` — 10 → 13
31. `src/app/areas/mooresville/page.tsx` — 10 → 13
32. `src/app/areas/rock-hill-sc/page.tsx` — 10 → 13

**Other pages (5)**:
33. `src/app/page.tsx` (homepage via `src/data/homepage.ts`) — 11 → 14
34. `src/app/about/page.tsx` — 10 → 13
35. `src/app/contact/page.tsx` — 10 → 13
36. `src/app/design-center/page.tsx` — 10 → 13
37. `src/app/portfolio/page.tsx` — 10 → 13
38. `src/app/we-coat/page.tsx` — 10 → 13

### Step 2: Add FAQs to services index page

- `src/app/services/page.tsx` — Add 15 FAQs + `FaqAccordion` + `faqSchema()` + `JsonLd`
- These should be broad "which service do I need?" type questions that help users navigate

### Step 3: Verify all pages have FAQPage JSON-LD

Every page with FAQs must have:
```tsx
<JsonLd data={faqSchema(faqs)} />
```

Pages already confirmed to have this wired up. Just verify the new services index page.

### Step 4: AEO-specific structured data enhancements (optional)

Consider adding `speakable` property to FAQ answers for voice search optimization:
- Google supports `Speakable` structured data
- AI assistants prioritize content marked as speakable

## Key Files

| File | Operation | Description |
|------|-----------|-------------|
| 23x `src/app/services/*/page.tsx` | Modify | Add 2-5 FAQs each to reach 13-14 |
| 9x `src/app/areas/*/page.tsx` | Modify | Add 3-5 FAQs each to reach 13 |
| `src/app/services/page.tsx` | Modify | Add 15 FAQs + FaqAccordion + JsonLd |
| `src/data/homepage.ts` | Modify | Add 3-4 FAQs to homeFaqs array |
| `src/app/about/page.tsx` | Modify | Add 3 FAQs |
| `src/app/contact/page.tsx` | Modify | Add 3 FAQs |
| `src/app/design-center/page.tsx` | Modify | Add 3 FAQs |
| `src/app/portfolio/page.tsx` | Modify | Add 3 FAQs |
| `src/app/we-coat/page.tsx` | Modify | Add 3 FAQs |
| `src/components/FaqAccordion.tsx` | No change | Already accessible + well-built |
| `src/lib/structured-data.ts` | No change | `faqSchema()` already generates FAQPage JSON-LD |

## Execution Strategy

### Recommended: Batch by category with parallel agents

Since the work is repetitive (add FAQs to each page), use parallel agents:

**Batch 1** (parallel — 4 agents):
- Agent 1: Services pages A-F (6 pages)
- Agent 2: Services pages G-O (6 pages)
- Agent 3: Services pages P-W (6 pages + services index)
- Agent 4: All 9 area pages

**Batch 2** (parallel — 2 agents):
- Agent 5: Homepage + About + Contact + Portfolio
- Agent 6: Design Center + We Coat + Certifications + remaining services

**Batch 3** (sequential):
- Build verification: `npm run build`
- Spot-check JSON-LD in browser dev tools

## Risks and Mitigation

| Risk | Mitigation |
|------|------------|
| Generic/duplicate FAQs across pages | Each page's FAQs must reference its specific service name, area, or topic — never reuse questions verbatim |
| Too many FAQs slowing page load | FAQ data is static (no API calls), accordion is lazy-rendered. 15 items adds ~3KB. Negligible impact |
| Google treating excessive FAQs as spam | Stay at 12-15 max per page (Google's unofficial sweet spot). Ensure every Q&A is genuinely useful |
| AI hallucinating fake project details | FAQ answers must only reference real capabilities, certifications (USGBC), and general cost ranges — never specific clients or fake case studies |
| Build breakage from typos in large edits | Run `npm run build` after each batch to catch syntax errors early |

## AEO Quality Checklist (per page)

- [ ] 12-15 unique, page-specific FAQs
- [ ] At least 1 cost/pricing question
- [ ] At least 1 timeline question
- [ ] At least 1 comparison/vs question
- [ ] At least 1 local regulation/permit question (where applicable)
- [ ] At least 2 "how" questions (process-oriented)
- [ ] Answers start with direct answer (1-2 sentences) then supporting detail
- [ ] Answers are 60-120 words each
- [ ] Location mentions are natural (Charlotte, Mecklenburg County, specific area)
- [ ] No fabricated project names, client names, or case studies
- [ ] `faqSchema(faqs)` included in `<JsonLd>` component
- [ ] `FaqAccordion` component renders all FAQs visually on page
- [ ] Questions use natural conversational phrasing (how users ask AI)
