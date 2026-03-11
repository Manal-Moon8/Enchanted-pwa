import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enchanted Tools Platform",
  description: "Technical prototype for Digital Campus competition",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}