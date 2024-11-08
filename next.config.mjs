import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "/**",
      },
    ],
  },
  output: "standalone",
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
