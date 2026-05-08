import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_IMAGES_DIR = path.join(__dirname, '../public/images');
const OPTIMIZED_IMAGES_DIR = path.join(__dirname, '../public/optimized-images');
const OUTPUT_FILE = path.join(__dirname, '../src/data/images.json');

const ALLOWED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

function generateImagesJSON() {
  if (!fs.existsSync(PUBLIC_IMAGES_DIR)) {
    console.warn(`[WARN] Directory not found: ${PUBLIC_IMAGES_DIR}`);
    return;
  }

  const categories = [];

  const items = fs.readdirSync(PUBLIC_IMAGES_DIR, { withFileTypes: true });

  for (const item of items) {
    if (item.isDirectory()) {
      const categoryName = item.name;
      const categoryPath = path.join(PUBLIC_IMAGES_DIR, categoryName);
      
      const files = fs.readdirSync(categoryPath);
      const webpBasenames = new Set(
        files
          .filter(file => path.extname(file).toLowerCase() === '.webp')
          .map(file => path.basename(file, path.extname(file)))
      );
      const images = files
        .filter(file => ALLOWED_EXTENSIONS.includes(path.extname(file).toLowerCase()))
        .filter(file => {
          const ext = path.extname(file).toLowerCase();
          const basename = path.basename(file, ext);
          return ext === '.webp' || !webpBasenames.has(basename);
        })
        .map(file => {
          const optimizedFile = `${path.basename(file, path.extname(file))}.webp`;
          const optimizedPath = path.join(OPTIMIZED_IMAGES_DIR, categoryName, optimizedFile);
          return fs.existsSync(optimizedPath)
            ? `/optimized-images/${categoryName}/${optimizedFile}`
            : `/images/${categoryName}/${file}`;
        });

      categories.push({
        id: categoryName,
        name: categoryName.charAt(0).toUpperCase() + categoryName.slice(1),
        images: images
      });
    }
  }

  // Ensure output directory exists
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(categories, null, 2));
  console.log(`[SUCCESS] Generated ${OUTPUT_FILE} with ${categories.length} categories.`);
}

generateImagesJSON();
