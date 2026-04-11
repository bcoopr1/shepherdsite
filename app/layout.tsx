import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shepherd — Awareness Without Infrastructure",
  description:
    "Shepherd builds autonomous monitoring systems for ranches, outdoor properties, and tactical operations. The Argus System — LoRa mesh awareness without internet or subscriptions.",
  metadataBase: new URL("https://shepherd.example"),
  openGraph: {
    title: "Shepherd — The Eye That Never Closes",
    description:
      "Self-contained LoRa mesh monitoring. No internet. No subscriptions. Fully private.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${rajdhani.variable}`}>
      <body className="min-h-screen bg-ink-900 text-bone antialiased">
        <Nav />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
