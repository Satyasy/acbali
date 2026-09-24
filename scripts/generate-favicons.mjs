import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#091124"/>
      <stop offset="50%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>
    <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#F0F9FF"/>
      <stop offset="40%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>
    <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#0284C7" stop-opacity="0.2"/>
    </linearGradient>
    <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Squircle Base for App Icon & Google SERP Snippet -->
  <rect x="16" y="16" width="480" height="480" rx="108" fill="url(#bgGrad)"/>
  <rect x="16" y="16" width="480" height="480" rx="108" fill="none" stroke="url(#ringGrad)" stroke-width="4"/>

  <!-- Subtle Radial Ambient Center Glow -->
  <circle cx="256" cy="256" r="140" fill="#38BDF8" opacity="0.12"/>

  <!-- Jawara Teknik Emblem: Symmetrical Precision Snowflake (AC / Cold Flow) -->
  <g transform="translate(256, 256)" filter="url(#subtleGlow)" stroke="url(#cyanGrad)" stroke-width="24" stroke-linecap="round" stroke-linejoin="round">
    <!-- 6 Primary Spokes with Decorative Sub-Branches -->
    <!-- Spoke 1: 0 deg (Top) -->
    <g transform="rotate(0)">
      <line x1="0" y1="-28" x2="0" y2="-175"/>
      <line x1="0" y1="-120" x2="-38" y2="-158"/>
      <line x1="0" y1="-120" x2="38" y2="-158"/>
      <line x1="0" y1="-70" x2="-28" y2="-98"/>
      <line x1="0" y1="-70" x2="28" y2="-98"/>
      <circle cx="0" cy="-175" r="4" fill="#F0F9FF"/>
    </g>

    <!-- Spoke 2: 60 deg -->
    <g transform="rotate(60)">
      <line x1="0" y1="-28" x2="0" y2="-175"/>
      <line x1="0" y1="-120" x2="-38" y2="-158"/>
      <line x1="0" y1="-120" x2="38" y2="-158"/>
      <line x1="0" y1="-70" x2="-28" y2="-98"/>
      <line x1="0" y1="-70" x2="28" y2="-98"/>
      <circle cx="0" cy="-175" r="4" fill="#F0F9FF"/>
    </g>

    <!-- Spoke 3: 120 deg -->
    <g transform="rotate(120)">
      <line x1="0" y1="-28" x2="0" y2="-175"/>
      <line x1="0" y1="-120" x2="-38" y2="-158"/>
      <line x1="0" y1="-120" x2="38" y2="-158"/>
      <line x1="0" y1="-70" x2="-28" y2="-98"/>
      <line x1="0" y1="-70" x2="28" y2="-98"/>
      <circle cx="0" cy="-175" r="4" fill="#F0F9FF"/>
    </g>

    <!-- Spoke 4: 180 deg (Bottom) -->
    <g transform="rotate(180)">
      <line x1="0" y1="-28" x2="0" y2="-175"/>
      <line x1="0" y1="-120" x2="-38" y2="-158"/>
      <line x1="0" y1="-120" x2="38" y2="-158"/>
      <line x1="0" y1="-70" x2="-28" y2="-98"/>
      <line x1="0" y1="-70" x2="28" y2="-98"/>
      <circle cx="0" cy="-175" r="4" fill="#F0F9FF"/>
    </g>

    <!-- Spoke 5: 240 deg -->
    <g transform="rotate(240)">
      <line x1="0" y1="-28" x2="0" y2="-175"/>
      <line x1="0" y1="-120" x2="-38" y2="-158"/>
      <line x1="0" y1="-120" x2="38" y2="-158"/>
      <line x1="0" y1="-70" x2="-28" y2="-98"/>
      <line x1="0" y1="-70" x2="28" y2="-98"/>
      <circle cx="0" cy="-175" r="4" fill="#F0F9FF"/>
    </g>

    <!-- Spoke 6: 300 deg -->
    <g transform="rotate(300)">
      <line x1="0" y1="-28" x2="0" y2="-175"/>
      <line x1="0" y1="-120" x2="-38" y2="-158"/>
      <line x1="0" y1="-120" x2="38" y2="-158"/>
      <line x1="0" y1="-70" x2="-28" y2="-98"/>
      <line x1="0" y1="-70" x2="28" y2="-98"/>
      <circle cx="0" cy="-175" r="4" fill="#F0F9FF"/>
    </g>

    <!-- Central Precision Hexagon Hub & Crystal Spark -->
    <polygon points="0,-36 31,-18 31,18 0,36 -31,18 -31,-18" fill="#091124" stroke="url(#cyanGrad)" stroke-width="12"/>
    <circle cx="0" cy="0" r="14" fill="#FFFFFF" stroke="none"/>
  </g>
</svg>`;

const publicDir = path.resolve('public');
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent, 'utf-8');
console.log('Created public/favicon.svg');

const svgBuffer = Buffer.from(svgContent);

// Generate multi-resolution icons
await sharp(svgBuffer)
  .resize(48, 48)
  .png()
  .toFile(path.join(publicDir, 'favicon-48x48.png'));
console.log('Created public/favicon-48x48.png');

await sharp(svgBuffer)
  .resize(96, 96)
  .png()
  .toFile(path.join(publicDir, 'favicon-96x96.png'));
console.log('Created public/favicon-96x96.png');

await sharp(svgBuffer)
  .resize(180, 180)
  .png()
  .toFile(path.join(publicDir, 'apple-touch-icon.png'));
console.log('Created public/apple-touch-icon.png');

await sharp(svgBuffer)
  .resize(192, 192)
  .png()
  .toFile(path.join(publicDir, 'icon-192.png'));
console.log('Created public/icon-192.png');

await sharp(svgBuffer)
  .resize(512, 512)
  .png()
  .toFile(path.join(publicDir, 'icon-512.png'));
console.log('Created public/icon-512.png');

// Fallback favicon.ico (Sharp supports ico via png or directly)
await sharp(svgBuffer)
  .resize(48, 48)
  .toFile(path.join(publicDir, 'favicon.ico'));
console.log('Created public/favicon.ico');
