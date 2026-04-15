/**
 * Server-side pricing helper — fetches pricing from Supabase
 * and returns a map keyed by item_key for easy consumption.
 */

import { createAdminClient } from '@/lib/supabase';

export interface PricingItem {
  id: string;
  item_key: string;
  label: string;
  category: string;
  price_min: number;
  price_max: number;
  unit: string;
  updated_at: string;
}

/** Fallback pricing used when Supabase is unreachable */
const FALLBACK_PRICING: Record<string, PricingItem> = {
  silicone_coating: {
    id: '',
    item_key: 'silicone_coating',
    label: 'Silicone Roof Coating',
    category: 'roof_coating',
    price_min: 9,
    price_max: 12,
    unit: 'sq ft',
    updated_at: '',
  },
  acrylic_coating: {
    id: '',
    item_key: 'acrylic_coating',
    label: 'Acrylic Roof Coating',
    category: 'roof_coating',
    price_min: 8,
    price_max: 10,
    unit: 'sq ft',
    updated_at: '',
  },
  polyurethane_coating: {
    id: '',
    item_key: 'polyurethane_coating',
    label: 'Polyurethane Roof Coating',
    category: 'roof_coating',
    price_min: 9,
    price_max: 12,
    unit: 'sq ft',
    updated_at: '',
  },
  elastomeric_coating: {
    id: '',
    item_key: 'elastomeric_coating',
    label: 'Elastomeric Roof Coating',
    category: 'roof_coating',
    price_min: 8.5,
    price_max: 11,
    unit: 'sq ft',
    updated_at: '',
  },
  roof_replacement: {
    id: '',
    item_key: 'roof_replacement',
    label: 'Full Roof Replacement',
    category: 'roof_replacement',
    price_min: 12,
    price_max: 20,
    unit: 'sq ft',
    updated_at: '',
  },
};

/**
 * Fetch all pricing items from Supabase, keyed by item_key.
 * Falls back to hardcoded defaults if Supabase is unavailable.
 */
export async function getPricing(): Promise<Record<string, PricingItem>> {
  try {
    const admin = createAdminClient();
    const { data, error } = await admin
      .from('pricing')
      .select('*')
      .order('category')
      .order('label');

    if (error || !data || data.length === 0) {
      return FALLBACK_PRICING;
    }

    const map: Record<string, PricingItem> = {};
    for (const item of data) {
      map[item.item_key] = {
        ...item,
        price_min: Number(item.price_min),
        price_max: Number(item.price_max),
      };
    }
    return map;
  } catch {
    return FALLBACK_PRICING;
  }
}

/** Format a pricing item as "$X\u2013$Y/unit" for display */
export function formatPriceRange(item: PricingItem): string {
  const min = item.price_min % 1 === 0 ? item.price_min.toFixed(0) : item.price_min.toFixed(2);
  const max = item.price_max % 1 === 0 ? item.price_max.toFixed(0) : item.price_max.toFixed(2);
  return `$${min}\u2013$${max}/${item.unit}`;
}
