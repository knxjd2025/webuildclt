/**
 * DataForSEO Research: Commercial construction services keywords
 * Focus: What commercial property managers/owners search for
 * when looking for remodeling, upfits, buildouts, and related services
 */

import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const LOGIN = process.env.DATAFORSEO_LOGIN!;
const PASSWORD = process.env.DATAFORSEO_PASSWORD!;

if (!LOGIN || !PASSWORD) {
  console.error('Missing DATAFORSEO_LOGIN or DATAFORSEO_PASSWORD in .env.local');
  process.exit(1);
}

const AUTH = Buffer.from(`${LOGIN}:${PASSWORD}`).toString('base64');

interface KeywordItem {
  keyword: string;
  search_volume: number;
  competition: number;
  competition_level: string;
  cpc: number;
  monthly_searches?: Array<{ month: number; year: number; search_volume: number }>;
}

async function dataforseoRequest(endpoint: string, body: unknown[]): Promise<any> {
  const res = await fetch(`https://api.dataforseo.com/v3/${endpoint}`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${AUTH}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`DataForSEO API error (${res.status}): ${text}`);
  }

  return res.json();
}

function parseKeywordItems(response: any): KeywordItem[] {
  const tasks = response?.tasks ?? [];
  const items: any[] = tasks[0]?.result?.[0]?.items ?? [];

  return items.map((item: any) => ({
    keyword: item.keyword,
    search_volume: item.keyword_info?.search_volume ?? 0,
    competition: item.keyword_info?.competition ?? 0,
    competition_level: item.keyword_info?.competition_level ?? 'UNKNOWN',
    cpc: item.keyword_info?.cpc ?? 0,
    monthly_searches: item.keyword_info?.monthly_searches,
  }));
}

// Seed keyword groups — what commercial property managers/owners actually search
const SEED_GROUPS = {
  'Commercial Upfits & Buildouts': [
    'commercial upfit Charlotte NC',
    'office buildout contractor Charlotte',
    'tenant improvement Charlotte NC',
    'commercial buildout Charlotte',
    'leasehold improvement contractor Charlotte',
    'tenant buildout Charlotte NC',
  ],
  'Commercial Remodeling & Renovation': [
    'commercial remodeling Charlotte NC',
    'commercial renovation contractor Charlotte',
    'office renovation Charlotte NC',
    'commercial interior renovation Charlotte',
    'building renovation contractor Charlotte NC',
    'commercial space renovation Charlotte',
  ],
  'Property Type - Office': [
    'office construction Charlotte NC',
    'office space buildout Charlotte',
    'corporate office renovation Charlotte',
    'office interior construction Charlotte NC',
    'co-working space buildout Charlotte',
  ],
  'Property Type - Retail': [
    'retail construction Charlotte NC',
    'retail buildout contractor Charlotte',
    'store buildout Charlotte NC',
    'retail space renovation Charlotte',
    'shopping center renovation Charlotte',
  ],
  'Property Type - Restaurant/Hospitality': [
    'restaurant construction Charlotte NC',
    'restaurant buildout Charlotte NC',
    'commercial kitchen construction Charlotte',
    'hotel renovation contractor Charlotte',
    'bar construction Charlotte NC',
  ],
  'Property Type - Medical/Healthcare': [
    'medical office buildout Charlotte NC',
    'healthcare construction Charlotte',
    'dental office construction Charlotte NC',
    'clinic construction Charlotte NC',
    'medical facility renovation Charlotte',
  ],
  'Property Type - Industrial/Warehouse': [
    'warehouse construction Charlotte NC',
    'industrial construction Charlotte NC',
    'warehouse renovation Charlotte',
    'industrial buildout Charlotte NC',
    'distribution center construction Charlotte',
  ],
  'Construction Services': [
    'design build Charlotte NC',
    'construction management Charlotte NC',
    'pre-construction services Charlotte',
    'general contractor commercial Charlotte NC',
    'commercial general contractor Charlotte',
    'construction project management Charlotte',
  ],
  'Specialty Services': [
    'commercial roof coating Charlotte NC',
    'commercial painting Charlotte NC',
    'commercial flooring Charlotte NC',
    'commercial HVAC installation Charlotte',
    'commercial electrical contractor Charlotte NC',
    'commercial plumbing Charlotte NC',
    'ADA compliance construction Charlotte',
    'fire damage restoration commercial Charlotte',
  ],
  'Property Manager Searches': [
    'commercial property renovation Charlotte',
    'building maintenance contractor Charlotte NC',
    'property improvement contractor Charlotte',
    'commercial building upgrade Charlotte',
    'facility renovation Charlotte NC',
    'building code compliance Charlotte NC',
    'commercial space planning Charlotte',
    'commercial interior design build Charlotte',
  ],
  'Cost & Planning Searches': [
    'commercial construction cost Charlotte NC',
    'office buildout cost per square foot Charlotte',
    'tenant improvement allowance Charlotte',
    'commercial renovation cost Charlotte',
    'how much does commercial upfit cost Charlotte',
  ],
  'Green Building / Sustainability': [
    'green building contractor Charlotte NC',
    'LEED construction Charlotte NC',
    'sustainable construction Charlotte',
    'energy efficient building Charlotte NC',
    'USGBC contractor Charlotte',
  ],
};

async function researchGroup(groupName: string, seeds: string[]): Promise<KeywordItem[]> {
  console.log(`\n🔍 Researching: ${groupName}`);
  console.log(`   Seeds: ${seeds.slice(0, 3).join(', ')}...`);

  try {
    // Get keyword ideas
    const response = await dataforseoRequest(
      'dataforseo_labs/google/keyword_ideas/live',
      [{
        keywords: seeds,
        language_code: 'en',
        location_code: 2840, // United States
        limit: 100,
        order_by: ['keyword_info.search_volume,desc'],
        filters: [
          ['keyword_info.search_volume', '>', 5],
        ],
      }]
    );

    const items = parseKeywordItems(response);
    console.log(`   Found ${items.length} keywords`);
    return items;
  } catch (error: any) {
    console.error(`   ❌ Error: ${error.message}`);

    // Fallback: try keyword suggestions with first seed
    try {
      console.log(`   Trying suggestions fallback...`);
      const response = await dataforseoRequest(
        'dataforseo_labs/google/keyword_suggestions/live',
        [{
          keyword: seeds[0],
          language_code: 'en',
          location_code: 2840,
          limit: 50,
          order_by: ['keyword_info.search_volume,desc'],
        }]
      );
      const items = parseKeywordItems(response);
      console.log(`   Fallback found ${items.length} keywords`);
      return items;
    } catch (fallbackError: any) {
      console.error(`   ❌ Fallback also failed: ${fallbackError.message}`);
      return [];
    }
  }
}

async function main() {
  console.log('=== DataForSEO Commercial Construction Keyword Research ===');
  console.log('Target: Commercial property managers & owners in Charlotte NC');
  console.log(`Date: ${new Date().toISOString().split('T')[0]}`);
  console.log('');

  const allResults: Map<string, { item: KeywordItem; group: string }> = new Map();

  for (const [groupName, seeds] of Object.entries(SEED_GROUPS)) {
    const items = await researchGroup(groupName, seeds);

    for (const item of items) {
      const existing = allResults.get(item.keyword);
      if (!existing || existing.item.search_volume < item.search_volume) {
        allResults.set(item.keyword, { item, group: groupName });
      }
    }

    // Rate limiting — DataForSEO allows ~2 req/sec
    await new Promise(resolve => setTimeout(resolve, 600));
  }

  // Sort by search volume
  const sorted = Array.from(allResults.entries())
    .map(([keyword, { item, group }]) => ({ ...item, group }))
    .sort((a, b) => b.search_volume - a.search_volume);

  // Filter to Charlotte-relevant and commercial-relevant
  const commercialKeywords = sorted.filter(kw => {
    const lower = kw.keyword.toLowerCase();
    // Exclude residential-only terms
    if (lower.includes('home ') || lower.includes('house ') || lower.includes('residential')) {
      if (!lower.includes('commercial')) return false;
    }
    // Exclude irrelevant
    if (lower.includes('salary') || lower.includes('jobs') || lower.includes('hiring') || lower.includes('career')) return false;
    if (lower.includes('diy') || lower.includes('youtube')) return false;
    return true;
  });

  // Build report
  let report = `# DataForSEO Commercial Services Keyword Research\n`;
  report += `**Date:** ${new Date().toISOString().split('T')[0]}\n`;
  report += `**Focus:** Commercial property managers & owners — Charlotte NC\n`;
  report += `**Total unique keywords found:** ${commercialKeywords.length}\n`;
  report += `**Seed groups queried:** ${Object.keys(SEED_GROUPS).length}\n\n`;
  report += `---\n\n`;

  // Top 50 keywords table
  report += `## Top 50 Keywords by Search Volume\n\n`;
  report += `| # | Keyword | Volume | Competition | CPC | Category |\n`;
  report += `|---|---------|--------|-------------|-----|----------|\n`;
  for (let i = 0; i < Math.min(50, commercialKeywords.length); i++) {
    const kw = commercialKeywords[i];
    report += `| ${i + 1} | ${kw.keyword} | ${kw.search_volume.toLocaleString()} | ${kw.competition_level} (${(kw.competition * 100).toFixed(0)}%) | $${kw.cpc.toFixed(2)} | ${kw.group} |\n`;
  }

  // Group by category
  report += `\n---\n\n## Keywords by Service Category\n\n`;
  const groupedByCategory = new Map<string, typeof commercialKeywords>();
  for (const kw of commercialKeywords) {
    const group = groupedByCategory.get(kw.group) ?? [];
    group.push(kw);
    groupedByCategory.set(kw.group, group);
  }

  for (const [group, keywords] of groupedByCategory) {
    report += `### ${group}\n\n`;
    report += `| Keyword | Volume | Competition | CPC |\n`;
    report += `|---------|--------|-------------|-----|\n`;
    for (const kw of keywords.slice(0, 20)) {
      report += `| ${kw.keyword} | ${kw.search_volume.toLocaleString()} | ${kw.competition_level} | $${kw.cpc.toFixed(2)} |\n`;
    }
    report += `\n`;
  }

  // GBP Service Recommendations
  report += `---\n\n## Recommended GBP Service Categories\n\n`;
  report += `Based on search volume data, these services should be listed on Google Business Profile:\n\n`;

  // Group keywords into service buckets for GBP
  const serviceBuckets: Record<string, { keywords: string[]; totalVolume: number }> = {};
  for (const kw of commercialKeywords.slice(0, 200)) {
    const lower = kw.keyword.toLowerCase();
    let bucket = 'Other';

    if (lower.includes('upfit') || lower.includes('buildout') || lower.includes('build out') || lower.includes('build-out')) bucket = 'Commercial Upfits & Buildouts';
    else if (lower.includes('tenant improvement') || lower.includes('leasehold')) bucket = 'Tenant Improvements';
    else if (lower.includes('renovation') || lower.includes('remodel')) bucket = 'Commercial Renovation & Remodeling';
    else if (lower.includes('design build') || lower.includes('design-build')) bucket = 'Design-Build Services';
    else if (lower.includes('construction management') || lower.includes('project management')) bucket = 'Construction Management';
    else if (lower.includes('pre-construction') || lower.includes('preconstruction')) bucket = 'Pre-Construction Planning';
    else if (lower.includes('restaurant') || lower.includes('kitchen') || lower.includes('bar ') || lower.includes('brewery')) bucket = 'Restaurant & Hospitality Construction';
    else if (lower.includes('office')) bucket = 'Office Construction & Renovation';
    else if (lower.includes('retail') || lower.includes('store') || lower.includes('shopping')) bucket = 'Retail Construction & Buildouts';
    else if (lower.includes('medical') || lower.includes('healthcare') || lower.includes('dental') || lower.includes('clinic')) bucket = 'Medical & Healthcare Facility Construction';
    else if (lower.includes('warehouse') || lower.includes('industrial') || lower.includes('distribution')) bucket = 'Industrial & Warehouse Construction';
    else if (lower.includes('roof') || lower.includes('coating')) bucket = 'Commercial Roof Coating & Restoration';
    else if (lower.includes('green') || lower.includes('leed') || lower.includes('sustainable') || lower.includes('energy efficient')) bucket = 'Sustainable / Green Building';
    else if (lower.includes('ada') || lower.includes('compliance') || lower.includes('code')) bucket = 'ADA Compliance & Code Updates';
    else if (lower.includes('general contractor') || lower.includes('commercial contractor')) bucket = 'Commercial General Contracting';
    else if (lower.includes('painting') || lower.includes('flooring') || lower.includes('hvac') || lower.includes('electrical') || lower.includes('plumbing')) bucket = 'Specialty Trades';
    else if (lower.includes('cost') || lower.includes('price') || lower.includes('how much')) bucket = 'Cost & Planning (Blog Content)';

    if (!serviceBuckets[bucket]) serviceBuckets[bucket] = { keywords: [], totalVolume: 0 };
    serviceBuckets[bucket].keywords.push(kw.keyword);
    serviceBuckets[bucket].totalVolume += kw.search_volume;
  }

  const sortedBuckets = Object.entries(serviceBuckets)
    .filter(([name]) => name !== 'Other' && name !== 'Cost & Planning (Blog Content)')
    .sort((a, b) => b[1].totalVolume - a[1].totalVolume);

  report += `| # | GBP Service | Total Search Volume | Top Keywords |\n`;
  report += `|---|------------|--------------------|--------------|\n`;
  for (let i = 0; i < sortedBuckets.length; i++) {
    const [name, data] = sortedBuckets[i];
    report += `| ${i + 1} | **${name}** | ${data.totalVolume.toLocaleString()}/mo | ${data.keywords.slice(0, 3).join(', ')} |\n`;
  }

  // Website page recommendations
  report += `\n---\n\n## Recommended Website Service Pages\n\n`;
  report += `Based on keyword data, create these service pages (ordered by search demand):\n\n`;
  for (let i = 0; i < sortedBuckets.length; i++) {
    const [name, data] = sortedBuckets[i];
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    report += `${i + 1}. **${name}** → \`/services/${slug}\`\n`;
    report += `   - Volume: ${data.totalVolume.toLocaleString()}/mo across ${data.keywords.length} keywords\n`;
    report += `   - Target: ${data.keywords.slice(0, 5).join(', ')}\n\n`;
  }

  // Blog content opportunities from cost/planning bucket
  if (serviceBuckets['Cost & Planning (Blog Content)']) {
    report += `\n---\n\n## Blog Content Opportunities (Cost & Planning Searches)\n\n`;
    report += `These are informational searches — best served by blog posts:\n\n`;
    for (const kw of serviceBuckets['Cost & Planning (Blog Content)'].keywords) {
      report += `- ${kw}\n`;
    }
  }

  // Write report
  const outputPath = path.resolve(process.cwd(), 'research', `commercial-services-keywords-${new Date().toISOString().split('T')[0]}.md`);
  fs.writeFileSync(outputPath, report, 'utf-8');
  console.log(`\n✅ Report saved to: ${outputPath}`);
  console.log(`📊 Total unique commercial keywords: ${commercialKeywords.length}`);
  console.log(`📋 Service categories identified: ${sortedBuckets.length}`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
