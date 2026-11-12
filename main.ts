// Sunflower Eclipse — "Make the coolest art" (coolest-art-01).
// Copies the bundled image to the output path, byte for byte.
// Deterministic: a plain byte copy, so both runs write identical bytes.
// The bundled image is a JPEG (kept small: the 1 MiB cap); the output is
// still named entry.png, which the rules allow (PNG or JPEG by first bytes).
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "art.jpg");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const dst = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
const bytes = readFileSync(src);
writeFileSync(dst, bytes);

// Verify the copy is byte-identical before exiting: a corrupt or partial
// write must fail loudly instead of silently shipping a broken image.
if (!readFileSync(dst).equals(bytes)) {
  throw new Error("entry.png does not match art.jpg after copy");
}
