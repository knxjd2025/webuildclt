/**
 * DataForSEO v3: Use related_keywords + competitor ranked_keywords
 * to find what commercial property managers search for in Charlotte NC
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
  const json = await res.json();
  if (!res.ok || json.status_code >= 40000) {
    console.log(`    ⚠ ${endpoint}: ${json.status_message || res.status}`);
    return null;
  }
  return json;
}

interface KW {
  keyword: string;
  volume: number;
  competition: number;
  comp_level: string;
  cpc: number;
  source: string;
}

// ── Approach 1: Related keywords for each seed ──
async function getRelatedKeywords(seed: string): Promise<KW[]> {
  console.log(`  related: "${seed}"`);
  const resp = await api('dataforseo_labs/google/related_keywords/live', [{
    keyword: seed,
    language_code: 'en',
    location_code: 2840,
    limit: 100,
    order_by: ['keyword_data.keyword_info.search_volume,desc'],
  }]);
  if (!resp) return [];

  const items: any[] = resp.tasks?.[0]?.result?.[0]?.items ?? [];
  return items.map((i: any) => ({
    keyword: i.keyword_data?.keyword ?? '',
    volume: i.keyword_data?.keyword_info?.search_volume ?? 0,
    competition: i.keyword_data?.keyword_info?.competition ?? 0,
    comp_level: i.keyword_data?.keyword_info?.competition_level ?? '?',
    cpc: i.keyword_data?.keyword_info?.cpc ?? 0,
    source: `related:${seed}`,
  })).filter((k: KW) => k.keyword.length > 0);
}

// ── Approach 2: What keywords do competitors rank for? ──
async function getCompetitorKeywords(domain: string): Promise<KW[]> {
  console.log(`  ranked_keywords: ${domain}`);
  const resp = await api('dataforseo_labs/google/ranked_keywords/live', [{
    target: domain,
    language_code: 'en',
    location_code: 2840,
    limit: 200,
    order_by: ['keyword_data.keyword_info.search_volume,desc'],
    filters: [['keyword_data.keyword_info.search_volume', '>', 10]],
  }]);
  if (!resp) return [];

  const items: any[] = resp.tasks?.[0]?.result?.[0]?.items ?? [];
  return items.map((i: any) => ({
    keyword: i.keyword_data?.keyword ?? '',
    volume: i.keyword_data?.keyword_info?.search_volume ?? 0,
    competition: i.keyword_data?.keyword_info?.competition ?? 0,
    comp_level: i.keyword_data?.keyword_info?.competition_level ?? '?',
    cpc: i.keyword_data?.keyword_info?.cpc ?? 0,
    source: `competitor:${domain}`,
  })).filter((k: KW) => k.keyword.length > 0);
}

// ── Approach 3: SERP for specific queries to see who ranks ──
async function getSerpResults(keyword: string): Promise<{ keyword: string; results: Array<{ domain: string; title: string; position: number }> }> {
  console.log(`  serp: "${keyword}"`);
  const resp = await api('serp/google/organic/live/advanced', [{
    keyword,
    location_name: 'Charlotte,North Carolina,United States',
    language_code: 'en',
    device: 'desktop',
    depth: 20,
  }]);
  if (!resp) return { keyword, results: [] };

  const items: any[] = resp.tasks?.[0]?.result?.[0]?.items ?? [];
  return {
    keyword,
    results: items
      .filter((i: any) => i.type === 'organic')
      .map((i: any) => ({
        domain: i.domain ?? '',
        title: i.title ?? '',
        position: i.rank_group ?? 0,
      })),
  };
}

// ── Relevance filter ──
function isCommercialConstruction(kw: string): boolean {
  const l = kw.toLowerCase();

  // Must contain a construction-related term
  const constructionTerms = [
    'construct', 'contractor', 'builder', 'build', 'upfit', 'buildout',
    'build out', 'renovation', 'remodel', 'tenant improvement', 'leasehold',
    'general contractor', 'design build', 'design-build', 'roofing', 'roof coat',
    'painting contractor', 'flooring', 'plumbing contractor', 'electrical contractor',
    'hvac contractor', 'permit', 'inspection', 'ada', 'leed', 'green build',
    'sustainable', 'pre-construction', 'preconstruction', 'construction management',
    'space planning', 'commercial', 'industrial', 'warehouse', 'office build',
    'office renovation', 'office remodel', 'retail build', 'restaurant build',
    'restaurant construct', 'medical office', 'healthcare construct', 'dental office',
    'hotel renovation', 'hospitality', 'facility', 'commercial paint',
    'commercial floor', 'interior renovation', 'commercial repair',
    'commercial maintenance', 'building contractor', 'subcontractor',
  ];

  const hasConstruction = constructionTerms.some(t => l.includes(t));
  if (!hasConstruction) return false;

  // Exclude
  const excludeTerms = [
    'salary', 'jobs', 'hiring', 'career', 'degree', 'school', 'training',
    'home depot', 'lowes', 'menards', 'walmart', 'amazon', 'yelp', 'thumbtack',
    'angi', 'youtube', 'diy', 'reddit', 'facebook',
    'new home', 'home builder', 'home construction', 'house build',
  ];
  if (excludeTerms.some(t => l.includes(t))) return false;

  return true;
}

async function main() {
  console.log('=== DataForSEO v3: Commercial Construction Services Research ===\n');

  const allKws = new Map<string, KW>();
  const addKw = (kw: KW) => {
    if (!isCommercialConstruction(kw.keyword)) return;
    const existing = allKws.get(kw.keyword);
    if (!existing || existing.volume < kw.volume) allKws.set(kw.keyword, kw);
  };

  // ── Step 1: Related keywords for high-value seeds ──
  console.log('── Step 1: Related Keywords ──');
  const seeds = [
    'commercial contractor Charlotte NC',
    'commercial upfit Charlotte NC',
    'tenant improvement contractor Charlotte',
    'office buildout contractor Charlotte NC',
    'commercial renovation Charlotte NC',
    'commercial construction Charlotte NC',
    'design build contractor Charlotte NC',
    'commercial remodeling Charlotte NC',
    'restaurant construction contractor',
    'retail construction contractor',
    'medical office construction',
    'commercial roof coating contractor',
    'construction management company',
    'pre-construction services',
    'commercial general contractor',
    'tenant buildout',
    'commercial interior renovation',
    'warehouse construction contractor',
    'ADA compliance contractor',
    'green building contractor',
  ];

  for (const seed of seeds) {
    const results = await getRelatedKeywords(seed);
    results.forEach(addKw);
    await new Promise(r => setTimeout(r, 400));
  }

  console.log(`\n  ✓ ${allKws.size} relevant keywords from related searches\n`);

  // ── Step 2: Competitor ranked keywords ──
  console.log('── Step 2: Competitor Ranked Keywords ──');
  const competitors = [
    'nancegc.com',
    'kmdconstruction.net',
    'magnoliaconstruction.com',
    'gaisconstruction.com',
    'ranger-construction.com',
    'gibsoncustomconstruction.com',
    'jforrestdevelopment.com',
  ];

  for (const domain of competitors) {
    const results = await getCompetitorKeywords(domain);
    results.forEach(addKw);
    await new Promise(r => setTimeout(r, 400));
  }

  console.log(`\n  ✓ ${allKws.size} total relevant keywords after competitor analysis\n`);

  // ── Step 3: SERP analysis for top commercial searches ──
  console.log('── Step 3: SERP Analysis (who ranks in Charlotte?) ──');
  const serpQueries = [
    'commercial general contractor Charlotte NC',
    'commercial upfit Charlotte NC',
    'tenant improvement contractor Charlotte NC',
    'office buildout Charlotte NC',
    'commercial renovation contractor Charlotte NC',
    'design build contractor Charlotte NC',
    'commercial construction company Charlotte NC',
    'restaurant construction Charlotte NC',
    'retail buildout contractor Charlotte NC',
    'commercial roof coating Charlotte NC',
    'construction management Charlotte NC',
    'medical office construction Charlotte NC',
  ];

  const serpResults: Array<{ keyword: string; results: Array<{ domain: string; title: string; position: number }> }> = [];
  for (const q of serpQueries) {
    const sr = await getSerpResults(q);
    serpResults.push(sr);
    await new Promise(r => setTimeout(r, 500));
  }

  console.log(`\n  ✓ SERP data collected for ${serpResults.length} queries\n`);

  // ── Build Report ──
  const sorted = Array.from(allKws.values()).sort((a, b) => b.volume - a.volume);

  // Categorize
  function categorize(kw: string): string {
    const l = kw.toLowerCase();
    if (l.includes('upfit') || l.includes('buildout') || l.includes('build out') || l.includes('build-out') || l.includes('tenant improvement') || l.includes('leasehold'))
      return 'Commercial Upfits, Buildouts & Tenant Improvements';
    if (l.includes('design build') || l.includes('design-build')) return 'Design-Build Services';
    if (l.includes('construction management') || l.includes('project management')) return 'Construction Management';
    if (l.includes('pre-construction') || l.includes('preconstruction')) return 'Pre-Construction Planning';
    if (l.includes('restaurant') || l.includes('kitchen') || l.includes('hospitality') || l.includes('hotel')) return 'Restaurant & Hospitality Construction';
    if (l.includes('office') && !l.includes('medical')) return 'Office Construction & Renovation';
    if (l.includes('retail') || l.includes('store ') || l.includes('shopping')) return 'Retail Construction & Buildouts';
    if (l.includes('medical') || l.includes('healthcare') || l.includes('dental') || l.includes('clinic')) return 'Medical & Healthcare Construction';
    if (l.includes('warehouse') || l.includes('industrial') || l.includes('distribution')) return 'Industrial & Warehouse Construction';
    if (l.includes('roof')) return 'Commercial Roof Coating & Restoration';
    if (l.includes('green') || l.includes('leed') || l.includes('sustainable')) return 'Sustainable / Green Building';
    if (l.includes('ada') || l.includes('compliance') || l.includes('permit') || l.includes('inspection')) return 'ADA Compliance, Permits & Inspections';
    if (l.includes('paint')) return 'Commercial Painting';
    if (l.includes('floor')) return 'Commercial Flooring';
    if (l.includes('hvac')) return 'Commercial HVAC';
    if (l.includes('electric')) return 'Commercial Electrical';
    if (l.includes('plumb')) return 'Commercial Plumbing';
    if (l.includes('renovation') || l.includes('remodel')) return 'Commercial Renovation & Remodeling';
    if (l.includes('interior')) return 'Commercial Interior Renovation';
    if (l.includes('cost') || l.includes('price') || l.includes('how much')) return 'Cost & Planning (Blog Topics)';
    return 'General Commercial Contracting';
  }

  const buckets: Record<string, KW[]> = {};
  for (const kw of sorted) {
    const cat = categorize(kw.keyword);
    (buckets[cat] ??= []).push(kw);
  }

  const catEntries = Object.entries(buckets)
    .map(([cat, kws]) => ({ cat, kws, total: kws.reduce((s, k) => s + k.volume, 0) }))
    .sort((a, b) => b.total - a.total);

  let r = `# Commercial Construction Services — DataForSEO Research Report\n\n`;
  r += `**Date:** ${new Date().toISOString().split('T')[0]}\n`;
  r += `**Methods:** Related keywords, Competitor ranked keywords, Charlotte SERP analysis\n`;
  r += `**Focus:** What commercial property managers/owners search when looking for remodeling, upfits, buildouts\n`;
  r += `**Total relevant keywords:** ${sorted.length}\n`;
  r += `**Competitors analyzed:** ${competitors.join(', ')}\n\n---\n\n`;

  // SERP Analysis section
  r += `## SERP Analysis: Who Ranks in Charlotte for Key Searches\n\n`;
  for (const sr of serpResults) {
    if (sr.results.length === 0) {
      r += `### "${sr.keyword}"\nNo SERP data available.\n\n`;
      continue;
    }
    r += `### "${sr.keyword}"\n`;
    r += `| Pos | Domain | Title |\n|-----|--------|-------|\n`;
    for (const res of sr.results.slice(0, 10)) {
      r += `| ${res.position} | ${res.domain} | ${res.title.slice(0, 60)} |\n`;
    }
    r += `\n`;
  }

  // Keywords table
  r += `---\n\n## All Commercial Keywords (${sorted.length} keywords)\n\n`;
  r += `| # | Keyword | Volume | Comp | CPC | Category | Source |\n`;
  r += `|---|---------|--------|------|-----|----------|--------|\n`;
  for (let i = 0; i < sorted.length; i++) {
    const kw = sorted[i];
    r += `| ${i + 1} | ${kw.keyword} | ${kw.volume.toLocaleString()} | ${kw.comp_level} | $${kw.cpc.toFixed(2)} | ${categorize(kw.keyword)} | ${kw.source.split(':')[0]} |\n`;
  }

  // Category summaries
  r += `\n---\n\n## Service Categories Ranked by Search Demand\n\n`;
  for (const { cat, kws, total } of catEntries) {
    r += `### ${cat}\n`;
    r += `**Total:** ${total.toLocaleString()}/mo | **Keywords:** ${kws.length}\n\n`;
    r += `| Keyword | Volume | CPC |\n|---------|--------|-----|\n`;
    for (const kw of kws.slice(0, 20)) {
      r += `| ${kw.keyword} | ${kw.volume.toLocaleString()} | $${kw.cpc.toFixed(2)} |\n`;
    }
    r += `\n`;
  }

  // GBP + Website Recommendations
  r += `---\n\n## GBP Service Categories to Add\n\n`;
  r += `These should be listed as services on Google Business Profile:\n\n`;
  let n = 1;
  for (const { cat, total } of catEntries) {
    if (cat.includes('Blog') || cat.includes('Cost')) continue;
    r += `${n}. **${cat}** (${total.toLocaleString()} monthly searches)\n`;
    n++;
  }

  r += `\n---\n\n## Website Pages: Current vs Needed\n\n`;
  r += `| Service | URL | Status | Volume |\n`;
  r += `|---------|-----|--------|--------|\n`;
  const pages = [
    { name: 'Commercial Construction', slug: 'commercial-construction', exists: true },
    { name: 'Commercial Upfits', slug: 'commercial-upfits', exists: true },
    { name: 'Design-Build', slug: 'design-build', exists: true },
    { name: 'General Contractor', slug: 'general-contractor', exists: true },
    { name: 'Residential Additions', slug: 'residential-additions', exists: true },
    { name: 'Custom Home Builder', slug: 'custom-home-builder', exists: true },
    { name: 'Roof Coating', slug: 'roof-coating', exists: true },
    { name: 'Tenant Improvements', slug: 'tenant-improvements', exists: false },
    { name: 'Office Buildouts & Renovation', slug: 'office-buildouts', exists: false },
    { name: 'Restaurant & Hospitality Construction', slug: 'restaurant-construction', exists: false },
    { name: 'Retail Construction & Buildouts', slug: 'retail-construction', exists: false },
    { name: 'Medical & Healthcare Construction', slug: 'medical-construction', exists: false },
    { name: 'Industrial & Warehouse Construction', slug: 'industrial-construction', exists: false },
    { name: 'Commercial Renovation & Remodeling', slug: 'commercial-renovation', exists: false },
    { name: 'Construction Management', slug: 'construction-management', exists: false },
    { name: 'Pre-Construction Planning', slug: 'pre-construction', exists: false },
    { name: 'Green Building / USGBC', slug: 'green-building', exists: false },
    { name: 'ADA Compliance & Code Updates', slug: 'ada-compliance', exists: false },
    { name: 'Commercial Painting', slug: 'commercial-painting', exists: false },
    { name: 'Commercial Flooring', slug: 'commercial-flooring', exists: false },
    { name: 'Commercial Interior Renovation', slug: 'commercial-interior-renovation', exists: false },
  ];

  for (const p of pages) {
    const matchCat = catEntries.find(c =>
      c.cat.toLowerCase().includes(p.name.toLowerCase().split(' ')[0]) ||
      p.name.toLowerCase().includes(c.cat.toLowerCase().split(' ')[0])
    );
    const vol = matchCat ? matchCat.total.toLocaleString() : '—';
    r += `| ${p.name} | /services/${p.slug} | ${p.exists ? '✅ Exists' : '🆕 Create'} | ${vol} |\n`;
  }

  const outPath = path.resolve(process.cwd(), 'research', `commercial-services-v3-${new Date().toISOString().split('T')[0]}.md`);
  fs.writeFileSync(outPath, r, 'utf-8');
  console.log(`\n✅ Report: ${outPath}`);
  console.log(`📊 ${sorted.length} keywords | ${catEntries.length} categories | ${serpResults.length} SERPs`);
}

main().catch(e => { console.error(e); process.exit(1); });
