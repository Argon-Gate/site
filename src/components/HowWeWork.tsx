"use client";

import { Fragment } from "react";
import {
  Search,
  Target,
  ClipboardList,
  Monitor,
  Calendar,
  Code2,
  BookOpen,
  Activity,
  Package,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { CSSProperties } from "react";
import { ScrollReveal } from "./ScrollReveal";

interface StepData {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: boolean;
}

const steps: StepData[] = [
  {
    number: "01",
    icon: Search,
    title: "Entendimento do Negócio",
    description:
      "Mergulhamos no seu contexto para compreender processos, desafios e objetivos estratégicos.",
  },
  {
    number: "02",
    icon: Target,
    title: "Alinhamento de Necessidade e Intenção",
    description:
      "Entendemos exatamente o que você precisa, por que precisa e qual resultado espera alcançar.",
    highlight: true,
  },
  {
    number: "03",
    icon: ClipboardList,
    title: "Definição de Requisitos",
    description:
      "Traduzimos sua necessidade em requisitos técnicos claros, objetivos e validados.",
  },
  {
    number: "04",
    icon: Monitor,
    title: "Apresentação do Projeto",
    description:
      "Apresentamos a solução proposta, arquitetura, integrações e abordagem técnica para sua aprovação.",
  },
  {
    number: "05",
    icon: Calendar,
    title: "Planejamento e Cronograma",
    description:
      "Definimos etapas, prazos e marcos de entrega com total transparência.",
  },
  {
    number: "06",
    icon: Code2,
    title: "Implementação",
    description:
      "Desenvolvimento com comunicação contínua, foco em qualidade e entregas consistentes.",
    highlight: true,
  },
  {
    number: "07",
    icon: BookOpen,
    title: "Documentação Completa",
    description:
      "Entregamos toda a documentação técnica necessária para sustentação e futuras evoluções.",
  },
  {
    number: "08",
    icon: Activity,
    title: "Acompanhamento em Produção",
    description:
      "Suporte no go-live, monitoramento inicial e garantia de estabilidade no lançamento.",
  },
  {
    number: "09",
    icon: Package,
    title: "Entrega do Projeto",
    description:
      "Todo o código-fonte, artefatos e documentação passam a ser 100% do cliente, garantindo total autonomia e liberdade para evoluções futuras.",
    highlight: true,
  },
];

const CONNECTOR_COLOR = "rgba(37, 99, 235, 0.45)";
const CHEVRON_COLOR = "var(--color-accent)";

function StepCard({
  step,
  style,
}: {
  step: StepData;
  style?: CSSProperties;
}) {
  const Icon = step.icon;
  const cardClass = step.highlight
    ? "flow-card flow-card-highlight"
    : "flow-card";
  return (
    <div className={cardClass} style={style}>
      <div className="flex items-center gap-3 mb-3">
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "var(--color-accent)",
            backgroundColor: "var(--color-accent-subtle)",
            padding: "0.2rem 0.6rem",
            borderRadius: "6px",
          }}
        >
          {step.number}
        </span>
        <Icon
          size={18}
          style={{ color: "var(--color-text-secondary)" }}
          strokeWidth={1.5}
        />
      </div>
      <h3
        style={{
          fontSize: "1.05rem",
          fontWeight: 600,
          color: "var(--color-text-primary)",
          margin: "0 0 0.5rem 0",
        }}
      >
        {step.title}
      </h3>
      <p
        style={{
          fontSize: "var(--text-small)",
          color: "var(--color-text-secondary)",
          margin: 0,
          lineHeight: 1.6,
        }}
      >
        {step.description}
      </p>
    </div>
  );
}

function HConnector({
  direction = "right",
  style,
}: {
  direction?: "right" | "left";
  style?: CSSProperties;
}) {
  const isRight = direction === "right";
  return (
    <div
      className="flex items-center"
      style={style}
      aria-hidden="true"
    >
      {!isRight && (
        <ChevronLeft
          size={18}
          style={{ color: CHEVRON_COLOR, flexShrink: 0, marginLeft: -5 }}
          strokeWidth={2.5}
        />
      )}
      <div style={{ flex: 1, borderTop: `2px dashed ${CONNECTOR_COLOR}` }} />
      {isRight && (
        <ChevronRight
          size={18}
          style={{ color: CHEVRON_COLOR, flexShrink: 0, marginRight: -5 }}
          strokeWidth={2.5}
        />
      )}
    </div>
  );
}

function VConnector({ style }: { style?: CSSProperties }) {
  return (
    <div
      className="flex flex-col items-center"
      style={style}
      aria-hidden="true"
    >
      <div style={{ flex: 1, borderLeft: `2px dashed ${CONNECTOR_COLOR}` }} />
      <ChevronDown
        size={18}
        style={{ color: CHEVRON_COLOR, flexShrink: 0, marginBottom: -5 }}
        strokeWidth={2.5}
      />
    </div>
  );
}

function MobileConnector() {
  return (
    <div
      className="flex justify-center"
      style={{ height: "2rem" }}
      aria-hidden="true"
    >
      <div style={{ borderLeft: `2px dashed ${CONNECTOR_COLOR}` }} />
    </div>
  );
}

export function HowWeWork() {
  return (
    <section id="processo" className="section-container">
      <ScrollReveal>
        <h2
          style={{
            fontSize: "var(--text-h2)",
            fontWeight: 600,
            letterSpacing: "var(--tracking-h2)",
            color: "var(--color-text-primary)",
            marginBottom: "1rem",
          }}
        >
          Como Trabalhamos
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            color: "var(--color-text-secondary)",
            maxWidth: "640px",
            marginBottom: "3.5rem",
            lineHeight: 1.7,
          }}
        >
          Um processo claro, colaborativo e orientado a resultado — do
          entendimento inicial ao lançamento em produção.
        </p>
      </ScrollReveal>

      {/* Desktop: fluxo serpentina em grid 3 colunas */}
      <ScrollReveal>
        <div className="flow-grid">
          {/* Linha 1: 01 → 02 → 03 */}
          <StepCard step={steps[0]} style={{ gridColumn: 1, gridRow: 1 }} />
          <HConnector
            direction="right"
            style={{ gridColumn: 2, gridRow: 1 }}
          />
          <StepCard step={steps[1]} style={{ gridColumn: 3, gridRow: 1 }} />
          <HConnector
            direction="right"
            style={{ gridColumn: 4, gridRow: 1 }}
          />
          <StepCard step={steps[2]} style={{ gridColumn: 5, gridRow: 1 }} />

          {/* Curva: descendo pela direita */}
          <VConnector style={{ gridColumn: 5, gridRow: 2 }} />

          {/* Linha 2: 04 → 05 → 06 (direita para esquerda) */}
          <StepCard step={steps[3]} style={{ gridColumn: 5, gridRow: 3 }} />
          <HConnector
            direction="left"
            style={{ gridColumn: 4, gridRow: 3 }}
          />
          <StepCard step={steps[4]} style={{ gridColumn: 3, gridRow: 3 }} />
          <HConnector
            direction="left"
            style={{ gridColumn: 2, gridRow: 3 }}
          />
          <StepCard step={steps[5]} style={{ gridColumn: 1, gridRow: 3 }} />

          {/* Curva: descendo pela esquerda */}
          <VConnector style={{ gridColumn: 1, gridRow: 4 }} />

          {/* Linha 3: 07 → 08 → 09 */}
          <StepCard step={steps[6]} style={{ gridColumn: 1, gridRow: 5 }} />
          <HConnector
            direction="right"
            style={{ gridColumn: 2, gridRow: 5 }}
          />
          <StepCard step={steps[7]} style={{ gridColumn: 3, gridRow: 5 }} />
          <HConnector
            direction="right"
            style={{ gridColumn: 4, gridRow: 5 }}
          />
          <StepCard step={steps[8]} style={{ gridColumn: 5, gridRow: 5 }} />
        </div>
      </ScrollReveal>

      {/* Mobile: fluxo vertical */}
      <div className="flow-mobile">
        {steps.map((step, i) => (
          <Fragment key={step.number}>
            <ScrollReveal delay={i * 80}>
              <StepCard step={step} />
            </ScrollReveal>
            {i < steps.length - 1 && <MobileConnector />}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
