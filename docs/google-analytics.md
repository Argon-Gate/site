# Google Analytics (GA4)

## Visão geral

O site utiliza o Google Analytics 4 para rastrear métricas de uso. A integração é feita via `@next/third-parties/google`, que injeta o script `gtag.js` automaticamente.

O Measurement ID (`G-XXXXXXXXXX`) é público por design — ele é embutido no JavaScript client-side de qualquer site que usa GA. Por isso, utiliza o prefixo `NEXT_PUBLIC_*`.

---

## Configuração

### 1. Criar a propriedade no Google Analytics

1. Acesse [analytics.google.com](https://analytics.google.com)
2. Vá em **Administrador** (engrenagem no canto inferior esquerdo)
3. Clique em **Criar** > **Conta** (caso ainda não tenha uma)
   - Nome da conta: `Argon Gate`
4. Clique em **Criar** > **Propriedade**
   - Nome: `Argon Gate - Site`
   - Fuso horário: `Brasil`
   - Moeda: `BRL`
5. Clique em **Criar** > **Fluxo de dados** > **Web**
   - URL do site: `argongate.com.br`
   - Nome do fluxo: `Site Argon Gate`
6. Após criar o fluxo, copie o **Measurement ID** (formato `G-XXXXXXXXXX`)

### 2. Configurar a variável de ambiente

Crie ou edite o arquivo `.env.local` na raiz do projeto:

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-SEU_ID_AQUI
```

> O `.env.local` está no `.gitignore` e não é commitado.

### 3. Verificar o funcionamento

1. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
2. Abra o site em `http://localhost:3000`
3. No DevTools do navegador (aba **Network**), filtre por `gtag` — o script `gtag.js` deve aparecer
4. No **Console**, execute `window.gtag` — deve retornar uma função
5. No Google Analytics, acesse **Administrador** > **DebugView** para ver eventos em tempo real

---

## Eventos rastreados

| Evento | Descrição | Componente |
|--------|-----------|------------|
| `whatsapp_click` | Clique no botão de WhatsApp | `CTA.tsx` |
| `hero_cta_click` | Clique no CTA "Fale conosco" do Hero | `Hero.tsx` |
| `header_cta_click` | Clique no CTA "Fale conosco" do Header | `Header.tsx` |
| `email_copy` | Cópia do email de contato | `CTA.tsx` |
| `section_view` | Seção ficou visível na viewport | `WhatWeDo.tsx`, `HowWeWork.tsx`, `Differentials.tsx`, `CTA.tsx` |

O evento `section_view` inclui o parâmetro `section_name` com o valor da seção: `servicos`, `processo`, `diferenciais` ou `contato`.

---

## Arquitetura

```
src/
├── app/layout.tsx              # <GoogleAnalytics> renderizado condicionalmente
├── lib/analytics.ts            # trackEvent() e AnalyticsEvents
├── types/gtag.d.ts             # Tipagem global de window.gtag
└── hooks/useSectionTracking.ts # Hook de IntersectionObserver para section_view
```

- **`layout.tsx`** — renderiza `<GoogleAnalytics gaId={gaId} />` apenas quando a env está configurada
- **`analytics.ts`** — função `trackEvent()` com guards para SSR; objeto `AnalyticsEvents` com os eventos pré-definidos
- **`gtag.d.ts`** — declaração de `window.gtag` para evitar erros de TypeScript
- **`useSectionTracking.ts`** — hook que dispara `section_view` uma única vez quando a seção entra na viewport (mesmo padrão do `useScrollReveal`)
