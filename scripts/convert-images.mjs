import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, parse } from "node:path";

const SRC = "src/assets/Avatars";
const OUT = "src/assets/Avatars/optimized";
const SIZES = [180, 360]; // 1x, 2x
const exts = [".jpg", ".jpeg", ".png"];

async function main() {
  const files = (await readdir(SRC)).filter((f) =>
    exts.includes(parse(f).ext.toLowerCase())
  );
  if (!existsSync(OUT)) await mkdir(OUT, { recursive: true });

  for (const f of files) {
    const { name } = parse(f);
    const src = join(SRC, f);
    for (const w of SIZES) {
      const suffix = w === SIZES[0] ? "" : `@${w / SIZES[0]}x`;
      const baseOut = join(OUT, `${name}${suffix}`);
      await sharp(src).resize({ width: w, withoutEnlargement: true }).avif({ quality: 55 }).toFile(`${baseOut}.avif`);
      await sharp(src).resize({ width: w, withoutEnlargement: true }).webp({ quality: 75 }).toFile(`${baseOut}.webp`);
      await sharp(src).resize({ width: w, withoutEnlargement: true }).jpeg({ quality: 80, mozjpeg: true }).toFile(`${baseOut}.jpg`);
      console.log(`✓ ${name}${suffix} (avif/webp/jpg) @ ${w}px`);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
