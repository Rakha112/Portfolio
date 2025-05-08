import Modal from "@/components/AnimationPage/Modal";
import Cursor from "@/components/Cursor";
import BackDropNav from "@/components/NavBar/BackDropNav";
import HiddenNav from "@/components/NavBar/HiddenNav";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/sections/Footer";
import ReactLenis from "lenis/react";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-geist antialiased`}>
        <Cursor />
        <NavBar />
        <HiddenNav />
        <BackDropNav />
        <ReactLenis root>{children}</ReactLenis>
        <Footer />
        <Modal />
      </body>
    </html>
  );
}
