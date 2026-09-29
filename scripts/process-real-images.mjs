import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const srcDir = path.resolve('public/images/extracted');
const outDir = path.resolve('public/images');

const mapping = [
  { file: 'WhatsApp Image 2026-09-30 at 00.20.12 (1).jpeg', dest: 'hero.webp', width: 1280, height: 720 },
  { file: 'WhatsApp Image 2026-09-30 at 00.20.11.jpeg', dest: 'service-cuci-1pk.webp', width: 640, height: 420 },
  { file: 'WhatsApp Image 2026-09-30 at 00.20.09.jpeg', dest: 'service-cuci-2pk.webp', width: 640, height: 420 },
  { file: 'WhatsApp Image 2026-09-30 at 00.20.09 (1).jpeg', dest: 'service-inverter.webp', width: 640, height: 420 },
  { file: 'WhatsApp Image 2026-09-30 at 00.20.13.jpeg', dest: 'service-freon.webp', width: 640, height: 420 },
  { file: 'WhatsApp Image 2026-09-30 at 00.20.14 (2).jpeg', dest: 'service-bocor.webp', width: 640, height: 420 },
  { file: 'WhatsApp Image 2026-09-30 at 00.20.10 (1).jpeg', dest: 'service-pasang.webp', width: 640, height: 420 },
  { file: 'WhatsApp Image 2026-09-30 at 00.20.13 (1).jpeg', dest: 'service-bongkar.webp', width: 640, height: 420 },
  { file: 'WhatsApp Image 2026-09-30 at 00.20.14.jpeg', dest: 'service-overhaul.webp', width: 640, height: 420 },
  { file: 'WhatsApp Image 2026-09-30 at 00.20.14 (1).jpeg', dest: 'issue-bocor.webp', width: 640, height: 420 },
  { file: 'WhatsApp Image 2026-09-30 at 00.20.12.jpeg', dest: 'issue-kurang-dingin.webp', width: 640, height: 420 },
  { file: 'WhatsApp Image 2026-09-30 at 00.20.15 (1).jpeg', dest: 'issue-bau-apek.webp', width: 640, height: 420 },
  { file: 'WhatsApp Image 2026-09-30 at 00.20.15.jpeg', dest: 'issue-bising.webp', width: 640, height: 420 },
];

for (const item of mapping) {
  const inputPath = path.join(srcDir, item.file);
  const outputPath = path.join(outDir, item.dest);
  if (fs.existsSync(inputPath)) {
    console.log(`Processing ${item.file} -> ${item.dest}...`);
    await sharp(inputPath)
      .resize(item.width, item.height, {
        fit: 'cover',
        position: 'center',
      })
      .webp({ quality: 80, effort: 6 })
      .toFile(outputPath);
    const stat = fs.statSync(outputPath);
    console.log(`Generated ${item.dest}: ${(stat.size / 1024).toFixed(1)} KB`);
  } else {
    console.warn(`File not found: ${inputPath}`);
  }
}

console.log('Real photos processed successfully!');
