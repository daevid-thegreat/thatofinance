import PrismaWebpackPlugin from "prisma-webpack-plugin";
import path from "path";
import type { NextConfig } from "next";
import type { Configuration } from "webpack";
import CopyWebpackPlugin from "copy-webpack-plugin";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
    outputFileTracingIncludes: {
      ".next/server/**/*.js": ["./prisma/generated/client/**/*"]
  },
  webpack(config: Configuration, { isServer }) {
    if (isServer) {
      config.plugins = [
        ...(config.plugins || []),
        new PrismaWebpackPlugin(),
        new CopyWebpackPlugin({
          patterns: [
            {
              from: path.join(process.cwd(), "prisma/generated/client"),
              to: path.join(process.cwd(), ".next/server/prisma/generated/client")
            },
               {
              from: path.join(process.cwd(), "prisma/generated/client"),
              to: path.join(process.cwd(), ".next/server")
            }
          ]
        })
      ];
    }

    return config;
  }
};

export default nextConfig;
