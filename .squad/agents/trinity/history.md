# Project Context

- **Owner:** Dali Freire
- **Project:** Bahia Tecnologia — site institucional para startup especializada em automacoes para WhatsApp e inteligencia artificial.
- **Stack:** Site estatico atual em HTML/CSS/JavaScript; ajustar se o stack evoluir.
- **Created:** 2026-05-16T09:03:03.021-07:00

## Learnings

- Initial role: Frontend Dev for responsive static-site implementation.
- Noted that gestao-clinicas hero has 3 metric cards; "9 ferramentas" was replaced with "Plug & Play / Sem instalar nenhum app" to keep stats evergreen.
- A WhatsApp conversation mockup section ("Veja como funciona na prática") was added to `portifolio/gestao-clinicas/index.html` using a CSS-only phone mockup (`.phone-mockup`, `.chat-bubble`, `.chat-bubble--patient`, `.annotation-card` classes) with a dark background section (`.section--demo`). All CSS lives at the bottom of `assets/css/styles.css` under the `/* ── Clínicas demo diagram ──` block.

---

## Sprint 1 — Full Site Implementation (2026-05-16)

### What was built
Complete multi-page static site with 10 HTML pages, shared CSS design system, vanilla JS, SEO assets.

### Technical decisions
1. **Single CSS file** (`/assets/css/styles.css`) with all tokens, components, and utilities — avoids import overhead and is simpler for a small static site.
2. **Logo SVG inline** in every navbar and footer — avoids extra HTTP request, ensures instant render, and lets `currentColor` inherit correctly.
3. **LinearGradient IDs prefixed** with page-specific names (`nav-brand`, `ft-brand`) per page to avoid SVG ID collisions when multiple SVGs are in the same DOM.
4. **Absolute paths** (`/assets/…`) throughout — correct when served from root; works identically from all subdirectory pages without `../` path depth calculation.
5. **FAQ accordion** implemented in pure JS with ARIA (`aria-expanded`) — no CSS-only hack needed since JS is required for full site behavior anyway.
6. **Form** uses HTML5 validation + JS real-time validation + WhatsApp fallback on submit — complies with Dozer requirement to work without JS (HTML5 `required` / `type="email"` still validate).
7. **OG cover** is an SVG (`/assets/img/og-cover.svg`) — satisfies the requirement while avoiding binary assets.
8. **Wave dividers** inline SVG as specified by Neo §4.7.
9. **Chat mockup** in home hero using `.chat-mockup` / `.chat-bubble` components from Neo §4.9.

### Copy/design interpretation points
- The stats strip on Home uses Tank's confirmed numbers (143.763, 417, 38.8%) as Switch specified.
- The "Gestão de Clínicas" results section uses Tank's real metrics (20-30% no-show reduction, 9 tools, 24/7) since Switch's copy left those as "TBD (pendente dados reais)".
- Footer uses 4-column grid on desktop, stacking on mobile per Neo §4.4.
- Service page uses `service-card` component (not `card--light`) for the gradient left-border accent Neo specified.

### Dozer checklist gaps / not covered
| Item | Status | Note |
|------|--------|-------|
| Minified CSS/JS | ⚠️ Not done | No build step in scope; files are clean and small |
| WebP hero images | ⚠️ N/A | No photographic images used; all SVG decorative |
| Service worker / offline | ⚠️ Not done | Optional per Dozer test plan §7 |
| Google Analytics | ⚠️ Not added | No tracking script provided by Dali |
| Real WhatsApp number | ⚠️ Placeholder | Using 5571999999999 — Dali must replace before deploy |
| Email address | ⚠️ Placeholder | Using contato@bahiatecnologia.com.br — validate with Dali |
| Lighthouse run | ⚠️ Not run | Requires live environment; structure is compliant |
