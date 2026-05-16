# Bahia Tecnologia — Cartão de Visita · Print Spec Sheet

> Gerado em: 2026-05-16T10:53:04 · Designer: Neo (Bahia Tecnologia Squad)

---

## Arquivos

Dois **variantes** disponíveis: **Dark** (fundo navy, sensação premium tech) e **Light** (fundo branco, clean/approachable). Ambos são adequados para envio à gráfica — escolha conforme preferência estética ou instrução do cliente.

| Arquivo | Variante | Uso |
|---|---|---|
| `cartao-visita-frente.svg` | **Dark** | Arquivo de envio — frente, sem guias |
| `cartao-visita-verso.svg` | **Dark** | Arquivo de envio — verso, sem guias |
| `cartao-visita-frente-guides.svg` | **Dark** | Prévia com guias de sangria/corte/área segura |
| `cartao-visita-verso-guides.svg` | **Dark** | Prévia com guias de sangria/corte/área segura |
| `cartao-visita-frente-light.svg` | **Light** | Arquivo de envio — frente, sem guias |
| `cartao-visita-verso-light.svg` | **Light** | Arquivo de envio — verso, sem guias |
| `cartao-visita-frente-light-guides.svg` | **Light** | Prévia com guias de sangria/corte/área segura |
| `cartao-visita-verso-light-guides.svg` | **Light** | Prévia com guias de sangria/corte/área segura |

> Para impressão, envie o par **sem guias** (`-frente` + `-verso`) da variante escolhida.

---

## Diferenças entre variantes

| Aspecto | Dark | Light |
|---|---|---|
| Background | `navy-950 #0A1628` | `#FAFBFC` (off-white quente) |
| Texto principal | `#FFFFFF` branco | `navy-950 #0A1628` |
| Tagline principal | `gray-300 #B8C2D1` | `gray-700 #2A3447` |
| Texto secundário / serviços | `gray-500 #6B7A90` | `gray-500 #6B7A90` |
| Accent location | `blue-400 #3FA9FF` | `blue-500 #2E8BE6` |
| Logo "B" gradiente | Mantido | Mantido |
| Barra accent gradiente | Mantida (bottom/top) | Mantida (bottom/top) |
| Ícones email/web | Outline `#3FA9FF` | Círculo `#2E8BE6` + ícone branco |
| QR code | `#0A1628` em caixa branca | `#0A1628` direto no fundo branco |
| Ornamento "B" fantasma | Outline `#3FA9FF` opacity 6% | `#E6EAF0` opacity 55% |

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

Todos os elementos de texto foram verificados com a fórmula:
`right_edge = x + (n_chars × font_size × 0.55) + ((n_chars-1) × letter_spacing)`

| Elemento | right_edge (mm) | Margem até trim (93mm) |
|---|---|---|
| BAHIA (frente) | 46.2 | 46.8mm ✅ |
| TECNOLOGIA (frente) | 68.8 | 24.2mm ✅ |
| Automação · WhatsApp | 67.7 | 25.3mm ✅ |
| Inteligência Artificial | 74.3 | 18.7mm ✅ |
| Chatbots · Atendimento 24h · CRM | 69.5 | 23.5mm ✅ |
| SALVADOR · BAHIA | 58.9 | 34.1mm ✅ |
| BAHIA (verso) | 74.7 | 18.3mm ✅ |
| TECNOLOGIA (verso) | 87.5 | 5.5mm ✅ |
| (71) 98380-3720 | 83.4 | 9.6mm ✅ |
| contato@bahiatecnologia.com.br | 87.5 | 5.5mm ✅ |
| bahiatecnologia.com.br | 79.4 | 13.6mm ✅ |
| Escaneie · veja nossas soluções | 65.0 | 28.0mm ✅ |
| SALVADOR · BA (anchor end) | 88.0 | 5.0mm ✅ |

---

## Paleta de Cores (RGB → CMYK reference)

| Nome | Hex | Uso | CMYK aproximado |
|---|---|---|---|
| `navy-950` | `#0A1628` | Background dark / texto light | C:96 M:84 Y:50 K:73 |
| `navy-900` | `#0E1E36` | Background verso dark | C:94 M:80 Y:46 K:67 |
| `blue-500` | `#2E8BE6` | Gradiente brand (início), ícones light | C:80 M:40 Y:0 K:10 |
| `blue-400` | `#3FA9FF` | Accent dark (location, ícones) | C:75 M:33 Y:0 K:0 |
| `teal-500` | `#1FB6A8` | Gradiente brand (meio) | C:82 M:22 Y:38 K:0 |
| `green-500` | `#25D366` | **WhatsApp** — ícone | C:72 M:0 Y:75 K:0 |
| `white` | `#FFFFFF` | Texto dark / gliphos em ícones light | C:0 M:0 Y:0 K:0 |
| `off-white` | `#FAFBFC` | Background light | C:1 M:1 Y:0 K:1 |
| `gray-300` | `#B8C2D1` | Texto contato dark | C:28 M:18 Y:10 K:0 |
| `gray-500` | `#6B7A90` | Texto muted (ambas as variantes) | C:50 M:35 Y:22 K:0 |
| `gray-700` | `#2A3447` | Tagline light, contato light | C:82 M:64 Y:40 K:26 |

---

## Tipografia

| Fonte | Uso | Obtida em |
|---|---|---|
| **Sora** (700 Bold, 600 SemiBold) | Nome da empresa, tagline | [Google Fonts](https://fonts.google.com/specimen/Sora) — licença OFL gratuita |
| **Inter** (500 Medium, 400 Regular) | Contato, caption QR, location | [Google Fonts](https://fonts.google.com/specimen/Inter) — licença OFL gratuita |

> Para garantir renderização exata na gráfica, **converter textos em outlines** antes de enviar.

---

## QR Code

- **Conteúdo codificado:** `https://www.bahiatecnologia.com.br/portifolio/`
- **Nível de correção de erros:** H (alta — suporta até 30% de dano)
- **Tamanho no cartão:** ~30mm × 30mm
- **Dark:** módulos `#0A1628` em caixa branca arredondada
- **Light:** módulos `#0A1628` diretamente no fundo branco (caixa removida — desnecessária)
- ✅ **Escaneável:** vetorial puro, testado

---

## Recomendações para a Gráfica

### Variante Dark
```
Papel:       Couché Fosco 300g/m²
Laminação:   Fosca (ambos os lados)
Verniz:      UV brilhante localizado no logo (opcional, premium)
Observação:  Fundo escuro intenso — solicitar prova de cor antes da tiragem
```

### Variante Light
```
Papel:       Couché Fosco 300g/m² ou Couché Brilhante 300g/m²
Laminação:   Fosca ou brilhante (ambas funcionam bem com fundo branco)
Verniz:      UV brilhante no logo e barra gradiente (opcional, elegante)
Observação:  Fundo branco — aprovação de cor mais previsível
```

### Checklist antes de enviar

- [ ] Fontes convertidas em outlines (Inkscape: selecionar tudo → *Texto → Objeto em caminho*)
- [ ] Fundo cobre toda a sangria (96mm × 56mm) ✅
- [ ] QR code testado com câmera do celular ✅
- [ ] Cores revisadas em prova impressa antes da tiragem
- [ ] Arquivo sem guias usado para produção (não o `-guides.svg`)

---

## Frente Dark — Descrição Visual

- **Background:** `navy-950 #0A1628` (full bleed)
- **Ornamento:** balão de fala echo, outline `#3FA9FF`, opacity 6%, canto inferior direito
- **Gradiente accent:** barra `#2E8BE6 → #1FB6A8 → #25D366` na borda inferior
- **Logo:** ícone "B" speech-bubble gradiente, 14mm
- **Wordmark:** "BAHIA" 7.5pt + "TECNOLOGIA" 5.2pt — branco sobre navy
- **Tagline:** "Automação · WhatsApp / Inteligência Artificial" — 3.8pt, `#B8C2D1`
- **Sub-tagline:** "Chatbots · Atendimento 24h · CRM" — 2.5pt, `#6B7A90`
- **Location:** "SALVADOR · BAHIA" — 2.6pt, `#3FA9FF`

## Frente Light — Descrição Visual

- **Background:** `#FAFBFC` off-white
- **Ornamento:** balão de fala echo, `#E6EAF0` opacity 55% — muito sutil sobre branco
- **Gradiente accent:** IGUAL ao dark (assinatura da marca)
- **Logo:** gradiente IGUAL (funciona em qualquer fundo)
- **Wordmark:** "BAHIA" / "TECNOLOGIA" — `navy-950 #0A1628` sobre branco
- **Tagline:** `gray-700 #2A3447`; Sub-tagline: `gray-500 #6B7A90`
- **Location:** "SALVADOR · BAHIA" — `blue-500 #2E8BE6`

## Verso Dark — Descrição Visual

- **Background:** `navy-900 #0E1E36`
- **Gradiente accent:** barra na borda superior
- **QR:** módulos `#0A1628` em caixa branca arredondada 33mm × 33mm
- **Contatos:** ícones outline `#3FA9FF`; textos branco / `#B8C2D1`
- **Location:** "SALVADOR · BA" `#3FA9FF`, anchor-end x=88

## Verso Light — Descrição Visual

- **Background:** `#FAFBFC`
- **QR:** módulos `#0A1628` diretamente no fundo branco (sem caixa)
- **Ícones email/web:** círculos `blue-500 #2E8BE6` com gliphos brancos
- **WhatsApp:** `green-500 #25D366` (igual)
- **Contatos:** phone `navy-950`; email/web `gray-700 #2A3447`
- **Location:** `blue-500 #2E8BE6`, anchor-end x=88

---

*Dúvidas: contato@bahiatecnologia.com.br*
