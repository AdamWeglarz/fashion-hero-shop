import type { Metadata } from "next";
import { Geist, Cormorant_Garamond, Montserrat } from "next/font/google";
import { Shell } from "@/components/shell";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "FashionHero — Comfortable, Sustainable Shoes",
  description:
    "Sustainable, supportive, and wildly comfortable shoes made from natural materials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${cormorantGaramond.variable} ${montserrat.variable} h-full antialiased bg-background`}>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
