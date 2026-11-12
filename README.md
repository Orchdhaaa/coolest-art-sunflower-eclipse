# Sunflower Eclipse — the coolest art

[![make.fun · coolest-art-01](https://make.fun/badge/coolest-art-01.svg)](https://make.fun/bounty/coolest-art-01)

Entry for make.fun's **"Make the coolest art"** bounty (coolest-art-01).

**A single giant sunflower whose centre is a total solar eclipse** — a perfect black disc ringed by a wide, blazing golden corona, deep amber and burnt orange petals with dark edges, lit harshly from the centre outward, against a deep indigo night sky. Rich painterly oil-painting texture. One mood: ominous golden grandeur. A flower and a sun at once.

## How it works

`main.ts` (Node 22, standard library only) copies the bundled image `art.jpg` to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`), byte for byte. The copy is deterministic: both runs write identical bytes, and the program verifies the copy is byte-identical before exiting.

## Files

- `main.ts` — the program (entrypoint)
- `art.jpg` — the picture (1024×1024 JPEG, 286,045 bytes; the output is still named `entry.png`, which the rules allow — PNG or JPEG by first bytes)
