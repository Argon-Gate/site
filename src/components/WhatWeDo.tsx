import {
  Code2,
  Plug,
  Wrench,
  GitBranch,
  TestTube,
  Gauge,
  Cog,
  FileCode,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceItem {
  icon: LucideIcon;
  title: string;
}

const services: ServiceItem[] = [
  { icon: Code2, title: "Desenvolvimento de sistemas web e APIs" },
  { icon: Plug, title: "Integração entre sistemas" },
  { icon: Wrench, title: "Criação e manutenção de serviços" },
  { icon: GitBranch, title: "Desenvolvimento de pipelines" },
  { icon: TestTube, title: "Testes automatizados" },
  { icon: Gauge, title: "Refatoração e melhoria de performance" },
  { icon: Cog, title: "Automação de processos internos" },
  { icon: FileCode, title: "Implementação de regras de negócio" },
];

export function WhatWeDo() {
  return (
    <section
      id="servicos"
      style={{
        padding: "var(--section-padding-y) 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(2rem, 3.5vw, 2.5rem)",
            fontWeight: 600,
            color: "var(--color-text-primary)",
            marginBottom: "3rem",
          }}
        >
          O que fazemos
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="flex items-center gap-3"
              style={{
                backgroundColor: "var(--color-bg-secondary)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius)",
                padding: "1.25rem 1.5rem",
              }}
            >
              <service.icon
                size={20}
                style={{ color: "var(--color-accent)", flexShrink: 0 }}
                strokeWidth={1.5}
              />
              <span
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: "var(--color-text-primary)",
                }}
              >
                {service.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
