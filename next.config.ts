import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Image optimization for WordPress and external sources
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.webuildclt.com',
      },
      {
        protocol: 'https',
        hostname: '**.wp.com',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
      },
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // Performance optimizations
  poweredByHeader: false,
  reactStrictMode: true,

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-slot',
      '@radix-ui/react-dialog',
      '@radix-ui/react-label',
      '@radix-ui/react-navigation-menu',
      'class-variance-authority',
    ],
  },

  // External redirect: Roof Coating links should go to wecoatus.com
  async redirects() {
    return [
      {
        source: '/services/roof-coating',
        destination: 'https://www.wecoatus.com',
        permanent: false,
      },
    ];
  },

  // Headers for security and caching
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      // Cache static assets
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

};

export default nextConfig;
