# Orchestration: Cartão v4 Feature-Grid Decision Merge

**Date:** 2026-05-17  
**Coordinator:** Scribe  
**Batch:** Neo cartão-redesign-v4-feature-grid decision merge

## Summary

Neo's cartão v4 decision (`neo-cartao-redesign-v4-feature-grid.md` from `/inbox/`) successfully merged into `.squad/decisions.md` as a new ADR entry.

## Files Modified

### `.squad/decisions.md`
- Appended new ADR: `2026-05-17T12:49:06.049-07:00: Cartão de Visita v4 — Feature-Grid Layout`
- Preserved all prior decisions (Initial Squad, Light Variant, v3)
- Summary covers: layout changes (feature-grid front vs. bubble), verso adjustments (+55 country code), light variants, build script, typography audit, downstream impacts (Trinity icons, Switch copy, contact identity).

### `.squad/agents/neo/history.md`
- Will be updated to reflect v4 completion and hand-off to Trinity/Switch teams for component integration.

### Design Assets (8 SVGs + README)
- `assets/print/cartao-visita-frente.svg` (dark)
- `assets/print/cartao-visita-verso.svg` (dark)
- `assets/print/cartao-visita-frente-guides.svg` (dark with guides)
- `assets/print/cartao-visita-verso-guides.svg` (dark with guides)
- `assets/print/cartao-visita-frente-light.svg` (light)
- `assets/print/cartao-visita-verso-light.svg` (light)
- `assets/print/cartao-visita-frente-light-guides.svg` (light with guides)
- `assets/print/cartao-visita-verso-light-guides.svg` (light with guides)
- `assets/print/README.md` — updated with v4 specs & typography audit results.

## Downstream Notifications

- **Trinity (Frontend):** 4 outline icons (`FeatureIcon` component) ready for reuse in landing pages.
- **Switch (Copy):** 4 feature labels approved as canonical manifest for site copy.
- **Tank (Infrastructure):** Contact phone format standardized to `+55 71 ...`.

## Status

✅ Ready for production print.
