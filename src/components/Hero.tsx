"use client";

import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8rem 1.5rem 6rem",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width)",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 700,
            color: "var(--color-text-primary)",
            marginBottom: "1.5rem",
            lineHeight: 1.1,
          }}
        >
          Seu time de tecnologia,
          <br />
          sem a complexidade de contratar.
        </h1>

        <p
          style={{
            fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)",
            color: "var(--color-text-secondary)",
            maxWidth: "680px",
            margin: "0 auto 3rem",
            lineHeight: 1.7,
          }}
        >
          Outsourcing de desenvolvimento para quem precisa criar novos
          sistemas, manter os que já existem ou evoluir o que está em
          produção. APIs, integrações e aplicações completas.
        </p>

        <a
          href="#contato"
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
          Fale conosco
          <ArrowRight size={18} strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
}
