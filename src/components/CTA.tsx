"use client";

import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function CTA() {
  return (
    <section id="contato" className="section-container">
      <ScrollReveal>
        <div className="cta-card text-center" style={{ position: "relative" }}>
          <h2
            style={{
              fontSize: "var(--text-h2)",
              fontWeight: 600,
              letterSpacing: "var(--tracking-h2)",
              color: "var(--color-text-primary)",
              marginBottom: "1rem",
              position: "relative",
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
              position: "relative",
            }}
          >
            Sem recrutamento, sem burocracia. Conte com a Argon Gate para
            desenvolver e integrar seus sistemas.
          </p>

          <div style={{ position: "relative" }}>
            <a href="mailto:contato@argongate.com" className="btn-primary">
              Entrar em contato
              <ArrowRight size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
