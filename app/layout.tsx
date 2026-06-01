import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
      "ZÊNIT Consult | Consultoria Digital em Gestão Auditável, PBQP-H e ISO 9001",
  description:
      "Consultoria digital em gestão auditável, ISO 9001, PBQP-H e Programa de Integridade para empresas em Fortaleza, Ceará e atendimento remoto.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
          lang="pt-BR"
          className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
      >
      <body className="min-h-full">{children}</body>
      </html>
  );
}
