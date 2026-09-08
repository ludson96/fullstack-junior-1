# Naranja Jobs - Plataforma de Vagas & Desafio Técnico Full Stack 🧑🏾‍💻

[![Next.js 14](https://img.shields.io/badge/Next.js-14.1.4-black.svg?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React 18](https://img.shields.io/badge/React-18.2.0-blue.svg?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript 5](https://img.shields.io/badge/TypeScript-5.0-3178C6.svg?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS 3](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC.svg?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![ESLint Airbnb](https://img.shields.io/badge/ESLint-Airbnb_Strict-4B3263.svg?style=for-the-badge&logo=eslint)](https://eslint.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> 🇧🇷 **Português** | 🇺🇸 [**English Version**](README.en.md)

Aplicação Web Full Stack de alta performance construída com **Next.js 14 (App Router)**, **React 18** e **TypeScript**, integrando uma interface responsiva baseada em design do Figma com uma API Rest protegida por middleware e validação estrita de esquemas com Joi.

## 📌 Navegação Rápida

- [📝 Sobre o Projeto](#-sobre-o-projeto)
- [🖼️ Preview](#️-preview)
- [🌐 Deploy da Aplicação / Demonstração Online](#-deploy-da-aplicação--demonstração-online)
- [⚡ API Endpoints](#-api-endpoints)
- [✨ Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologias e Ferramentas Utilizadas](#️-tecnologias-e-ferramentas-utilizadas)
- [🏛️ Arquitetura da Solução](#️-arquitetura-da-solução)
- [📁 Estrutura do Repositório](#-estrutura-do-repositório)
- [💡 Decisões Técnicas](#-decisões-técnicas)
- [🚀 Como Executar o Projeto](#-como-executar-o-projeto)
- [📄 Licença](#-licença)

## 📝 Sobre o Projeto

Este repositório foi concebido a partir do **Desafio Técnico Full Stack Junior da NaranjaLabs**. O desafio consistia em:

1. **Frontend:** Construir a interface a partir de um layout do Figma com fidelidade visual aos estilos e paleta de cores (`#2B2D38`, `#DB2A6B`).
2. **Backend:** Criar uma API RESTful em Next.js para gerenciamento e candidatura de vagas de emprego (`GET /api/jobs`, `GET /api/job/[id]` e `POST /api/job/submit`), com validação rigorosa de payloads e proteção das rotas via cabeçalho customizado (`secret: naranja-labs`).

O projeto foi expandido para um **case completo de portfólio**, eliminando limitações de tamanho fixo, garantindo total responsividade para dispositivos móveis e desktop, implementando navegação intuitiva para todas as funções da API no menu superior e documentando as decisões arquiteturais com boas práticas de engenharia de software.

## 🖼️ Preview

<div align="center">
  <img src="public/images/projeto.gif" alt="Demonstração do App" width="100%" />
</div>

## 🌐 Deploy da Aplicação / Demonstração Online

Acesse a aplicação em produção:
👉 **[NaranjaLabs](https://fullstack-junior-1.vercel.app/)**

## ⚡ API Endpoints

Todas as rotas sob `/api/*` são interceptadas e validadas pelo `middleware.ts`. É obrigatório enviar o seguinte cabeçalho HTTP:

| Cabeçalho | Valor Requerido | Descrição |
| :--- | :--- | :--- |
| `secret` | `naranja-labs` | Chave de segurança para autorização |

> **Nota:** Requisições sem a secret ou com valor incorreto receberão resposta `HTTP 401 Unauthorized`:
> ```json
> {
>   "message": "Secret provided is invalid. Make sure the correct secret is being sent"
> }
> ```

### 1. Listar Vagas
- **Rota:** `GET /api/jobs`
- **Filtro opcional por nível:** `GET /api/jobs?level=Junior` ou `GET /api/jobs?level=Senior`
- **Status de Sucesso:** `200 OK`
- **Exemplo de Resposta:**
  ```json
  [
    {
      "id": 1,
      "job": "Full Stack Developer",
      "level": "Junior",
      "status": "open"
    },
    {
      "id": 2,
      "job": "Frontend Developer",
      "level": "Junior",
      "status": "closed"
    }
  ]
  ```

### 2. Consultar Vaga por ID
- **Rota:** `GET /api/job/[id]`
- **Status de Sucesso:** `200 OK`
- **Tratamento de Erros:**
  - `id` ausente: `400 Bad Request` (`{"message": "Job ID is required."}`)
  - `id` não numérico: `404 Not Found` (`{"message": "ID must be a number."}`)
  - `id` inexistente: `404 Not Found` (`{"message": "Job ID not found."}`)
- **Exemplo de Resposta (`GET /api/job/1`):**
  ```json
  {
    "id": 1,
    "job": "Full Stack Developer",
    "level": "Junior",
    "status": "open"
  }
  ```

### 3. Enviar Candidatura
- **Rota:** `POST /api/job/submit`
- **Content-Type:** `application/json`
- **Validação:** Realizada via esquema Joi no backend. Todos os campos são de preenchimento obrigatório:
  - `name`: string
  - `age`: number
  - `phone`: string
  - `state`: string
  - `city`: string
- **Exemplo de Payload:**
  ```json
  {
    "name": "Ludson Pereira",
    "age": 28,
    "phone": "(21) 99108-1759",
    "state": "RJ",
    "city": "Rio de Janeiro"
  }
  ```
- **Status de Sucesso:** `201 Created`
  ```json
  {
    "message": "Thank you for your application, Ludson Pereira."
  }
  ```
- **Erros de Validação:** `400 Bad Request` com a mensagem descritiva do campo faltante ou inválido.

## ✨ Funcionalidades

- 📱 **Home Responsiva:** Hero section fiel ao Figma em formato fluido (CSS Grid/Flexbox), ajustando-se desde smartphones até monitores ultra-wide sem cortes nem scrollbars indesejadas.
- 💼 **Portal de Carreiras (`/jobs`):** Listagem dinâmica com cards de vagas contendo identificador, cargo, nível e status em tempo real.
- 🎯 **Filtro Instantâneo por Nível:** Alternância rápida entre `Todas as Vagas`, `Nível Junior` e `Nível Senior`.
- 🔍 **Consulta Direta por ID (`/job-details`):** Interface para consultar vagas individuais diretamente via rota `GET /api/job/[id]`.
- ✍️ **Formulário de Candidatura (`/submit-application` & Modal):** Interface acessível para envio de dados com feedback instantâneo de carregamento, sucesso ou validação.
- 🛡️ **Segurança em Camada de Borda:** Middleware centralizado com validação de secret para toda a API.
- 🎨 **Design System Coeso:** Cores sólidas e contrastantes, ícones SVG originais e tipografia harmônica (Poppins & Merriweather).

## 🛠️ Tecnologias e Ferramentas Utilizadas

### Core & Frameworks
- **[Next.js 14.1.4](https://nextjs.org/):** Framework React com App Router, Route Handlers e Edge Middleware.
- **[React 18](https://react.dev/):** Biblioteca para interfaces de usuário com componentes funcionais e hooks.
- **[TypeScript 5](https://www.typescriptlang.org/):** Tipagem estática estrita em toda a base de código.

### Estilização & UI
- **[Tailwind CSS 3.3](https://tailwindcss.com/):** Estilização utilitária moderna e responsiva.
- **[Google Fonts (Next/Font):](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)** Tipografia otimizada zero-layout-shift com Poppins e Merriweather.

### Validação & Qualidade de Código
- **[Joi 17](https://joi.dev/):** Validação de esquemas e regras de payload na API.
- **[ESLint 8](https://eslint.org/):** Análise estática com regras rigorosas do **Airbnb Base** e **Airbnb TypeScript**.
- **[PostCSS](https://postcss.org/) & [Autoprefixer](https://github.com/postcss/autoprefixer):** Compatibilidade cross-browser garantida.

## 🏛️ Arquitetura da Solução

O projeto segue os princípios de **Separation of Concerns (SoC)** e arquitetura limpa em camadas:

```
┌─────────────────────────────────────────────────────────┐
│              Apresentação (UI Components)               │
│      Hero Section, JobList, JobCard, JobModal, Form     │
└────────────────────────────┬────────────────────────────┘
                             │
┌────────────────────────────▼────────────────────────────┐
│         Estado & Regras de Negócio (Custom Hooks)       │
│               useJobs, useApplicationModal             │
└────────────────────────────┬────────────────────────────┘
                             │
┌────────────────────────────▼────────────────────────────┐
│          Serviços de Dados (Data Fetching / Service)    │
│            jobService (Headers com Secret embutida)     │
└────────────────────────────┬────────────────────────────┘
                             │
┌────────────────────────────▼────────────────────────────┐
│           Next.js Route Handlers (API Backend)          │
│        /api/jobs  •  /api/job/[id]  •  /api/job/submit  │
└────────────────────────────┬────────────────────────────┘
                             │ (Interceptado por)
┌────────────────────────────▼────────────────────────────┐
│                    middleware.ts                        │
│           Validação da Secret de Autenticação           │
└─────────────────────────────────────────────────────────┘
```

## 📁 Estrutura do Repositório

```text
fullstack-junior-1/
├── public/
│   └── images/               # SVGs originais de ícones e mosaico de pessoas
├── src/
│   ├── app/                  # Rotas e páginas do Next.js App Router
│   │   ├── api/              # Endpoints da API REST
│   │   │   ├── jobs/         # GET /api/jobs
│   │   │   └── job/          # GET /api/job/[id] e POST /api/job/submit
│   │   ├── jobs/             # Página /jobs (Portal de Carreiras)
│   │   ├── job-details/      # Página /job-details (Consulta por ID)
│   │   ├── submit-application/# Página /submit-application (Candidatura)
│   │   ├── layout.tsx        # Layout raiz, fontes e metadados
│   │   ├── page.tsx          # Página inicial (Home)
│   │   ├── globals.css       # Estilos globais e tokens
│   │   └── icon.svg          # Favicon personalizado da aplicação
│   │
│   ├── components/           # Componentes modulares e reutilizáveis
│   │   ├── hero/             # Títulos, botões, tags e mosaico da Home
│   │   ├── jobs/             # Grid, filtros, cards e formulários
│   │   └── ui/               # Componentes atômicos (Badges sólidos)
│   │
│   ├── data/                 # Base de dados mockada (jobs.ts, navigationData.ts)
│   ├── hooks/                # Custom hooks (useJobs.ts)
│   ├── services/             # Camada de comunicação com a API (jobService.ts)
│   ├── types/                # Definições de tipos TypeScript (job.ts)
│   ├── utils/                # Fontes e validador Joi (validateRequest.ts)
│   └── middleware.ts         # Middleware de proteção por secret
│
├── .eslintrc.json            # Configuração de linter (Airbnb Standard)
├── next.config.mjs           # Configuração de build e otimização de cache
├── package.json              # Dependências e scripts do projeto
├── tailwind.config.ts        # Configuração do Tailwind CSS
└── tsconfig.json             # Configuração estrita do TypeScript
```

## 💡 Decisões Técnicas

1. **Next.js App Router (Full Stack no mesmo ecossistema):** Permite manter o frontend e a API unificados, diminuindo custos operacionais de deploy e proporcionando TypeScript end-to-end.
2. **Isolamento na camada `services`:** Em vez de disparar `fetch` soltos nos componentes, todo o consumo de endpoints é encapsulado em `jobService.ts`, garantindo que a injeção do cabeçalho `secret` seja consistente e centralizada.
3. **Cores Sólidas e Contrastantes (Sem AI Slop):** Optou-se por cores 100% sólidas e legíveis para badges e cards (`#2E7D32` para status disponível, `#1E2028` para encerrada e `#22242D` para superfícies), abandonando transparências com blur e brilhos neon genéricos.
4. **Resolução de Cache no Windows:** Configuração customizada em `next.config.mjs` com cache de memória em desenvolvimento, eliminando conflitos de lock do sistema de arquivos NTFS (`ENOENT`).
5. **Adesão ao Airbnb Style Guide:** Código revisado e formatado estritamente pelas regras de qualidade do ESLint Airbnb, garantindo legibilidade e ausência de warnings.

## 🚀 Como Executar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) versão `18.17.0` ou superior
- Gerenciador de pacotes `npm` ou `yarn`

### Passo a Passo

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/ludson96/fullstack-junior-1.git
   cd fullstack-junior-1
   ```

2. **Instalar as dependências:**
   ```bash
   npm install
   ```

3. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acessar a aplicação no navegador:**
   - Acesse: [http://localhost:3000](http://localhost:3000)

### Scripts Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor local de desenvolvimento na porta 3000 |
| `npm run build` | Compila e gera o build de produção otimizado com TypeScript e Linting |
| `npm run start` | Inicia o servidor em modo de produção (após o build) |
| `npm run lint` | Executa o linter ESLint (Airbnb) para validação do código |

## 📄 Licença

Este projeto está licenciado sob os termos da licença **MIT**. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.

<div align="center">
  Desenvolvido por <strong>Ludson Pereira dos Santos</strong> 🚀<br />
  <a href="https://www.linkedin.com/in/ludson96/">LinkedIn</a> • <a href="https://github.com/ludson96">GitHub</a> • <a href="mailto:ludson_ps27@hotmail.com">E-mail</a>
</div>