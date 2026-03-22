# Implementation Plan: Backend Blog & Project Upload System

## Current State

### Existing Infrastructure
- **Admin system**: Supabase auth, admin pages at `/admin/projects`, login page
- **Upload API**: `POST /api/admin/upload` — uploads to Supabase Storage `project-images` bucket
- **Project CRUD**: `GET/POST /api/admin/projects`, `GET/PUT/DELETE /api/admin/projects/[id]`
- **AI Content**: `POST /api/admin/projects/[id]/generate` — uses Anthropic Claude for project page content
- **Blog data**: Currently static TypeScript in `src/data/blog-posts.ts` (150 posts, no DB)
- **Supabase**: PostgreSQL + Storage + Auth configured
- **API Keys available**: `ANTHROPIC_API_KEY`, `GROQ_API_KEY` (Kimi K2), `GEMINI_API_KEY`, `OPENAI_API_KEY`
- **GROQ Model**: `moonshotai/kimi-k2-instruct` (Kimi K2 via Groq)

### What Needs Building
1. **Blog management system** (DB-backed, not static TypeScript)
2. **Project upload system** (extend existing for up to 50 images)
3. **AI content pipeline** (Groq/Kimi → Claude → publish)
4. **Automated weekly blog generation** (cron/scheduled)
5. **Automated weekly page updates** (refresh existing pages)

## Task Type
- [x] Backend (API routes, DB, AI pipeline, cron)
- [x] Frontend (Admin UI for blog/project management)
- [x] Fullstack

---

## Architecture Overview

```
Admin Dashboard
├── /admin/blogs          — Blog management (list, create, edit)
│   ├── Create Blog       — Upload images/videos (max 10), enter topic
│   │   └── AI Pipeline   — Groq/Kimi researches → Claude refines → Gemini images
│   ├── Edit Blog         — Edit content, manage media
│   └── Schedule          — Schedule publish, view auto-generated
├── /admin/projects       — Project management (existing, enhanced)
│   └── Upload up to 50 images per project
└── /admin/automation     — Cron settings, auto-blog status

API Routes
├── /api/admin/blogs                    — CRUD blogs
├── /api/admin/blogs/[id]               — Single blog CRUD
├── /api/admin/blogs/[id]/generate      — AI content generation
├── /api/admin/blogs/auto-generate      — Weekly auto-generation
├── /api/admin/upload                   — File upload (existing, enhanced)
└── /api/cron/weekly-blog               — Vercel Cron endpoint

Database (Supabase PostgreSQL)
├── blogs                 — Blog posts table
├── blog_media            — Blog images/videos
├── projects              — Projects table (existing)
├── project_images        — Project images (existing)
└── auto_blog_log         — Automation log
```

---

## Phase 1: Database Schema

### Step 1.1: Create `blogs` Table

```sql
CREATE TABLE IF NOT EXISTS blogs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT, -- HTML content (3000-5000 words)
  category TEXT NOT NULL DEFAULT 'commercial-construction',
  category_slug TEXT NOT NULL DEFAULT 'commercial-construction',
  primary_keyword TEXT,
  secondary_keywords TEXT[], -- array of keywords
  meta_title TEXT, -- SEO title < 60 chars
  meta_description TEXT, -- SEO description < 155 chars
  featured_image TEXT, -- URL to main image
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'generating', 'review', 'published', 'scheduled')),
  scheduled_at TIMESTAMPTZ, -- for scheduled publishing
  auto_generated BOOLEAN DEFAULT FALSE, -- true if created by weekly cron
  generation_source TEXT, -- 'manual' | 'auto_lsi' | 'auto_update'
  word_count INTEGER DEFAULT 0,
  author TEXT DEFAULT 'We Build Team',
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_blogs_slug ON blogs(slug);
CREATE INDEX idx_blogs_status ON blogs(status);
CREATE INDEX idx_blogs_category ON blogs(category_slug);
CREATE INDEX idx_blogs_published ON blogs(published_at DESC);
```

### Step 1.2: Create `blog_media` Table

```sql
CREATE TABLE IF NOT EXISTS blog_media (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  blog_id UUID NOT NULL REFERENCES blogs(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  storage_path TEXT, -- Supabase storage path
  alt_text TEXT,
  media_type TEXT NOT NULL DEFAULT 'image' CHECK (media_type IN ('image', 'video')),
  sort_order INTEGER DEFAULT 0,
  width INTEGER,
  height INTEGER,
  file_size INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_blog_media_blog ON blog_media(blog_id);
```

### Step 1.3: Create `auto_blog_log` Table

```sql
CREATE TABLE IF NOT EXISTS auto_blog_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type TEXT NOT NULL CHECK (type IN ('weekly_blog', 'page_update')),
  blog_id UUID REFERENCES blogs(id),
  keyword TEXT,
  page_updated TEXT, -- which page was updated
  status TEXT NOT NULL CHECK (status IN ('started', 'completed', 'failed')),
  error_message TEXT,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Step 1.4: Extend `projects` Table (if needed)

The existing projects table already supports images via `project_images`. Ensure it supports up to 50 images (no schema change needed, just UI validation).

### Step 1.5: Create Supabase Storage Bucket

Create a `blog-media` storage bucket alongside the existing `project-images` bucket.

---

## Phase 2: AI Content Generation Pipeline

### The Multi-Model Pipeline

```
User enters topic + uploads images
        │
        ▼
┌─────────────────────────┐
│  Step 1: RESEARCH        │
│  Groq API + Kimi K2      │
│  - Research the topic     │
│  - Find LSI keywords      │
│  - Gather facts & stats   │
│  - 3-5 second response    │
└────────┬────────────────┘
         │
         ▼
┌─────────────────────────┐
│  Step 2: DRAFT            │
│  Groq API + Kimi K2      │
│  - Write 3000-5000 word   │
│    blog post              │
│  - Include LSI keywords   │
│  - Charlotte/NC focus     │
│  - HTML formatted         │
└────────┬────────────────┘
         │
         ▼
┌─────────────────────────┐
│  Step 3: REFINE           │
│  Claude API (Anthropic)   │
│  - Enhance writing quality│
│  - Fix SEO issues         │
│  - Add internal links     │
│  - Ensure 3000-5000 words │
│  - Generate meta tags     │
└────────┬────────────────┘
         │
         ▼
┌─────────────────────────┐
│  Step 4: IMAGES (optional)│
│  Gemini API               │
│  - Generate supplementary │
│    images if needed        │
│  - User images are primary│
└────────┬────────────────┘
         │
         ▼
   Blog saved as 'review'
   User can edit → publish
```

### Step 2.1: Create AI Service Layer

**File: `src/lib/ai/blog-pipeline.ts`**

```typescript
interface BlogGenerationInput {
  topic: string;
  category: string;
  keywords?: string[];
  uploadedImages: string[]; // URLs of user-uploaded images
}

interface BlogGenerationResult {
  title: string;
  slug: string;
  content: string; // 3000-5000 words HTML
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  wordCount: number;
}

// Step 1: Research with Groq/Kimi K2
async function researchTopic(topic: string, category: string): Promise<ResearchResult>

// Step 2: Draft with Groq/Kimi K2
async function draftBlogPost(topic: string, research: ResearchResult): Promise<string>

// Step 3: Refine with Claude
async function refineBlogPost(draft: string, topic: string): Promise<BlogGenerationResult>

// Full pipeline
export async function generateBlogPost(input: BlogGenerationInput): Promise<BlogGenerationResult>
```

### Step 2.2: Groq/Kimi K2 Integration

**File: `src/lib/ai/groq-client.ts`**

```typescript
// Uses GROQ_API_KEY with model moonshotai/kimi-k2-instruct
// Endpoint: https://api.groq.com/openai/v1/chat/completions
// OpenAI-compatible API

import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function researchWithKimi(topic: string): Promise<string> {
  const response = await groq.chat.completions.create({
    model: process.env.GROQ_MODEL || 'moonshotai/kimi-k2-instruct',
    messages: [
      { role: 'system', content: RESEARCH_SYSTEM_PROMPT },
      { role: 'user', content: `Research this topic for a commercial construction blog: ${topic}` }
    ],
    max_tokens: 4096,
    temperature: 0.7,
  });
  return response.choices[0].message.content;
}

export async function draftWithKimi(topic: string, research: string): Promise<string> {
  const response = await groq.chat.completions.create({
    model: process.env.GROQ_MODEL || 'moonshotai/kimi-k2-instruct',
    messages: [
      { role: 'system', content: BLOG_DRAFT_SYSTEM_PROMPT },
      { role: 'user', content: `Write a 3000-5000 word blog...\nTopic: ${topic}\nResearch: ${research}` }
    ],
    max_tokens: 16384,
    temperature: 0.7,
  });
  return response.choices[0].message.content;
}
```

### Step 2.3: Claude Refinement Integration

**File: `src/lib/ai/claude-refiner.ts`**

```typescript
import Anthropic from '@anthropic-ai/sdk';

export async function refineWithClaude(draft: string, topic: string): Promise<RefinedResult> {
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 16384,
    system: REFINE_SYSTEM_PROMPT, // We Build context, SEO rules, internal linking
    messages: [
      { role: 'user', content: `Refine this blog post...\nTopic: ${topic}\nDraft:\n${draft}` }
    ],
  });

  // Parse response, extract content + meta
  return parseRefinedContent(response);
}
```

### Step 2.4: Gemini Image Generation (Supplementary)

**File: `src/lib/ai/gemini-images.ts`**

Uses Gemini for supplementary images when user hasn't uploaded enough. User-uploaded images are always primary.

---

## Phase 3: API Routes

### Step 3.1: Blog CRUD API

**File: `src/app/api/admin/blogs/route.ts`**

```
GET  /api/admin/blogs          — List all blogs (paginated, filterable)
POST /api/admin/blogs          — Create new blog (with topic, triggers AI pipeline)
```

**File: `src/app/api/admin/blogs/[id]/route.ts`**

```
GET    /api/admin/blogs/[id]   — Get single blog
PUT    /api/admin/blogs/[id]   — Update blog (edit content, change status)
DELETE /api/admin/blogs/[id]   — Delete blog
```

**File: `src/app/api/admin/blogs/[id]/generate/route.ts`**

```
POST /api/admin/blogs/[id]/generate — Trigger AI generation pipeline for a blog
```

**File: `src/app/api/admin/blogs/[id]/publish/route.ts`**

```
POST /api/admin/blogs/[id]/publish — Publish blog (sets status, updates blog-posts.ts or renders from DB)
```

### Step 3.2: Enhanced Upload API

Update `src/app/api/admin/upload/route.ts`:
- Accept `type` param: `'blog'` or `'project'`
- Route to appropriate storage bucket
- Accept video files for blogs (mp4, mov, webm)
- Validate limits: 10 files for blogs, 50 for projects

### Step 3.3: Weekly Cron Endpoint

**File: `src/app/api/cron/weekly-blog/route.ts`**

```
GET /api/cron/weekly-blog — Triggered by Vercel Cron or external scheduler
```

Logic:
1. Search for LSI keywords related to commercial construction in Charlotte
2. Pick the highest-opportunity keyword not yet covered
3. Run the full AI pipeline (Kimi research → Kimi draft → Claude refine)
4. Generate a Pexels stock image for the post
5. Save as `status: 'published'`, `auto_generated: true`
6. Log to `auto_blog_log`
7. Also: pick one existing page and update/enhance it with fresh data

### Step 3.4: Vercel Cron Configuration

**File: `vercel.json`**

```json
{
  "crons": [
    {
      "path": "/api/cron/weekly-blog",
      "schedule": "0 9 * * 1"
    }
  ]
}
```

Runs every Monday at 9 AM UTC.

---

## Phase 4: Blog Rendering (Hybrid Static + DB)

### Step 4.1: Rendering Strategy

Keep existing static blog posts in `blog-posts.ts` for performance. New DB-backed posts render alongside them.

**File: `src/data/blog-posts.ts`** — Add function to merge static + DB posts:

```typescript
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // Merge static posts + DB posts
  const dbPosts = await fetchDBBlogPosts();
  return [...blogPosts, ...dbPosts].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
```

### Step 4.2: Update Blog Pages

- `src/app/blog/page.tsx` — Fetch from merged source
- `src/app/blog/[slug]/page.tsx` — Check DB first, then static
- `src/app/blog/category/[slug]/page.tsx` — Same merged approach

### Step 4.3: ISR + On-Demand Revalidation

When a blog is published via admin, call the revalidation API:
```
POST /api/revalidate?secret=XXX&path=/blog
POST /api/revalidate?secret=XXX&path=/blog/[slug]
```

---

## Phase 5: Admin UI

### Step 5.1: Blog Management Page

**File: `src/app/admin/blogs/page.tsx`** (client component)

- Table of all blogs with status badges (draft, generating, review, published)
- Filter by category, status
- "New Blog" button
- Edit/Delete actions
- Auto-generated blogs marked with a badge

### Step 5.2: Blog Create/Edit Page

**File: `src/app/admin/blogs/new/page.tsx`**

- Topic input field
- Category selector (dropdown)
- Image/video uploader (drag & drop, max 10 files)
- "Generate with AI" button → triggers pipeline, shows progress
- Rich text editor for manual editing
- Preview pane
- Publish / Schedule / Save Draft buttons

### Step 5.3: Blog Editor Component

**File: `src/components/admin/BlogEditor.tsx`**

- Content editor (HTML-aware textarea or basic rich text)
- Image gallery panel (uploaded images, click to insert)
- SEO preview (title, description, slug)
- Word count display (target: 3000-5000)
- Status indicator

### Step 5.4: Media Uploader Component

**File: `src/components/admin/MediaUploader.tsx`**

- Drag & drop zone
- File type validation (images: jpg/png/webp, videos: mp4/mov/webm)
- Size limit display
- Upload progress bars
- Grid preview of uploaded files
- Reorder capability (drag to sort)
- Max file count enforcement (10 for blogs, 50 for projects)

### Step 5.5: Automation Dashboard

**File: `src/app/admin/automation/page.tsx`**

- Weekly auto-blog status (last run, next run)
- Log of all auto-generated posts
- Page update history
- Toggle auto-generation on/off
- Manual trigger button ("Generate Now")

### Step 5.6: Enhanced Project Upload

Update `src/app/admin/projects/new/page.tsx` and edit page:
- Increase image upload limit to 50
- Add image reordering
- Add bulk upload

---

## Phase 6: Weekly Automation Logic

### Step 6.1: LSI Keyword Discovery

**File: `src/lib/ai/lsi-keyword-finder.ts`**

Uses Kimi K2 via Groq to find untapped LSI keywords:

```typescript
async function findNextLSIKeyword(): Promise<string> {
  // 1. Get all existing blog keywords from DB + static posts
  // 2. Ask Kimi K2 for LSI keywords for commercial construction Charlotte
  // 3. Filter out already-covered keywords
  // 4. Return highest-opportunity uncovered keyword
}
```

### Step 6.2: Page Auto-Update

**File: `src/lib/ai/page-updater.ts`**

Weekly updates one page with fresh information:

```typescript
const UPDATABLE_PAGES = [
  '/services/commercial-construction',
  '/services/commercial-upfits',
  '/services/roof-coating',
  '/services/custom-home-builder',
  '/services/residential-additions',
  '/services/design-build',
  '/services/general-contractor',
  '/about',
  '/we-coat',
];

async function updateOnePage(): Promise<void> {
  // 1. Pick next page in rotation (round-robin from auto_blog_log)
  // 2. Read current page content
  // 3. Ask Kimi to research latest trends/stats for that topic
  // 4. Ask Claude to enhance the page with new info
  // 5. Write updated content
  // 6. Log the update
}
```

---

## Implementation Steps (Execution Order)

| Step | Task | Files | Depends On |
|------|------|-------|------------|
| 1 | Install `groq-sdk` package | package.json | — |
| 2 | Create DB migration SQL | migrations/002_blogs.sql | — |
| 3 | Run migration on Supabase | — | Step 2 |
| 4 | Create Supabase storage bucket `blog-media` | — | — |
| 5 | Create Groq/Kimi client | src/lib/ai/groq-client.ts | Step 1 |
| 6 | Create Claude refiner | src/lib/ai/claude-refiner.ts | — |
| 7 | Create blog pipeline orchestrator | src/lib/ai/blog-pipeline.ts | Steps 5,6 |
| 8 | Create blog CRUD API routes | src/app/api/admin/blogs/ | Step 3 |
| 9 | Enhance upload API for blogs/videos | src/app/api/admin/upload/route.ts | Step 4 |
| 10 | Create MediaUploader component | src/components/admin/MediaUploader.tsx | — |
| 11 | Create BlogEditor component | src/components/admin/BlogEditor.tsx | Step 10 |
| 12 | Create admin blog pages (list, new, edit) | src/app/admin/blogs/ | Steps 8,11 |
| 13 | Create LSI keyword finder | src/lib/ai/lsi-keyword-finder.ts | Step 5 |
| 14 | Create page updater | src/lib/ai/page-updater.ts | Step 6 |
| 15 | Create weekly cron endpoint | src/app/api/cron/weekly-blog/route.ts | Steps 7,13,14 |
| 16 | Add Vercel cron config | vercel.json | Step 15 |
| 17 | Update blog rendering to support DB posts | src/app/blog/, src/data/blog-posts.ts | Step 3 |
| 18 | Enhance project upload (50 images) | src/app/admin/projects/ | Step 10 |
| 19 | Create automation dashboard | src/app/admin/automation/page.tsx | Step 15 |
| 20 | Update admin nav with new sections | src/components/admin/AdminShell.tsx | Steps 12,19 |

---

## Key Files

| File | Operation | Description |
|------|-----------|-------------|
| `migrations/002_blogs.sql` | Create | Blog tables schema |
| `src/lib/ai/groq-client.ts` | Create | Groq/Kimi K2 API client |
| `src/lib/ai/claude-refiner.ts` | Create | Claude refinement service |
| `src/lib/ai/blog-pipeline.ts` | Create | Multi-model pipeline orchestrator |
| `src/lib/ai/lsi-keyword-finder.ts` | Create | Automated keyword discovery |
| `src/lib/ai/page-updater.ts` | Create | Weekly page enhancement |
| `src/app/api/admin/blogs/route.ts` | Create | Blog CRUD API |
| `src/app/api/admin/blogs/[id]/route.ts` | Create | Single blog API |
| `src/app/api/admin/blogs/[id]/generate/route.ts` | Create | AI generation endpoint |
| `src/app/api/cron/weekly-blog/route.ts` | Create | Weekly cron endpoint |
| `src/app/admin/blogs/page.tsx` | Create | Blog list admin page |
| `src/app/admin/blogs/new/page.tsx` | Create | Blog create page |
| `src/app/admin/blogs/[id]/edit/page.tsx` | Create | Blog edit page |
| `src/app/admin/automation/page.tsx` | Create | Automation dashboard |
| `src/components/admin/MediaUploader.tsx` | Create | Multi-file upload component |
| `src/components/admin/BlogEditor.tsx` | Create | Blog editing component |
| `src/app/api/admin/upload/route.ts` | Modify | Add blog/video support |
| `src/components/admin/AdminShell.tsx` | Modify | Add blog/automation nav |
| `src/data/blog-posts.ts` | Modify | Add DB merge function |
| `src/app/blog/page.tsx` | Modify | Support DB + static posts |
| `src/app/blog/[slug]/page.tsx` | Modify | Check DB then static |
| `vercel.json` | Create/Modify | Add cron schedule |

---

## Risks and Mitigation

| Risk | Mitigation |
|------|------------|
| Groq rate limits (Kimi K2) | Implement retry with backoff; cache research results |
| Blog content < 3000 words | Claude refinement step enforces word count; retry if under |
| Weekly cron fails silently | Log to `auto_blog_log`, alert on failure |
| Supabase Storage limits | Monitor usage; compress images before upload |
| Claude API costs for refinement | ~$0.10-0.30 per blog post; acceptable for weekly use |
| Large blog data file | Migrate to DB-only rendering over time; keep static as cache |
| Video upload size | Limit to 100MB per video; compress client-side |
| Stale page updates | Round-robin ensures all pages get updated; log prevents duplicates |

---

## API Cost Estimates (Per Blog Post)

| Step | Provider | Cost |
|------|----------|------|
| Research | Groq/Kimi K2 | Free (Groq free tier) |
| Draft | Groq/Kimi K2 | Free (Groq free tier) |
| Refine | Claude Sonnet 4 | ~$0.15-0.30 |
| Image (if needed) | Gemini | ~$0.01 |
| **Total per post** | | **~$0.20-0.35** |
| **Weekly auto-blog** | | **~$0.35/week** |

---

## SESSION_ID
- CODEX_SESSION: N/A (not used)
- GEMINI_SESSION: N/A (not used)
