const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

function createIco(pngBuffers, outputPath) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(count, 4); // count

  let offset = 6 + count * 16;
  const entries = [];
  const imageBuffers = [];

  for (const item of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(item.width >= 256 ? 0 : item.width, 0);
    entry.writeUInt8(item.height >= 256 ? 0 : item.height, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(item.buffer.length, 8);
    entry.writeUInt32LE(offset, 12);

    entries.push(entry);
    imageBuffers.push(item.buffer);
    offset += item.buffer.length;
  }

  const icoBuffer = Buffer.concat([header, ...entries, ...imageBuffers]);
  fs.writeFileSync(outputPath, icoBuffer);
}

async function build() {
  if (!fs.existsSync('public')) {
    fs.mkdirSync('public', { recursive: true });
  }

  const logoUpload = 'C:/Users/matheus/.gemini/antigravity/brain/f77857c4-2a21-442d-82eb-9d1856b466a6/.user_uploaded/media_1792887110770_41866939.png';
  const heroUpload = 'C:/Users/matheus/.gemini/antigravity/brain/f77857c4-2a21-442d-82eb-9d1856b466a6/.user_uploaded/media_1792888425332_86afeb1f.jpg';
  const shelfUpload = 'C:/Users/matheus/.gemini/antigravity/brain/f77857c4-2a21-442d-82eb-9d1856b466a6/.user_uploaded/media_1792887163289_43c0fa94.png';

  console.log('1. Processing Logo...');
  // Full logo
  await sharp(logoUpload)
    .extract({ left: 35, top: 70, width: 956, height: 520 })
    .png({ quality: 100 })
    .toFile('public/logo.png');

  await sharp('public/logo.png').toFile('public/logo-dark.png');
  await sharp('public/logo.png').toFile('public/logo-gold.png');
  await sharp('public/logo.png').toFile('public/logo-bruno-barroso.png');

  console.log('2. Processing Emblem...');
  // Emblem only: scales + B monogram (left: 230, top: 70, width: 562, height: 360)
  await sharp(logoUpload)
    .extract({ left: 230, top: 70, width: 562, height: 360 })
    .png({ quality: 100 })
    .toFile('public/logo-emblem.png');

  // Square transparent emblem
  const squareEmblem = await sharp('public/logo-emblem.png')
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  // Dark Luxury Seal with concentric gold rings
  const emblemResizedForSeal = await sharp('public/logo-emblem.png')
    .resize(380, 380, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const sealSvg = Buffer.from(`
    <svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="darkBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#241d16" />
          <stop offset="45%" stop-color="#14110d" />
          <stop offset="100%" stop-color="#0a0807" />
        </radialGradient>
        <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffe8a8" />
          <stop offset="30%" stop-color="#d4a843" />
          <stop offset="70%" stop-color="#96681e" />
          <stop offset="100%" stop-color="#f5d77f" />
        </linearGradient>
      </defs>
      <circle cx="300" cy="300" r="292" fill="url(#darkBg)" />
      <circle cx="300" cy="300" r="282" fill="none" stroke="url(#goldRing)" stroke-width="4" stroke-opacity="0.9" />
      <circle cx="300" cy="300" r="268" fill="none" stroke="url(#goldRing)" stroke-width="1.5" stroke-dasharray="8 6" stroke-opacity="0.55" />
      <circle cx="300" cy="300" r="248" fill="none" stroke="url(#goldRing)" stroke-width="2" stroke-opacity="0.6" />
    </svg>
  `);

  await sharp(sealSvg)
    .composite([{ input: emblemResizedForSeal, gravity: 'center' }])
    .png()
    .toFile('public/logo-seal.png');

  console.log('3. Generating Favicon & App Icons with Dr. Bruno Barroso Emblem...');
  // Multi-size true ICO from the square emblem
  const b16 = await sharp(squareEmblem).resize(16, 16).png().toBuffer();
  const b32 = await sharp(squareEmblem).resize(32, 32).png().toBuffer();
  const b48 = await sharp(squareEmblem).resize(48, 48).png().toBuffer();
  const b64 = await sharp(squareEmblem).resize(64, 64).png().toBuffer();

  createIco([
    { width: 16, height: 16, buffer: b16 },
    { width: 32, height: 32, buffer: b32 },
    { width: 48, height: 48, buffer: b48 },
    { width: 64, height: 64, buffer: b64 },
  ], 'public/favicon.ico');

  createIco([
    { width: 16, height: 16, buffer: b16 },
    { width: 32, height: 32, buffer: b32 },
    { width: 48, height: 48, buffer: b48 },
    { width: 64, height: 64, buffer: b64 },
  ], 'app/favicon.ico');

  // PNG icon files
  await sharp(squareEmblem).resize(512, 512).png().toFile('app/icon.png');
  await sharp(squareEmblem).resize(512, 512).png().toFile('public/icon.png');
  await sharp(squareEmblem).resize(192, 192).png().toFile('public/icon-192x192.png');
  await sharp(squareEmblem).resize(32, 32).png().toFile('public/icon-32x32.png');
  await sharp(squareEmblem).resize(16, 16).png().toFile('public/icon-16x16.png');

  // Apple touch icon (seal format)
  await sharp('public/logo-seal.png').resize(180, 180).png().toFile('app/apple-icon.png');
  await sharp('public/logo-seal.png').resize(180, 180).png().toFile('public/apple-icon.png');

  console.log('4. Processing Hero Photo...');
  await sharp(heroUpload).jpeg({ quality: 98, mozjpeg: true }).toFile('public/hero.jpg');
  await sharp(heroUpload).jpeg({ quality: 98, mozjpeg: true }).toFile('public/dr-bruno-barroso.jpg');
  await sharp(heroUpload).png({ quality: 100 }).toFile('public/dr-bruno-barroso.png');

  console.log('5. Processing Shelf Photo...');
  await sharp(shelfUpload).jpeg({ quality: 96 }).toFile('public/about.jpg');
  await sharp(shelfUpload).jpeg({ quality: 96 }).toFile('public/dr-bruno-livraria.jpg');
  await sharp(shelfUpload).png({ quality: 96 }).toFile('public/dr-bruno-livraria.png');

  console.log('Done generating all assets successfully!');
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
