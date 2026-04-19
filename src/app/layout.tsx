import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google';
import { Header, Footer } from '@/components/layout';
import { ScrollProgress } from '@/components/ScrollProgress';
import { BannerCTA } from '@/components/BannerCTA';
import { RevealObserver } from '@/components/RevealObserver';
import { JsonLd } from '@/components/JsonLd';
import {
  organizationSchema,
  localBusinessSchema,
  webSiteSchema,
} from '@/lib/structured-data';
import './globals.css';

const heading = Plus_Jakarta_Sans({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  display: 'swap',
});

const body = DM_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://webuildclt.com'),
  title: {
    default: 'We Build | Commercial Construction Charlotte NC',
    template: '%s | We Build Charlotte NC',
  },
  description:
    'Commercial construction company serving Charlotte NC, Raleigh NC, Durham NC, and the Research Triangle. Specializing in commercial upfits, tenant improvements, brewery construction, drone inspections, and roof coatings. Veteran & family-owned with 60+ years combined experience. USGBC member. Licensed in NC & SC.',
  authors: [{ name: 'We Build' }],
  creator: 'We Build',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://webuildclt.com',
    siteName: 'We Build',
    title: 'We Build | Commercial Construction Charlotte NC',
    description:
      'Commercial construction company serving Charlotte NC, Raleigh, Durham, and the Research Triangle. Commercial upfits, roof coatings. Veteran & family-owned, USGBC member.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'We Build — Commercial Construction Charlotte NC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'We Build | Commercial Construction Charlotte NC',
    description:
      'Commercial construction serving Charlotte NC, Raleigh, Durham, and the Research Triangle. Veteran & family-owned.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'theme-color': '#f7f6f2',
    'color-scheme': 'light',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: 'light' }}>
      <head>
        {/* Preconnect to external origins for faster resource loading */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body
        className={`${heading.variable} ${body.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* Skip link for keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        <JsonLd
          data={[
            organizationSchema(),
            localBusinessSchema(),
            webSiteSchema(),
          ]}
        />
        <RevealObserver />
        <ScrollProgress />
        <BannerCTA />
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
