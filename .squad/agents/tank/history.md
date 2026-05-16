# Project Context

- **Owner:** Dali Freire
- **Project:** Bahia Tecnologia — site institucional para startup especializada em automacoes para WhatsApp e inteligencia artificial.
- **Stack:** Site estatico atual em HTML/CSS/JavaScript; ajustar se o stack evoluir.
- **Created:** 2026-05-16T09:03:03.021-07:00

## Learnings

- Initial role: Automacao/Integracoes for WhatsApp, AI, and technical service framing.

### Session 2026-05-16 — Product Briefing Extraction

**Outcome:** Produced `.squad/decisions/inbox/tank-products-brief.md` — Technical ficha for both products (Plataforma Eleitoral + Gestão Clínicas).

**Key insights from repo analysis:**

#### Plataforma Eleitoral (n8n-whatsapp-politicos)
- **Real deliverable:** Assistente WhatsApp + Relatório Executivo de Inteligência Eleitoral
- **Tech stack:** n8n + OpenAI GPT-5.1 + pgvector (PostgreSQL) + Evolution API + ElevenLabs TTS
- **Multimodal processing:** Texto, áudio (Whisper), imagem (GPT-4o Vision)
- **Tools available:** RAG (base conhecimento), busca votos por município, scraping Câmara, TTS clonada, calculator, memory management
- **Rate limiting:** 40 msgs/30min por pair (instância × sender) + bloqueia antes de custo
- **Live proof:** Leo Prates relatório executivo (143.763 votos 2022 → estratégia 2026 PDT→REPUBLICANOS)
- **Honest limitations:** Assistente é resposta a demanda (não broadcast); base estática entre updates; custo por msg (R$ 0.05-0.15)

#### Gestão Clínicas (n8n-whatsapp-clinicas)  
- **Real deliverable:** Assistente WhatsApp + Automação de Lembretes + Relatórios de Engajamento
- **Multi-tenant architecture:** Schema-per-professional (clinicas_dra_andrea, clinicas_dr_carlos, etc.)
- **Tech stack:** n8n + OpenAI GPT-4o + pgvector + Evolution API + Supabase PostgreSQL
- **Database isolation:** Each professional gets isolated schema with own pacientes, agendamentos, horarios_disponiveis, documentos (vector)
- **Agendamento integrado:** 9 tools incluindo buscar horários, agendar, cancelar, resumo financeiro
- **Rate limiting:** 12/min, 60/hour, 200/day per (instância × paciente) — customizable per tenant
- **Lembretes automáticos:** Scheduled workflow que envia lembretes (dia antes + 1h antes) e marca status
- **Knowledge base template:** 42 generic docs (placeholder) — requer 2-4h customization por profissional
- **Honest limitations:** Base estática, sem 2-way sync com agenda externa, sem diagnostic (assistente é recepcionista), custo R$ 500-1.5k/prof/mês

**Critical distinction for positioning:**
- Electoral: IA responde sobre candidato/políticas (RAG + tools)
- Clinic: IA agenda consulta (ferramentas operacionais) + responde FAQ
- Plataforma Eleitoral não é broadcast (não envia spam)
- Gestão Clínicas é multi-tenant (escala N profissionais em 1 n8n)

**For Switch/Trinity:**
1. Don't promise: broadcast, automatic learning, real-time agenda sync, diagnostic capability
2. Do promise: 24/7 WhatsApp automation, contextual responses (RAG), isolated multi-tenant, rate-limited cost control
3. Proof: Leo Prates live, multi-clinic architecture validated
4. Roadmap: Google Calendar sync, fine-tuning on real conversations, predictive (no-show forecast)

**[VERIFICAR COM DALI]:**
- LGPD compliance status for conversation history retention
- Exact costs breakdown (OpenAI + Evolution per message type)
- Max concurrent users tested on single n8n instance
