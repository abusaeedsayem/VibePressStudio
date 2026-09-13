import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["bcrypt", "nodemailer"],
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
      {
        source: '/products/smart-affiliate-link-cloaker',
        destination: '/products/vibepress-affiliate-link-cloaker',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
