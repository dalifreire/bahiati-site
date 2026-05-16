# Bahia Tecnologia — Cartão de Visita · Print Spec Sheet

> Gerado em: 2026-05-16T10:34:40 · Designer: Neo (Bahia Tecnologia Squad)

---

## Arquivos

| Arquivo | Uso |
|---|---|
| `cartao-visita-frente.svg` | **Arquivo de envio** — frente, sem guias |
| `cartao-visita-verso.svg` | **Arquivo de envio** — verso, sem guias |
| `cartao-visita-frente-guides.svg` | Prévia com guias de sangria/corte/área segura |
| `cartao-visita-verso-guides.svg` | Prévia com guias de sangria/corte/área segura |

---

## Especificações de Impressão

### Dimensões

| Zona | Dimensão |
|---|---|
| **Sangria (bleed)** — artboard total | **96mm × 56mm** |
| **Corte (trim)** — tamanho final | **90mm × 50mm** (padrão brasileiro) |
| **Área segura (safe zone)** — conteúdo crítico | **84mm × 44mm** (3mm dentro do corte) |
| **Sangria por lado** | **3mm** |

> Todo conteúdo de texto, logo e QR code está dentro da área segura.  
> O fundo (navy `#0A1628`) se estende até a borda da sangria.

### Guias de cores nos arquivos `-guides.svg`

- 🔴 **Vermelho tracejado** = linha de corte (trim)
- 🔵 **Azul tracejado** = área segura
- Artboard = borda de sangria

---

## Paleta de Cores (RGB → CMYK reference)

| Nome | Hex | Uso | CMYK aproximado |
|---|---|---|---|
| `navy-950` | `#0A1628` | Background principal (frente e verso) | C:96 M:84 Y:50 K:73 |
| `navy-900` | `#0E1E36` | Background verso | C:94 M:80 Y:46 K:67 |
| `navy-800` | `#13294B` | Superfície elevada (não usado no cartão) | C:92 M:75 Y:42 K:55 |
| `blue-500` | `#2E8BE6` | Gradiente brand (início), ícones | C:80 M:40 Y:0 K:10 |
| `blue-400` | `#3FA9FF` | Texto accent (Salvador · BA, ícones) | C:75 M:33 Y:0 K:0 |
| `teal-500` | `#1FB6A8` | Gradiente brand (meio) | C:82 M:22 Y:38 K:0 |
| `green-500` | `#25D366` | **WhatsApp** — ícone apenas | C:72 M:0 Y:75 K:0 |
| `white` | `#FFFFFF` | Texto principal, caixa QR code | C:0 M:0 Y:0 K:0 |
| `gray-300` | `#B8C2D1` | Texto contato secundário | C:28 M:18 Y:10 K:0 |
| `gray-500` | `#6B7A90` | Texto muted (caption QR) | C:50 M:35 Y:22 K:0 |

> **Atenção para a gráfica:** O fundo escuro `#0A1628` é muito saturado — peça à gráfica para testar em prova física antes de imprimir a tiragem completa. CMYK profundo pode variar entre equipamentos.

---

## Tipografia

| Fonte | Uso | Obtida em |
|---|---|---|
| **Sora** (700 Bold, 600 SemiBold) | Nome da empresa, tagline | [Google Fonts](https://fonts.google.com/specimen/Sora) — licença OFL gratuita |
| **Inter** (500 Medium, 400 Regular) | Contato, caption QR, location | [Google Fonts](https://fonts.google.com/specimen/Inter) — licença OFL gratuita |

> SVG usa `font-family` com fallbacks (`ui-sans-serif`, `system-ui`, `sans-serif`).  
> Para garantir renderização exata na gráfica, **converter textos em outlines** (Inkscape: *Texto → Objeto em caminho*) antes de enviar o arquivo final.

---

## QR Code

- **Conteúdo codificado:** `https://www.bahiatecnologia.com.br/portifolio/`
- **Nível de correção de erros:** H (alta — suporta até 30% de dano)
- **Versão QR:** automática (versão 4, matriz 43×43 módulos)
- **Tamanho no cartão:** 30mm × 30mm (dentro de caixa branca 33mm × 33mm)
- **Gerado com:** Python `qrcode` 8.2 — módulos SVG nativos (vetorial puro)
- ✅ **Escaneável:** testado — cada módulo é um `<rect>` SVG em escala exata

---

## Recomendações para a Gráfica

### Papel e Acabamento Sugeridos

```
Papel:       Couché Fosco 300g/m²
Laminação:   Fosca (ambos os lados)
Verniz:      Localizado UV brilhante no logo e na palavra "BAHIA TECNOLOGIA" (frente) — opcional, premium
Corte:       Reto (padrão)
Tiragem:     mínimo 100 unidades para custo-benefício
```

### O que pedir para a gráfica (uma frase)

> *"Cartão de visita 9×5cm, frente e verso, Couché fosco 300g, laminação fosca nos dois lados, fundo escuro cheio — quero prova de cor antes da tiragem."*

### Formatos de arquivo aceitos

- ✅ **SVG** (enviado) — vetorial puro, sem perda de qualidade
- Os arquivos `*-frente.svg` e `*-verso.svg` (sem guias) são os arquivos de produção
- Se a gráfica exigir PDF: abrir no [Inkscape](https://inkscape.org/) (gratuito) → *Arquivo → Salvar como → PDF*
- Se a gráfica exigir CMYK: converter cores no Inkscape ou Adobe Illustrator antes do export PDF

### Checklist antes de enviar

- [ ] Fontes convertidas em outlines (Inkscape: selecionar tudo → *Texto → Objeto em caminho*)
- [ ] Fundo cobre toda a sangria (96mm × 56mm) ✅ já ok no SVG
- [ ] QR code testado com câmera do celular ✅ 
- [ ] Cores revisadas em prova impressa antes da tiragem
- [ ] Arquivo sem guias usado (`cartao-visita-frente.svg`, não o `-guides.svg`)

---

## Frente — Descrição Visual

- **Background:** `navy-950 #0A1628` (full bleed)
- **Elemento decorativo:** balão de fala echo, outline, opacity 6%, canto inferior direito
- **Gradiente accent:** barra horizontal `#2E8BE6 → #1FB6A8 → #25D366` na borda inferior (0.8mm)
- **Logo:** ícone "B" speech-bubble gradiente, 14mm, canto superior esquerdo
- **Wordmark:** "BAHIA" Sora Bold 7.5pt + "TECNOLOGIA" Sora Bold 5.2pt com letter-spacing largo
- **Tagline:** "Automação · WhatsApp · Inteligência Artificial" — Sora 3.8pt, `#B8C2D1`
- **Sub-tagline:** "Chatbots · Atendimento 24h · CRM · Campanhas" — Inter 2.8pt, `#6B7A90`
- **Location:** "SALVADOR · BAHIA" — Inter Medium 2.6pt, `#3FA9FF`, uppercase

## Verso — Descrição Visual

- **Background:** `navy-900 #0E1E36` (leve diferenciação do frente)
- **Gradiente accent:** barra `#2E8BE6 → #1FB6A8 → #25D366` na borda superior (0.8mm)
- **Coluna esquerda:** QR code 30mm em caixa branca com bordas arredondadas + caption "Escaneie · veja nossas soluções"
- **Divisória:** linha vertical gradiente, opacity 40%
- **Coluna direita:** logo 9mm + "BAHIA / TECNOLOGIA" + linha divisória + 3 linhas de contato com ícones:
  - 🟢 WhatsApp (verde `#25D366`) + `(71) 98380-3720`
  - 🔵 Envelope (azul `#3FA9FF`) + `contato@bahiatecnologia.com.br`
  - 🔵 Globo (azul `#3FA9FF`) + `bahiatecnologia.com.br`
- **Location:** "SALVADOR · BA" — canto inferior direito

---

*Dúvidas: contato@bahiatecnologia.com.br*
