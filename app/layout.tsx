import type { Metadata } from "next";
import "./globals.scss";
import Cursor from "./components/Cursor/Cursor";
import Providers from "./redux/Provider";
import LenisScroller from "./components/LenisScroller/LenisScroller";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Rakha Wibowo.",
  description: "Welcome to Rakha Wibowo Portfolio",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Providers>
          <Cursor />
          <LenisScroller>{children}</LenisScroller>
        </Providers>
      </body>
    </html>
  );
}
