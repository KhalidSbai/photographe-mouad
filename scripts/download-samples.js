import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');

const downloads = [
  { url: 'https://picsum.photos/seed/logo/200/200', dest: 'logo/logo.png' },
  { url: 'https://picsum.photos/seed/nature1/800/600', dest: 'images/nature/sample1.jpg' },
  { url: 'https://picsum.photos/seed/nature2/800/600', dest: 'images/nature/sample2.jpg' },
  { url: 'https://picsum.photos/seed/nature3/800/600', dest: 'images/nature/sample3.jpg' },
  { url: 'https://picsum.photos/seed/portrait1/600/800', dest: 'images/portraits/sample1.jpg' },
  { url: 'https://picsum.photos/seed/portrait2/600/800', dest: 'images/portraits/sample2.jpg' },
  { url: 'https://picsum.photos/seed/event1/800/600', dest: 'images/events/sample1.jpg' },
  { url: 'https://picsum.photos/seed/event2/800/600', dest: 'images/events/sample2.jpg' },
  { url: 'https://picsum.photos/seed/arch1/800/1000', dest: 'images/architecture/sample1.jpg' },
  { url: 'https://picsum.photos/seed/arch2/800/600', dest: 'images/architecture/sample2.jpg' },
  { url: 'https://picsum.photos/seed/wedding1/800/600', dest: 'images/weddings/sample1.jpg' },
];

async function downloadImage(url, destPath) {
  const fullPath = path.join(PUBLIC_DIR, destPath);
  console.log(`Downloading ${url} to ${fullPath}...`);
  const response = await fetch(url);
  if (!response.ok) {
    console.error(`Failed to fetch ${url}: ${response.statusText}`);
    return;
  }
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFileSync(fullPath, buffer);
}

async function main() {
  for (const item of downloads) {
    await downloadImage(item.url, item.dest);
  }
  console.log('All samples downloaded!');
}

main();
