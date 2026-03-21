-- Projects table for portfolio admin system
-- Run this in the Supabase SQL Editor

create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  category text not null check (category in ('commercial', 'residential', 'roof-coating')),
  service_type text not null default 'renovation',
  short_description text not null,
  ai_content text,
  ai_meta_title text,
  ai_meta_description text,
  address text,
  city text not null default 'Charlotte',
  state text not null default 'NC',
  zip text,
  latitude numeric,
  longitude numeric,
  neighborhood text,
  images jsonb not null default '[]'::jsonb,
  featured_image text,
  square_footage integer,
  completion_date date,
  status text not null default 'draft' check (status in ('draft', 'published')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Index for public queries
create index if not exists idx_projects_status on projects (status);
create index if not exists idx_projects_slug on projects (slug);
create index if not exists idx_projects_category on projects (category);

-- Auto-update updated_at
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger projects_updated_at
  before update on projects
  for each row
  execute function update_updated_at();

-- Row Level Security
alter table projects enable row level security;

-- Public can read published projects
create policy "Public can read published projects"
  on projects for select
  using (status = 'published');

-- Authenticated users can do everything (admin)
create policy "Authenticated users have full access"
  on projects for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- Storage bucket for project images
-- Run this separately or via the Supabase dashboard:
-- 1. Go to Storage > Create new bucket
-- 2. Name: "project-images"
-- 3. Public bucket: Yes
-- 4. File size limit: 10MB
-- 5. Allowed MIME types: image/jpeg, image/png, image/webp

-- Storage policies (run in SQL editor)
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'project-images',
  'project-images',
  true,
  10485760, -- 10MB
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do nothing;

-- Allow authenticated users to upload
create policy "Authenticated users can upload images"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'project-images');

-- Allow authenticated users to delete their uploads
create policy "Authenticated users can delete images"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'project-images');

-- Allow public to read images
create policy "Public can read project images"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'project-images');
