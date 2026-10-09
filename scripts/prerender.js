import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { build } from 'esbuild';
import { Window } from 'happy-dom';
import { siteOrigin } from '../src/seo.js';

// Run the same page renderers at build time; ship their HTML with the Vite assets.
export async function createPrerenderer() {
  const manifest = JSON.parse(await readFile('dist/.vite/manifest.json', 'utf8'));
  const bundle = await build({
    entryPoints: ['src/main.js'], bundle: true, write: false, format: 'esm',
    loader: { '.css': 'empty' },
    plugins: [{
      name: 'raw-html',
      setup(builder) {
        builder.onResolve({ filter: /\.html\?raw$/ }, (args) => ({
          path: resolve(args.resolveDir, args.path.replace(/\?raw$/, '')), namespace: 'raw-html',
        }));
        builder.onLoad({ filter: /.*/, namespace: 'raw-html' }, async (args) => ({
          contents: await readFile(args.path, 'utf8'), loader: 'text',
        }));
      },
    }],
  });
  const code = `(async () => {${bundle.outputFiles[0].text}\n})()`;
  return async (html, path) => {
    const window = new Window({
      url: new URL(path, siteOrigin).href,
      settings: {
        enableJavaScriptEvaluation: true, disableJavaScriptFileLoading: true,
        disableCSSFileLoading: true, device: { prefersReducedMotion: 'reduce' },
      },
    });
    try {
      window.document.write(html);
      await window.eval(code);
      const document = window.document;
      const module = path.startsWith('/blog/') ? 'blog' : path.endsWith('.html') ? 'legal' : path.includes('/influencer-campaign-cost-calculator/') ? 'campaign-cost-calculator' : path.split('/').filter(Boolean).pop();
      const styles = new Set();
      function collectStyles(key) {
        const chunk = manifest[key];
        if (!chunk) return;
        chunk.css?.forEach((file) => styles.add(`/${file}`));
        chunk.imports?.forEach(collectStyles);
      }
      if (module) collectStyles(`src/${module}.js`);
      for (const href of styles) {
        if (document.querySelector(`link[href="${href}"]`)) continue;
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.append(link);
      }
      if (document.querySelectorAll('h1').length !== 1 || !document.querySelector('#app').textContent.trim()) {
        throw new Error(`Missing rendered page content: ${path}`);
      }
      return `<!doctype html>\n${document.documentElement.outerHTML}\n`;
    } finally {
      await window.happyDOM.close();
    }
  };
}
