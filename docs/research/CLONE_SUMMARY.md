# Clone Summary

## Targets

| Site | Source | Route |
|------|--------|-------|
| Align and Flow | https://alignflow-fluid-demo.squarespace.com/ | `/align-flow` |
| Ludo Bolcato | https://www.ludobolcato.com/ | `/ludo-bolcato` |

Hub: `/`

## Extraction artifacts

- `docs/research/alignflow-fluid-demo/` — topology, extraction JSON, assets map, full text
- `docs/research/ludobolcato/` — same
- `docs/design-references/<site>/` — desktop/mobile screenshots
- `public/images/alignflow/` · `public/images/ludobolcato/` — downloaded media

## Design tokens (extracted)

### Align and Flow
- Background: `rgb(238, 237, 235)` / `#eeedebea`
- Text: black / `rgb(51, 51, 51)`
- Accent banner: warm sand `#e5d7c8`
- Display font: Orpheus Pro / Adobe Garamond Pro → **Cormorant Garamond**
- Buttons: solid black, square corners, ~14–18px type

### Ludo Bolcato
- Nav: black, Futura PT uppercase tracked
- Accent CTA: `rgb(237, 176, 176)` / `#edb0b0`
- Deep green: `rgb(0, 71, 62)` · dark teal text `rgb(0, 26, 22)`
- Soft blush: `rgb(248, 233, 211)`
- Script/italic display: Playfair Display (source also uses Playfair + Futura PT)
- Sans: **Montserrat** as Futura PT stand-in

## Scope notes

- Homepage clones only (primary landing pages from the provided URLs)
- No real commerce/auth backends
- Contact / newsletter forms are presentational
- Squarespace chrome (“Create a Site Like This”) omitted on purpose

## Scripts

```bash
node scripts/extract-sites.mjs   # re-scrape screenshots + assets
npm run dev
```
