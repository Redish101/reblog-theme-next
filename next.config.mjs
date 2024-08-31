import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withSentryConfig(nextConfig, {
  org: "redish101",
  project: "redish101-blog",
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: false,
});
