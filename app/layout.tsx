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
  title: "Zenit | SGQ, SGI, Compliance e PBQP-H",
  description:
      "Consultoria especializada em sistemas de gestão, qualidade, compliance, SGQ, SGI e PBQP-H.",
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