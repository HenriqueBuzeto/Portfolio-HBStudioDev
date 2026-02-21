# Portfolio | HB Studio Dev

Landing page institucional desenvolvida para apresentar serviços de desenvolvimento web, focada em conversão de clientes, performance e presença profissional online.

Projeto criado com tecnologias modernas, design premium e estrutura otimizada para SEO e deploy em produção.

## 🚀 Tecnologias Utilizadas

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Swiper
- Integração com WhatsApp
- Deploy via Vercel

## ✨ Principais Funcionalidades

- Layout moderno e responsivo
- Animações suaves e profissionais
- Estrutura otimizada para SEO
- Seções institucionais (Sobre, Serviços e Contato)
- Botão e formulário de contato via WhatsApp
- Performance otimizada para mobile e desktop

## Área administrativa (/admin)

Painel restrito com Supabase (Auth + Database + Storage), geração de PDF de contratos e gestão de clientes.

### Configuração

1. Crie um projeto no [Supabase](https://supabase.com) e copie a URL e a chave **anon (public)**.
2. Crie o arquivo `.env.local` com as variáveis (use `.env.example` como base):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `ALLOWED_ADMIN_EMAIL` — único e-mail que pode acessar o admin
3. No Supabase SQL Editor, execute as migrations em `supabase/migrations/` (na ordem: `20250130000001_create_tables.sql`, depois `20250130000002_rls.sql`).
4. Em Storage, crie os buckets `contracts` e `signatures` (podem ser privados; configure políticas para usuários autenticados).
5. Crie um usuário em Authentication (e-mail/senha) usando exatamente o `ALLOWED_ADMIN_EMAIL`.

Acesso: `/admin` (redireciona para login ou dashboard).

### PDF de contrato com seu modelo

Coloque seu PDF de contrato (layout que você quer usar) em **`public/contrato.pdf`**. Ao gerar um contrato no admin, o sistema usa a primeira página desse arquivo como base e preenche os dados (número, data, cliente, valor, etc.) nas posições configuradas.

- Se o seu arquivo tiver outro nome (ex.: `projeto contrato.pdf`), coloque em `public/` e defina no `.env.local`: `CONTRACT_PDF_TEMPLATE_PATH=public/projeto contrato.pdf`.
- Para ajustar onde cada texto é impresso no PDF, edite as coordenadas em **`services/pdfTemplatePositions.ts`**. A origem do PDF é o canto inferior esquerdo; a unidade é pontos (72 por polegada). A4 = 595 x 842 pontos.
- Se não houver template ou ocorrer erro ao carregá-lo, o sistema gera o contrato do zero com layout padrão.

### PDF com campos de formulário (AcroForm) — recomendado

Para usar um PDF com **campos editáveis** (preenchimento automático sem coordenadas):

1. Crie o PDF no **Adobe Acrobat Pro**, **PDFescape** ou **LibreOffice Draw** e adicione campos de formulário com os nomes **exatos** (todos opcionais no PDF; o sistema preenche os que existir):
   - `num_orc` — número do orçamento/contrato
   - `nome_contratante`, `cnpj_contratante`, `telefone_contratante`, `email_contratante`, `endereco_contratante`
   - `nome_cliente`, `cpf_cnpj`, `email_cliente`, `endereco_cliente`, `telefone_cliente`
   - `descricao_site`, `descricao_adicionais`, `descricao_registrobr`, `descricao_hospedagem`
   - `valor_site`, `valor_adicionais`, `valor_registrobr`, `valor_hospedagem`, `valor_mensal`, `valor_total`
   - `data_contrato` — data em que o PDF é gerado (ex.: 20 de fevereiro de 2026)
   - `forma_pagamento`, `nome_projeto`, `data_assinatura`
2. Salve o PDF com campos de formulário em **`public/contrato_hb_studio_dev.pdf`** (ou defina `CONTRACT_PDF_FORM_TEMPLATE_PATH` no `.env.local` para outro arquivo).
3. No admin, ao clicar em "Gerar PDF e salvar", o sistema usa **`public/contrato_hb_studio_dev.pdf`**: preenche com dados do cliente/contrato e define **data_contrato** como o dia da geração. Em seguida aplica `flatten()` (trava o formulário).
4. **API direta:** `POST /api/gerar-contrato` com body JSON contendo esses campos retorna o PDF. Se `data_contrato` não for enviado, é usada a data atual.
