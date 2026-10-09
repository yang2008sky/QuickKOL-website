import { defineConfig } from "vite";

export default defineConfig({
  build: {
    manifest: true,
    rollupOptions: {
      input: { main: "index.html", privacy: "privacy.html", terms: "terms.html" },
    },
  },
});
