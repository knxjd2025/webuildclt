/**
 * DataForSEO keyword research integration
 * Finds the best keyword opportunity based on a user's description and category
 */

interface KeywordData {
  keyword: string;
  searchVolume: number;
  competition: number;
  cpc: number;
}

interface DataForSEOKeywordResult {
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchVolume: number;
  suggestedTitle: string;
}

function getAuth(): string {
  const login = process.env.DATAFORSEO_LOGIN;
  const password = process.env.DATAFORSEO_PASSWORD;
  if (!login || !password) {
    throw new Error('DATAFORSEO_LOGIN and DATAFORSEO_PASSWORD must be set');
  }
  return Buffer.from(`${login}:${password}`).toString('base64');
}

async function dataforseoRequest(endpoint: string, body: unknown[]): Promise<unknown> {
  const res = await fetch(`https://api.dataforseo.com/v3/${endpoint}`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${getAuth()}`,
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

/**
 * Extract seed keywords from a user's description using simple NLP.
 * Pulls 2-4 word phrases that are likely search terms.
 */
function extractSeedKeywords(description: string, category: string): string[] {
  const categoryMap: Record<string, string[]> = {
    'commercial-construction': ['commercial construction', 'commercial building', 'office construction'],
    'commercial-upfits': ['commercial upfit', 'tenant improvement', 'office renovation'],
    'roof-coating': ['roof coating', 'commercial roofing', 'roof restoration'],
    'construction-tips': ['construction tips', 'building guide', 'construction advice'],
    'green-building': ['green building', 'sustainable construction', 'LEED construction'],
    'charlotte-area': ['Charlotte construction', 'Charlotte contractor', 'Charlotte NC builder'],
    'company-news': ['construction company', 'builder news', 'contractor update'],
  };

  const seeds = categoryMap[category] ?? ['construction Charlotte NC'];

  // Add Charlotte geo modifier to the description keywords
  const descWords = description.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
  if (descWords.length > 3) {
    seeds.push(`${descWords} Charlotte NC`);
    seeds.push(descWords);
  }

  return seeds.slice(0, 5);
}

/**
 * Find the best keyword opportunity using DataForSEO.
 * 1. Gets keyword suggestions based on seeds derived from description + category
 * 2. Filters for achievable keywords (decent volume, low-medium competition)
 * 3. Returns the best primary keyword + secondary keywords
 */
export async function findKeywordWithDataForSEO(
  description: string,
  category: string,
  existingKeywords: string[] = []
): Promise<DataForSEOKeywordResult> {
  const seeds = extractSeedKeywords(description, category);

  console.log(`[dataforseo] Finding keywords for seeds: ${seeds.join(', ')}`);

  // Step 1: Get keyword ideas from DataForSEO Labs
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let keywordIdeas: any;
  try {
    keywordIdeas = await dataforseoRequest(
      'dataforseo_labs/google/keyword_ideas/live',
      [{
        keywords: seeds,
        language_code: 'en',
        location_name: 'United States',
        limit: 50,
        order_by: ['keyword_info.search_volume,desc'],
        filters: [
          ['keyword_info.search_volume', '>', 10],
          'and',
          ['keyword_info.competition_level', 'in', ['LOW', 'MEDIUM']],
        ],
      }]
    );
  } catch (error) {
    console.warn(`[dataforseo] Keyword ideas failed, trying suggestions:`, error);
    // Fallback to keyword suggestions endpoint
    keywordIdeas = await dataforseoRequest(
      'dataforseo_labs/google/keyword_suggestions/live',
      [{
        keyword: seeds[0],
        language_code: 'en',
        location_name: 'United States',
        limit: 30,
        order_by: ['keyword_info.search_volume,desc'],
      }]
    );
  }

  // Parse results
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tasks = (keywordIdeas as any)?.tasks ?? [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const items: any[] = tasks[0]?.result?.[0]?.items ?? [];

  if (items.length === 0) {
    console.warn('[dataforseo] No keyword ideas returned, using description as fallback');
    return {
      primaryKeyword: description,
      secondaryKeywords: seeds,
      searchVolume: 0,
      suggestedTitle: description,
    };
  }

  // Filter out already-used keywords
  const existingSet = new Set(existingKeywords.map(k => k.toLowerCase()));
  const candidates: KeywordData[] = items
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .map((item: any) => ({
      keyword: item.keyword as string,
      searchVolume: (item.keyword_info?.search_volume ?? 0) as number,
      competition: (item.keyword_info?.competition ?? 0) as number,
      cpc: (item.keyword_info?.cpc ?? 0) as number,
    }))
    .filter((kw: KeywordData) => !existingSet.has(kw.keyword.toLowerCase()))
    .filter((kw: KeywordData) => kw.keyword.split(' ').length >= 2); // prefer multi-word

  if (candidates.length === 0) {
    return {
      primaryKeyword: description,
      secondaryKeywords: seeds,
      searchVolume: 0,
      suggestedTitle: description,
    };
  }

  // Score: prefer higher volume + lower competition
  const scored = candidates.map(kw => ({
    ...kw,
    score: kw.searchVolume * (1 - kw.competition * 0.5),
  }));
  scored.sort((a, b) => b.score - a.score);

  const primary = scored[0];
  const secondary = scored.slice(1, 8).map(kw => kw.keyword);

  console.log(`[dataforseo] Best keyword: "${primary.keyword}" (vol: ${primary.searchVolume}, comp: ${primary.competition})`);

  return {
    primaryKeyword: primary.keyword,
    secondaryKeywords: secondary,
    searchVolume: primary.searchVolume,
    suggestedTitle: primary.keyword,
  };
}
