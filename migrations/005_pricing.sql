-- Pricing management table (admin-editable, site-wide consumption)
CREATE TABLE IF NOT EXISTS pricing (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  item_key TEXT UNIQUE NOT NULL,
  label TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'roof_coating',
  price_min NUMERIC(8,2) NOT NULL,
  price_max NUMERIC(8,2) NOT NULL,
  unit TEXT NOT NULL DEFAULT 'sq ft',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE pricing ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Authenticated users can manage pricing" ON pricing;
CREATE POLICY "Authenticated users can manage pricing" ON pricing
  FOR ALL USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS "Public can read pricing" ON pricing;
CREATE POLICY "Public can read pricing" ON pricing
  FOR SELECT USING (true);

-- Seed default consumer-facing pricing (includes labor)
INSERT INTO pricing (item_key, label, category, price_min, price_max, unit) VALUES
  ('silicone_coating', 'Silicone Roof Coating', 'roof_coating', 9.00, 12.00, 'sq ft'),
  ('acrylic_coating', 'Acrylic Roof Coating', 'roof_coating', 8.00, 10.00, 'sq ft'),
  ('polyurethane_coating', 'Polyurethane Roof Coating', 'roof_coating', 9.00, 12.00, 'sq ft'),
  ('elastomeric_coating', 'Elastomeric Roof Coating', 'roof_coating', 8.50, 11.00, 'sq ft'),
  ('roof_replacement', 'Full Roof Replacement', 'roof_replacement', 12.00, 20.00, 'sq ft')
ON CONFLICT (item_key) DO NOTHING;
