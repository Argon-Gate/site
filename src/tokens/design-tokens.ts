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
    bgPrimary: "#08090A",
    /** Fundo secundário (seções alternadas) */
    bgSecondary: "#0F1117",
    /** Fundo de superfícies (cards) */
    bgSurface: "#141720",
    /** Fundo elevado (hover de cards) */
    bgElevated: "#1A1D28",

    /** Texto principal — alto contraste */
    textPrimary: "#F0F2F5",
    /** Texto secundário — informações complementares */
    textSecondary: "#8A919E",
    /** Texto terciário — informações de menor importância */
    textTertiary: "#5C6370",
    /** Texto quaternário — placeholders, desabilitados */
    textQuaternary: "#3D4250",

    /** Borda padrão */
    border: "#1A1E2A",
    /** Borda em hover */
    borderHover: "#2A2F3E",

    /** Cor de destaque — CTAs, links e acentos visuais */
    accent: "#2563EB",
    /** Hover do accent */
    accentHover: "#1D4ED8",
    /** Glow do accent */
    accentGlow: "rgba(37, 99, 235, 0.15)",
    /** Accent sutil */
    accentSubtle: "rgba(37, 99, 235, 0.08)",
  },

  typography: {
    /** Fonte para headings */
    fontHeading: "'Sora', sans-serif",
    /** Fonte para corpo de texto */
    fontBody: "'Inter', sans-serif",
    /** Tamanhos de fonte */
    sizes: {
      hero: "clamp(3rem, 6vw, 4.5rem)",
      h1: "clamp(2.5rem, 5vw, 4rem)",
      h2: "clamp(2rem, 3.5vw, 2.5rem)",
      h3: "clamp(1.25rem, 2vw, 1.75rem)",
      body: "clamp(1rem, 1.2vw, 1.125rem)",
      small: "0.875rem",
      caption: "0.75rem",
    },
    /** Letter spacing */
    tracking: {
      hero: "-0.03em",
      h1: "-0.03em",
      h2: "-0.02em",
      heading: "-0.02em",
    },
  },

  spacing: {
    /** Espaçamento padrão de seções */
    sectionY: "clamp(5rem, 10vw, 10rem)",
    /** Largura máxima do conteúdo */
    maxWidth: "1200px",
  },

  borderRadius: {
    /** Raio padrão para cards, botões e containers */
    default: "12px",
  },
} as const;

export type DesignTokens = typeof tokens;
