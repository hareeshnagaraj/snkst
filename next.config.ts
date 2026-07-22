import type { NextConfig } from "next";
import path from "node:path";

/**
 * Static export for GitHub Pages (and any static host).
 * Set BASE_PATH=/repo-name when the site is not served from domain root.
 * Example: BASE_PATH=/snkst → https://hareeshnagaraj.github.io/snkst/
 */
const basePath = (process.env.BASE_PATH || "").replace(/\/$/, "");

const nextConfig: NextConfig = {
  output: "export",
  // Clean URLs on GitHub Pages: /zozan/ → zozan/index.html
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Make basePath available to client components for public/ asset URLs
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
