"use client";
import useAppSelector from "@/app/hooks/useAppSelector";
import Lenis from "@studio-freight/lenis";
import { usePathname, useSearchParams } from "next/navigation";
import router from "next/router";
import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

export const lenisCTX = createContext<Lenis | null>(null);

export const useLenis = () => useContext(lenisCTX);

export default function LenisScroller({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isNavBarOpen = useAppSelector(
    (state) => state.navbarReducer.isNavBarOpen
  );

  useEffect(() => {
    if (isNavBarOpen) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [isNavBarOpen, lenis]);

  useEffect(() => {
    lenis?.stop();
    setTimeout(() => {
      lenis?.start();
    }, 5000);
  }, [lenis]);

  useLayoutEffect(() => {
    if (lenis) lenis!.scrollTo(0, { immediate: true });
  }, [pathname, searchParams, lenis]);

  useLayoutEffect(() => {
    const lenis = new Lenis();

    setLenis(lenis);

    const resize = setInterval(() => {
      lenis.resize();
    }, 150);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    router.events.on("routeChangeStart", () => {
      lenis.scrollTo(0, { immediate: true });
    });

    return () => {
      clearInterval(resize);
      setLenis(null);
      lenis.destroy();
    };
  }, []);

  return <lenisCTX.Provider value={lenis}>{children}</lenisCTX.Provider>;
}
