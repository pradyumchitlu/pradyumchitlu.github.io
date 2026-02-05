import type { Metadata } from "next";
import { Orbitron, Exo_2 } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const exo2 = Exo_2({
  variable: "--font-exo-2",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pradyum Chitlu | Portfolio",
  description:
    "Software engineer building low-latency data and ML systems: cloud infrastructure, real-time pipelines, and decision intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${exo2.variable} antialiased bg-space-dark text-white`}
      >
        {children}
      </body>
    </html>
  );
}
