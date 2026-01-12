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
  title: "OdontoSmart - Clínica Odontológica Moderno",
  description: "Cuide do seu sorriso com quem entende. Clínica odontológica completa com tratamentos dentários, implantes, ortodontia e estética dental. Agende sua consulta!",
  keywords: ["clínica odontológica", "dentista", "implantes dentários", "ortodontia", "clareamento dental", "tratamento de canal", "saúde Bucal"],
  authors: [{ name: "OdontoSmart" }],
  openGraph: {
    title: "OdontoSmart - Clínica Odontológica Moderno",
    description: "Cuide do seu sorriso com quem entende. Tratamentos dentários completos.",
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
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

