import { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        "@components": path.join(__dirname, "src/components"),
      },
    };

    // Ensure Prisma binaries are included
    config.module?.rules?.push({
      test: /\.(prisma|so|node)$/,
      loader: "file-loader",
      options: {
        name: "[name].[ext]",
        outputPath: "prisma/",
      },
    });

    return config;
  },
};

export default nextConfig;
