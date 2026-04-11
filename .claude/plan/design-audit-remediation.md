# Implementation Plan: Design Audit Remediation (Homepage / Header / Footer / Buttons / Theme)

## Task Type
- [x] Frontend
- [ ] Backend
- [ ] Fullstack

## Goal
Resolve the 25 issues from the design audit in 5 ordered phases, sequenced by blast radius (tokens first → component → layout → page → polish) so each phase compiles and ships independently.

---

## Phase 1 — Theme Token Foundation (unblocks everything)
**Why first:** every later phase references these tokens.

### 1.1 Add `--on-image` foreground tokens
- File: `src/app/globals.css`
- Add in `:root` and `.dark`:
  ```css
  --on-image: oklch(1 0 0);            /* white */
  --on-image-muted: oklch(1 0 0 / 0.85);
  --on-image-subtle: oklch(1 0 0 / 0.7);
  --scrim-from: oklch(0 0 0 / 0.65);
  --scrim-to:   oklch(0 0 0 / 0.15);
  --header-scrolled-bg: oklch(0.12 0.015 240 / 0.95);
  --dropdown-width: clamp(620px, 40vw, 720px);
  ```
- Add Tailwind utility shims (or use arbitrary `text-[var(--on-image)]`).

### 1.2 Add `prefers-reduced-motion` global guard
- In `globals.css`, wrap `btn-shimmer`, `cta-pulse`, `scroll-hint`, dropdown transitions:
  ```css
  @media (prefers-reduced-motion: reduce) {
    .btn-shimmer, .cta-pulse, [class*="animate-"] { animation: none !important; }
    *, *::before, *::after { transition-duration: 0.01ms !important; }
  }
  ```

**Deliverable:** tokens + reduced-motion guard. No visual change yet.

---

## Phase 2 — Button Component Hardening
Addresses issues #5, #6 (touch targets) and #25 (effect noise).

### 2.1 Resize defaults
- File: `src/components/ui/button.tsx:23-32`
- Change:
  - `default`: `h-9` → `h-11 px-5` (44px touch min)
  - `sm`: `h-8` → `h-10`
  - `lg`: `h-10` → `h-12 px-7`
  - `xs`: keep `h-6` but add JSDoc warning "non-touch contexts only"
  - `icon`: `size-9` → `size-11`; `icon-sm`: `size-8` → `size-10`
- Audit existing `<Button size="sm">` callsites; visual regressions expected on tight toolbars only.

### 2.2 Hero "outline-on-image" variant
- Add new variant `onImage` to `buttonVariants`:
  ```ts
  onImage: "border border-white/70 bg-black/30 text-white backdrop-blur-sm hover:bg-white hover:text-foreground"
  ```
- Resting opacity raised from `/10` → `/30` for AA contrast with white border.

**Deliverable:** all buttons ≥44px, hero CTAs use new `onImage` variant.

---

## Phase 3 — Header Refactor
Addresses #2, #3, #8, #11, #13, #16, #17, #21, #22, #23.

### 3.1 Force-opaque mode for non-hero routes
- File: `src/components/layout/Header.tsx`
- Add prop `variant?: 'transparent' | 'solid'` (default `'transparent'`).
- In `RootLayout` or per-route, pass `variant="solid"` for any page without a dark hero.
- When `variant === 'solid'`, skip the `bg-transparent` branch entirely; always render scrolled state.

### 3.2 Replace `top` transition with `transform`
- Line 105: drop `top` from `transition-[...]`. Animate via `translate-y` if banner shifts. Keep `top: var(--banner-height)` as positioning only.

### 3.3 Tokenize hard-coded values
- Line 107: `dark:bg-[oklch(...)]` → `dark:bg-[var(--header-scrolled-bg)]`
- Line 161: inline `style={{ width: 'max(620px, 40vw)', maxWidth: '720px' }}` → `style={{ width: 'var(--dropdown-width)' }}`

### 3.4 Mobile sheet touch targets
- Lines 277, 284, 300, 317, 327, 335, 343, 351, 359, 367, 383: `py-2`/`py-1.5` → `py-3 min-h-11`. Section headings stay `py-2`.

### 3.5 Dropdown focus + ref correctness
- Move `ref={dropdownRef}` from wrapper (line 132) onto the inner `<div role="menu">` (line 152). Update `closeDropdown` to return focus to the trigger via a `triggerRef`.
- On `Escape`, call `triggerRef.current?.focus()` after `setDropdownOpen(false)`.
- Cancel close timer on `focusin` inside menu.

### 3.6 Logo dark variant
- Add `/public/images/logo-dark.png` (or SVG with `currentColor`).
- Render two `<Image>` elements, one `dark:hidden`, one `hidden dark:block`. Or use a single SVG with theme-aware fill.

### 3.7 Split scrolled subtree (perf)
- Extract `<HeaderInner isScrolled={...} />` and `React.memo` it; only the bg wrapper re-renders on scroll. Optional — defer to Phase 5 if risk-averse.

**Deliverable:** Header passes a11y, no layout-prop animation, themeable, opaque on non-hero routes.

---

## Phase 4 — Homepage Surgery
Addresses #1, #7, #9, #10, #12, #18, #19.

### 4.1 Hero scrim
- File: `src/app/page.tsx:95-183`
- Add immediately after `<HeroSlideshow />`:
  ```tsx
  <div
    aria-hidden
    className="absolute inset-0 bg-gradient-to-b from-[var(--scrim-from)] via-[var(--scrim-from)]/40 to-transparent pointer-events-none"
  />
  ```
- Verify `HeroSlideshow` itself doesn't already render one (read `src/components/HeroSlideshow.tsx` first); if it does, harmonize rather than duplicate.

### 4.2 Replace `text-white` with token
- Lines 100, 104, 126, 144, 152, 169: `text-white` → `text-[var(--on-image)]`; `text-white/90` → `text-[var(--on-image-muted)]`.

### 4.3 Hero CTA cleanup
- Line 135: drop `cta-pulse`, keep `btn-shimmer` (or vice versa — pick one). Recommend keeping shimmer (subtler).
- Lines 141-148, 149-159: replace `variant="outline" className="bg-white/10 ..."` with new `variant="onImage"` from Phase 2.2.

### 4.4 H1 explicit sizing
- Line 100: add `text-4xl md:text-5xl lg:text-6xl tracking-tight`.

### 4.5 Section cull + lazy load
- Lines 185-200. Final order:
  ```
  StatsBar → AboutSection → ServicesGrid → WhyChooseUs →
  FeaturedProjects → ProcessTimeline → IndustriesSection →
  TestimonialSection → AreasSection → USGBCSection →
  FAQSection → CTASection
  ```
- **Remove from homepage:** `MarketInsightSection`, `FinanceSection`, `BlogPreview`, `VideoShowcase` (relocate to dedicated pages or About).
- Lazy-load below-fold sections:
  ```tsx
  const FeaturedProjects = dynamic(() => import('@/components/home/FeaturedProjects'), { ssr: true });
  ```
  Apply to everything after `WhyChooseUs`.

### 4.6 Strip metadata `keywords`
- Lines 37-56: delete the `keywords` array entirely.

### 4.7 Scroll-hint guard
- Lines 178-182: wrap with `motion-safe:` Tailwind variant or remove. Recommend remove (#18, #25).

**Deliverable:** lighter, accessible, themeable homepage.

---

## Phase 5 — Footer Polish
Addresses #4, #14, #24.

### 5.1 Bump translucent text
- File: `src/components/layout/Footer.tsx`
- Line 38: `/80` → `/85`
- Lines 50, 67, 84, 101, 114, 132, 141, 150: `/80` → `/85`, `/60` → `/75`
- Line 178: `text-[10px] /50` → `text-xs /75`
- Line 185 (copyright): `/60` → `/75`
- Verify final contrast against `--secondary` in both themes (`oklch` lightness math: secondary ≈ 0.18 → fg @ 0.85 = ~7.2:1 ✓).

### 5.2 Ship real white logo
- Action item (asset task, not code): replace `brightness-0 invert` hack with a proper `/public/images/logo-white.png` exported from source. Until asset exists, leave the hack.
- Line 36: remove `brightness-0 invert` once asset lands.

### 5.3 Remove pointless cert hover
- Lines 168, 176: drop `opacity-90 hover:opacity-100 transition-opacity` from non-interactive images.

**Deliverable:** WCAG-AA footer.

---

## Phase 6 — Optional / Long-term

- **Heading hierarchy audit (#15):** run `npx pa11y http://localhost:5000` and verify there is exactly one `<h1>` per route. Footer column titles should be `<h2>` (correct as-is) provided they're not nested under another `<h2>`. Likely fine.
- **Header memoization (#22, #7 deferred):** complete Phase 3.7 if not already done.
- **Storybook contrast tests:** add visual regression for hero scrim + button onImage variant.

---

## Key Files Summary

| File | Phase | Operation |
|---|---|---|
| `src/app/globals.css` | 1 | Add tokens + reduced-motion |
| `src/components/ui/button.tsx` | 2 | Resize defaults, add `onImage` variant |
| `src/components/layout/Header.tsx` | 3 | Variant prop, focus mgmt, tokens, touch targets, logo |
| `src/app/page.tsx` | 4 | Scrim, tokens, section cull, metadata |
| `src/components/layout/Footer.tsx` | 5 | Contrast bump, asset cleanup |
| `src/components/HeroSlideshow.tsx` | 4 | Read-only verification (may need scrim coordination) |
| `src/app/layout.tsx` | 3 | Pass `variant="solid"` to Header on non-hero routes (or detect via pathname) |
| `public/images/logo-dark.png` | 3 | New asset |
| `public/images/logo-white.png` | 5 | New asset |

---

## Risks and Mitigation

| Risk | Mitigation |
|---|---|
| Button height change breaks tight layouts (filter bars, table rows) | Grep for `<Button size="sm"` and `<Button variant="ghost"` before merge; spot-check admin pages |
| Header `variant="solid"` requires per-route plumbing | Use `usePathname()` in a client wrapper: solid for everything except `/`, `/we-coat`, `/design-center`, `/areas/*` |
| Removing 4 homepage sections may upset stakeholder | Move (don't delete) — relocate to `/about` or new `/insights` route; preserve SEO via 301 not needed (sections, not routes) |
| Hero scrim could double-darken if `HeroSlideshow` already has one | **Read `HeroSlideshow.tsx` first**; harmonize before adding |
| `prefers-reduced-motion` global rule may kill Sheet/Dialog open animations | Scope rule to decorative classes only, not `[data-state]` Radix transitions |
| Logo asset turnaround | Ship CSS hack as fallback; gate Phase 5.2 on asset delivery |

---

## Verification Checklist (per phase)

- [ ] `npm run build` clean
- [ ] `npm run lint` clean
- [ ] Manual: hero readable on bright slideshow frame
- [ ] Manual: header nav visible on `/portfolio` (white-bg page)
- [ ] DevTools: tab through header, sheet, dropdown — focus visible everywhere
- [ ] Lighthouse a11y ≥ 95 on `/`
- [ ] Lighthouse perf delta after Phase 4.5 lazy loading

---

## Sequencing Rationale

1 → 2 → 3 → 4 → 5: each phase only depends on tokens from earlier phases. Phases 2–5 can ship as separate PRs. Phase 1 must ship first or alongside Phase 2.

## SESSION_ID
- CODEX_SESSION: n/a (external models not invoked in this run)
- GEMINI_SESSION: n/a
