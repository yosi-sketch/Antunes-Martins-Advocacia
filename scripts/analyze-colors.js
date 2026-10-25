const sharp = require('sharp');

async function analyzeLogo() {
  const { data, info } = await sharp('C:/Users/matheus/.gemini/antigravity/brain/e715279c-60dc-4c15-9474-c37e2bf97468/.user_uploaded/media_1792919688896_2ffc1179.png')
    .raw()
    .toBuffer({ resolveWithObject: true });
  
  const colors = [];
  for (let i = 0; i < data.length; i += 4) {
    const a = data[i + 3];
    if (a > 220) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      if (r > 80 || g > 60) {
        colors.push({ r, g, b });
      }
    }
  }

  let avgR = 0, avgG = 0, avgB = 0;
  const golds = [];
  for (const c of colors) {
    avgR += c.r; avgG += c.g; avgB += c.b;
    if (c.r > 160 && c.g > 120 && c.b < 120) {
      golds.push(c);
    }
  }
  avgR = Math.round(avgR / colors.length);
  avgG = Math.round(avgG / colors.length);
  avgB = Math.round(avgB / colors.length);

  const toHex = (r, g, b) => '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');

  console.log('Average logo color:', toHex(avgR, avgG, avgB));
  
  golds.sort((a,b) => (b.r + b.g + b.b) - (a.r + a.g + a.b));
  if (golds.length > 0) {
    const high = golds[Math.floor(golds.length * 0.05)];
    const mid = golds[Math.floor(golds.length * 0.5)];
    const deep = golds[Math.floor(golds.length * 0.95)];
    console.log('Highlight Gold (bright):', toHex(high.r, high.g, high.b), high);
    console.log('Main Brand Gold:', toHex(mid.r, mid.g, mid.b), mid);
    console.log('Deep Shadow Gold:', toHex(deep.r, deep.g, deep.b), deep);
  }
}

async function analyzeOffice() {
  const { data } = await sharp('C:/Users/matheus/.gemini/antigravity/brain/e715279c-60dc-4c15-9474-c37e2bf97468/.user_uploaded/media_1792919653455_4591943d.jpg')
    .extract({ left: 40, top: 250, width: 150, height: 150 })
    .raw()
    .toBuffer({ resolveWithObject: true });
  
  let r = 0, g = 0, b = 0, count = data.length / 3;
  for (let i = 0; i < data.length; i += 3) {
    r += data[i]; g += data[i+1]; b += data[i+2];
  }
  r = Math.round(r / count);
  g = Math.round(g / count);
  b = Math.round(b / count);
  const toHex = (r, g, b) => '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
  console.log('Office Navy Petrol Wall:', toHex(r, g, b), { r, g, b });

  // Sample the wood desk as secondary warm neutral tone
  const desk = await sharp('C:/Users/matheus/.gemini/antigravity/brain/e715279c-60dc-4c15-9474-c37e2bf97468/.user_uploaded/media_1792919653455_4591943d.jpg')
    .extract({ left: 300, top: 920, width: 300, height: 80 })
    .raw()
    .toBuffer({ resolveWithObject: true });
  let dr = 0, dg = 0, db = 0, dcount = desk.data.length / 3;
  for (let i = 0; i < desk.data.length; i += 3) {
    dr += desk.data[i]; dg += desk.data[i+1]; db += desk.data[i+2];
  }
  dr = Math.round(dr / dcount);
  dg = Math.round(dg / dcount);
  db = Math.round(db / dcount);
  console.log('Desk Warm Oak / Amber tone:', toHex(dr, dg, db), { dr, dg, db });
}

analyzeLogo().then(analyzeOffice);
