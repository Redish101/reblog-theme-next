import type { Config } from "tailwindcss";
import { addDynamicIconSelectors } from "@iconify/tailwind";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "card-background": "var(--card-background)",
        "nav-background": "var(--nav-background)",
      },
    },
    transitionDuration: {
      DEFAULT: "400ms",
    },
  },
  plugins: [addDynamicIconSelectors(), typography()],
};
export default config;
