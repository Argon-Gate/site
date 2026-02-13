import { Search, PenTool, Rocket, RefreshCw } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface StepProps {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

function Step({ number, icon: Icon, title, description }: StepProps) {
  return (
    <div
      style={{
        padding: "2rem",
        borderRadius: "var(--radius)",
        border: "1px solid var(--color-border)",
        backgroundColor: "var(--color-bg-secondary)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <div className="flex items-center gap-3">
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "0.75rem",
            fontWeight: 600,
            color: "var(--color-accent)",
            backgroundColor: "rgba(37, 99, 235, 0.1)",
            padding: "0.25rem 0.625rem",
            borderRadius: "var(--radius)",
          }}
        >
          {number}
        </span>

        <Icon
          size={20}
          style={{ color: "var(--color-text-secondary)" }}
          strokeWidth={1.5}
        />
      </div>

      <h3
        style={{
          fontSize: "clamp(1.125rem, 1.5vw, 1.25rem)",
          fontWeight: 600,
          color: "var(--color-text-primary)",
          margin: 0,
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontSize: "0.95rem",
          color: "var(--color-text-secondary)",
          margin: 0,
          lineHeight: 1.7,
        }}
      >
        {description}
      </p>
    </div>
  );
}

const steps: StepProps[] = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico",
    description:
      "Entendemos o contexto do negócio, mapeamos necessidades técnicas e definimos prioridades com clareza.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Arquitetura",
    description:
      "Desenhamos a estrutura técnica ideal — tecnologias, integrações e padrões de projeto alinhados ao objetivo.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Implementação",
    description:
      "Desenvolvemos com ciclos curtos, entregas incrementais e comunicação contínua com o time do cliente.",
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Evolução contínua",
    description:
      "Acompanhamos, otimizamos e evoluímos a solução conforme o negócio cresce e as demandas mudam.",
  },
];

export function HowWeWork() {
  return (
    <section
      id="processo"
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
          Como trabalhamos
        </h2>

        <p
          style={{
            fontSize: "1.05rem",
            color: "var(--color-text-secondary)",
            maxWidth: "560px",
            marginBottom: "3rem",
            lineHeight: 1.7,
          }}
        >
          Um processo estruturado que elimina incertezas e entrega resultados
          consistentes.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {steps.map((step) => (
            <Step key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
