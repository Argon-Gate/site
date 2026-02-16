'use client';

import { Code2, Plug, Wrench, GitBranch, TestTube, Gauge, Cog, FileCode } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ServiceItem {
    icon: LucideIcon;
    title: string;
}

const services: ServiceItem[] = [
    { icon: Code2, title: 'Desenvolvimento de sistemas web e APIs' },
    { icon: Plug, title: 'Integração entre sistemas' },
    { icon: Wrench, title: 'Criação e manutenção de serviços' },
    { icon: GitBranch, title: 'Desenvolvimento de pipelines' },
    { icon: TestTube, title: 'Testes automatizados' },
    { icon: Gauge, title: 'Refatoração e melhoria de performance' },
    { icon: Cog, title: 'Automação de processos internos' },
    { icon: FileCode, title: 'Implementação de regras de negócio' },
];

export function WhatWeDo() {
    return (
        <section id="servicos" className="section-container">
            <ScrollReveal>
                <h2
                    style={{
                        fontSize: 'var(--text-h2)',
                        fontWeight: 600,
                        letterSpacing: 'var(--tracking-h2)',
                        color: 'var(--color-text-primary)',
                        marginBottom: '3rem',
                    }}
                >
                    O que fazemos
                </h2>
            </ScrollReveal>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '1.25rem',
                }}
            >
                {services.map((service, index) => (
                    <ScrollReveal key={service.title} delay={index * 80} className="h-full">
                        <div
                            className="card-base mouse-glow flex items-center gap-3 h-full"
                            style={{ padding: '1.25rem 1.5rem' }}
                        >
                            <service.icon size={20} className="text-accent shrink-0" strokeWidth={1.5} />
                            <h3
                                style={{
                                    fontSize: '0.95rem',
                                    fontWeight: 500,
                                    color: 'var(--color-text-primary)',
                                    margin: 0,
                                }}
                            >
                                {service.title}
                            </h3>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
