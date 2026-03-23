'use client';

import { useEffect, useState, useCallback } from 'react';
import { AdminShell } from '@/components/admin/AdminShell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save, Loader2, Eye, X } from 'lucide-react';

interface BannerSettings {
  enabled: boolean;
  text: string;
  link_url: string;
  link_label: string;
  bg_color: string;
  text_color: string;
  dismissible: boolean;
}

const DEFAULT: BannerSettings = {
  enabled: false,
  text: '',
  link_url: '',
  link_label: '',
  bg_color: '#1a1a2e',
  text_color: '#ffffff',
  dismissible: true,
};

export default function BannerCTAPage() {
  const [settings, setSettings] = useState<BannerSettings>(DEFAULT);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch('/api/admin/banner')
      .then((res) => res.json())
      .then((data) => setSettings({ ...DEFAULT, ...data }))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const handleSave = useCallback(async () => {
    setSaving(true);
    setSaved(false);
    try {
      const res = await fetch('/api/admin/banner', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        alert(err.error ?? 'Failed to save banner settings');
        return;
      }

      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } finally {
      setSaving(false);
    }
  }, [settings]);

  function update<K extends keyof BannerSettings>(
    key: K,
    value: BannerSettings[K]
  ) {
    setSettings((prev) => ({ ...prev, [key]: value }));
  }

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
        <h1 className="text-2xl font-bold text-foreground">Banner CTA</h1>
        <p className="text-muted-foreground mt-1">
          Show a promotional banner at the top of every page.
        </p>
      </div>

      <div className="max-w-2xl space-y-6">
        {/* Live preview */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-muted-foreground" />
              <CardTitle className="text-base">Live Preview</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            {settings.enabled && settings.text ? (
              <div
                className="relative rounded-lg overflow-hidden"
                style={{
                  backgroundColor: settings.bg_color,
                  color: settings.text_color,
                }}
              >
                <div className="px-4 py-2.5 flex items-center justify-center gap-4 text-sm">
                  <p className="font-medium">{settings.text}</p>
                  {settings.link_url && settings.link_label && (
                    <span
                      className="shrink-0 rounded-md px-3 py-1 text-sm font-semibold"
                      style={{
                        backgroundColor: settings.text_color,
                        color: settings.bg_color,
                      }}
                    >
                      {settings.link_label}
                    </span>
                  )}
                  {settings.dismissible && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 opacity-50">
                      <X className="h-4 w-4" />
                    </span>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-sm text-muted-foreground text-center py-4 border border-dashed rounded-lg">
                {settings.enabled
                  ? 'Enter banner text to see preview'
                  : 'Banner is disabled — toggle it on below'}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            {/* Enabled toggle */}
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-sm font-medium">Show Banner</Label>
                <p className="text-xs text-muted-foreground">
                  Display the banner on all public pages
                </p>
              </div>
              <button
                role="switch"
                aria-checked={settings.enabled}
                onClick={() => update('enabled', !settings.enabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.enabled ? 'bg-green-600' : 'bg-muted-foreground/30'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.enabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Banner text */}
            <div className="space-y-2">
              <Label htmlFor="banner-text">Banner Text</Label>
              <Textarea
                id="banner-text"
                value={settings.text}
                onChange={(e) => update('text', e.target.value)}
                placeholder="Free consultation for commercial projects — limited time!"
                className="min-h-[60px]"
              />
            </div>

            {/* Link */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="link-url">Link URL</Label>
                <Input
                  id="link-url"
                  value={settings.link_url}
                  onChange={(e) => update('link_url', e.target.value)}
                  placeholder="/contact"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="link-label">Button Label</Label>
                <Input
                  id="link-label"
                  value={settings.link_label}
                  onChange={(e) => update('link_label', e.target.value)}
                  placeholder="Get Started"
                />
              </div>
            </div>

            {/* Colors */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="bg-color">Background Color</Label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    id="bg-color"
                    value={settings.bg_color}
                    onChange={(e) => update('bg_color', e.target.value)}
                    className="h-10 w-12 rounded border cursor-pointer"
                  />
                  <Input
                    value={settings.bg_color}
                    onChange={(e) => update('bg_color', e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="text-color">Text Color</Label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    id="text-color"
                    value={settings.text_color}
                    onChange={(e) => update('text_color', e.target.value)}
                    className="h-10 w-12 rounded border cursor-pointer"
                  />
                  <Input
                    value={settings.text_color}
                    onChange={(e) => update('text_color', e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>
            </div>

            {/* Dismissible */}
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-sm font-medium">Dismissible</Label>
                <p className="text-xs text-muted-foreground">
                  Allow visitors to close the banner
                </p>
              </div>
              <button
                role="switch"
                aria-checked={settings.dismissible}
                onClick={() => update('dismissible', !settings.dismissible)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.dismissible ? 'bg-green-600' : 'bg-muted-foreground/30'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.dismissible ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Save */}
        <div className="flex items-center gap-3">
          <Button onClick={handleSave} disabled={saving}>
            {saving ? (
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
            ) : (
              <Save className="h-4 w-4 mr-2" />
            )}
            Save Banner
          </Button>
          {saved && (
            <span className="text-sm text-green-600 font-medium">
              Saved successfully!
            </span>
          )}
        </div>
      </div>
    </AdminShell>
  );
}
