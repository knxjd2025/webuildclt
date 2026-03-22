-- Blog posts table
CREATE TABLE IF NOT EXISTS blogs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT,
  category TEXT NOT NULL DEFAULT 'commercial-construction',
  category_slug TEXT NOT NULL DEFAULT 'commercial-construction',
  primary_keyword TEXT,
  secondary_keywords TEXT[] DEFAULT '{}',
  meta_title TEXT,
  meta_description TEXT,
  featured_image TEXT,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'generating', 'review', 'published', 'scheduled')),
  scheduled_at TIMESTAMPTZ,
  auto_generated BOOLEAN DEFAULT FALSE,
  generation_source TEXT DEFAULT 'manual',
  word_count INTEGER DEFAULT 0,
  author TEXT DEFAULT 'We Build Team',
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);
CREATE INDEX IF NOT EXISTS idx_blogs_status ON blogs(status);
CREATE INDEX IF NOT EXISTS idx_blogs_category ON blogs(category_slug);
CREATE INDEX IF NOT EXISTS idx_blogs_published ON blogs(published_at DESC);

-- Blog media (images/videos, max 10 per blog)
CREATE TABLE IF NOT EXISTS blog_media (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  blog_id UUID NOT NULL REFERENCES blogs(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  storage_path TEXT,
  alt_text TEXT,
  media_type TEXT NOT NULL DEFAULT 'image' CHECK (media_type IN ('image', 'video')),
  sort_order INTEGER DEFAULT 0,
  width INTEGER,
  height INTEGER,
  file_size INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_blog_media_blog ON blog_media(blog_id);

-- Automation log for weekly blog generation and page updates
CREATE TABLE IF NOT EXISTS auto_blog_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type TEXT NOT NULL CHECK (type IN ('weekly_blog', 'page_update')),
  blog_id UUID REFERENCES blogs(id),
  keyword TEXT,
  page_updated TEXT,
  status TEXT NOT NULL CHECK (status IN ('started', 'completed', 'failed')),
  error_message TEXT,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_media ENABLE ROW LEVEL SECURITY;
ALTER TABLE auto_blog_log ENABLE ROW LEVEL SECURITY;

-- RLS policies: allow authenticated users full access (admin only)
CREATE POLICY "Authenticated users can manage blogs" ON blogs
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage blog media" ON blog_media
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can view auto blog log" ON auto_blog_log
  FOR ALL USING (auth.role() = 'authenticated');

-- Public read access for published blogs
CREATE POLICY "Public can read published blogs" ON blogs
  FOR SELECT USING (status = 'published');

CREATE POLICY "Public can read published blog media" ON blog_media
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM blogs WHERE blogs.id = blog_media.blog_id AND blogs.status = 'published')
  );
