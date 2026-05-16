# Project Context

- **Owner:** Dali Freire
- **Project:** Bahia Tecnologia — site institucional para startup especializada em automacoes para WhatsApp e inteligencia artificial.
- **Stack:** Site estatico atual em HTML/CSS/JavaScript; ajustar se o stack evoluir.
- **Created:** 2026-05-16T09:03:03.021-07:00

## Learnings

- Initial role: Tester for QA, accessibility, responsive behavior, and reviewer gates.
- **Anticipatory test planning approach:** Created detailed test plan from brief before implementation — enables Trinity to self-validate before submission, reducing rework cycles.
- **Multi-page institutional site critical areas:** Smoke tests (loading, nav, console errors), nav consistency across 9 pages, WhatsApp CTA placement/correctness (must be identical across all pages).
- **Responsiveness testing priority:** Five breakpoints essential (360, 414, 768, 1024, 1440); focus on mobile nav collapse, hero legibility, no horizontal overflow — are biggest mobile failures in static sites.
- **Accessibility blockers for WCAG AA:** Contraste navy background (4.5:1 required), focus outline on all interactive elements, heading hierarchy (single h1), form labels + validation feedback — these are top 80% of accessibility failures in institutional sites.
- **SEO technical requirements for static site:** Sitemap.xml (required, often forgotten), robots.txt pointing sitemap, unique title/meta per page (not auto-generated), OG tags for social sharing, canonical URLs, pt-BR lang + UTF-8 charset — essential for indexing.
- **Performance constraint for static site:** < 200KB (HTML+CSS+JS without images) is strict but achievable with vanilla JS; image optimization (lazy-loading, webp, responsive) is 80% of performance gains. Preload fonts, inline critical CSS.
- **Edge case importance:** Deep linking to /portifolio/{product} must work; form validation without JS (HTML5 native); offline behavior; links external with rel="noopener".
- **Rejection criteria clarity:** Defined 8 critical blockers (loading broken, nav broken, horizontal overflow, contrast fail, broken links, lighthouse < 50, WA number inconsistency, security issues) — enables clear PASS/FAIL gate.
- **Content consistency often overlooked:** Single WhatsApp number, single email, consistent terminology (CTAs), pt-BR orthography — brand trust depends on these details across all 9 pages.
- **Test plan as deliverable artifact:** Document lives in `.squad/decisions/inbox/` for Trinity pre-delivery validation; includes execution checklist, matrix template, and clear next-steps workflow.
