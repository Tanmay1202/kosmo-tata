const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

const zipPath = path.join(__dirname, 'public/newest_scrap.zip');
const outDir = path.join(__dirname, 'public/newest_scrap');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log('Reading zip...');
const zip = new AdmZip(zipPath);
const zipEntries = zip.getEntries();

console.log(`Found ${zipEntries.length} entries.`);

let count = 0;
for (const entry of zipEntries) {
  if (entry.isDirectory) continue;
  
  const ext = path.extname(entry.entryName).toLowerCase();
  const isImageExt = ['.jpg', '.jpeg', '.png', '.webp', '.avif'].includes(ext);
  const isScene7 = entry.entryName.includes('s7ap1.scene7.com');
  const isTml = entry.entryName.includes('content/dam/tml');
  
  if (isImageExt || isScene7 || isTml) {
    const targetPath = path.join(outDir, entry.entryName);
    
    if (targetPath.length > 250) {
      continue;
    }
    
    try {
      const parentDir = path.dirname(targetPath);
      if (!fs.existsSync(parentDir)) {
        fs.mkdirSync(parentDir, { recursive: true });
      }
      fs.writeFileSync(targetPath, entry.getData());
      count++;
    } catch (e) {
      // ignore
    }
  }
}

console.log(`Extracted ${count} images successfully.`);
