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

## Learnings

**2026-05-16T10:34:40.554-07:00 — Cartão de Visita Print v1**

- **Tipografia para impressão:** Sora Bold para wordmark (name + "BAHIA" large) + Inter para contato e captions. Tamanho mínimo usado: 2.2pt equivalente (caption QR). Abaixo de 2pt evitar em Couché fosco.
- **Artboard padrão:** `viewBox="0 0 96 56"` com `width="96mm" height="56mm"` — unidades mm direto no SVG garantem que a gráfica não precisa ajustar escala.
- **QR code:** Gerado com Python `qrcode` v8.2, error correction H, versão automática (43×43 módulos). Inline como `<rect>` SVG nativos — vetorial puro, sem imagem embarcada. Escalonado via `scale()` transform para 30mm×30mm. Esta é a abordagem canônica para QR em SVG print.
- **Composição back card:** Divisão esquerda/direita (QR | contato) funciona melhor que topo/baixo para o formato 9×5cm — proporciona espaço generoso para o QR (33mm caixa branca) e coluna de contato legível.
- **Accent treatment para print:** Barra gradiente horizontal (0.8mm) na borda de sangria como única aplicação do gradiente — não em background. Balão de fala echo a 6% de opacidade como ornamento, sem poluir.
- **WhatsApp green `#25D366`:** Confinado exclusivamente ao ícone de círculo WhatsApp no verso. Nenhum outro uso de verde no cartão — regra mantida.
- **Paper rec:** Couché fosco 300g + laminação fosca + verniz UV localizado no logo (opcional premium). Prova de cor física obrigatória para fundo escuro `#0A1628`.
- **Guides layer:** Incluída como `<g id="guides" display="none">` nos arquivos de produção. Arquivos `-guides.svg` separados com guias visíveis para preview — linha vermelha = trim, azul = safe.

---

## 2026-05-16 — Lição: margem tipográfica para impressão

**Tarefa:** Cartão de visita — dark variant typography tightening + light variant creation.

**Lição aprendida:** Print typography should target `right_edge ≤ 88mm` (5mm from trim), not just ≤ 90mm (safe area boundary). The extra 2mm of optical margin makes a significant visual difference — text that technically fits inside the safe zone can still *feel* tight against the edge. The 88mm target (i.e., 5mm gap from the 93mm trim right edge in a 96mm artboard) gives the human eye real breathing room and prevents any production-creep risk.

**Aplicado em:** `cartao-visita-frente.svg`, `cartao-visita-verso.svg` e seus pares light/guides.

**Mudanças concretas:**
- Sub-tagline front: reduzida de 4 para 3 itens ("Campanhas" removido) — right-edge caiu de ~87mm para ~69mm
- Email font-size verso: 2.0 → 1.85 — right-edge: 90mm → 87.5mm
- SALVADOR · BA verso: anchor-end movido de x=89 para x=88

**Light variant design** (4 SVGs):
- Background: `#FAFBFC` (warm off-white) para versatilidade com gráficas padrão
- Text: `navy-950 #0A1628` (mesmo preto do dark) + `gray-700 #2A3447` para tagline
- Accents: `blue-500 #2E8BE6` (vs. `blue-400 #3FA9FF` no dark)
- QR code: direto no fundo branco (sem caixa branca adicional)
- Ornamento "B" fantasma: `#E6EAF0` a 55% opacity (vs. outline no dark)
- Ícones email/web: círculo `#2E8BE6` + ícone branco (vs. outline no dark)

Tipografia e grid mantidos idênticos entre variantes — mudanças são puramente de cor/tone.


## Learnings

**2026-05-16T12:52:37-07:00 — Cartão de Visita Redesign v3 (mockup-aligned)**

Refatoração completa dos 8 SVGs após Dali aprovar um mockup novo. Substitui v2 inteira.

- **Frente — assinatura visual nova:** balão de fala outline gigante (path do logo escalado ~1.55×) ocupa a metade direita do cartão, com stroke 0.6mm em gradiente `blue-400 → teal-500 → green-500`. Os 3 dots internos também viram circles outline. Esse outline gigante deve virar o **motivo gráfico recorrente** em heros e divisores web — substitui o balão fantasma 6% opacity da v2.
- **Verso — split com curva-S:** abandonei layout left/right plano. Agora é um split orgânico cream (esquerda, ~55%) × navy (direita, ~45%) usando dois cúbicos Bezier para a fronteira. Path: `M 96 0 L 56 0 C 56 16, 66 22, 62 32 C 58 42, 54 50, 54 56 L 96 56 Z`. A curva começa quase vertical no topo, dobra suavemente no meio e termina quase vertical no rodapé — replicar essa exata curva em hero sections quando precisar de divisão dark/light.
- **Headline nova oficial:** "Automatize conversas. / Inteligência que conecta." — palavra "conecta" sempre em `green-500 #25D366`. Esse par virou a tagline canônica de mid-funnel; substitui "Chatbots · Atendimento 24h · CRM".
- **Ícones de contato evoluíram:** outline `#3FA9FF` (v2) → círculos preenchidos `blue-500 #2E8BE6` 3.2mm com gliphos brancos (v3). Padrão muito mais legível em 2.0pt de texto adjacente. Adotar para contact-blocks em landing pages.
- **Build via Python:** desta vez gerei os 8 SVGs por um script único (`tmp/build_cards.py`) parametrizado por `variant ∈ {dark, light}` × `with_guides ∈ {True, False}`. Vantagem: typography rule `right_edge ≤ 88mm` checada uma vez e propagada. Mantive QR como `<rect>` por módulo (vetorial), 41×41 módulos, EC level H.
- **Verificação de margem:** caption "ESCANEIE E CONHEÇA" centrada inicialmente em x=75 dava right-edge=88.3mm — 0.3mm acima do alvo. Mudei para x=74. Lição: ao usar `text-anchor="middle"`, calcular `center + half_width` e validar contra 88mm, não confiar no eyeball.
- **Light variant do verso:** painel direito agora é `pale-blue #E6EFF5` (em vez do navy `#0E1E36` do dark) — mantém a curva e contraste mas com sensação clara coerente. WhatsApp icon mantém o verde original — assinatura inegociável.
- **Circuit-board decoration:** sutil (4 path angulares + 6 nodes), `stroke="#1FB6A8"` (dark) ou `#2E8BE6` (light), opacity 55%, stroke-width 0.18mm. Garante densidade visual no painel direito sem competir com QR.

