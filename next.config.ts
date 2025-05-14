import PrismaWebpackPlugin from "prisma-webpack-plugin";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
   output: 'standalone',
  webpack(config, { isServer }) {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaWebpackPlugin()]
    }

    return config;
  },
};

export default nextConfig;
