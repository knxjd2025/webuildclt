/**
 * Blog categories — used by category pages and sitemap.
 * All blog content is stored in Supabase (no more static data files).
 */

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  categorySlug: string;
  image: string;
  author: string;
}

export const categories: Record<string, string> = {
  'roof-coating': 'Roof Coating',
  'commercial-construction': 'Commercial Construction',
  'charlotte-area': 'Charlotte Area',
  'construction-tips': 'Construction Tips',
  'green-building': 'Green Building',
  'company-news': 'Company News',
  'brewery-construction': 'Brewery Construction',
  'drone-inspections': 'Drone Inspections',
  'medical-construction': 'Medical Construction',
  'cost-guides': 'Cost Guides',
  'commercial-upfits': 'Commercial Upfits',
};

/** All blog posts — now empty, Supabase is the source of truth */
export const blogPosts: BlogPost[] = [];

export function getPostsByCategory(_categorySlug: string): BlogPost[] {
  return [];
}

export function getRelatedPosts(_currentSlug: string, _limit = 2): BlogPost[] {
  return [];
}

export function getAllSlugs(): string[] {
  return [];
}

export function getAllCategorySlugs(): string[] {
  return Object.keys(categories);
}

export function getPostBySlug(_slug: string): BlogPost | undefined {
  return undefined;
}
