import type { Metadata } from "next";
import "./globals.scss";
import "lenis/dist/lenis.css";

import Cursor from "@/components/Cursor/Cursor";
import { GeistSans } from "geist/font/sans";
import ReactLenis from "lenis/react";

export const metadata: Metadata = {
  title: "Rakha Wibowo.",
  description:
    "Selamat datang di Portofolio saya, Saya Farid Fawwaz Rakha Wibowo, seorang Fullstack Developer dan Food Fotografer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Cursor />
        <ReactLenis root>{children}</ReactLenis>
      </body>
    </html>
  );
}
