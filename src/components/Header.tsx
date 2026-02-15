'use client';

import { Shield } from 'lucide-react';

export function Header() {
    return (
        <header
            className="fixed top-0 left-0 right-0 z-50"
            style={{
                backgroundColor: 'rgba(8, 9, 10, 0.85)',
                backdropFilter: 'blur(12px)',
                borderBottom: '1px solid var(--color-border)',
            }}
        >
            <div
                className="flex items-center justify-between"
                style={{
                    maxWidth: 'var(--max-width)',
                    margin: '0 auto',
                    padding: '1rem 1.5rem',
                }}
            >
                <a href="#" className="flex items-center gap-2" style={{ textDecoration: 'none' }}>
                    <Shield size={24} className="text-accent" strokeWidth={1.5} />
                    <span
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1.25rem',
                            fontWeight: 600,
                            color: 'var(--color-text-primary)',
                            letterSpacing: 'var(--heading-tracking)',
                        }}
                    >
                        Argon Gate
                    </span>
                </a>

                <a href="#contato" className="btn-ghost">
                    Fale conosco
                </a>
            </div>
        </header>
    );
}
