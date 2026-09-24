import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const images = [
  { name: 'hero.webp', url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=75', width: 800 },
  { name: 'issue-bocor.webp', url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=480&q=75', width: 480 },
  { name: 'issue-kurang-dingin.webp', url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=480&q=75', width: 480 },
  { name: 'issue-bau-apek.webp', url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=480&q=75', width: 480 },
  { name: 'issue-bising.webp', url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=480&q=75', width: 480 },
  { name: 'service-cuci-1pk.webp', url: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=480&q=75', width: 480 },
  { name: 'service-cuci-2pk.webp', url: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=480&q=75', width: 480 },
  { name: 'service-inverter.webp', url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=480&q=75', width: 480 },
  { name: 'service-freon.webp', url: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=480&q=75', width: 480 },
  { name: 'service-pasang.webp', url: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=480&q=75', width: 480 },
  { name: 'service-bongkar.webp', url: 'https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?auto=format&fit=crop&w=480&q=75', width: 480 },
  { name: 'service-overhaul.webp', url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=480&q=75', width: 480 },
];

const outDir = path.resolve('public/images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

for (const item of images) {
  try {
    console.log(`Downloading ${item.name}...`);
    const res = await fetch(item.url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await sharp(buf)
      .resize({ width: item.width, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(path.join(outDir, item.name));
    console.log(`Saved ${item.name}`);
  } catch (err) {
    console.error(`Failed ${item.name}:`, err.message);
  }
}

console.log('All images downloaded and optimized locally in public/images/');
