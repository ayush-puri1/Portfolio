import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

import GrainOverlay from "@/components/GrainOverlay";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayush Puri — Full-Stack Developer",
  description:
    "Ayush Puri — Full-Stack Developer from Ludhiana, India. B.Tech CSE @ LPU. Building scalable web & mobile applications with Next.js, NestJS, and PostgreSQL.",
  keywords: [
    "Ayush Puri",
    "Full-Stack Developer",
    "Next.js",
    "NestJS",
    "Portfolio",
    "LPU",
    "Web Developer",
  ],
  authors: [{ name: "Ayush Puri" }],
  openGraph: {
    type: "website",
    title: "Ayush Puri — Full-Stack Developer",
    description:
      "Full-Stack Developer building scalable web & mobile applications.",
    locale: "en_US",
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
      className={`${bricolage.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-bricolage bg-flax text-charcoal relative">
        <GrainOverlay />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
