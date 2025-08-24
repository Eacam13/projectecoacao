# EcoAção - Sustentabilidade em Ação

Uma plataforma educativa moderna desenvolvida com Next.js 14+ para promover conscientização ambiental e práticas sustentáveis através de módulos interativos, dicas práticas e uma comunidade engajada.

## ✨ Principais Recursos

- **Módulos Educativos**: Conteúdo estruturado sobre sustentabilidade (reciclagem, energia renovável, conservação de água, biodiversidade)
- **Dicas Práticas**: Ações sustentáveis categorizadas por contexto (casa, escola, comunidade)
- **Blog Comunitário**: Depoimentos reais de estudantes sobre suas ações ambientais
- **Design Responsivo**: Experiência otimizada para todos os dispositivos
- **Modo Escuro/Claro**: Sistema de temas com design tokens
- **Animações Acessíveis**: Micro-interações com Framer Motion respeitando preferências de acessibilidade

## 🛠️ Stack Tecnológica

- **Framework**: Next.js 14+ (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Componentes**: shadcn/ui
- **Animações**: Framer Motion
- **Ícones**: Lucide React
- **SEO**: next-seo
- **Temas**: next-themes

## 🏗️ Arquitetura do Projeto

```
src/
├── app/                      # App Router (Next.js 14+)
│   ├── (marketing)/         # Grupo de rotas de marketing
│   ├── modulos/            # Página de módulos
│   ├── curiosidades/       # Página de dicas
│   ├── blog/               # Página de blog
│   ├── api/                # API Routes
│   └── globals.css         # Estilos globais
├── components/
│   ├── ui/                 # Componentes base (shadcn/ui)
│   ├── layout/            # Componentes de layout
│   ├── sections/          # Seções das páginas
│   ├── common/            # Componentes reutilizáveis
│   └── providers/         # Context providers
├── lib/
│   ├── mock/              # Dados mock
│   ├── utils.ts           # Utilitários
│   ├── seo.ts             # Configuração SEO
│   └── routes.ts          # Definição de rotas
├── hooks/                 # Custom hooks
└── types/                 # Definições TypeScript
```

## 🚀 Início Rápido

### Pré-requisitos

- Node.js 18+ 
- npm, yarn ou pnpm

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/ecoacao.git
   cd ecoacao
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

4. **Acesse a aplicação**
   
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📁 Estrutura de Páginas

### 🏠 Homepage (`/`)
- Hero section impactante com call-to-actions
- Métricas de impacto ambiental
- Preview dos módulos em destaque
- Dicas práticas destacadas
- Depoimentos de estudantes
- CTA final para engajamento

### 📚 Módulos (`/modulos`)
- Grid responsivo com todos os módulos
- Funcionalidade de busca
- Categorização por temas
- Indicadores de nível e duração

### 💡 Dicas (`/curiosidades`)
- Lista filtrable de dicas práticas
- Filtros por categoria (Casa, Escola, Comunidade)
- Funcionalidade de compartilhamento
- Indicadores de dificuldade e impacto

### 📝 Blog (`/blog`)
- Depoimentos de estudantes
- Cards informativos com avatar e dados do autor
- Filtros e paginação
- Métricas de impacto dos projetos

## 🎨 Sistema de Design

### Tokens de Design

O projeto utiliza um sistema completo de design tokens:

- **Cores**: Paleta verde sustentável com variações semânticas
- **Espaçamento**: Escala de 4px a 48px
- **Tipografia**: Hierarchy baseada na fonte Inter
- **Sombras**: Variações para diferentes elevações
- **Border Radius**: Sistema consistente de arredondamento

### Temas

- **Modo Claro**: Design limpo com alto contraste
- **Modo Escuro**: Tema escuro confortável para os olhos
- **Transições**: Mudanças suaves entre temas

## ♿ Acessibilidade

- **WCAG AA**: Conformidade com diretrizes de acessibilidade
- **Navegação por teclado**: Todos os elementos são acessíveis via teclado
- **ARIA Labels**: Rotulagem adequada para tecnologias assistivas
- **Contraste**: Ratios de contraste adequados em todos os temas
- **Prefers-reduced-motion**: Respeita preferências de movimento reduzido

## 🔧 Performance

- **Next.js Image**: Otimização automática de imagens
- **Lazy Loading**: Carregamento sob demanda
- **Bundle Splitting**: Divisão otimizada do código
- **SEO**: Metadados estruturados e Open Graph
- **Lighthouse Score**: Meta de 90+ em todas as métricas

## 📱 Responsividade

- **Mobile First**: Design pensado primeiro para dispositivos móveis
- **Breakpoints**: Sistema consistente de breakpoints
- **Navigation**: Menu mobile com drawer animado
- **Touch Targets**: Áreas de toque adequadas para mobile

## 🔄 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Verificação de lint
npm run type-check   # Verificação de tipos TypeScript
```

## 🌱 Dados Mock

O projeto inclui dados mock realistas para:

- **Módulos**: 8 módulos sobre sustentabilidade
- **Dicas**: 15 dicas práticas categorizadas
- **Posts**: 10 depoimentos de estudantes
- **Testimonials**: 6 depoimentos para homepage

## 🔮 Próximos Passos

- [ ] Integração com CMS (Contentful/Strapi)
- [ ] Sistema de autenticação
- [ ] Área do usuário com progresso
- [ ] Gamificação com badges e pontos
- [ ] API para mobile app
- [ ] Suporte a MDX para conteúdo
- [ ] Analytics e tracking de engajamento

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor, leia o guia de contribuição antes de submeter pull requests.

---

**Desenvolvido com 💚 pela equipe EcoAção**

Para mais informações ou dúvidas, entre em contato: contato@ecoacao.com