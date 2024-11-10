import { getConfig } from "@/core/config";
import * as Sentry from "@sentry/nextjs";

const config = getConfig().sentry;

if (config.enabled && process.env.NODE_ENV !== "development") {
  Sentry.init({
    dsn: config.dsn,

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for tracing.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,

    // ...

    // Note: if you want to override the automatic release value, do not set a
    // `release` value here - use the environment variable `SENTRY_RELEASE`, so
    // that it will also get attached to your source maps
  });
}
