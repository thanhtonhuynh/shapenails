// import fs from "fs/promises";
// import { imageSizeFromFile } from "image-size/fromFile";
// import path from "path";
// import { fileURLToPath } from "url";

// // These lines are necessary because __dirname doesn't exist in ESM:
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const images = ["about1.png", "about2.png", "about3.png"];

// const folderPath = path.join(__dirname, "public");

// async function generateGalleryItems() {
//   const galleryItems = await Promise.all(
//     images.map(async (filename) => {
//       const filePath = path.join(folderPath, filename);
//       const dimensions = await imageSizeFromFile(filePath);

//       return {
//         src: `/${filename}`,
//         alt: `Gallery image ${filename}`,
//         width: dimensions?.width,
//         height: dimensions?.height,
//       };
//     }),
//   );

//   await fs.writeFile(
//     path.join(__dirname, "galleryItems.json"),
//     JSON.stringify(galleryItems, null, 2),
//   );

//   console.log("Gallery JSON file generated!");
// }

// generateGalleryItems();

import fs from "fs/promises";
import { imageSizeFromFile } from "image-size/fromFile";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Folder where your images are located (inside public)
const folderName = "../public"; // 👈 customize as needed!
const folderPath = path.join(__dirname, folderName);

async function generateGalleryItems() {
  try {
    // Read all files in the folder
    const files = await fs.readdir(folderPath);

    // Filter only image files (optional: add more extensions as needed)
    const imageExtensions = [".png", ".jpg", ".jpeg", ".webp"];
    const imageFiles = files.filter((file) =>
      imageExtensions.includes(path.extname(file).toLowerCase()),
    );

    if (imageFiles.length === 0) {
      console.log("No image files found in folder:", folderPath);
      return;
    }

    // Process each image
    const galleryItems = await Promise.all(
      imageFiles.map(async (filename) => {
        const filePath = path.join(folderPath, filename);
        const dimensions = await imageSizeFromFile(filePath);

        return {
          src: `/${filename}`, // 👈 relative to /public folder in Next.js
          alt: `Gallery image ${filename}`,
          width: dimensions?.width,
          height: dimensions?.height,
        };
      }),
    );

    // Save galleryItems.json (put it in src/data for imports)
    const outputPath = path.join(__dirname, "../src/data/galleryItems.json");
    await fs.writeFile(outputPath, JSON.stringify(galleryItems, null, 2));

    console.log("Gallery JSON file generated at:", outputPath);
  } catch (error) {
    console.error("Error generating gallery JSON:", error);
  }
}

generateGalleryItems();
