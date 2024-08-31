import { withSentryConfig } from "@sentry/nextjs";
import { getConfig } from "./src/core/config";

/** @type {import('next').NextConfig} */
const nextConfig = {};

/** @type {import('./src/core/config').SentryConfig} */
const config = getConfig().sentry;

export default withSentryConfig(nextConfig, {
  org: config.org,
  project: config.project,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: false,
});
