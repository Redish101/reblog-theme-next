import { defineConfig } from "@/core/config";

export default defineConfig({
  serverUrl: false ? "https://reblog.redish101.top" : "http://localhost:3001",
  menu: [
    // {
    //   label: "友链",
    //   path: "/links",
    // },
  ],
  twikoo: {
    envId: "https://twikoo.redish101.top",
  },
});
