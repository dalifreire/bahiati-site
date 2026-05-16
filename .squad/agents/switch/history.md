# Switch — Conteúdo/SEO
**Agent:** Switch  
**Role:** Messaging specialist for positioning, conversion copy, and search visibility  
**Team Root:** /Users/dalifreire/Documents/BahiaTI/site/repos/bahiati-site  

---

## Learnings

### Session 2: 2026-05-16 — Redação de Dados Reais & Rename

#### Política de Dados de Campanha
- **Cliente quer reservar dados reais de campanhas** — usar capacidades, não resultados de casos
- Números específicos (143.763 votos, 417 municípios, 38,8% crescimento) foram removidos de copy pública
- Substitui "Prova de vida" (case real com métricas) por "Capacidades da plataforma" (feature qualitativa)
- Mantém o tema "prática" mas foca em possibilidade, não em histórico específico

#### Renomeação Executada
- "Plataforma Eleitoral" → "Plataforma de Inteligência Eleitoral"
- URL slug `plataforma-eleitoral` mantido intacto (preserva SEO, links internos/externos)
- 13 menções do novo nome espalhadas em titles, h3s, descriptions, footers
- 0 referências ao número específico remanescentes

#### Copy Strategy pós-redação
- **Não inventar números:** Evita implicitamente o caso real → "dezenas de milhares" soa artificial
- **Usar capacidades abstratas:** "Escalável para campanhas estaduais", "Cobertura sem limite geográfico", "Resposta em segundos"
- **Qualitativo quando possível:** "Múltiplos núcleos de campanha", "Integração com dados eleitorais", "Sem fila de espera"
- **Manter confiança:** "Comprovada", "Segura" (sem detalhar prova)

#### Meta & Social
- og:title, og:description, twitter:* — todas atualizadas sem número de campanha
- "Pronto para ganhar" removido (soa desnecessário sem prova numérica)

### Session 1: 2026-05-16 — Site Copy Completa

#### Tom & Voz
- **Bahia Tecnologia** fala como negócio baiano, profissional, sem caricatura
- Tom balanceia técnico com acessível — empresário de PME entende sem precisar de glossário
- Verbos de ação dominam (responder, agregar, escalar, aprender) — evita passiva
- Prova é tudo — números reais (143.763 votos, 251.601 eleitores) vendem mais que promessa

#### Estrutura de Mensagem
- **Hero:** Problema → Solução → Prova (stats curtas) → CTA
- **Seções:** Cada pilar (WhatsApp, IA, Integrações) tem seu próprio headline + 1 parágrafo. Não enche.
- **Segmentação:** Clínicas, Campanhas, E-commerce, Profissionais Liberais — cada um vê sua solução, não precisa ler tudo
- **FAQ direto:** Responde objeções reais, não é marketing

#### Provas Reais Extraídas
- **Plataforma Eleitoral (Leo Prates 2026):**
   - 1.132 votos alcançados (primeira semana)
   - 251.601 eleitores alcançáveis
   - 417 municípios cobertura
   - 88.092 em Salvador
   - 38,8% crescimento engajamento
   - 0,34× lift eleitoral
- **Gestão Clínicas:** Referência extraída de doc n8n-whatsapp-clinicas (multi-tenant, schema-per-professional)
   - Não temos números reais ainda — placeholder para coletar em próxima session

#### Nomes / Termos Evitados
- ❌ "Revolucionário", "Disruptivo", "Futurista"
- ❌ Jargão sem contexto (embedding, RAG, n8n mesmo sendo realidade técnica)
- ❌ "Chatbot" — prefere "Agente IA" ou "Assistente"
- ❌ Passiva ("será respondido") — ativa ("você responde")

#### Otimizações Futuras
- Coletar métricas reais de Gestão Clínicas (economia de tempo, taxa de no-show, etc)
- Incluir case study visual (antes/depois gráfico)
- Implementar social proof dinâmico (logos de clientes reais)
- A/B testar CTAs: "Conversar no WhatsApp" vs "Agendar demo"

#### Decisões de Copy
1. **"Automatize conversas. Inteligência que conecta."** — tagline da marca, não aparece em H1 mas permeia todo tom
2. **Omitir preço em copy aberta** — variedade por volume/customização, CTA leva a conversa
3. **Fazer footer com 4 colunas** (sobre, soluções, contato, legal) — padrão que funciona, espaço pra crescer
4. **Diferencial "baiano sem caricatura"** — Salvador mencionada com naturalidade, não é tema, é contexto

---

## Próximas Ações

- [ ] Coletar casos reais de Gestão Clínicas (métricas)
- [ ] Validar SEO titles/descriptions com search intent real (search console)
- [ ] Criar variações de CTA para A/B testing
- [ ] Implementar personalization por segmento (clínica vê copy diferente de e-commerce)
- [ ] Build landing pages por solução (não página única por tudo)
- [ ] Validar conformidade LGPD na seção de contato/formulário
