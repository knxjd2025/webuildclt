'use client';

import { useEffect, useState, useCallback } from 'react';
import { AdminShell } from '@/components/admin/AdminShell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save, Loader2, DollarSign } from 'lucide-react';

interface PricingItem {
  id: string;
  item_key: string;
  label: string;
  category: string;
  price_min: number;
  price_max: number;
  unit: string;
  updated_at: string;
}

export default function PricingPage() {
  const [items, setItems] = useState<PricingItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingKey, setSavingKey] = useState<string | null>(null);
  const [savedKey, setSavedKey] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/admin/pricing')
      .then((res) => res.json())
      .then((data: PricingItem[]) => setItems(data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const updateItem = useCallback(
    (itemKey: string, field: 'price_min' | 'price_max', value: string) => {
      setItems((prev) =>
        prev.map((item) =>
          item.item_key === itemKey
            ? { ...item, [field]: parseFloat(value) || 0 }
            : item
        )
      );
    },
    []
  );

  const handleSave = useCallback(
    async (item: PricingItem) => {
      setSavingKey(item.item_key);
      setSavedKey(null);
      try {
        const res = await fetch('/api/admin/pricing', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            item_key: item.item_key,
            price_min: item.price_min,
            price_max: item.price_max,
          }),
        });

        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          alert(err.error ?? 'Failed to save pricing');
          return;
        }

        setSavedKey(item.item_key);
        setTimeout(() => setSavedKey(null), 3000);
      } finally {
        setSavingKey(null);
      }
    },
    []
  );

  const handleSaveAll = useCallback(async () => {
    setSavingKey('__all__');
    setSavedKey(null);
    try {
      for (const item of items) {
        const res = await fetch('/api/admin/pricing', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            item_key: item.item_key,
            price_min: item.price_min,
            price_max: item.price_max,
          }),
        });

        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          alert(`Failed to save ${item.label}: ${err.error ?? 'Unknown error'}`);
          return;
        }
      }

      setSavedKey('__all__');
      setTimeout(() => setSavedKey(null), 3000);
    } finally {
      setSavingKey(null);
    }
  }, [items]);

  if (loading) {
    return (
      <AdminShell>
        <div className="text-center py-12 text-muted-foreground">Loading...</div>
      </AdminShell>
    );
  }

  return (
    <AdminShell>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Pricing</h1>
        <p className="text-muted-foreground mt-1">
          Manage service pricing displayed across the website. Changes reflect site-wide.
        </p>
      </div>

      <div className="max-w-3xl space-y-6">
        {/* Pricing items */}
        {items.map((item) => (
          <Card key={item.item_key}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <CardTitle className="text-base">{item.label}</CardTitle>
                </div>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                  {item.category.replace('_', ' ')}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-[1fr_1fr_auto_auto] gap-4 items-end">
                <div className="space-y-2">
                  <Label htmlFor={`${item.item_key}-min`}>Min Price (per {item.unit})</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      $
                    </span>
                    <Input
                      id={`${item.item_key}-min`}
                      type="number"
                      step="0.50"
                      min="0"
                      value={item.price_min}
                      onChange={(e) => updateItem(item.item_key, 'price_min', e.target.value)}
                      className="pl-7"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`${item.item_key}-max`}>Max Price (per {item.unit})</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      $
                    </span>
                    <Input
                      id={`${item.item_key}-max`}
                      type="number"
                      step="0.50"
                      min="0"
                      value={item.price_max}
                      onChange={(e) => updateItem(item.item_key, 'price_max', e.target.value)}
                      className="pl-7"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="invisible">Preview</Label>
                  <div className="text-sm font-medium text-foreground whitespace-nowrap px-3 py-2 bg-muted rounded-md">
                    ${item.price_min}{'\u2013'}${item.price_max}/{item.unit}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="invisible">Save</Label>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleSave(item)}
                    disabled={savingKey !== null}
                  >
                    {savingKey === item.item_key ? (
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    ) : (
                      <Save className="h-3.5 w-3.5" />
                    )}
                  </Button>
                </div>
              </div>
              {savedKey === item.item_key && (
                <p className="text-sm text-green-600 font-medium mt-2">Saved!</p>
              )}
            </CardContent>
          </Card>
        ))}

        {items.length === 0 && (
          <div className="text-center py-12 text-muted-foreground border border-dashed rounded-lg">
            No pricing items found. Run the database migration to seed default pricing.
          </div>
        )}

        {/* Save All */}
        {items.length > 0 && (
          <div className="flex items-center gap-3">
            <Button onClick={handleSaveAll} disabled={savingKey !== null}>
              {savingKey === '__all__' ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
              ) : (
                <Save className="h-4 w-4 mr-2" />
              )}
              Save All Pricing
            </Button>
            {savedKey === '__all__' && (
              <span className="text-sm text-green-600 font-medium">
                All pricing saved!
              </span>
            )}
          </div>
        )}
      </div>
    </AdminShell>
  );
}
