import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow all remote images during development — restrict in production
      },
    ],
    formats: ["image/avif", "image/webp"],
  },

  // Security
  poweredByHeader: false,

  // Trailing slash consistency
  trailingSlash: false,

  // Redirects for old URLs
  async redirects() {
    return [
      {
        source: '/services/performance-marketing',
        destination: '/services/meta-ads',
        permanent: true,
      },
    ];
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
