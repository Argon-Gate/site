import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Argon Gate — Arquitetura sólida para negócios digitais",
  description:
    "Desenvolvemos software sob medida com foco em estrutura, escalabilidade e previsibilidade. Outsourcing de engenharia de software com excelência técnica.",
  keywords: [
    "outsourcing",
    "software",
    "desenvolvimento",
    "arquitetura",
    "engenharia",
    "escalabilidade",
    "Argon Gate",
  ],
  openGraph: {
    title: "Argon Gate — Arquitetura sólida para negócios digitais",
    description:
      "Desenvolvemos software sob medida com foco em estrutura, escalabilidade e previsibilidade.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${sora.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
