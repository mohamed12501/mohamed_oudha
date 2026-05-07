import heicConvert from 'heic-convert';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const publicDir = path.join(__dirname, 'public');
const files = fs.readdirSync(publicDir);

const heicFiles = files.filter(f => f.toLowerCase().endsWith('.heic'));

console.log(`Found ${heicFiles.length} HEIC files to convert...`);

Promise.all(
  heicFiles.map(async (file) => {
    const inputPath = path.join(publicDir, file);
    const outputPath = path.join(publicDir, file.replace(/\.heic$/i, '.jpg'));
    
    try {
      const inputBuffer = fs.readFileSync(inputPath);
      const outputBuffer = await heicConvert({
        buffer: inputBuffer,
        format: 'JPEG',
        quality: 0.9,
      });
      fs.writeFileSync(outputPath, outputBuffer);
      console.log(`✓ Converted: ${file} → ${path.basename(outputPath)}`);
    } catch (err) {
      console.error(`✗ Error converting ${file}:`, err.message);
    }
  })
).then(() => {
  console.log('\nConversion complete!');
  process.exit(0);
}).catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
