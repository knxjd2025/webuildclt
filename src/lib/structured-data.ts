/**
 * Structured Data (JSON-LD) generators for SEO
 * Used with the JsonLd component to embed schema.org markup
 */

import { BUSINESS } from '@/data/business';

/**
 * Escape strings for safe embedding in JSON-LD <script> blocks.
 * Prevents breaking out of the script context via </script> injection.
 */
function escapeJsonLd(value: string): string {
  return value
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');
}

/** All cities We Build serves — used across multiple schema generators */
const AREAS_SERVED = [
  {
    '@type': 'City' as const,
    name: 'Charlotte',
    sameAs: 'https://en.wikipedia.org/wiki/Charlotte,_North_Carolina',
  },
  { '@type': 'City' as const, name: 'Fort Mill' },
  { '@type': 'City' as const, name: 'Lake Norman' },
  { '@type': 'City' as const, name: 'Huntersville' },
  { '@type': 'City' as const, name: 'Matthews' },
  { '@type': 'City' as const, name: 'Mooresville' },
  { '@type': 'City' as const, name: 'Rock Hill' },
  {
    '@type': 'City' as const,
    name: 'Raleigh',
    sameAs: 'https://en.wikipedia.org/wiki/Raleigh,_North_Carolina',
  },
  {
    '@type': 'City' as const,
    name: 'Durham',
    sameAs: 'https://en.wikipedia.org/wiki/Durham,_North_Carolina',
  },
  { '@type': 'City' as const, name: 'Cary' },
  { '@type': 'City' as const, name: 'Morrisville' },
  { '@type': 'State' as const, name: 'North Carolina' },
  { '@type': 'State' as const, name: 'South Carolina' },
];

/** Full GeneralContractor entity reused as provider across schemas */
function fullProviderEntity(): Record<string, unknown> {
  return {
    '@type': 'GeneralContractor',
    name: BUSINESS.name,
    url: BUSINESS.url,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    logo: BUSINESS.logo,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
  };
}

/** All service categories for hasOfferCatalog */
const SERVICE_CATALOG_ITEMS = [
  'Commercial Construction',
  'Commercial Upfits',
  'Commercial Renovation',
  'General Contracting',
  'Roof Coating',
  'Tenant Improvements',
  'Construction Management',
  'Drone Inspections',
  'Green Building',
  'Adaptive Reuse',
  'Site Development',
  'Brewery Construction',
  'Warehouse Construction',
  'Value Engineering',
  "Owner's Representative",
  'Industrial Construction',
  'Medical Construction',
  'Restaurant Construction',
  'Office Buildouts',
  'Retail Construction',
  'ADA Compliance',
  'Pre-Construction',
];

export function organizationSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BUSINESS.name,
    url: BUSINESS.url,
    logo: BUSINESS.logo,
    description: BUSINESS.description,
    foundingDate: BUSINESS.foundingDate,
    sameAs: BUSINESS.social,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: BUSINESS.address.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS.phone,
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'English',
    },
  };
}

export function localBusinessSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: BUSINESS.name,
    url: BUSINESS.url,
    logo: BUSINESS.logo,
    image: BUSINESS.logo,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    description: BUSINESS.description,
    foundingDate: BUSINESS.foundingDate,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    sameAs: BUSINESS.social,
    areaServed: AREAS_SERVED,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Construction Services',
      itemListElement: SERVICE_CATALOG_ITEMS.map((serviceName) => ({
        '@type': 'OfferCatalog',
        name: serviceName,
      })),
    },
    priceRange: '$$',
  };
}

export function webSiteSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: BUSINESS.name,
    url: BUSINESS.url,
    description: BUSINESS.description,
    publisher: {
      '@type': 'Organization',
      name: BUSINESS.name,
      logo: { '@type': 'ImageObject', url: BUSINESS.logo },
    },
  };
}

export function serviceSchema(
  name: string,
  description: string,
  url: string
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: escapeJsonLd(name),
    description: escapeJsonLd(description),
    url,
    provider: fullProviderEntity(),
    areaServed: AREAS_SERVED,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name,
    },
    availableChannel: [
      {
        '@type': 'ServiceChannel',
        serviceType: 'In-person consultation',
        serviceLocation: {
          '@type': 'Place',
          name: 'We Build Office',
          address: {
            '@type': 'PostalAddress',
            streetAddress: BUSINESS.address.street,
            addressLocality: BUSINESS.address.city,
            addressRegion: BUSINESS.address.state,
            postalCode: BUSINESS.address.zip,
            addressCountry: BUSINESS.address.country,
          },
        },
      },
      {
        '@type': 'ServiceChannel',
        serviceType: 'Phone consultation',
        servicePhone: {
          '@type': 'ContactPoint',
          telephone: BUSINESS.phone,
          contactType: 'sales',
        },
      },
    ],
    termsOfService: `${BUSINESS.url}/contact`,
  };
}

interface HowToStep {
  name: string;
  text: string;
}

/**
 * HowTo schema for process/step-by-step sections on service pages.
 * Enables Google "How To" rich results.
 */
export function howToSchema(
  name: string,
  description: string,
  steps: HowToStep[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: escapeJsonLd(name),
    description: escapeJsonLd(description),
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: escapeJsonLd(step.name),
      text: escapeJsonLd(step.text),
    })),
  };
}

/**
 * ServiceArea schema for area pages.
 * Combines LocalBusiness with ServiceArea for geo-targeted SEO.
 */
export function serviceAreaSchema(
  areaName: string,
  description: string,
  services: Array<{ name: string; url: string }>
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BUSINESS.url}#${areaName.toLowerCase().replace(/\s+/g, '-')}`,
    name: `${BUSINESS.name} — ${escapeJsonLd(areaName)}`,
    description: escapeJsonLd(description),
    url: BUSINESS.url,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    logo: BUSINESS.logo,
    image: BUSINESS.logo,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    areaServed: {
      '@type': 'Place',
      name: areaName,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Construction Services in ${areaName}`,
      itemListElement: services.map((svc) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: svc.name,
          url: svc.url,
        },
      })),
    },
    priceRange: '$$',
  };
}

interface ArticleInput {
  title: string;
  slug: string;
  excerpt?: string;
  date: string;
  authorName?: string;
  imageUrl?: string;
}

export function articleSchema(post: ArticleInput): Record<string, unknown> {
  const articleUrl = `${BUSINESS.url}/blog/${post.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: escapeJsonLd(post.title),
    url: articleUrl,
    mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
    datePublished: post.date,
    dateModified: post.date,
    ...(post.excerpt && { description: escapeJsonLd(post.excerpt) }),
    ...(post.imageUrl && { image: post.imageUrl }),
    author: {
      '@type': 'Organization',
      name: post.authorName || BUSINESS.name,
      url: BUSINESS.url,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS.name,
      logo: {
        '@type': 'ImageObject',
        url: BUSINESS.logo,
      },
    },
  };
}

interface FaqItem {
  question: string;
  answer: string;
}

export function faqSchema(items: FaqItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: escapeJsonLd(item.question),
      acceptedAnswer: {
        '@type': 'Answer',
        text: escapeJsonLd(item.answer),
      },
    })),
  };
}

interface ProjectInput {
  title: string;
  slug: string;
  short_description: string;
  category: string;
  service_type: string;
  featured_image?: string | null;
  images?: Array<{ url: string; alt: string }>;
  address?: string | null;
  city: string;
  state: string;
  zip?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  neighborhood?: string | null;
  square_footage?: number | null;
  completion_date?: string | null;
}

/**
 * Schema.org structured data for a construction project.
 * Combines CreativeWork + Place + GeoCoordinates for rich geo-SEO.
 * This is what powers Google Rich Results and AI answer engine citations.
 */
export function constructionProjectSchema(
  project: ProjectInput
): Record<string, unknown> {
  const locationParts = [project.neighborhood, project.city, project.state].filter(Boolean);

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: escapeJsonLd(project.title),
    description: escapeJsonLd(project.short_description),
    url: `${BUSINESS.url}/portfolio/${project.slug}`,
    ...(project.featured_image && { image: project.featured_image }),
    ...(project.images && project.images.length > 0 && {
      image: project.images.map((img) => ({
        '@type': 'ImageObject',
        url: img.url,
        name: img.alt,
      })),
    }),
    genre: `${project.category} ${project.service_type.replace(/-/g, ' ')}`,
    ...(project.completion_date && { datePublished: project.completion_date }),
    contentLocation: {
      '@type': 'Place',
      name: locationParts.join(', '),
      ...(project.address && {
        address: {
          '@type': 'PostalAddress',
          streetAddress: project.address,
          addressLocality: project.city,
          addressRegion: project.state,
          ...(project.zip && { postalCode: project.zip }),
          addressCountry: 'US',
        },
      }),
      ...(project.latitude && project.longitude && {
        geo: {
          '@type': 'GeoCoordinates',
          latitude: project.latitude,
          longitude: project.longitude,
        },
      }),
    },
    creator: {
      '@type': 'GeneralContractor',
      name: BUSINESS.name,
      url: BUSINESS.url,
      telephone: BUSINESS.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS.address.street,
        addressLocality: BUSINESS.address.city,
        addressRegion: BUSINESS.address.state,
        postalCode: BUSINESS.address.zip,
        addressCountry: BUSINESS.address.country,
      },
    },
    ...(project.square_footage && {
      size: `${project.square_footage.toLocaleString()} square feet`,
    }),
  };
}

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function breadcrumbSchema(
  items: BreadcrumbItem[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href && { item: `${BUSINESS.url}${item.href}` }),
    })),
  };
}
