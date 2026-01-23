/**
 * WordPress GraphQL Client
 * Connects to headless WordPress via WPGraphQL plugin
 */

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || 'https://your-wordpress-site.com/graphql';

interface GraphQLResponse<T> {
  data: T;
  errors?: Array<{ message: string }>;
}

export async function fetchGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>,
  options?: { revalidate?: number; tags?: string[] }
): Promise<T> {
  const { revalidate = 3600, tags = [] } = options || {};

  const res = await fetch(WORDPRESS_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
    next: {
      revalidate,
      tags,
    },
  });

  if (!res.ok) {
    throw new Error(`WordPress API error: ${res.status}`);
  }

  const json: GraphQLResponse<T> = await res.json();

  if (json.errors) {
    console.error('GraphQL errors:', json.errors);
    throw new Error(json.errors[0]?.message || 'GraphQL error');
  }

  return json.data;
}

// Fetch with ISR (Incremental Static Regeneration)
export async function fetchWithISR<T>(
  query: string,
  variables?: Record<string, unknown>,
  revalidateSeconds = 60
): Promise<T> {
  return fetchGraphQL<T>(query, variables, { revalidate: revalidateSeconds });
}

// Fetch with on-demand revalidation tags
export async function fetchWithTags<T>(
  query: string,
  variables?: Record<string, unknown>,
  tags: string[] = []
): Promise<T> {
  return fetchGraphQL<T>(query, variables, { tags });
}
