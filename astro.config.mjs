import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.virtuosopsychology.com",
  integrations: [
    sitemap({
      // Keep the internal palette/design-reference pages out of the sitemap.
      filter: (page) => !page.includes("/palettes"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
