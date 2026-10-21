import { readdir, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const directory = new URL('../public/assets/blog/', import.meta.url);
await mkdir(new URL('share/', directory), { recursive: true });
const covers = (await readdir(directory)).filter((name) => name.endsWith('.svg'));
for (const cover of covers) {
  await sharp(fileURLToPath(new URL(cover, directory)))
    .resize({ width: 1200 })
    .flatten({ background: '#ffffff' })
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(fileURLToPath(new URL(`share/${cover.replace(/\.svg$/, '.jpg')}`, directory)));
}
console.log(`Generated ${covers.length} article share images from existing SVG covers.`);
