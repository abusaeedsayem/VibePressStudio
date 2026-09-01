import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tauri 2.x: static export for desktop bundling (only when TAURI env is set)
  // Vercel/web keeps SSR; Tauri build sets TAURI=1 to emit `out/` for `frontendDist`
  output: process.env.TAURI ? "export" : undefined,
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
