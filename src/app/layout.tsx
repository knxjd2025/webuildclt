import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Header, Footer } from '@/components/layout';
import { JsonLd } from '@/components/JsonLd';
import {
  organizationSchema,
  localBusinessSchema,
  webSiteSchema,
} from '@/lib/structured-data';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://webuildclt.com'),
  title: {
    default: 'We Build | Commercial Construction & Design-Build Charlotte NC',
    template: '%s | We Build Charlotte NC',
  },
  description:
    'Charlotte NC commercial construction company specializing in commercial upfits, design-build, and roof coatings. Veteran & family-owned with 60+ years combined experience. USGBC member.',
  keywords: [
    'commercial construction Charlotte NC',
    'commercial upfits Charlotte',
    'design build contractor Charlotte NC',
    'commercial general contractor Charlotte',
    'roof coating Charlotte NC',
    'office upfit Charlotte',
    'commercial renovation Charlotte',
    'USGBC member contractor',
  ],
  authors: [{ name: 'We Build' }],
  creator: 'We Build',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://webuildclt.com',
    siteName: 'We Build',
    title: 'We Build | Commercial Construction & Design-Build Charlotte NC',
    description:
      'Charlotte NC commercial construction company. Commercial upfits, design-build, roof coatings. Veteran & family-owned, USGBC member.',
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
    title: 'We Build | Commercial Construction & Design-Build Charlotte NC',
    description:
      'Charlotte NC commercial construction company. Commercial upfits, design-build, roof coatings. Veteran & family-owned.',
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
    'theme-color': '#1a1a2e',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
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
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
