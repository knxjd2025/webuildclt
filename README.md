# We Build - Headless WordPress + Next.js

A fast, modern website for We Build construction company built with Next.js 14 (App Router) and headless WordPress.

## Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS + shadcn/ui
- **CMS**: Headless WordPress with WPGraphQL
- **Deployment**: Vercel
- **Performance**: ISR, Image Optimization, Edge Caching

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- WordPress site with WPGraphQL plugin installed

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-repo/webuildclt-next.git
cd webuildclt-next
```

2. Install dependencies:
```bash
npm install
```

3. Copy the environment file:
```bash
cp .env.example .env.local
```

4. Configure your environment variables:
```env
WORDPRESS_API_URL=https://your-wordpress-site.com/graphql
WORDPRESS_PREVIEW_SECRET=your-preview-secret
REVALIDATION_SECRET=your-revalidation-secret
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## WordPress Setup

### Required Plugins

1. **WPGraphQL** - Exposes WordPress data via GraphQL
   - Install from: https://www.wpgraphql.com/

2. **WPGraphQL for ACF** (if using ACF)
   - Enables ACF fields in GraphQL

3. **Yoast SEO** + **WPGraphQL Yoast SEO Addon**
   - For SEO meta data

### Custom Post Types

The theme expects these custom post types:
- `portfolio` - Portfolio/Project items
- `testimonial` - Client testimonials
- `service` - Services offered
- `certification` - Certifications/badges

### Content Structure

```
WordPress Admin
├── Pages
│   ├── Home
│   ├── About
│   ├── Design Center
│   ├── Contact
│   └── We Coat
├── Posts (News/Blog)
├── Portfolio (Custom Post Type)
│   └── Categories: Commercial, Residential
├── Testimonials
├── Services
└── Certifications
```

## Project Structure

```
webuildclt-next/
├── public/
│   └── images/           # Static images
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── api/          # API routes
│   │   ├── about/
│   │   ├── contact/
│   │   ├── design-center/
│   │   ├── news/
│   │   ├── portfolio/
│   │   └── we-coat/
│   ├── components/
│   │   ├── layout/       # Header, Footer
│   │   └── ui/           # shadcn/ui components
│   ├── lib/
│   │   ├── utils.ts      # Utility functions
│   │   ├── wordpress.ts  # GraphQL client
│   │   └── queries.ts    # GraphQL queries
│   └── types/
│       └── wordpress.ts  # TypeScript types
├── .env.example
├── next.config.ts
├── tailwind.config.ts
└── vercel.json
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

Set these in Vercel:
- `WORDPRESS_API_URL`
- `REVALIDATION_SECRET`
- `WORDPRESS_PREVIEW_SECRET`

### On-Demand Revalidation

Set up a WordPress webhook to call:
```
POST https://your-site.vercel.app/api/revalidate
Body: { "secret": "your-secret", "path": "/portfolio" }
```

## Features

### Pages
- **Home** - Hero, services, portfolio preview, testimonials
- **About** - Company story, values, certifications
- **Portfolio** - Filterable project gallery (Commercial/Residential)
- **Design Center** - Showroom info, Matterport virtual tour
- **We Coat** - Roof coating service details
- **Contact** - Contact form, map, info
- **News** - Blog/news articles

### Performance Optimizations
- Incremental Static Regeneration (ISR)
- Image optimization with Next.js Image
- Code splitting and lazy loading
- Edge caching with Vercel

### SEO
- Dynamic meta tags
- OpenGraph images
- Structured data ready
- Sitemap (add next-sitemap for auto-generation)

## Development

### Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Use the `PageHero` component for consistent headers
4. Add navigation link in `Header.tsx`

### Styling

- Use Tailwind CSS utility classes
- shadcn/ui components are in `src/components/ui/`
- Global styles in `src/app/globals.css`
- Brand colors defined as CSS variables

## Image Placeholders

Before launching, replace these placeholder images:
- `/images/hero-bg.jpg` - Main hero background
- `/images/about-image.jpg` - About section image
- `/images/logo.png` - Company logo
- `/images/logo-white.png` - White logo for footer
- `/images/portfolio/*.jpg` - Portfolio project images
- `/images/showroom/*.jpg` - Design center images
- `/images/certifications/*.png` - Certification logos

## License

Private - We Build Construction
