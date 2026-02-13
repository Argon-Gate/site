"use client";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        padding: "2rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontSize: "0.875rem",
            color: "var(--color-text-secondary)",
          }}
        >
          &copy; {year} Argon Gate. Todos os direitos reservados.
        </span>

        <nav className="flex gap-6">
          <a
            href="#servicos"
            style={{
              fontSize: "0.875rem",
              color: "var(--color-text-secondary)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--color-text-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--color-text-secondary)";
            }}
          >
            Serviços
          </a>
          <a
            href="#processo"
            style={{
              fontSize: "0.875rem",
              color: "var(--color-text-secondary)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--color-text-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--color-text-secondary)";
            }}
          >
            Processo
          </a>
          <a
            href="#contato"
            style={{
              fontSize: "0.875rem",
              color: "var(--color-text-secondary)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--color-text-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--color-text-secondary)";
            }}
          >
            Contato
          </a>
        </nav>
      </div>
    </footer>
  );
}
