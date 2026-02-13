"use client";

import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section
      id="contato"
      style={{
        padding: "var(--section-padding-y) 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "var(--color-bg-secondary)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius)",
            padding: "4rem 2rem",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.5rem)",
              fontWeight: 600,
              color: "var(--color-text-primary)",
              marginBottom: "1rem",
            }}
          >
            Precisa de um time de tecnologia?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--color-text-secondary)",
              maxWidth: "520px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.7,
            }}
          >
            Sem recrutamento, sem burocracia. Conte com a Argon Gate para
            desenvolver e integrar seus sistemas.
          </p>

          <a
            href="mailto:contato@argongate.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "var(--color-accent)",
              color: "var(--color-text-primary)",
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              fontWeight: 500,
              padding: "0.875rem 2rem",
              borderRadius: "var(--radius)",
              textDecoration: "none",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor =
                "var(--color-accent-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-accent)";
            }}
          >
            Entrar em contato
            <ArrowRight size={18} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
