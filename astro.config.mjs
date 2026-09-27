// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    mdx(),
    sitemap({
      filter: (page) =>
        !(
          page.startsWith("https://rmahbub.com/blog/tags/") &&
          page !== "https://rmahbub.com/blog/tags/" &&
          page !== "https://rmahbub.com/blog/tags"
        ),
    }),
  ],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
      },
    },
  },
  site: "https://rmahbub.com/",
  base: "/",
  output: "static",
  // Short CV links, emitted as static redirect pages for GitHub Pages.
  redirects: {
    "/github": "https://github.com/riasat-mahbub",
    "/linkedin": "https://www.linkedin.com/in/riasat-m-70682b115/",
    "/x": "https://x.com/RiasatM1740",
    "/twitter": "https://x.com/RiasatM1740",
    "/aergia": "https://github.com/riasat-mahbub/aergia-new",
    "/project-tracker": "https://github.com/riasat-mahbub/project-tracker-unified",
    "/mbuddy": "https://github.com/riasat-mahbub/MBuddy",
  },
  build: {
    inlineStylesheets: "auto",
  },
  server: {
    host: true,
    port: 4321,
  },
});
