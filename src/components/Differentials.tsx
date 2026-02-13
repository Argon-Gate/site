interface DifferentialItem {
  title: string;
  description: string;
}

const differentials: DifferentialItem[] = [
  {
    title: "Redução de custos",
    description:
      "Sem encargos trabalhistas, recrutamento ou estrutura interna.",
  },
  {
    title: "Entrega mais rápida",
    description: "Time especializado pronto para executar.",
  },
  {
    title: "Integrações seguras e robustas",
    description:
      "Especialistas em APIs, ERPs, CRMs e sistemas legados.",
  },
  {
    title: "Escalabilidade sob demanda",
    description:
      "Aumente ou reduza o time conforme a necessidade.",
  },
  {
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
          O que garantimos
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
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {differentials.map((item) => (
            <div
              key={item.title}
              style={{
                borderLeft: "3px solid var(--color-accent)",
                padding: "1.25rem 1.5rem",
                transition: "background-color 0.2s ease",
              }}
              className="differential-row"
            >
              <span
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                }}
              >
                {item.title}
              </span>
              <span
                style={{
                  fontSize: "1rem",
                  color: "var(--color-text-secondary)",
                  marginLeft: "0.5rem",
                }}
              >
                — {item.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
