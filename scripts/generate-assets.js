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

async function processAssets() {
  if (!fs.existsSync('public')) {
    fs.mkdirSync('public', { recursive: true });
  }

  const logoUpload = 'C:/Users/matheus/.gemini/antigravity/brain/e715279c-60dc-4c15-9474-c37e2bf97468/.user_uploaded/media_1792919688896_2ffc1179.png';
  const teamUpload = 'C:/Users/matheus/.gemini/antigravity/brain/e715279c-60dc-4c15-9474-c37e2bf97468/.user_uploaded/media_1792919653455_4591943d.jpg';

  console.log('1. Processing Full Logo (trimming transparent whitespace)...');
  const trimmedLogo = await sharp(logoUpload).trim().toBuffer({ resolveWithObject: true });
  console.log('Trimmed logo dimensions:', trimmedLogo.info.width, 'x', trimmedLogo.info.height);
  
  await sharp(trimmedLogo.data).png({ quality: 100 }).toFile('public/logo.png');
  await sharp(trimmedLogo.data).png({ quality: 100 }).toFile('public/logo-antunes-martins.png');

  console.log('2. Extracting Emblem (Sword & AM monogram)...');
  const emblemCrop = await sharp(logoUpload)
    .extract({ left: 45, top: 17, width: 304, height: 301 })
    .png({ quality: 100 })
    .toBuffer();
  
  // Create 512x512 emblem centered with subtle safe area
  await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([{
      input: await sharp(emblemCrop).resize(450, 450, { fit: 'contain' }).toBuffer(),
      gravity: 'center'
    }])
    .png()
    .toFile('public/logo-emblem.png');

  console.log('3. Generating Favicons & Icons...');
  const icon512 = await sharp('public/logo-emblem.png').resize(512, 512).png().toBuffer();
  fs.writeFileSync('public/icon.png', icon512);
  fs.writeFileSync('app/icon.png', icon512);

  const icon180 = await sharp('public/logo-emblem.png').resize(180, 180).png().toBuffer();
  fs.writeFileSync('public/apple-icon.png', icon180);
  fs.writeFileSync('app/apple-icon.png', icon180);

  const icon32 = await sharp('public/logo-emblem.png').resize(32, 32).png().toBuffer();
  fs.writeFileSync('public/icon-32x32.png', icon32);

  const icon16 = await sharp('public/logo-emblem.png').resize(16, 16).png().toBuffer();
  fs.writeFileSync('public/icon-16x16.png', icon16);

  const pngBuffers = [
    { width: 16, height: 16, buffer: icon16 },
    { width: 32, height: 32, buffer: icon32 },
    { width: 48, height: 48, buffer: await sharp('public/logo-emblem.png').resize(48, 48).png().toBuffer() }
  ];
  createIco(pngBuffers, 'public/favicon.ico');
  createIco(pngBuffers, 'app/favicon.ico');

  console.log('4. Processing Team / Office Photo...');
  await sharp(teamUpload).jpeg({ quality: 95 }).toFile('public/hero.jpg');
  await sharp(teamUpload).jpeg({ quality: 95 }).toFile('public/equipe-antunes-martins.jpg');
  await sharp(teamUpload).jpeg({ quality: 95 }).toFile('public/about.jpg');
  await sharp(teamUpload).jpeg({ quality: 95 }).toFile('public/dra-giovana-e-equipe.jpg');

  console.log('Asset generation completed successfully!');
}

processAssets().catch(console.error);
