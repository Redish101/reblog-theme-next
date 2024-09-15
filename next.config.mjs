import nextBuildId from "next-build-id";
import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: () => nextBuildId({ dir: import.meta.dirname }),
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://cdn1.tianli0.top/gh/redish101/reblog-theme-next@static-resources"
      : undefined,
};

const config =
  process.env.NODE_ENV === "production"
    ? withSentryConfig(nextConfig, {
        org: "redish101",
        project: "redish101-blog",
        authToken: process.env.SENTRY_AUTH_TOKEN,
        silent: false,
      })
    : nextConfig;

export default config;
