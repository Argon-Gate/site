"use client";

import { Shield } from "lucide-react";

export function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "rgba(11, 15, 20, 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div
        className="flex items-center justify-between"
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          padding: "1rem 1.5rem",
        }}
      >
        <a
          href="#"
          className="flex items-center gap-2"
          style={{ textDecoration: "none" }}
        >
          <Shield
            size={24}
            style={{ color: "var(--color-accent)" }}
            strokeWidth={1.5}
          />
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "var(--color-text-primary)",
              letterSpacing: "var(--heading-tracking)",
            }}
          >
            Argon Gate
          </span>
        </a>

        <a
          href="#contato"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "var(--color-accent)",
            textDecoration: "none",
            padding: "0.5rem 1.25rem",
            border: "1px solid var(--color-accent)",
            borderRadius: "var(--radius)",
            transition: "background-color 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--color-accent)";
            e.currentTarget.style.color = "var(--color-text-primary)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "var(--color-accent)";
          }}
        >
          Fale conosco
        </a>
      </div>
    </header>
  );
}
