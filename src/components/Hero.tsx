"use client";

import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      className="flex items-center justify-center"
      style={{
        minHeight: "100vh",
        padding: "8rem 1.5rem 6rem",
      }}
    >
      <div
        className="w-full text-center"
        style={{ maxWidth: "var(--max-width)" }}
      >
        {/* Badge */}
        <div className="hero-animate hero-animate-delay-1" style={{ marginBottom: "2rem" }}>
          <span className="hero-badge">
            <span className="hero-badge-dot" />
            Outsourcing de desenvolvimento de software
          </span>
        </div>

        {/* Headline */}
        <h1
          className="hero-animate hero-animate-delay-2 hero-gradient-text"
          style={{
            fontSize: "var(--text-hero)",
            fontWeight: 700,
            letterSpacing: "var(--tracking-hero)",
            marginBottom: "1.5rem",
            lineHeight: 1.1,
          }}
        >
          Conecte.
          <br />
          Automatize.
          <br />
          Evolua.
        </h1>

        {/* Subtítulo */}
        <p
          className="hero-animate hero-animate-delay-3"
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

        {/* CTA */}
        <div className="hero-animate hero-animate-delay-4">
          <a href="#contato" className="btn-primary">
            Fale conosco
            <ArrowRight size={18} strokeWidth={1.5} />
          </a>
        </div>

      </div>
    </section>
  );
}
