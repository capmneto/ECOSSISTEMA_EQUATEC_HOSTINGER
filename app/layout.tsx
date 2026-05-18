import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EQUATEC Control Hub",
  description: "Ecossistema modular de gestão, obras, ativos, cursos e agentes de IA.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
