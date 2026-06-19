import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.virtuosopsychology.com",
  integrations: [
    sitemap({
      // Keep internal/noindex pages out of the sitemap (sitemaps should list
      // only indexable URLs): palette design references and the privacy policy.
      filter: (page) => !page.includes("/palettes") && !page.includes("/privacy"),
      // Freshness/priority signals. Homepage & services lead; about/contact follow.
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        if (item.url === "https://www.virtuosopsychology.com/") {
          item.priority = 1.0;
        } else if (item.url.includes("/services")) {
          item.priority = 0.9;
        } else if (item.url.includes("/contact")) {
          item.priority = 0.6;
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
