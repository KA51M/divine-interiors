import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "STUDIO | Spaces Designed with Purpose & Elegance",
    template: "%s - STUDIO INTERIORS",
  },
  description:
    "Minimal and emotional. We craft environments that speak to the soul through architectural precision and curated serenity.",
  keywords: ["interior design", "architecture", "minimalism", "calm luxury", "renovation"],
  authors: [{ name: "STUDIO INTERIORS" }],
  creator: "STUDIO INTERIORS",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://studiointeriors.com",
    title: "STUDIO | Spaces Designed with Purpose & Elegance",
    description:
      "Minimal and emotional. We craft environments that speak to the soul through architectural precision and curated serenity.",
    siteName: "STUDIO INTERIORS",
  },
  twitter: {
    card: "summary_large_image",
    title: "STUDIO | Spaces Designed with Purpose & Elegance",
    description:
      "Minimal and emotional. We craft environments that speak to the soul through architectural precision and curated serenity.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container">
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
