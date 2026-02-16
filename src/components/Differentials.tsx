'use client';

import { ScrollReveal } from './ScrollReveal';

interface DifferentialItem {
    title: string;
    description: string;
}

const differentials: DifferentialItem[] = [
    {
        title: 'Redução de custos',
        description: 'Sem encargos trabalhistas, recrutamento ou estrutura interna.',
    },
    {
        title: 'Entrega mais rápida',
        description: 'Time especializado pronto para executar.',
    },
    {
        title: 'Integrações seguras e robustas',
        description: 'Especialistas em APIs, ERPs, CRMs e sistemas legados.',
    },
    {
        title: 'Escalabilidade sob demanda',
        description: 'Aumente ou reduza o time conforme a necessidade.',
    },
    {
        title: 'Foco no seu core business',
        description: 'Sua equipe concentrada no que realmente gera valor.',
    },
];

export function Differentials() {
    return (
        <section id="diferenciais" className="section-container">
            <ScrollReveal>
                <h2
                    style={{
                        fontSize: 'var(--text-h2)',
                        fontWeight: 600,
                        letterSpacing: 'var(--tracking-h2)',
                        color: 'var(--color-text-primary)',
                        marginBottom: '1rem',
                    }}
                >
                    O que garantimos
                </h2>

                <p
                    style={{
                        fontSize: '1.05rem',
                        color: 'var(--color-text-secondary)',
                        maxWidth: '520px',
                        marginBottom: '3rem',
                        lineHeight: 1.7,
                    }}
                >
                    Outsourcing que resolve de verdade — sem burocracia, com resultado.
                </p>
            </ScrollReveal>

            <div className="flex flex-col" style={{ gap: '0.75rem' }}>
                {differentials.map((item, index) => (
                    <ScrollReveal key={item.title} delay={index * 80}>
                        <div className="differential-row">
                            <h3
                                style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    color: 'var(--color-text-primary)',
                                    margin: 0,
                                }}
                            >
                                {item.title}
                            </h3>
                            <span
                                style={{
                                    fontSize: '1rem',
                                    color: 'var(--color-text-secondary)',
                                    marginLeft: '0.5rem',
                                }}
                            >
                                — {item.description}
                            </span>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
