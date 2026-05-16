# Bahia Tecnologia — Cartão de Visita · Print Spec Sheet

> Versão **v3 — Redesign 2026-05-16** · Designer: Neo (Bahia Tecnologia Squad)
> Substitui a v2. Layout inspirado no mockup aprovado por Dali Freire em 2026-05-16.

---

## Arquivos

Duas **variantes** disponíveis: **Dark** (frente navy + verso navy/cream split, sensação premium tech) e **Light** (frente clara + verso cream/pale-blue split, versátil/approachable). Ambas são adequadas para envio à gráfica — escolha conforme preferência estética ou do cliente.

| Arquivo | Variante | Uso |
|---|---|---|
| `cartao-visita-frente.svg` | **Dark** | Envio gráfica — frente, sem guias |
| `cartao-visita-verso.svg` | **Dark** | Envio gráfica — verso, sem guias |
| `cartao-visita-frente-guides.svg` | **Dark** | Prévia com guias trim/safe |
| `cartao-visita-verso-guides.svg` | **Dark** | Prévia com guias trim/safe |
| `cartao-visita-frente-light.svg` | **Light** | Envio gráfica — frente, sem guias |
| `cartao-visita-verso-light.svg` | **Light** | Envio gráfica — verso, sem guias |
| `cartao-visita-frente-light-guides.svg` | **Light** | Prévia com guias trim/safe |
| `cartao-visita-verso-light-guides.svg` | **Light** | Prévia com guias trim/safe |

> Para impressão, envie o par **sem guias** (`-frente` + `-verso`) da variante escolhida.

---

## O que mudou na v3

| Aspecto | v2 | **v3 (atual)** |
|---|---|---|
| Frente | Balão pequeno + tagline 2 linhas + serviços + location | **Balão gigante outline** na metade direita + tagline "AUTOMAÇÕES PARA WHATSAPP / E INTELIGÊNCIA ARTIFICIAL" em small-caps com palavras-chave em accent |
| Verso | Layout left/right (contato / QR) sobre cor única | **Split com curva-S**: lado claro (headline + contatos com ícones circulares) + lado navy (QR + WhatsApp icon + circuitos decorativos) |
| Headline verso | n/a (apenas contatos) | **"Automatize conversas. / Inteligência que conecta."** ("conecta" em green) |
| Ícones contato | Outline `#3FA9FF` | **Círculos preenchidos** `blue-500` com gliphos brancos |
| Decoração | Balão fantasma 6% opacity | **Linhas de placa-de-circuito** sutis no painel navy |
| QR | Caixa branca arredondada | **Tile branco compacto** (1.2mm padding), módulos `navy-950` |

---

## Especificações de Impressão

### Dimensões

| Zona | Dimensão |
|---|---|
| **Sangria (bleed)** — artboard total | **96mm × 56mm** |
| **Corte (trim)** — tamanho final | **90mm × 50mm** (padrão brasileiro) |
| **Área segura (safe zone)** — conteúdo crítico | **84mm × 44mm** (3mm dentro do corte) |
| **Sangria por lado** | **3mm** |
| **Margem visual de texto** | **≤ 88mm** (5mm da borda de corte) |

> Todo texto termina em ≤ 88mm (coordenada artboard), dando 5mm de margem óptica até o corte.
> Isso é mais conservador que os 3mm da safe area — resulta em tipografia visivelmente mais arejada.

### Guias de cores nos arquivos `-guides.svg`

- 🔴 **Vermelho tracejado** = linha de corte (trim)
- 🔵 **Azul tracejado** = área segura
- Artboard = borda de sangria

---

## Verificação de margens tipográficas

Fórmula aproximada: `right_edge = x + (n_chars × font_size × 0.55) + ((n_chars-1) × letter_spacing)`. Conservadora (0.55 é alto para fontes Inter/Sora reais).

### Frente

| Elemento | x | font | chars | letter-spacing | right_edge (mm) | até trim (93mm) |
|---|---|---|---|---|---|---|
| "Bahia" | 23 | 9.5 | 5 | -0.15 | 48.5 | 44.5mm ✅ |
| "Tecnologia" | 23 | 5.2 | 10 | 0.05 | 52.0 | 41.0mm ✅ |
| AUTOMAÇÕES PARA WHATSAPP | 6 | 2.55 | 24 | 1.0 | 62.7 | 30.3mm ✅ |
| E INTELIGÊNCIA ARTIFICIAL | 6 | 2.55 | 25 | 1.0 | 65.1 | 27.9mm ✅ |

### Verso

| Elemento | x | font | chars | letter-spacing | right_edge (mm) | até trim |
|---|---|---|---|---|---|---|
| Bahia (top wordmark) | 14.5 | 4.6 | 5 | -0.05 | 27.0 | 66.0mm ✅ |
| Tecnologia | 14.5 | 2.8 | 10 | 0.05 | 30.4 | 62.6mm ✅ |
| Automatize conversas. | 6 | 4.0 | 21 | -0.05 | 51.2 | 41.8mm ✅ |
| Inteligência que conecta. | 6 | 4.0 | 25 | -0.05 | 60.0 | 33.0mm ✅ |
| 71 98380-3720 | 14 | 2.0 | 13 | 0.02 | 28.5 | 64.5mm ✅ |
| contato@bahiatecnologia.com.br | 14 | 2.0 | 30 | 0.02 | 47.6 | 45.4mm ✅ |
| www.bahiatecnologia.com.br | 14 | 2.0 | 26 | 0.02 | 42.6 | 50.4mm ✅ |
| Salvador - BA | 14 | 2.0 | 13 | 0.02 | 28.5 | 64.5mm ✅ |
| ESCANEIE E CONHEÇA (center x=74) | 60.7..87.3 | 2.0 | 18 | 0.4 | **87.3** | 5.7mm ✅ |
| NOSSAS SOLUÇÕES (center x=74) | 62.9..85.1 | 2.0 | 15 | 0.4 | 85.1 | 7.9mm ✅ |

Todos elementos dentro do alvo **≤ 88mm**. ✅

---

## Paleta de Cores (RGB → CMYK reference)

| Nome | Hex | Uso | CMYK aproximado |
|---|---|---|---|
| `navy-950` | `#0A1628` | Background dark frente / texto headline / módulos QR | C:96 M:84 Y:50 K:73 |
| `navy-900` | `#0E1E36` | Painel direito verso (dark) | C:94 M:80 Y:46 K:67 |
| `blue-500` | `#2E8BE6` | Gradiente brand (início), ícones circulares contato | C:80 M:40 Y:0 K:10 |
| `blue-400` | `#3FA9FF` | Stroke do balão gigante (dark variant) | C:75 M:33 Y:0 K:0 |
| `teal-500` | `#1FB6A8` | Gradiente brand (meio), "Tecnologia", circuitos (dark) | C:82 M:22 Y:38 K:0 |
| `green-500` | `#25D366` | **WhatsApp** ícone, "conecta", "SOLUÇÕES", separador vertical | C:72 M:0 Y:75 K:0 |
| `white` | `#FFFFFF` | Texto "Bahia" frente dark, gliphos ícones, tile QR | C:0 M:0 Y:0 K:0 |
| `off-white` | `#FAFBFC` | Background light, lado cream do verso | C:1 M:1 Y:0 K:1 |
| `pale-blue` | `#E6EFF5` | Painel direito verso (light variant) | C:10 M:5 Y:3 K:0 |
| `gray-700` | `#2A3447` | Texto contato no verso | C:82 M:64 Y:40 K:26 |
| `gray-500` | `#6B7A90` | Tagline texto-base (light variant) | C:50 M:35 Y:22 K:0 |
| `gray-300` | `#B8C2D1` | Tagline texto-base (dark variant) | C:28 M:18 Y:10 K:0 |

---

## Tipografia

| Fonte | Uso | Obtida em |
|---|---|---|
| **Sora** (700 Bold, 500 Medium) | Wordmark, headline "Automatize / Inteligência" | [Google Fonts](https://fonts.google.com/specimen/Sora) — OFL |
| **Inter** (600 SemiBold, 500 Medium, 400 Regular) | Tagline caps, contatos, caption QR | [Google Fonts](https://fonts.google.com/specimen/Inter) — OFL |

> Para garantir renderização exata na gráfica, **converter textos em outlines** antes de enviar.

---

## QR Code

- **Conteúdo codificado:** `https://www.bahiatecnologia.com.br/portifolio/`
- **Versão QR:** v6 (41×41 módulos), correção de erro **H** (suporta até 30% de dano)
- **Tamanho no cartão:** 18mm × 18mm com tile branco arredondado de ~20mm × 20mm
- **Cor módulos:** `navy-950 #0A1628` em ambas as variantes
- ✅ **Escaneável:** vetorial puro `<rect>` por módulo — sem compressão raster, escala sem perda

---

## Frente Dark — Descrição Visual

- **Background:** `navy-950 #0A1628` (full bleed) + glow radial sutil bottom-right
- **Lado esquerdo (~50%):**
  - Logo "B" gradiente 14mm em (6, 15)
  - "Bahia" Sora Bold 9.5pt branco
  - "Tecnologia" Sora Medium 5.2pt teal `#1FB6A8`
  - Tagline 2 linhas small-caps Inter SemiBold 2.55pt:
    - "AUTOMAÇÕES PARA **WHATSAPP**" (WHATSAPP em teal)
    - "E **INTELIGÊNCIA ARTIFICIAL**" (idem)
- **Lado direito (~50%):**
  - Balão de fala **outline gigante** (path do logo escalado 1.55×) stroke 0.6mm gradiente `blue-400 → teal-500 → green-500`
  - 3 círculos outline (mesma stroke) dentro do balão como reticência
  - Bleeds intencionalmente off-right e off-bottom

## Frente Light — Descrição Visual

- **Background:** `#FAFBFC` off-white (sem glow)
- Mesmo layout do dark, com:
  - Texto: navy `#0A1628` (Bahia) + teal (Tecnologia)
  - Tagline base: `gray-500 #6B7A90` + accent **blue-500** (vs teal no dark)
  - Balão: gradiente `blue-500 → teal-500 → navy-900` (mais sóbrio), opacity 0.55

## Verso Dark — Descrição Visual

- **Background base:** cream `#FAFBFC` (lado esquerdo)
- **Painel direito (S-curve):** `navy-900 #0E1E36`, separado por curva bezier suave de (56, 0) → (54, 56)
- **Lado esquerdo (cream):**
  - Pequeno logo "B" gradiente 8mm + wordmark "Bahia / Tecnologia"
  - Headline Sora Bold 4.0pt: "**Automatize conversas.**" / "**Inteligência que conecta.**" (conecta em green)
  - Linha vertical green 0.35mm como separador
  - 4 linhas de contato com ícones circulares blue-500 (3.2mm) e gliphos brancos:
    - 📞 71 98380-3720
    - ✉️ contato@bahiatecnologia.com.br
    - 🌐 www.bahiatecnologia.com.br
    - 📍 Salvador - BA
- **Painel navy direito:**
  - Ícone WhatsApp `#25D366` rounded-square 9mm em (82, 5)
  - QR code 18mm em tile branco (66, 17)
  - Caption Inter SemiBold 2.0pt small-caps: "ESCANEIE E CONHEÇA / NOSSAS **SOLUÇÕES**"
  - Decorações de circuito teal `#1FB6A8` 0.18mm stroke, opacity 55%

## Verso Light — Descrição Visual

- **Background base:** white `#FFFFFF` (lado esquerdo)
- **Painel direito (S-curve):** `pale-blue #E6EFF5` (substitui o navy)
- Mesma estrutura do dark, com adaptações:
  - Circuitos em `blue-500 #2E8BE6` (vs teal)
  - Caption em navy (vs branco)
  - "SOLUÇÕES" em green (mantido — acento WhatsApp)
  - WhatsApp icon mantém o verde original (assinatura inalterável)

---

## Recomendações para a Gráfica

### Variante Dark
```
Papel:       Couché Fosco 300g/m²
Laminação:   Fosca (ambos os lados)
Verniz:      UV brilhante localizado no logo + no balão outline da frente (opcional, premium)
Observação:  Fundo navy intenso — solicitar prova de cor antes da tiragem
```

### Variante Light
```
Papel:       Couché Fosco 300g/m² ou Couché Brilhante 300g/m²
Laminação:   Fosca ou brilhante (ambas funcionam bem com fundo claro)
Verniz:      UV brilhante no logo e no balão outline (opcional, elegante)
Observação:  Fundo claro — aprovação de cor mais previsível
```

### Checklist antes de enviar

- [ ] Fontes convertidas em outlines (Inkscape: selecionar tudo → *Texto → Objeto em caminho*)
- [ ] Sangria cobre toda a área 96mm × 56mm ✅
- [ ] QR code testado com câmera do celular ✅
- [ ] Cores revisadas em prova impressa antes da tiragem
- [ ] Arquivo sem guias usado para produção (não o `-guides.svg`)

---

*Dúvidas: contato@bahiatecnologia.com.br*
