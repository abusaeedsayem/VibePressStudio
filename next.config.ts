import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/pricing',
        destination: '/lab',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
