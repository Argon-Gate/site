import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';

const sora = Sora({
    variable: '--font-sora',
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '600', '700'],
});

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
    title: 'Argon Gate — Outsourcing de Desenvolvimento de Software',
    description:
        'Outsourcing de desenvolvimento para criar e evoluir sistemas. APIs, integrações, automação de processos e aplicações web completas com entrega ágil e sem burocracia.',
    keywords: [
        'outsourcing de desenvolvimento',
        'desenvolvimento de software',
        'API',
        'integração de sistemas',
        'automação de processos',
        'sistemas web',
        'desenvolvimento web',
        'Argon Gate',
    ],
    openGraph: {
        title: 'Argon Gate — Outsourcing de Desenvolvimento de Software',
        description:
            'Outsourcing de desenvolvimento para criar e evoluir sistemas. APIs, integrações e aplicações web completas.',
        type: 'website',
        locale: 'pt_BR',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body className={`${sora.variable} ${inter.variable}`}>{children}</body>
        </html>
    );
}
