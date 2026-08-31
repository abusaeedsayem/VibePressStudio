import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
