/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

import { PrismaPlugin } from '@prisma/nextjs-monorepo-workaround-plugin'

/** @type {import("next").NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()]
    }

    return config
  },
    async redirects() {
        return [
          {
            source: '/',
            destination: '/best-practices',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
