# CLAUDE.md

Este arquivo orienta o Claude Code (claude.ai/code) ao trabalhar com o código deste repositório.

## Comandos

- `npm run dev` — Inicia o servidor de desenvolvimento (Next.js com Turbopack em localhost:3000)
- `npm run build` — Build de produção
- `npm run lint` — Executa o ESLint (flat config com regras Next.js core-web-vitals + TypeScript)

Nenhum framework de testes está configurado no momento.

## Arquitetura

Este é o site institucional/landing page da **Argon Gate** — uma aplicação single-page em Next.js 16 (App Router) com React 19, TypeScript e Tailwind CSS v4.

### Estrutura principal

- `src/app/page.tsx` — Página única composta por componentes de seção
- `src/components/` — Componentes de seção (Header, Hero, WhatWeDo, HowWeWork, Differentials, CTA, Footer), exportados via barrel em `index.ts`
- `src/app/globals.css` — Entry point CSS que importa os módulos de `src/styles/`
- `src/styles/` — CSS modular: tokens, theme (Tailwind v4), base, accessibility, utilities, animations, hero, flow, components
- `docs/` — Documentação técnica do projeto (configurações, integrações, guias)

### Design system

Os design tokens são definidos como CSS custom properties em `src/styles/tokens.css` (fonte única de verdade) e registrados no Tailwind v4 via `@theme inline` em `src/styles/theme.css`.

Cores: tema escuro com `--color-bg-primary` (#08090A), azul de destaque (#2563EB).
Fontes: **Sora** (headings) e **Inter** (corpo), carregadas via `next/font/google` em `layout.tsx` como variáveis CSS `--font-sora` / `--font-inter`.

### Convenções

- **Idioma do código**: nomes de variáveis, funções, componentes, pastas e arquivos devem ser apenas em inglês
- **Idioma de documentação**: comentários, documentação, logs e nomenclatura de testes devem ser apenas em pt-BR
- Textos visíveis ao usuário (UI) são em pt-BR
- Componentes utilizam uma mistura de classes utilitárias Tailwind e estilos inline referenciando custom properties CSS
- Ícones vindos do `lucide-react`
- Alias de caminho: `@/*` mapeia para `./src/*`
