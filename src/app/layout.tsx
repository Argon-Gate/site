import { GoogleAnalytics } from '@next/third-parties/google';
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

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://argongate.com.br';

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: 'Argon Gate — Outsourcing de Desenvolvimento de Software',
    description:
        'Outsourcing de desenvolvimento de software sob medida. APIs, integrações, automação e sistemas escaláveis. Terceirização de engenharia de software com excelência técnica.',
    keywords: [
        'outsourcing de desenvolvimento de software',
        'empresa de desenvolvimento de software terceirizada',
        'terceirização de desenvolvimento',
        'outsourcing de engenharia de software',
        'desenvolvimento de software sob medida',
        'desenvolvimento de sistemas web e APIs',
        'integração entre sistemas',
        'automação de processos',
        'outsourcing de TI',
        'fábrica de software',
    ],
    authors: [{ name: 'Argon Gate' }],
    creator: 'Argon Gate',
    openGraph: {
        title: 'Argon Gate — Outsourcing de Desenvolvimento de Software',
        description:
            'Outsourcing de desenvolvimento de software sob medida. APIs, integrações, automação e sistemas escaláveis.',
        type: 'website',
        locale: 'pt_BR',
        url: '/',
        siteName: 'Argon Gate',
        images: [
            {
                url: '/logo.png',
                alt: 'Argon Gate',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Argon Gate — Outsourcing de Desenvolvimento de Software',
        description:
            'Outsourcing de desenvolvimento de software sob medida. APIs, integrações, automação e sistemas escaláveis.',
        images: ['/logo.webp'],
    },
    alternates: {
        canonical: '/',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Argon Gate',
    description:
        'Outsourcing de desenvolvimento de software sob medida. APIs, integrações, automação e sistemas escaláveis.',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.webp`,
    areaServed: {
        '@type': 'Country',
        name: 'Brazil',
    },
    serviceType: [
        'Outsourcing de desenvolvimento de software',
        'Desenvolvimento de sistemas web e APIs',
        'Integração entre sistemas',
        'Automação de processos internos',
        'Testes automatizados',
        'Refatoração e melhoria de performance',
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <head>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            </head>

            <body className={`${sora.variable} ${inter.variable}`}>
                <a href="#main-content" className="skip-to-content">
                    Pular para o conteúdo principal
                </a>
                {children}
                {gaId && <GoogleAnalytics gaId={gaId} />}
            </body>
        </html>
    );
}
