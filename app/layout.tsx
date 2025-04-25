import ReactLenis from "lenis/react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rakha Wibowo.",
  description:
    "Welcome to my portfolio. I'm Farid Fawwaz Rakha Wibowo, a freelance React and React Native developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-geist antialiased`}>
        <ReactLenis root>{children}</ReactLenis>
      </body>
    </html>
  );
}
