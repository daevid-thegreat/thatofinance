import PrismaWebpackPlugin from "prisma-webpack-plugin";
import type { NextConfig } from "next";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  outputFileTracingIncludes: {
      ".next/server/**/*": ["./prisma/generated/client/**/*"]
  },
  webpack(config: Configuration, { isServer }) {
    if (isServer) {
      config.plugins = [...(config.plugins || []), new PrismaWebpackPlugin()];
    }

    return config;
  }
};

export default nextConfig;
