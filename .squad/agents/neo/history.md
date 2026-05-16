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

**2026-05-16T10:45:26.480-07:00 — Cartão de Visita: Correção de Overflow de Tipografia**

- **Safe-area rule de ouro:** Com x_start=24mm e safe-right=90mm, há apenas 66mm para texto na frente. Taglines longas **devem** ser verificadas antes de fechar arquivo. Regra prática: máximo ~28–32 caracteres por linha a `font-size="3.8"` (fator 0.55 + letter-spacing 0.1).
- **Tagline frente:** "Automação · WhatsApp · Inteligência Artificial" (46c) não cabe em uma linha a 3.8mm. Solução: quebrar em 2 linhas — L1 "Automação · WhatsApp" (20c, right≈68mm) + L2 "Inteligência Artificial" (23c, right≈74mm). Espaçamento vertical: L1 y=30, L2 y=35, secondary y=40.5, location y=47.
- **Micro services frente:** "Chatbots · Atendimento 24h · CRM · Campanhas" (44c) a `font-size="2.8"` transbordava (right≈97mm). Reduzir para `font-size="2.5"` → right≈87mm ✓.
- **Email/Website verso:** Coluna direita inicia em x=57, safe-right=90 → apenas 33mm disponíveis. Email de 30c a 2.9mm transbordava (~104mm). Solução: `font-size="2.0"` (right≈88mm ✓). Website 21c a 2.0mm: right≈80mm ✓. Phone ancora em 3.2mm sem problema (right≈83mm ✓).
- **Verificação:** Sempre calcular `right_edge = x + n_chars × (factor × font_size + letter_spacing)` antes de finalizar. Factor 0.55 para texto misto, 0.52 para todo-minúsculo email/url. Resultado deve ser ≤ 90mm.
