import {
  DollarSign,
  Zap,
  ShieldCheck,
  TrendingUp,
  Target,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface DifferentialItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const differentials: DifferentialItem[] = [
  {
    icon: DollarSign,
    title: "Redução de custos",
    description:
      "Sem encargos trabalhistas, recrutamento ou estrutura interna.",
  },
  {
    icon: Zap,
    title: "Entrega mais rápida",
    description: "Time especializado pronto para executar.",
  },
  {
    icon: ShieldCheck,
    title: "Integrações seguras e robustas",
    description:
      "Especialistas em APIs, ERPs, CRMs e sistemas legados.",
  },
  {
    icon: TrendingUp,
    title: "Escalabilidade sob demanda",
    description:
      "Aumente ou reduza o time conforme a necessidade.",
  },
  {
    icon: Target,
    title: "Foco no seu core business",
    description:
      "Sua equipe concentrada no que realmente gera valor.",
  },
];

export function Differentials() {
  return (
    <section
      id="diferenciais"
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
            marginBottom: "1rem",
          }}
        >
          Por que a Argon Gate?
        </h2>

        <p
          style={{
            fontSize: "1.05rem",
            color: "var(--color-text-secondary)",
            maxWidth: "520px",
            marginBottom: "3rem",
            lineHeight: 1.7,
          }}
        >
          Outsourcing que resolve de verdade — sem burocracia, com resultado.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {differentials.map((item) => (
            <div
              key={item.title}
              style={{
                backgroundColor: "var(--color-bg-secondary)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius)",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "var(--radius)",
                  backgroundColor: "rgba(37, 99, 235, 0.1)",
                }}
              >
                <item.icon
                  size={22}
                  style={{ color: "var(--color-accent)" }}
                  strokeWidth={1.5}
                />
              </div>

              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                  margin: 0,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--color-text-secondary)",
                  margin: 0,
                  lineHeight: 1.7,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
