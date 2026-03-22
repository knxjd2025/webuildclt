/**
 * DataForSEO Research v2: Charlotte commercial construction services
 * Uses keyword_suggestions (single seed) for tighter relevance
 * + SERP organic search for actual Charlotte-ranking pages
 * + location_code for Charlotte NC metro
 */

import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const LOGIN = process.env.DATAFORSEO_LOGIN!;
const PASSWORD = process.env.DATAFORSEO_PASSWORD!;
const AUTH = Buffer.from(`${LOGIN}:${PASSWORD}`).toString('base64');

async function api(endpoint: string, body: unknown[]): Promise<any> {
  const res = await fetch(`https://api.dataforseo.com/v3/${endpoint}`, {
    method: 'POST',
    headers: { 'Authorization': `Basic ${AUTH}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`API ${res.status}: ${await res.text()}`);
  return res.json();
}

interface KW {
  keyword: string;
  volume: number;
  competition: number;
  comp_level: string;
  cpc: number;
  seed: string;
}

function parseItems(resp: any, seed: string): KW[] {
  const items: any[] = resp?.tasks?.[0]?.result?.[0]?.items ?? [];
  return items.map((i: any) => ({
    keyword: i.keyword,
    volume: i.keyword_info?.search_volume ?? 0,
    competition: i.keyword_info?.competition ?? 0,
    comp_level: i.keyword_info?.competition_level ?? '?',
    cpc: i.keyword_info?.cpc ?? 0,
    seed,
  }));
}

// Only seeds that a commercial property manager/owner would type
const SEEDS = [
  // Core services
  'commercial general contractor Charlotte NC',
  'commercial construction Charlotte NC',
  'commercial upfit contractor Charlotte NC',
  'tenant improvement contractor Charlotte NC',
  'commercial buildout Charlotte NC',
  'commercial renovation Charlotte NC',
  'commercial remodeling contractor Charlotte NC',
  'office buildout Charlotte NC',
  'office renovation contractor Charlotte NC',
  'design build contractor Charlotte NC',
  'construction management Charlotte NC',
  'pre-construction services Charlotte NC',
  // Property type specific
  'restaurant buildout contractor Charlotte NC',
  'retail construction contractor Charlotte NC',
  'medical office buildout Charlotte NC',
  'warehouse construction Charlotte NC',
  'industrial construction Charlotte NC',
  // Specialty
  'commercial roof coating Charlotte NC',
  'commercial painting contractor Charlotte NC',
  'ADA compliance contractor Charlotte NC',
  'commercial interior renovation Charlotte NC',
  'commercial space planning Charlotte NC',
  // Green/sustainability
  'green building contractor Charlotte NC',
  'LEED certified contractor Charlotte NC',
  'sustainable construction Charlotte NC',
  // Cost intent
  'commercial upfit cost per square foot',
  'tenant improvement cost Charlotte NC',
  'commercial construction cost Charlotte',
  'office buildout cost per square foot',
  // Process/planning intent
  'commercial construction permit Charlotte NC',
  'commercial building inspection Charlotte',
  'commercial property renovation contractor',
];

async function fetchSuggestions(seed: string): Promise<KW[]> {
  console.log(`  → ${seed}`);
  try {
    const resp = await api('dataforseo_labs/google/keyword_suggestions/live', [{
      keyword: seed,
      language_code: 'en',
      location_code: 2840, // US
      include_seed_keyword: true,
      limit: 80,
      order_by: ['keyword_info.search_volume,desc'],
      filters: [['keyword_info.search_volume', '>', 0]],
    }]);
    return parseItems(resp, seed);
  } catch (e: any) {
    console.log(`    ✗ ${e.message.slice(0, 80)}`);
    return [];
  }
}

async function fetchSearchVolume(keywords: string[]): Promise<KW[]> {
  // Use search_volume/live for exact volume data
  console.log(`\n📊 Getting exact volumes for ${keywords.length} keywords...`);
  try {
    const resp = await api('dataforseo_labs/google/search_volume/live', [{
      keywords,
      language_code: 'en',
      location_code: 2840,
    }]);
    const items: any[] = resp?.tasks?.[0]?.result ?? [];
    return items.map((i: any) => ({
      keyword: i.keyword,
      volume: i.search_volume ?? 0,
      competition: i.competition ?? 0,
      comp_level: i.competition_level ?? '?',
      cpc: i.cpc ?? 0,
      seed: 'direct',
    }));
  } catch (e: any) {
    console.log(`  ✗ ${e.message.slice(0, 80)}`);
    return [];
  }
}

// Filter: only keywords relevant to commercial construction services
function isRelevant(kw: string): boolean {
  const lower = kw.toLowerCase();

  // Must-have: at least one construction/contractor/building/service term
  const hasServiceTerm = [
    'construct', 'contractor', 'builder', 'build', 'upfit', 'buildout',
    'build out', 'build-out', 'renovation', 'remodel', 'renovate',
    'tenant improvement', 'leasehold', 'general contractor',
    'design build', 'design-build', 'roofing', 'roof coat',
    'painting', 'flooring', 'plumbing', 'electrical', 'hvac',
    'permit', 'inspection', 'ada', 'compliance', 'leed', 'green build',
    'sustainable', 'pre-construction', 'preconstruction',
    'construction management', 'project management', 'space planning',
    'interior', 'commercial', 'industrial', 'warehouse', 'office',
    'retail', 'restaurant', 'medical', 'healthcare', 'clinic',
    'dental', 'hotel', 'hospitality', 'cost per square',
  ].some(term => lower.includes(term));

  if (!hasServiceTerm) return false;

  // Exclude residential/home keywords (unless also commercial)
  if ((lower.includes('home ') || lower.includes('house ') || lower.includes('residential '))
      && !lower.includes('commercial')) return false;

  // Exclude jobs/salary/career
  if (['salary', 'jobs', 'hiring', 'career', 'degree', 'school', 'training', 'program', 'certificate'].some(t => lower.includes(t))) return false;

  // Exclude brand searches for other companies
  if (['home depot', 'lowes', 'menards', 'walmart', 'amazon', 'houzz', 'yelp', 'thumbtack', 'angi'].some(t => lower.includes(t))) return false;

  return true;
}

async function main() {
  console.log('=== DataForSEO v2: Commercial Construction Services ===');
  console.log('Target: Charlotte NC commercial property managers/owners\n');

  // Phase 1: Get keyword suggestions for each seed
  const allKws = new Map<string, KW>();

  for (const seed of SEEDS) {
    const results = await fetchSuggestions(seed);
    for (const kw of results) {
      if (isRelevant(kw.keyword)) {
        const existing = allKws.get(kw.keyword);
        if (!existing || existing.volume < kw.volume) {
          allKws.set(kw.keyword, kw);
        }
      }
    }
    await new Promise(r => setTimeout(r, 500));
  }

  console.log(`\n✓ Phase 1 complete: ${allKws.size} relevant keywords from suggestions`);

  // Phase 2: Also get exact volume for manually curated high-value keywords
  const manualKeywords = [
    'commercial general contractor Charlotte NC',
    'commercial construction company Charlotte NC',
    'commercial upfit Charlotte NC',
    'tenant improvement Charlotte NC',
    'office buildout Charlotte NC',
    'commercial remodeling Charlotte NC',
    'design build Charlotte NC',
    'commercial renovation Charlotte NC',
    'construction management Charlotte NC',
    'pre-construction services Charlotte NC',
    'restaurant construction Charlotte NC',
    'retail construction Charlotte NC',
    'medical office construction Charlotte NC',
    'warehouse construction Charlotte NC',
    'commercial roof coating Charlotte NC',
    'commercial painting Charlotte NC',
    'ADA compliance construction Charlotte NC',
    'green building Charlotte NC',
    'LEED contractor Charlotte NC',
    'commercial interior renovation Charlotte',
    'tenant buildout Charlotte NC',
    'leasehold improvement Charlotte NC',
    'commercial space planning Charlotte NC',
    'office renovation Charlotte NC',
    'commercial kitchen construction Charlotte NC',
    'dental office construction Charlotte NC',
    'hotel renovation Charlotte NC',
    'retail buildout Charlotte NC',
    'industrial construction Charlotte NC',
    'commercial building renovation Charlotte NC',
    'commercial property renovation Charlotte NC',
    'commercial upfit cost per square foot',
    'tenant improvement cost per square foot',
    'commercial construction cost Charlotte NC',
    'commercial contractor near me Charlotte',
    'general contractor commercial Charlotte',
    'commercial contractor South Charlotte',
    'commercial contractor Lake Norman',
    'commercial contractor Fort Mill SC',
    'commercial building permit Charlotte NC',
    'commercial inspection Charlotte NC',
    'facility renovation Charlotte NC',
    'building code compliance Charlotte NC',
    'commercial flooring Charlotte NC',
    'commercial HVAC Charlotte NC',
    'commercial electrical contractor Charlotte NC',
    'commercial plumbing Charlotte NC',
  ];

  const volumeData = await fetchSearchVolume(manualKeywords);
  for (const kw of volumeData) {
    const existing = allKws.get(kw.keyword);
    if (!existing || existing.volume < kw.volume) {
      allKws.set(kw.keyword, kw);
    }
  }

  console.log(`✓ Phase 2 complete: ${allKws.size} total keywords after enrichment`);

  // Sort all keywords by volume
  const sorted = Array.from(allKws.values()).sort((a, b) => b.volume - a.volume);

  // Categorize into service buckets
  const buckets: Record<string, KW[]> = {};
  function categorize(kw: KW): string {
    const l = kw.keyword.toLowerCase();
    if (l.includes('upfit') || l.includes('buildout') || l.includes('build out') || l.includes('build-out') || l.includes('tenant improvement') || l.includes('leasehold'))
      return 'Commercial Upfits, Buildouts & Tenant Improvements';
    if (l.includes('design build') || l.includes('design-build'))
      return 'Design-Build Services';
    if (l.includes('construction management') || l.includes('project management'))
      return 'Construction Management';
    if (l.includes('pre-construction') || l.includes('preconstruction'))
      return 'Pre-Construction Planning';
    if (l.includes('restaurant') || l.includes('kitchen') || l.includes('bar ') || l.includes('brewery') || l.includes('hospitality') || l.includes('hotel'))
      return 'Restaurant & Hospitality Construction';
    if (l.includes('office') && !l.includes('medical'))
      return 'Office Construction & Renovation';
    if (l.includes('retail') || l.includes('store '))
      return 'Retail Construction & Buildouts';
    if (l.includes('medical') || l.includes('healthcare') || l.includes('dental') || l.includes('clinic'))
      return 'Medical & Healthcare Facility Construction';
    if (l.includes('warehouse') || l.includes('industrial') || l.includes('distribution'))
      return 'Industrial & Warehouse Construction';
    if (l.includes('roof'))
      return 'Commercial Roof Coating & Restoration';
    if (l.includes('green') || l.includes('leed') || l.includes('sustainable') || l.includes('energy efficient'))
      return 'Sustainable / Green Building';
    if (l.includes('ada') || l.includes('compliance') || l.includes('code') || l.includes('permit') || l.includes('inspection'))
      return 'ADA Compliance, Permits & Inspections';
    if (l.includes('painting'))
      return 'Commercial Painting';
    if (l.includes('flooring'))
      return 'Commercial Flooring';
    if (l.includes('hvac'))
      return 'Commercial HVAC';
    if (l.includes('electrical'))
      return 'Commercial Electrical';
    if (l.includes('plumbing'))
      return 'Commercial Plumbing';
    if (l.includes('renovation') || l.includes('remodel'))
      return 'Commercial Renovation & Remodeling';
    if (l.includes('cost') || l.includes('price') || l.includes('how much'))
      return 'Cost & Planning (Blog Topics)';
    if (l.includes('interior'))
      return 'Commercial Interior Renovation';
    return 'General Commercial Contracting';
  }

  for (const kw of sorted) {
    const cat = categorize(kw);
    (buckets[cat] ??= []).push(kw);
  }

  // Build report
  let r = `# Commercial Construction Services — Keyword Research Report\n`;
  r += `**Date:** ${new Date().toISOString().split('T')[0]}\n`;
  r += `**Source:** DataForSEO Labs (keyword_suggestions + search_volume)\n`;
  r += `**Focus:** What commercial property managers & owners search for in Charlotte NC\n`;
  r += `**Total relevant keywords:** ${sorted.length}\n\n---\n\n`;

  // All keywords table
  r += `## All Keywords by Volume\n\n`;
  r += `| # | Keyword | Monthly Volume | Competition | CPC | Category |\n`;
  r += `|---|---------|---------------|-------------|-----|----------|\n`;
  for (let i = 0; i < sorted.length; i++) {
    const kw = sorted[i];
    r += `| ${i + 1} | ${kw.keyword} | ${kw.volume.toLocaleString()} | ${kw.comp_level} (${(kw.competition * 100).toFixed(0)}%) | $${kw.cpc.toFixed(2)} | ${categorize(kw)} |\n`;
  }

  // Category summaries
  r += `\n---\n\n## Service Categories (Ranked by Total Volume)\n\n`;
  const catEntries = Object.entries(buckets).map(([cat, kws]) => ({
    cat,
    kws,
    total: kws.reduce((s, k) => s + k.volume, 0),
  })).sort((a, b) => b.total - a.total);

  for (const { cat, kws, total } of catEntries) {
    r += `### ${cat}\n`;
    r += `**Total volume:** ${total.toLocaleString()}/mo | **Keywords:** ${kws.length}\n\n`;
    r += `| Keyword | Volume | CPC |\n|---------|--------|-----|\n`;
    for (const kw of kws.slice(0, 15)) {
      r += `| ${kw.keyword} | ${kw.volume.toLocaleString()} | $${kw.cpc.toFixed(2)} |\n`;
    }
    r += `\n`;
  }

  // GBP Recommendations
  r += `---\n\n## GBP (Google Business Profile) Service Recommendations\n\n`;
  r += `List these services on We Build's Google Business Profile, ordered by search demand:\n\n`;
  let gbpNum = 1;
  for (const { cat, kws, total } of catEntries) {
    if (cat === 'Cost & Planning (Blog Topics)') continue;
    r += `${gbpNum}. **${cat}** — ${total.toLocaleString()} monthly searches\n`;
    r += `   - GBP service name: "${cat.replace(/ & /g, ' and ').replace(/ \/ /g, ' / ')}"\n`;
    r += `   - Top keyword: "${kws[0]?.keyword}" (${kws[0]?.volume.toLocaleString()}/mo)\n\n`;
    gbpNum++;
  }

  // Website page recommendations
  r += `---\n\n## Recommended Website Service Pages\n\n`;
  r += `Pages WeBuildCLT should have (some already exist):\n\n`;
  const pageRecs = [
    { name: 'Commercial General Contracting', slug: 'general-contractor', exists: true },
    { name: 'Commercial Construction', slug: 'commercial-construction', exists: true },
    { name: 'Commercial Upfits & Buildouts', slug: 'commercial-upfits', exists: true },
    { name: 'Design-Build', slug: 'design-build', exists: true },
    { name: 'Roof Coating', slug: 'roof-coating', exists: true },
    { name: 'Commercial Renovation & Remodeling', slug: 'commercial-renovation', exists: false },
    { name: 'Tenant Improvements', slug: 'tenant-improvements', exists: false },
    { name: 'Office Buildouts & Renovation', slug: 'office-buildouts', exists: false },
    { name: 'Restaurant & Hospitality Construction', slug: 'restaurant-construction', exists: false },
    { name: 'Retail Construction & Buildouts', slug: 'retail-construction', exists: false },
    { name: 'Medical & Healthcare Facility Construction', slug: 'medical-construction', exists: false },
    { name: 'Industrial & Warehouse Construction', slug: 'industrial-construction', exists: false },
    { name: 'Construction Management', slug: 'construction-management', exists: false },
    { name: 'Pre-Construction Planning', slug: 'pre-construction', exists: false },
    { name: 'Sustainable / Green Building (USGBC)', slug: 'green-building', exists: false },
    { name: 'ADA Compliance & Code Updates', slug: 'ada-compliance', exists: false },
    { name: 'Commercial Painting', slug: 'commercial-painting', exists: false },
    { name: 'Commercial Flooring', slug: 'commercial-flooring', exists: false },
  ];

  for (const p of pageRecs) {
    const status = p.exists ? '✅ EXISTS' : '🆕 CREATE';
    const catData = catEntries.find(c => c.cat.toLowerCase().includes(p.name.toLowerCase().split(' ')[0]));
    r += `- ${status} \`/services/${p.slug}\` — **${p.name}**`;
    if (catData) r += ` (${catData.total.toLocaleString()} vol)`;
    r += `\n`;
  }

  const outPath = path.resolve(process.cwd(), 'research', `commercial-services-keywords-v2-${new Date().toISOString().split('T')[0]}.md`);
  fs.writeFileSync(outPath, r, 'utf-8');
  console.log(`\n✅ Report: ${outPath}`);
  console.log(`📊 ${sorted.length} relevant keywords across ${catEntries.length} categories`);
}

main().catch(e => { console.error(e); process.exit(1); });
