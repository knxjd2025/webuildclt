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
    default: 'We Build | Design & Build Construction Charlotte NC',
    template: '%s | We Build',
  },
  description:
    'Family-owned construction company in Charlotte, NC. Commercial & residential construction, upfits, roof coating. 60+ years combined experience.',
  keywords: [
    'construction',
    'Charlotte NC',
    'commercial construction',
    'residential construction',
    'roof coating',
    'design build',
    'contractor',
  ],
  authors: [{ name: 'We Build' }],
  creator: 'We Build',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://webuildclt.com',
    siteName: 'We Build',
    title: 'We Build | Design & Build Construction Charlotte NC',
    description:
      'Family-owned construction company in Charlotte, NC. Commercial & residential construction, upfits, roof coating.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'We Build Construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'We Build | Design & Build Construction Charlotte NC',
    description:
      'Family-owned construction company in Charlotte, NC. Commercial & residential construction.',
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
  verification: {
    google: 'your-google-verification-code',
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
        <JsonLd
          data={[
            organizationSchema(),
            localBusinessSchema(),
            webSiteSchema(),
          ]}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
