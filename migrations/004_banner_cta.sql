-- Banner CTA settings (single row, upserted)
CREATE TABLE IF NOT EXISTS banner_cta (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  enabled BOOLEAN NOT NULL DEFAULT FALSE,
  text TEXT NOT NULL DEFAULT '',
  link_url TEXT DEFAULT '',
  link_label TEXT DEFAULT '',
  bg_color TEXT DEFAULT '#1a1a2e',
  text_color TEXT DEFAULT '#ffffff',
  dismissible BOOLEAN DEFAULT TRUE,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE banner_cta ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Authenticated users can manage banner" ON banner_cta;
CREATE POLICY "Authenticated users can manage banner" ON banner_cta
  FOR ALL USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS "Public can read banner" ON banner_cta;
CREATE POLICY "Public can read banner" ON banner_cta
  FOR SELECT USING (true);

-- Seed a default row
INSERT INTO banner_cta (enabled, text, link_url, link_label)
VALUES (false, 'Free consultation for commercial projects — limited time!', '/contact', 'Get Started')
ON CONFLICT DO NOTHING;
