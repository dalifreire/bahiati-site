# Project Context

- **Owner:** Dali Freire
- **Project:** Bahia Tecnologia — site institucional para startup especializada em automacoes para WhatsApp e inteligencia artificial.
- **Stack:** Site estatico atual em HTML/CSS/JavaScript; ajustar se o stack evoluir.
- **Created:** 2026-05-16T09:03:03.021-07:00

## Learnings

- Initial role: Designer visual/brand for identity, hierarchy, and visual polish.

## Learnings

**2026-05-16T09:27:29.921-07:00 — Design system v1**

- Cartão de visita é a fonte de verdade da identidade: navy `#0A1628`, gradiente `#2E8BE6 → #1FB6A8 → #25D366` a 135°, verde WhatsApp como CTA primária. Não inventar paleta paralela.
- O motivo gráfico recorrente é o **balão de fala** (mesmo desenho do logo "B"). Ele aparece como ornamento outline no verso do cartão dark e deve virar elemento decorativo de hero e divisores.
- O segundo cartão dá a pista de composição light↔dark: curva orgânica em vez de linha reta. Replicar como `clip-path`/SVG mask em hero de páginas de produto.
- Tipografia escolhida: **Sora** (display) + **Inter** (body). Sora casa com o desenho geométrico aberto da palavra "Bahia" no cartão; Inter é o padrão seguro de leitura.
- Gradiente nunca em > 25% do viewport — é acento, não cenário. Aprendi observando que no cartão ele só ocupa o logo e algumas palavras-chave ("WHATSAPP", "conecta", "SOLUÇÕES").
- Para SVG inline com gradient, sempre prefixar IDs (`bt-brand`) para evitar colisão quando múltiplos SVGs aparecem na mesma página — Trinity vai precisar disso.
- Trinity recebeu bloco `:root` pronto para colar em `styles/tokens.css` — minimiza retrabalho.
