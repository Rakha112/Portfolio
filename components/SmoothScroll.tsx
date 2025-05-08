"use client";

import useAnimationStore from "@/store/animationStore";
import ReactLenis, { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function SmoothScroll({ children }: { children: React.ReactNode }) {
  const hasAnimated = useAnimationStore((state) => state.hasAnimated);
  const setHasAnimated = useAnimationStore((state) => state.setHasAnimated);
  const pathname = usePathname();

  const lenis = useLenis();

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  useEffect(() => {
    if (pathname !== "/" && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [pathname, hasAnimated, setHasAnimated]);

  return <ReactLenis root>{children}</ReactLenis>;
}

export default SmoothScroll;
