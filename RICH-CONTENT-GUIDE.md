# Guia de Conteúdo Rico - Blog Revenify

Este guia mostra como criar posts de blog com conteúdo rico usando componentes especiais.

## 📋 Índice

1. [Componentes Disponíveis](#componentes-disponíveis)
2. [Como Usar no Markdown](#como-usar-no-markdown)
3. [Exemplos Práticos](#exemplos-práticos)

---

## Componentes Disponíveis

### 1. **BlogQuote** - Citações Destacadas

Cria citações estilizadas com informações do autor (como a Dub.co).

**Props:**
- `quote`: Texto da citação
- `authorName`: Nome do autor (opcional)
- `authorTitle`: Cargo do autor (opcional)
- `authorAvatar`: URL da foto do autor (opcional)
- `companyLogo`: URL do logo da empresa (opcional)

### 2. **BlogStats** - Métricas e Estatísticas

Exibe estatísticas em cards visuais.

**Props:**
- `stats`: Array de objetos com `value`, `label`, `icon`
- `title`: Título da seção (opcional)

**Ícones disponíveis:**
- `trending` - Gráfico de crescimento
- `dollar` - Dólar
- `users` - Usuários
- `zap` - Raio (velocidade/performance)

### 3. **BlogVideo** - Vídeos Embed

Incorpora vídeos do YouTube, Vimeo ou vídeos diretos.

**Props:**
- `src`: URL do vídeo
- `title`: Título do vídeo (opcional)
- `thumbnail`: URL da thumbnail (para vídeos diretos)
- `type`: `'youtube'` | `'vimeo'` | `'direct'`

### 4. **BlogImage** - Imagens com Legenda

Imagens responsivas com legenda opcional.

**Props:**
- `src`: URL da imagem
- `alt`: Texto alternativo
- `caption`: Legenda (opcional)
- `aspectRatio`: Proporção (default: 16/9)

---

## Como Usar no Markdown

### Opção 1: Markdown Padrão (Recomendado)

Use Markdown padrão para texto, listas, títulos, etc.

```markdown
# Título Principal

## Seção 1

Parágrafo normal com **negrito** e *itálico*.

- Lista com bullets
- Outro item

1. Lista numerada
2. Segundo item

### Citações Simples

> Texto de citação em markdown padrão

### Links e Imagens

![Alt text](https://example.com/image.jpg)

[Link externo](https://example.com)
```

### Opção 2: Componentes Ricos (Para Conteúdo Especial)

**ATENÇÃO:** Os componentes React não funcionam diretamente no markdown. Você precisa:

1. Escrever o conteúdo em **Markdown puro** para parágrafos e texto
2. Para blocos ricos, use uma das estratégias abaixo:

#### Estratégia A: HTML Inline com Data Attributes

```html
<!-- Quote Block -->
<div class="blog-quote"
     data-quote="Dub saved us 20 hours per week!"
     data-author="John Doe"
     data-title="CEO, Acme Corp"
     data-avatar="https://example.com/avatar.jpg"
     data-logo="https://example.com/logo.png">
</div>

<!-- Stats Block -->
<div class="blog-stats"
     data-title="Results in 30 Days"
     data-stats='[
       {"value": "$10k", "label": "Revenue increase", "icon": "dollar"},
       {"value": "40%", "label": "Conversion boost", "icon": "trending"}
     ]'>
</div>

<!-- Video Block -->
<div class="blog-video"
     data-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
     data-title="Product Demo"
     data-type="youtube">
</div>

<!-- Image Block -->
<div class="blog-image"
     data-src="https://example.com/screenshot.png"
     data-alt="Dashboard screenshot"
     data-caption="The new analytics dashboard">
</div>
```

#### Estratégia B: Shortcodes Customizados

```markdown
[QUOTE]
text: "Dub is amazing!"
author: John Doe
title: CEO
avatar: https://example.com/avatar.jpg
[/QUOTE]

[STATS]
title: Key Metrics
- $10k | Revenue increase | dollar
- 40% | Conversion boost | trending
- 20hrs | Time saved weekly | zap
[/STATS]

[VIDEO]
src: https://www.youtube.com/watch?v=abc123
title: Product Demo
type: youtube
[/VIDEO]

[IMAGE]
src: https://example.com/image.png
alt: Screenshot
caption: Our new dashboard
[/IMAGE]
```

**NOTA:** A estratégia B requer implementar um parser customizado. Por enquanto, use a Estratégia A (HTML com data attributes).

---

## Exemplos Práticos

### Exemplo 1: Post de Case Study (Customer Story)

```markdown
# How Acme Corp Increased Revenue by 40% with Revenify

*Published on March 15, 2024 · 5 min read*

Acme Corp, a leading SaaS company, was struggling to track their marketing ROI across multiple channels...

## The Challenge

Before using Revenify:
- Scattered data across 5 different platforms
- Manual reporting taking 10+ hours per week
- No clear attribution for $50k monthly ad spend

<div class="blog-quote"
     data-quote="We were flying blind. We had no idea which campaigns were actually driving revenue."
     data-author="Jane Smith"
     data-title="CMO, Acme Corp"
     data-avatar="https://example.com/jane.jpg"
     data-logo="https://example.com/acme-logo.png">
</div>

## The Solution

We implemented Revenify's attribution platform...

<div class="blog-video"
     data-src="https://www.youtube.com/watch?v=demo123"
     data-title="Acme Corp Implementation"
     data-type="youtube">
</div>

## The Results

<div class="blog-stats"
     data-title="Impact in First 30 Days"
     data-stats='[
       {"value": "$15k", "label": "Increased monthly revenue", "icon": "dollar"},
       {"value": "40%", "label": "Better conversion rate", "icon": "trending"},
       {"value": "20 hrs", "label": "Time saved per week", "icon": "zap"}
     ]'>
</div>

### ROI Breakdown

Here's how the numbers broke down:

![ROI Dashboard](https://example.com/roi-chart.png)

<div class="blog-image"
     data-src="https://example.com/dashboard.png"
     data-alt="Revenify Analytics Dashboard"
     data-caption="Real-time attribution dashboard showing campaign performance">
</div>

## Conclusion

The combination of automated tracking and clear attribution gave Acme the insights they needed...
```

### Exemplo 2: Post Técnico com Código

```markdown
# Implementing Server-Side Tracking with Revenify

## Overview

Learn how to set up server-side tracking for better privacy and accuracy...

## Prerequisites

- Node.js 18+
- Revenify API key
- Basic knowledge of webhooks

## Step 1: Install the SDK

\`\`\`bash
npm install @revenify/node-sdk
\`\`\`

## Step 2: Configure the Client

\`\`\`javascript
const Revenify = require('@revenify/node-sdk')

const client = new Revenify({
  apiKey: process.env.REVENIFY_API_KEY
})
\`\`\`

<div class="blog-quote"
     data-quote="Server-side tracking improved our data accuracy by 30%"
     data-author="Engineering Team"
     data-title="Revenify">
</div>

## Results

After implementing server-side tracking:

<div class="blog-stats"
     data-stats='[
       {"value": "+30%", "label": "Data accuracy", "icon": "trending"},
       {"value": "99.9%", "label": "Uptime", "icon": "zap"}
     ]'>
</div>

## Demo

Watch our 2-minute implementation guide:

<div class="blog-video"
     data-src="https://www.youtube.com/watch?v=tutorial123"
     data-title="Server-Side Setup Tutorial"
     data-type="youtube">
</div>
```

---

## Informações da Sidebar (Company/Customer Info)

Ao criar o post no CMS, você pode preencher os campos de "Company/Customer Info" na seção opcional:

- **Company Name**: Nome da empresa featured
- **Website**: Site da empresa (será linkável)
- **Industry**: Setor (ex: "SaaS", "E-commerce")
- **Company Size**: Tamanho (ex: "50-200 employees")
- **Founded**: Ano de fundação
- **About**: Descrição curta da empresa
- **Company Logo**: URL do logo (faça upload no Supabase Storage)

Isso cria um card estilizado na sidebar, igual aos customer stories da Dub.co!

---

## ✅ Checklist para Criar um Post Rico

- [ ] Escrever conteúdo principal em Markdown
- [ ] Adicionar hero image (cover_image)
- [ ] Inserir citações com `blog-quote` onde apropriado
- [ ] Mostrar métricas importantes com `blog-stats`
- [ ] Embed videos quando relevante
- [ ] Usar legendas em imagens técnicas
- [ ] Preencher company info se for customer story
- [ ] Testar no preview antes de publicar
- [ ] Verificar responsividade (mobile/desktop)

---

## 🚀 Próximos Passos

1. Execute a migração SQL: `C:\Revenify.co\lp.revenify.co\revenify-landing\docs\supabase\migration_sidebar_info.sql`
2. Reinicie o servidor do app
3. Crie um post de teste
4. Veja o resultado no site!

---

**Dúvidas?** Consulte os exemplos da Dub.co:
- https://dub.co/customers/fenitas
- https://dub.co/customers/cerebrum
