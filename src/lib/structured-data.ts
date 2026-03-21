/**
 * Structured Data (JSON-LD) generators for SEO
 * Used with the JsonLd component to embed schema.org markup
 */

const BUSINESS = {
  name: 'We Build',
  url: 'https://webuildclt.com',
  phone: '(704) 574-8124',
  email: 'designcenter@webuildclt.com',
  address: {
    street: '14330 S Lakes Drive',
    city: 'Charlotte',
    state: 'NC',
    zip: '28273',
    country: 'US',
  },
  geo: {
    latitude: 35.1,
    longitude: -80.9,
  },
  social: [
    'https://www.instagram.com/webuildclt/',
    'https://www.facebook.com/WeBuildCLT',
  ],
  logo: 'https://webuildclt.com/images/logo.png',
  foundingDate: '2019',
  description:
    'Family-owned construction company in Charlotte, NC. Commercial & residential construction, upfits, roof coating. 60+ years combined experience.',
} as const;

export function organizationSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BUSINESS.name,
    url: BUSINESS.url,
    logo: BUSINESS.logo,
    sameAs: BUSINESS.social,
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
    areaServed: [
      {
        '@type': 'City',
        name: 'Charlotte',
        sameAs: 'https://en.wikipedia.org/wiki/Charlotte,_North_Carolina',
      },
      {
        '@type': 'City',
        name: 'Fort Mill',
      },
      {
        '@type': 'State',
        name: 'North Carolina',
      },
      {
        '@type': 'State',
        name: 'South Carolina',
      },
    ],
    priceRange: '$$',
  };
}

export function webSiteSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: BUSINESS.name,
    url: BUSINESS.url,
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
    name,
    description,
    url,
    provider: {
      '@type': 'GeneralContractor',
      name: BUSINESS.name,
      url: BUSINESS.url,
    },
    areaServed: {
      '@type': 'City',
      name: 'Charlotte',
    },
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
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    url: `${BUSINESS.url}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    description: post.excerpt,
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
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
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
