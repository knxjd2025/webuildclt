/**
 * We Build business context — always included in AI prompts.
 * This ensures every AI model stays on-brand and accurate.
 */

export const BUSINESS_CONTEXT = `
COMPANY: We Build
TYPE: Veteran and family-owned construction company
LOCATION: 14330 S Lakes Drive, Charlotte NC 28273
PHONE: (704) 574-8124
EMAIL: designcenter@webuildclt.com
WEBSITE: https://webuildclt.com
FOUNDED: 2019
EXPERIENCE: 60+ years combined experience across the team

MEMBERSHIPS & CERTIFICATIONS:
- U.S. Green Building Council (USGBC) member
- NOT a member of "We Are Neutral" — do NOT reference carbon neutrality

SERVICES (in priority order — commercial first):
1. Commercial Construction — new builds, ground-up commercial projects in Charlotte NC
2. Commercial Upfits — tenant improvements, office renovations, retail-to-office conversions
3. General Contractor — full-service GC for commercial and residential projects
4. Design-Build — single-source design and construction delivery
5. Roof Coating (We Coat) — commercial flat roof coatings and restoration
6. Custom Home Building — custom homes in Charlotte and surrounding areas
7. Residential Additions — home additions, renovations, and expansions

SERVICE AREA:
- Charlotte, NC (primary)
- Surrounding areas: Ballantyne, South End, NoDa, Plaza Midwood, Uptown, University City
- Lake Norman: Huntersville, Cornelius, Davidson
- South: Matthews, Mint Hill, Indian Trail, Waxhaw
- Fort Mill, SC and Rock Hill, SC

BRAND VOICE:
- Professional but approachable
- Authoritative — demonstrate deep construction knowledge
- Commercial-first focus — always lead with commercial expertise
- Charlotte-local — reference local areas naturally
- Veteran pride without being heavy-handed
- USGBC/sustainability aware but not preachy

INTERNAL LINK PATHS (use these exact paths when linking):
- /services/commercial-construction — commercial construction services
- /services/commercial-upfits — commercial upfit services
- /services/roof-coating — roof coating services
- /services/custom-home-builder — custom home building
- /services/residential-additions — residential additions
- /services/design-build — design-build services
- /services/general-contractor — general contractor services
- /contact — contact We Build
- /portfolio — our project portfolio
- /design-center — our design center
- /we-coat — We Coat roof coating
- /about — about We Build

CRITICAL RULES:
1. NEVER make up projects, case studies, or client names
2. NEVER reference competitors by name
3. ALWAYS stay on the topic the user specified
4. The user's description is the PRIMARY topic — do not deviate from it
5. If the topic is about a specific service (e.g., mausoleum roofing), write about THAT — not something else
6. Include Charlotte NC and surrounding area references naturally (8-10 mentions)
7. Include 5-7 relevant internal links using the exact paths above
`.trim();

/**
 * Short version for prompts with limited context windows
 */
export const BUSINESS_SUMMARY = `We Build is a veteran and family-owned construction company in Charlotte, NC (14330 S Lakes Drive, 28273). Services: commercial construction, upfits, design-build, roof coating (We Coat), custom homes, residential additions. USGBC member. 60+ years combined experience. Phone: (704) 574-8124. Website: webuildclt.com.`;
