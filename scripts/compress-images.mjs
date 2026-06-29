import { readdir, stat, rename, unlink } from "node:fs/promises";
import { join, extname, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = join(__dirname, "..", "public", "images");

// Only downscale images wider than this; never upscale.
const MAX_WIDTH = 1920;

const JPEG_QUALITY = 80;
const WEBP_QUALITY = 80;
const PNG_QUALITY = 80; // used for palette quantization

const exts = new Set([".png", ".jpg", ".jpeg", ".webp"]);

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await walk(full)));
    } else if (exts.has(extname(entry.name).toLowerCase())) {
      out.push(full);
    }
  }
  return out;
}

function fmt(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

async function compressOne(file) {
  const ext = extname(file).toLowerCase();
  const originalSize = (await stat(file)).size;

  let pipeline = sharp(file, { failOn: "none" });
  const meta = await pipeline.metadata();

  // Re-create the pipeline so resize/encode are applied cleanly.
  pipeline = sharp(file, { failOn: "none" }).rotate();

  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  if (ext === ".jpg" || ext === ".jpeg") {
    pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
  } else if (ext === ".webp") {
    pipeline = pipeline.webp({ quality: WEBP_QUALITY });
  } else if (ext === ".png") {
    pipeline = pipeline.png({
      quality: PNG_QUALITY,
      compressionLevel: 9,
      effort: 8,
      palette: true,
    });
  }

  const tmp = join(dirname(file), `.tmp-${basename(file)}`);
  await pipeline.toFile(tmp);
  const newSize = (await stat(tmp)).size;

  if (newSize < originalSize) {
    await rename(tmp, file);
    return { file, originalSize, newSize, changed: true };
  }
  await unlink(tmp);
  return { file, originalSize, newSize: originalSize, changed: false };
}

async function main() {
  const files = await walk(IMAGES_DIR);
  console.log(`Found ${files.length} images in ${IMAGES_DIR}\n`);

  let totalBefore = 0;
  let totalAfter = 0;
  let optimized = 0;

  for (const file of files) {
    try {
      const r = await compressOne(file);
      totalBefore += r.originalSize;
      totalAfter += r.newSize;
      const rel = file.replace(IMAGES_DIR + "\\", "").replace(IMAGES_DIR + "/", "");
      if (r.changed) {
        optimized++;
        const pct = (100 * (1 - r.newSize / r.originalSize)).toFixed(0);
        console.log(`  ${rel}: ${fmt(r.originalSize)} -> ${fmt(r.newSize)} (-${pct}%)`);
      } else {
        console.log(`  ${rel}: skipped (already optimal)`);
      }
    } catch (err) {
      console.error(`  ERROR ${file}: ${err.message}`);
    }
  }

  console.log(`\nOptimized ${optimized}/${files.length} files`);
  console.log(
    `Total: ${fmt(totalBefore)} -> ${fmt(totalAfter)} ` +
      `(saved ${fmt(totalBefore - totalAfter)}, -${(100 * (1 - totalAfter / totalBefore)).toFixed(1)}%)`
  );
}

main();
