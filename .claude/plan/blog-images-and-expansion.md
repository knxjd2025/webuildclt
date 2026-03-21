# Implementation Plan: Blog Image Generation & SEO Content Expansion

## Current State

- **100 blog posts** in `src/data/blog-posts.ts` across 8 categories
- Blog images reference `/images/blog/*.jpg` but **the directory doesn't exist** — all 100 posts have broken image paths
- **7 service pages**: commercial-construction, commercial-upfits, custom-home-builder, design-build, general-contractor, residential-additions, roof-coating
- **3 area pages**: fort-mill-sc, lake-norman, south-charlotte
- **API keys available**: OPENAI_API_KEY (DALL-E), GEMINI_API_KEY (Imagen)
- Blog posts are static data in TypeScript (no CMS), rendered via Next.js App Router

## Task Type
- [x] Backend (image generation scripts)
- [x] Frontend (blog data updates)
- [x] Fullstack

## Phase 1: Image Generation Infrastructure

### Step 1.1: Create Image Generation Script

Create `scripts/generate-blog-images.ts` — a Node.js script that:

1. Reads all blog posts from `src/data/blog-posts.ts`
2. For each post missing an image in `public/images/blog/`:
   - Generates a prompt from the post title + category
   - Calls OpenAI DALL-E 3 API (`1792x1024`, landscape, construction/architecture style)
   - Falls back to Gemini Imagen if DALL-E fails
   - Saves the image to `public/images/blog/{slug}.jpg`
   - Optimizes with sharp (resize to 1200px wide, 80% quality)
3. Tracks progress, handles rate limits with delays
4. Can resume (skips images that already exist)

**Key details:**
- DALL-E 3: `POST https://api.openai.com/v1/images/generations` with `model: "dall-e-3"`, `size: "1792x1024"`
- Gemini Imagen: Use `@google/generative-ai` package, `gemini-2.0-flash-preview-image-generation` model
- Prompt template: `"Hyper-realistic photograph of {title context}. Shot on Canon EOS R5 with 24-70mm f/2.8 lens, natural lighting, shallow depth of field. Commercial construction scene in Charlotte, North Carolina. Photojournalistic documentary style. ABSOLUTELY NO TEXT, NO WORDS, NO LETTERS, NO NUMBERS, NO LOGOS, NO WATERMARKS, NO SIGNS, NO LABELS anywhere in the image. Pure photographic image only."`
- **CRITICAL image rules**:
  - Every prompt MUST include explicit "no text" instructions — DALL-E tends to add text unless strongly told not to
  - Style: hyper-realistic, photographic, documentary — NOT rendered, NOT illustrated, NOT 3D
  - Lighting: natural daylight, golden hour, or professional construction site lighting
  - Composition: editorial magazine quality, rule of thirds, environmental context
  - If generated image contains visible text/words, regenerate with stronger negative prompt
- Rate limit: 1 image per 12 seconds for DALL-E, batch of 5 then pause for Gemini

### Step 1.2: Generate Images for Existing 100 Posts

Run the script to generate all 100 blog images. This will take ~20 minutes with rate limiting.

**Expected output**: 100 optimized JPG images in `public/images/blog/`

## Phase 2: SEO Keyword Research

### Step 2.1: Define Service × Area Matrix

**Services** (what people search for):
| Service | Key Search Terms |
|---------|-----------------|
| Commercial Construction | commercial construction, commercial builder, commercial general contractor, commercial building contractor |
| Commercial Upfits | commercial upfit, tenant improvement, office renovation, office build-out, tenant build-out |
| Custom Home Builder | custom home builder, custom home construction, build a house, new home construction |
| General Contractor | general contractor, licensed contractor, construction company, building contractor |
| Residential Additions | home addition, room addition, house addition, second story addition |
| Roof Coating | commercial roof coating, roof restoration, roof coating contractor, roof sealant |
| Design-Build | design-build contractor, design build construction, design and build |
| Remodeling/Renovation | commercial remodeling, office remodeling, commercial renovation, building renovation |

**Areas** (where people search):
| Area | Key Modifiers |
|------|--------------|
| Charlotte NC | Charlotte, Charlotte NC, Charlotte North Carolina |
| South Charlotte | South Charlotte, Ballantyne, Pineville |
| Fort Mill SC | Fort Mill, Fort Mill SC, York County SC |
| Lake Norman | Lake Norman, Cornelius, Mooresville, Davidson |
| Huntersville | Huntersville NC, Huntersville |
| Matthews | Matthews NC, Mint Hill |
| Waxhaw | Waxhaw NC, Marvin, Weddington |

### Step 2.2: Blog Topic Generation (10 per service × area)

Target: **10 blogs per service per area** = 8 services × 7 areas × 10 = **560 new blog posts**

This is very large. **Recommended phased approach:**
- **Phase 2a**: 10 blogs per service (not area-specific) = 80 posts (on top of existing 100)
- **Phase 2b**: 5 location-specific blogs per service × area = 280 posts
- **Phase 2c**: Remaining 200 posts

For Phase 2a, topic patterns per service:

**Commercial Construction (10):**
1. "How to Choose a Commercial Construction Company in {area}"
2. "Commercial Construction Costs in {area}: Complete Breakdown"
3. "{type} Building Construction: What to Expect"
4. "Commercial Construction Timeline: How Long Does It Take?"
5. "Pre-Construction Planning Checklist for {area} Projects"
6. "Commercial Building Permits in Mecklenburg County"
7. "Design-Build vs. Traditional Commercial Construction"
8. "Commercial Construction Trends in Charlotte {year}"
9. "How to Finance a Commercial Construction Project"
10. "Choosing the Right Site for Commercial Construction in {area}"

(Similar patterns for each of the 8 services)

## Phase 3: Blog Content Generation

### Step 3.1: Create Blog Content Generation Script

Create `scripts/generate-blog-content.ts`:

1. Takes a topic list (JSON) as input
2. For each topic, generates:
   - Full HTML blog content (800-1500 words)
   - SEO meta title (< 60 chars)
   - SEO meta description (< 155 chars)
   - Target keywords
3. Uses Gemini for content generation (cost-effective for long-form)
4. Includes internal links to relevant service and area pages
5. Outputs as TypeScript blog post objects ready to append to `blog-posts.ts`

### Step 3.2: Generate Blog Image for Each New Post

Same script from Phase 1, run after content generation.

### Step 3.3: Update Blog Data File

Append new posts to `src/data/blog-posts.ts` organized by cluster.

### Step 3.4: Add New Categories

Add new categories for the expanded content:
```typescript
export const categories: Record<string, string> = {
  // existing...
  'commercial-upfits': 'Commercial Upfits',
  'custom-homes': 'Custom Homes',
  'general-contracting': 'General Contracting',
  'home-additions': 'Home Additions',
  'design-build': 'Design-Build',
  'remodeling': 'Remodeling',
};
```

## Phase 4: Area-Specific Blog Content

### Step 4.1: Generate Location-Specific Blogs

For each area × service combo, generate blogs that:
- Target "{service} in {area}" keywords
- Reference local landmarks, neighborhoods, corridors
- Include internal links to both the service page and area page
- Use geo-specific language for AI citation optimization

### Step 4.2: Create New Area Pages (if needed)

Add area pages for Huntersville, Matthews, Waxhaw if they don't exist yet.

## Implementation Steps (Execution Order)

1. **Install dependencies**: `@google/generative-ai`, `openai` (if not installed)
2. **Create `scripts/generate-blog-images.ts`** — image generation script
3. **Run image generation** for existing 100 posts
4. **Create `scripts/generate-blog-topics.ts`** — topic research & generation
5. **Create `scripts/generate-blog-content.ts`** — content generation
6. **Generate Phase 2a content** — 80 new service-focused posts
7. **Generate images** for new posts
8. **Update `src/data/blog-posts.ts`** — append new posts
9. **Update categories** and category pages
10. **Generate Phase 2b content** — area-specific posts (next session)

## Key Files

| File | Operation | Description |
|------|-----------|-------------|
| `scripts/generate-blog-images.ts` | Create | Image generation script (DALL-E + Gemini) |
| `scripts/generate-blog-content.ts` | Create | Blog content generation script |
| `scripts/generate-blog-topics.ts` | Create | Topic/keyword research script |
| `src/data/blog-posts.ts` | Modify | Add new blog posts |
| `public/images/blog/*.jpg` | Create | Generated blog images |
| `.env.local` | Read | API keys (already configured) |

## Risks and Mitigation

| Risk | Mitigation |
|------|------------|
| DALL-E rate limits (5/min) | 12-second delay between calls, retry with exponential backoff |
| Gemini image quality | Use as fallback only, prefer DALL-E 3 for quality |
| API costs (~$0.04/image DALL-E) | 100 images = ~$4, 560 = ~$22 |
| Content quality/duplication | Review generated content, use specific prompts per topic |
| Blog data file size | Split into separate files per cluster if > 5000 lines |
| Build time with 600+ static pages | Next.js ISR handles this well, but may need pagination |

## Estimated API Costs

- **Existing 100 blog images** (DALL-E 3): ~$4.00
- **80 new blog posts** (Gemini content): ~$0.50
- **80 new blog images** (DALL-E 3): ~$3.20
- **Total Phase 2a**: ~$7.70
- **Full 560 posts** (all phases): ~$35

## SESSION_ID
- CODEX_SESSION: N/A (not used)
- GEMINI_SESSION: N/A (not used)
