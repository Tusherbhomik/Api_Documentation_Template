import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Enable static export for GitHub Pages
  basePath: isProd ? '/Api_Documentation_Template' : '', // Correct basePath with leading slash
  assetPrefix: isProd ? '/Api_Documentation_Template/' : '', // Ensure assets load correctly
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};

export default nextConfig;
