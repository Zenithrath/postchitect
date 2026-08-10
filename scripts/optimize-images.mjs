import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const images = [
  "hero/architecture-01-v2.jpg",
  "hero/architecture-02-v2.jpg",
  "hero/architecture-03-v2.jpg",
  "hero/architecture-04-v2.jpg",
  "projects/project-01-optimized.jpg",
  "projects/project-03.jpeg",
  "projects/project-04.jpeg",
  "projects/project-05.jpeg",
  "projects/project-06.jpeg",
  "projects/project-07.jpeg",
  "projects/project-10.jpeg",
  "projects/project-11.jpeg",
  "projects/project-12.jpeg",
];

const widths = [480, 960];
const publicDirectory = path.resolve("public/images");
const outputDirectory = path.join(publicDirectory, "optimized");

for (const relativePath of images) {
  const inputPath = path.join(publicDirectory, relativePath);
  const extension = path.extname(relativePath);
  const basename = relativePath.slice(0, -extension.length);

  for (const width of widths) {
    const outputPath = path.join(outputDirectory, `${basename}-${width}.webp`);
    await mkdir(path.dirname(outputPath), { recursive: true });
    await sharp(inputPath)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 80, effort: 5, smartSubsample: true })
      .toFile(outputPath);
  }
}

console.log(`Created ${images.length * widths.length} optimized WebP files.`);
