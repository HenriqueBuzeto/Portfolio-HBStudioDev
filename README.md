# Landing Page Freelancer - Next.js

Projeto completo de landing page institucional para freelancer de desenvolvimento web, construído com Next.js 14, TypeScript, Tailwind CSS, Framer Motion e outras tecnologias modernas.

## 🚀 Características

- ✅ **Next.js 14** com App Router
- ✅ **TypeScript** para type safety
- ✅ **Tailwind CSS** para estilização
- ✅ **Framer Motion** para animações suaves
- ✅ **Swiper** para carrosséis
- ✅ **react-tsparticles** para efeitos de partículas
- ✅ **SEO otimizado** com metadata por página
- ✅ **Totalmente responsivo** (mobile-first)
- ✅ **Design premium** com paleta roxo/preto/branco
- ✅ **Formulário de contato** integrado com WhatsApp
- ✅ **Pronto para deploy** no Vercel

## 📋 Pré-requisitos

- Node.js 18+ instalado
- npm, yarn ou pnpm

## 🛠️ Instalação

1. **Clone ou extraia o projeto** na pasta desejada

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

4. **Abra [http://localhost:3000](http://localhost:3000)** no navegador

## 📁 Estrutura do Projeto

```
├── app/                    # Páginas e layouts (App Router)
│   ├── layout.tsx          # Layout raiz
│   ├── globals.css         # Estilos globais
│   ├── page.tsx            # Página inicial
│   ├── about/              # Página Sobre
│   ├── services/           # Página Serviços
│   └── contact/            # Página Contato
├── components/             # Componentes React
│   ├── layout/            # Header e Footer
│   ├── ui/                # Componentes UI básicos
│   ├── Hero.tsx           # Seção hero
│   ├── PageTitle.tsx      # Título de página
│   ├── CTA.tsx            # Call-to-action
│   ├── ServiceCard.tsx    # Card de serviço
│   ├── TestimonialCard.tsx # Card de depoimento
│   ├── Carousel.tsx       # Carrossel de imagens
│   ├── ParticlesBg.tsx    # Fundo com partículas
│   └── ContactForm.tsx    # Formulário de contato
├── data/                  # Dados estáticos
│   ├── navigation.ts      # Links de navegação
│   └── services.ts        # Dados dos serviços
├── lib/                   # Utilitários
│   └── utils.ts           # Funções auxiliares
└── public/                # Arquivos estáticos
    └── images/            # Imagens (adicione suas imagens aqui)
```

## 🎨 Personalização

### Cores (Paleta Roxo/Preto/Branco)

As cores principais estão configuradas em:

1. **`tailwind.config.js`** - Tokens de cores personalizados
   - Cor primária (roxo): `#6D28D9`
   - Edite a seção `colors.primary` para alterar

2. **`app/globals.css`** - Variáveis CSS
   - Edite as variáveis `--primary` para mudar a cor roxa globalmente

### Textos e Conteúdo

1. **Navegação:** `data/navigation.ts`
   - Edite os links do menu e redes sociais

2. **Serviços:** `data/services.ts`
   - Edite os planos, preços e features

3. **Páginas:**
   - `app/page.tsx` - Homepage
   - `app/about/page.tsx` - Sobre
   - `app/services/page.tsx` - Serviços
   - `app/contact/page.tsx` - Contato

4. **Componentes:**
   - `components/layout/Header.tsx` - Logo e menu
   - `components/layout/Footer.tsx` - Rodapé
   - `components/Hero.tsx` - Seção hero principal

### Imagens

1. **Carrossel:** Edite as URLs em `app/page.tsx` (variável `carouselImages`)
2. **Imagens locais:** Adicione em `public/images/` e referencie como `/images/nome.jpg`
3. **Favicon:** Substitua `public/favicon.ico`

### WhatsApp

Edite o número do WhatsApp em:
- `components/ContactForm.tsx` (linha ~12)
- `app/contact/page.tsx` (linha ~15)

Formato: `5511999999999` (código do país + DDD + número, sem espaços ou caracteres especiais)

## 📦 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build de produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa o linter
```

## 🚀 Deploy no Vercel

### Opção 1: Deploy via CLI

1. **Instale a CLI da Vercel:**
   ```bash
   npm i -g vercel
   ```

2. **Faça login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Deploy de produção:**
   ```bash
   vercel --prod
   ```

### Opção 2: Deploy via GitHub

1. **Crie um repositório no GitHub** e faça push do código

2. **Acesse [vercel.com](https://vercel.com)** e faça login

3. **Clique em "Add New Project"**

4. **Importe seu repositório** do GitHub

5. **Configure o projeto:**
   - Framework Preset: **Next.js**
   - Root Directory: `.` (raiz)
   - Build Command: `npm run build`
   - Output Directory: `.next`

6. **Clique em "Deploy"**

7. **Pronto!** Seu site estará online em alguns minutos

### Variáveis de Ambiente (se necessário)

Se você usar variáveis de ambiente, adicione-as nas configurações do projeto na Vercel:
- Settings → Environment Variables

## 🎯 Otimizações Recomendadas

### 1. Imagens
- Use imagens otimizadas (WebP quando possível)
- Redimensione imagens antes de adicionar ao projeto
- Use `next/image` para todas as imagens (já implementado)

### 2. Performance
- Execute `npm run build` e verifique o relatório de bundle
- Considere usar `next/dynamic` para componentes pesados
- Habilite compressão no servidor (Vercel faz isso automaticamente)

### 3. SEO
- Edite os metadados em cada `page.tsx` (já configurado)
- Adicione `sitemap.xml` e `robots.txt` (opcional)
- Configure Google Search Console após o deploy

## 🔧 Solução de Problemas

### Erro ao instalar dependências
```bash
# Limpe o cache e reinstale
rm -rf node_modules package-lock.json
npm install
```

### Erro de build
```bash
# Verifique se todas as dependências estão instaladas
npm install

# Limpe o cache do Next.js
rm -rf .next
npm run build
```

### Partículas não aparecem
- Verifique se `react-tsparticles` e `tsparticles-slim` estão instalados
- Comente a linha `<ParticlesBg />` em `components/Hero.tsx` se não quiser usar

### Imagens não carregam
- Verifique se as URLs estão corretas
- Para imagens externas, adicione o domínio em `next.config.js`

## 📝 Notas Importantes

- **shadcn/ui:** Os componentes UI básicos estão incluídos. Se quiser usar o CLI do shadcn/ui, execute:
  ```bash
  npx shadcn-ui@latest init
  ```
  Mas não é necessário - os componentes já estão prontos para uso.

- **TypeScript:** O projeto usa TypeScript strict. Se encontrar erros de tipo, ajuste conforme necessário.

- **Responsividade:** Teste em diferentes tamanhos de tela. O design é mobile-first.

## 📄 Licença

Este projeto é livre para uso pessoal e comercial.

## 🤝 Suporte

Para dúvidas ou problemas:
1. Verifique os comentários no código (há muitos indicando onde editar)
2. Consulte a documentação do [Next.js](https://nextjs.org/docs)
3. Consulte a documentação do [Tailwind CSS](https://tailwindcss.com/docs)

---

**Desenvolvido com ❤️ usando Next.js e TypeScript**
