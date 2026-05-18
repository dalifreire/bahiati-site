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

## Learnings

**2026-05-17T12:49:06-07:00 — Cartão de Visita v4 (feature-grid)**

Dali aprovou um novo mockup ("gostei mais do modelo em anexo") trocando a frente da v3. A v4 substitui o balão outline gigante por uma **grade de 4 features** (ícone outline + label 2-linhas small-caps), separada do bloco de marca por um divisor vertical fino com gradiente.

- **Nova assinatura da frente:** layout meio-a-meio (logo+wordmark à esquerda × feature-grid à direita) com **vertical separator** em `x=51.5` usando linearGradient `bt-sep` (azul→teal→azul, fade nas pontas, stroke-width 0.35). Esse separador é o novo motivo divisor — usar em hero sections do site quando precisar dividir "marca / value-prop".
- **Icon library (4 outline icons reutilizáveis):** chat-gear, brain (com nodes de circuito), whatsapp speech-bubble+phone, bar-chart+arrow. Tamanho canônico 5mm × 5mm, stroke 0.7 user-units (~0.35mm), gradient `bt-icon-stroke` (blue-400→teal-500) — exceto WhatsApp que mantém `#25D366` sólido. Internal viewBox 0-10 + transform scale. Vão virar `<FeatureIcon kind="...">` no front-end.
- **Telefone agora com `+55`:** padrão Dali alinhado ao mockup — usar `+55 71 98380-3720` em todas as superfícies (cartão, site, assinaturas). Substitui o formato curto `71 98380-3720` da v3.
- **Tag tipográfica para grid labels:** label-row de 2 linhas usando Inter 600 (line 1) + Inter 500 (line 2) ambas font-size 2.1, letter-spacing 0.6, espaçamento entre linhas 2.8mm. Label mais longa ("MAIS RESULTADOS") right-edge=87.2mm — sobra 0.8mm. Se a gráfica relatar corte óptico, baixar letter-spacing de 0.6 → 0.4.
- **Estrutura do script v4:** `tmp/build_cards_v4.py` substitui `build_cards.py` — same pattern (parametrizado `variant × with_guides`) mas com funções `icon_*(stroke)` extraídas para a icon-library. QR sempre via `qrcode` lib + row-run encoding (`<rect width="N" height="1">` por sequência contígua), reduz tamanho do SVG em ~70% vs. um rect por módulo.
- **Curva-S do verso preservada exatamente:** mesmo Bezier `M 96 0 L 56 0 C 56 16, 66 22, 62 32 C 58 42, 54 50, 54 56 L 96 56 Z` — virou um asset estável da marca.
- **Validation via qlmanage:** macOS `qlmanage -t -s 800 -o tmp <svg>` gera PNG decente para sanity-check antes de ir para a gráfica. Sem `cairosvg` nem `rsvg-convert` instalados nesse mac, qlmanage é o renderer disponível.

## Learnings

**2026-05-18T08:36:39-07:00 — Propostas de Logo (3 opções SVG)**

- **Opção 1 — Símbolo + Wordmark horizontal:** Hexágono com 6 nós de rede interconectados por linhas internas (cross-edges em baixa opacidade). Nó central luminoso (teal fill + ponto cream) funciona como "cérebro" da marca. Wordmark com bold "Bahia" + dot teal como separador visual + "Tecnologia" em azul regular. Tagline em small-caps spacing. viewBox 480×100 — ideal para header de site.
- **Opção 2 — Ícone vertical WhatsApp × IA:** Bolha de chat (path com tail de balão) como container do símbolo neural. Gradiente `#25D366 → #2E8BE6` no fill da bolha. Nós e linhas brancos com fundo navy interno — garante contraste. Layout vertical (ícone 140px + wordmark abaixo). Funciona como app icon e favicon. viewBox 200×240.
- **Opção 3 — Wordmark tipográfico com acento geográfico:** Split "BAHIA" bold ↔ "TECNOLOGIA" light com separador vertical teal. Onda sinusoidal fluida como underline (`path` com curvas cúbicas) — gradiente fade-in/out nas pontas. Ponto de destaque na onda marca Salvador. Tagline "SALVADOR, BA" ancora o posicionamento geográfico. viewBox 480×90.
- **Regra para SVG standalone:** Todas as opções usam `font-family: 'Arial', 'Helvetica', sans-serif` — sem dependência externa. Todos têm `<title>` e `<desc>` para acessibilidade. Fundo transparente (sem `<rect>` de fundo).
- **Preview HTML:** Arquivo `preview.html` com grid 3-colunas mostra as 3 opções em dark (#0A1628) e light (#F5F7FA) com badges, metadados de direção criativa e strip de paleta.
- **Dark vs. light:** Opções 1 e 3 (texto branco) precisariam de adaptação para fundo claro — variante navy/dark-blue para texto. Opção 2 (ícone com fundo navy interno + gradiente colorido) lê melhor em ambos os fundos.


## Learnings

**2026-05-18T08:51:10-07:00 — 4 Variações do Logo Opção 2**

Dali aprovou a Opção 2 (balão+IA, gradiente #25D366→#2E8BE6). Criadas 4 variações de balão de conversa, todas mantendo identidade: ícone vertical, gradiente canônico, wordmark "BAHIA TECNOLOGIA", tagline "Automação Inteligente para WhatsApp".

- **V2A — Balão arredondado (WhatsApp style):** `Q` curves com corners ~37px para bordas muito arredondadas, tail bottom-right. Rede neural (hub central + 6 satélites radiais) em fill branco sobre fundo navy, clipped ao balloon path. Abordagem de clip-path inline requer que o `<clipPath>` use a mesma forma path do balloon.
- **V2B — Diálogo bilateral:** Dois balões separados (sem gradiente entre si): pequeno verde (human, tail bottom-left) + grande azul (AI, tail bottom-right) sobrepostos em cascata. O balão da frente é desenhado por último (painter's model). Neural circuit dentro do balão azul. A clipPath referencia apenas o balloon da frente para conter os nós.
- **V2C — Balão hexagonal:** Hexágono flat-top com tail integrado como interrupção da borda inferior (`L 122,116 L 110,136 L 88,116`). Fill `#0E1E36` + stroke `url(#gradC)` stroke-width 3 — gradiente em stroke funciona nativamente em SVG 1.1. Rede neural em layout layer (input cyan → hidden white → output blue) com `filter="url(#glowC)"` para efeito luminoso. `feGaussianBlur stdDeviation=2` + feMerge com SourceGraphic é o padrão de inner-glow em SVG.
- **V2D — Minimalista oval ∞:** Elipse ~rx=78 ry=48 com tail centrado no bottom usando path `M 108,110 C ... C 92,110 L 100,130 L 108,110 Z`. Texto `∞` (Unicode U+221E literal) em font-size 50, fill `url(#gradDinf)` horizontal. O gradiente horizontal na direção x=0%→x=100% garante o bicolor no símbolo. Sub-label "IA" em fill-opacity 0.45 para hierarquia sutil.
- **Preview.html:** Adicionadas duas novas sections (dark + light) com `grid-template-columns: repeat(4, 1fr)` inline para evitar alterar o CSS global das 3 opções originais. Badges de variação usam cor `#25D366` para distinguir das opções originais com `#1FB6A8`.
- **Regra reforçada:** IDs de gradient únicos por arquivo (gradA, gradB, gradC, gradD) — crítico quando SVGs são inlinizados na mesma página (Trinity vai precisar disso no site).
