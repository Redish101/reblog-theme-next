import { defineConfig } from "@/core/config";

export default defineConfig({
  serverUrl:
    process.env.NODE_ENV === "production"
      ? "https://reblog.redish101.top"
      : "http://localhost:3001",
  menu: [
    // {
    //   label: "友链",
    //   path: "/links",
    // },
  ],
  twikoo: {
    envId: "https://twikoo.redish101.top",
  },
  sentry: {
    enabled: true,
    dsn: "https://962ae7ee8e5aebdcd5dbd8f32fcf3872@o4507869300719616.ingest.de.sentry.io/4507869308190800",
    org: "redish101",
    project: "redish101-blog",
  },
});
