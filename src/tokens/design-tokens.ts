/**
 * Argon Gate - Design Tokens
 *
 * Arquivo centralizado de tokens de design.
 * Altere os valores aqui para modificar a identidade visual de toda a aplicação.
 *
 * Estes tokens são consumidos pelo Tailwind (via globals.css) e
 * podem ser importados diretamente em componentes quando necessário.
 */

export const tokens = {
  colors: {
    /** Fundo principal da aplicação */
    bgPrimary: "#0B0F14",
    /** Fundo secundário (cards, seções alternadas) */
    bgSecondary: "#111827",
    /** Borda sutil para separação de elementos */
    border: "#1E293B",
    /** Texto principal — alto contraste sobre fundo escuro */
    textPrimary: "#F1F5F9",
    /** Texto secundário — informações complementares */
    textSecondary: "#94A3B8",
    /** Cor de destaque — CTAs, links e acentos visuais */
    accent: "#2563EB",
    /** Hover do accent */
    accentHover: "#1D4ED8",
  },

  typography: {
    /** Fonte para headings */
    fontHeading: "'Sora', sans-serif",
    /** Fonte para corpo de texto */
    fontBody: "'Inter', sans-serif",
    /** Tamanhos de fonte */
    sizes: {
      h1: "clamp(2.5rem, 5vw, 4rem)",
      h2: "clamp(2rem, 3.5vw, 2.5rem)",
      h3: "clamp(1.25rem, 2vw, 1.75rem)",
      body: "clamp(1rem, 1.2vw, 1.125rem)",
      small: "0.875rem",
    },
    /** Letter spacing para headings */
    headingTracking: "-0.02em",
  },

  spacing: {
    /** Espaçamento padrão de seções */
    sectionY: "6rem",
    /** Largura máxima do conteúdo */
    maxWidth: "1200px",
  },

  borderRadius: {
    /** Raio padrão para cards, botões e containers */
    default: "12px",
  },
} as const;

export type DesignTokens = typeof tokens;
