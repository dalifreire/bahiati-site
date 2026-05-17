# Squad Decisions

## Active Decisions

### 2026-05-16T09:03:03.021-07:00: Initial Squad hired

**By:** Dali Freire (via Copilot)
**What:** Created a project Squad for Bahia Tecnologia with Morpheus, Neo, Trinity, Tank, Switch, Dozer, Scribe, and Ralph.
**Why:** The project needs a team to create a website for a startup specialized in WhatsApp automations and artificial intelligence.

### 2026-05-16T10:53:04-07:00: Cartão de Visita — Light Variant Disponível

**By:** Neo (Designer Visual/Brand)  
**Status:** Aprovado para produção

O cartão de visita dark-navy existente foi complementado com uma variante light (fundo branco). A solicitação veio de Dali Freire para oferecer alternativa flexível ao impressor.

Bahia Tecnologia agora mantém **duas variantes impressas do cartão de visita**, ambas com especificações técnicas equivalentes:

| Aspecto | Dark | Light |
|---|---|---|
| Sentimento | Premium tech, sofisticado | Clean, approachable, versátil |
| Fundo | `navy-950 #0A1628` | `#FAFBFC` off-white |
| Melhor para | Laminação fosca premium, eventos de tecnologia | Gráficas padrão, públicos mais amplos |

**Arquivos:** 8 SVGs criados (4 dark, 4 light) — 2 frente + 2 verso por variante, com/sem guias.  
**Tipografia:** Todos textos ajustados para ≤88mm (margen óptica de 5mm do corte).

### 2026-05-16T12:52:37-07:00: Cartão de Visita v3 — Redesign mockup-aligned

**By:** Neo (Designer Visual/Brand)
**Status:** Aprovado para produção
**Requested by:** Dali Freire ("Achei que esses modelos ficaram mais bonitos" — solicitou que o estilo do mockup substituísse os cards atuais)

**O que mudou:**

Refatoração completa dos 8 SVGs em `assets/print/`. Substitui integralmente a v2.

**Frente:**
- Balão de fala **outline gigante** (~75% da altura, stroke gradiente blue→teal→green) ocupa a metade direita do cartão, bleeds intencionalmente off-right e off-bottom. É a nova assinatura visual da marca.
- Tagline reformulada como small-caps em 2 linhas: "AUTOMAÇÕES PARA **WHATSAPP** / E **INTELIGÊNCIA ARTIFICIAL**" (palavras-chave em teal/blue).
- Logo + wordmark "Bahia / Tecnologia" no canto superior esquerdo.

**Verso:**
- Split orgânico cream × navy separado por **curva-S em Bezier suave** (não mais layout retangular).
- Headline canônica nova: "**Automatize conversas. / Inteligência que conecta.**" — palavra "conecta" em `green-500`.
- Contatos com **ícones circulares preenchidos** `blue-500` + gliphos brancos (vs outline na v2).
- Painel direito navy contém: ícone WhatsApp, QR code 18mm com tile branco, caption "ESCANEIE E CONHEÇA / NOSSAS **SOLUÇÕES**", linhas decorativas de circuito teal.

**Light variant:**
- Frente: fundo `#FAFBFC`, texto navy, balão outline em gradiente blue→teal→navy mais sóbrio.
- Verso: lado esquerdo branco + painel direito `pale-blue #E6EFF5` (em vez de navy). Mantém curva e WhatsApp green inalterado.

**Tipografia — verificação:** Todos os 14 elementos textuais validados contra `right_edge ≤ 88mm`. Caption "ESCANEIE E CONHEÇA" foi ajustada de center=x75 para center=x74 (right-edge passou de 88.3 para 87.3mm) durante a auditoria.

**Impacto downstream:**
- **Trinity:** o balão outline gigante deve virar componente reutilizável (`<BubbleOutline>`) para hero/divider de páginas. SVG do verso pode virar referência de hero split.
- **Switch:** nova headline canônica para mid-funnel — "Automatize conversas. Inteligência que conecta." A copy antiga ("Chatbots · Atendimento 24h · CRM") foi removida.
- **Identidade no site:** os ícones de contato (circle preenchido + glyph branco) substituem o padrão outline anterior em todas as superfícies de contato.

**Arquivos:** 8 SVGs em `assets/print/` (4 dark + 4 light × com/sem guias). README.md reescrito com auditoria tipográfica v3.

**Reversibilidade:** Build determinístico via `tmp/build_cards.py`; arquivos v2 sobrescritos. Para reverter, recuperar do histórico git.

### 2026-05-17T12:49:06.049-07:00: Cartão de Visita v4 — Feature-Grid Layout

**By:** Neo (Designer Visual/Brand)  
**Status:** Aprovado para produção — substitui v3.  
**Requested by:** Dali Freire

**O que mudou (v3 → v4):**

**Frente — novo layout "feature-grid"**  
A v3 usava o balão outline gigante na metade direita; v4 substitui por **grade de 4 features** mais informativa:

- **Esquerda (~52mm):** logo + wordmark "Bahia / Tecnologia" centralizado verticalmente; tagline 2 linhas small-caps ("AUTOMAÇÕES PARA **WHATSAPP**" / "E **INTELIGÊNCIA ARTIFICIAL**").
- **Separador vertical em x=51.5:** linha 0.35mm com gradiente azul→teal→azul, fade nas pontas.
- **Direita (~44mm):** 4 linhas ícone-outline + label 2-linhas small-caps:
  1. Chat bubble + gear — "AUTOMAÇÕES / INTELIGENTES"
  2. Brain com nós de circuito — "INTELIGÊNCIA / ARTIFICIAL"  
  3. WhatsApp speech-bubble + phone (verde `#25D366`) — "INTEGRAÇÃO / COM WHATSAPP"
  4. Bar chart + arrow up — "MAIS TEMPO, / MAIS RESULTADOS"

Ícones a 5mm de altura, stroke 0.7 user-units (≈0.35mm) em gradiente `bt-icon-stroke`.

**Verso — ajuste menor**  
Mantém layout v3 (split cream/navy com curva-S). **Mudança única:** Telefone agora `+55 71 98380-3720` (incluindo country code).

**Light variants**  
Frente: fundo cream-50, ícones mesmo gradiente. Verso: cream/branco × pale-blue `#E6EFF5`.

**Build & auditoria tipográfica**  
- Script `tmp/build_cards_v4.py` — parametrizado, 8 SVGs determinísticos.
- Auditoria tipográfica: todos textos ≤88mm ✓ (label "MAIS RESULTADOS" é a mais apertada a ~87.2mm).
- Ícones viram componente reutilizável (`<FeatureIcon>`) para landing pages.
- 4 labels de feature viram **manifesto-de-features canônico** para copy do site.

**Arquivos:** 8 SVGs em `assets/print/` (dark + light × frente + verso × com/sem guides). README.md auditado.

## Governance

- All meaningful changes require team consensus
- Document architectural decisions here
- Keep history focused on work, decisions focused on direction
