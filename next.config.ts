import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    // Custom Webpack configuration
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": "./src/components",
    };

    return config;
  },
};

export default nextConfig;
