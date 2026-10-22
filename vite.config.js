import { defineConfig } from "vite";
import middleware from './middleware.js';

const redirects = (server) => {
  server.middlewares.use((request, response, next) => {
    const result = middleware(new Request(new URL(request.url, 'http://localhost')));
    const location = result.headers.get('location');
    if (!location) return next();
    const target = new URL(location);
    response.writeHead(result.status, { Location: target.pathname + target.search });
    response.end();
  });
};

export default defineConfig({
  plugins: [{ name: 'site-redirects', configureServer: redirects, configurePreviewServer: redirects }],
  build: {
    manifest: true,
    rollupOptions: {
      input: { main: "index.html", privacy: "privacy.html", terms: "terms.html" },
    },
  },
});
