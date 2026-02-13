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
- `src/tokens/design-tokens.ts` — Design tokens centralizados (cores, tipografia, espaçamento, bordas) como objeto const tipado
- `src/app/globals.css` — Custom properties CSS que espelham os design tokens, registradas no Tailwind v4 via `@theme inline`

### Design system

Os design tokens vivem em dois lugares que devem estar sempre sincronizados:
1. **Custom properties CSS** em `globals.css` `:root` — consumidas por estilos inline e classes Tailwind
2. **Tokens TypeScript** em `src/tokens/design-tokens.ts` — para uso programático nos componentes

Cores: tema escuro com `--color-bg-primary` (#0B0F14), azul de destaque (#2563EB).
Fontes: **Sora** (headings) e **Inter** (corpo), carregadas via `next/font/google` em `layout.tsx` como variáveis CSS `--font-sora` / `--font-inter`.

### Convenções

- **Idioma do código**: nomes de variáveis, funções, componentes, pastas e arquivos devem ser apenas em inglês
- **Idioma de documentação**: comentários, documentação, logs e nomenclatura de testes devem ser apenas em pt-BR
- Textos visíveis ao usuário (UI) são em pt-BR
- Componentes utilizam uma mistura de classes utilitárias Tailwind e estilos inline referenciando custom properties CSS
- Ícones vindos do `lucide-react`
- Alias de caminho: `@/*` mapeia para `./src/*`
