-- Projects table for portfolio admin
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  category TEXT NOT NULL CHECK (category IN ('commercial', 'residential', 'roof-coating')),
  service_type TEXT NOT NULL,
  short_description TEXT NOT NULL,
  ai_content TEXT,
  ai_meta_title TEXT,
  ai_meta_description TEXT,
  address TEXT,
  city TEXT NOT NULL DEFAULT 'Charlotte',
  state TEXT NOT NULL DEFAULT 'NC',
  zip TEXT,
  latitude DOUBLE PRECISION,
  longitude DOUBLE PRECISION,
  neighborhood TEXT,
  images JSONB DEFAULT '[]',
  featured_image TEXT,
  square_footage INTEGER,
  completion_date TEXT,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);

-- Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Admin access (authenticated users)
CREATE POLICY "Authenticated users can manage projects" ON projects
  FOR ALL USING (auth.role() = 'authenticated');

-- Public read access for published projects
CREATE POLICY "Public can read published projects" ON projects
  FOR SELECT USING (status = 'published');
