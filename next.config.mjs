import nextBuildId from "next-build-id";
import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: () => nextBuildId({ dir: import.meta.dirname }),
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
