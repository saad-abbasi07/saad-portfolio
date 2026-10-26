import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [50, 75, 80, 85, 90],
    unoptimized: false,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    minimumCacheTTL: 31536000,
  },
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      'react-icons',
      'react-icons/fi',
      'react-icons/si',
      'react-icons/fa',
      'react-icons/ai',
      'react-icons/bi',
      'react-icons/hi',
    ],
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/myResume/Saad_Abbasi__Resume.pdf',
        destination: '/myResume/Saad_Abbasi_CV.pdf',
        permanent: false,
      },
      {
        source: '/myResume/Saad-Abbasi-Resume.pdf',
        destination: '/myResume/Saad_Abbasi_CV.pdf',
        permanent: false,
      },
      {
        source: '/myResume/Saad_s_Resume.pdf',
        destination: '/myResume/Saad_Abbasi_CV.pdf',
        permanent: false,
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/certificates/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/myResume/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
