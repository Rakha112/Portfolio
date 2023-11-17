"use client";
import Lenis from "@studio-freight/lenis";
import { useRef, useLayoutEffect, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import useAppDispatch from "@/app/hooks/useAppDispatch";
import { setLenis } from "@/app/redux/features/lenis";
import useAppSelector from "@/app/hooks/useAppSelector";

export const LenisScroller = () => {
  const isNavBarOpen = useAppSelector(
    (state) => state.navbarReducer.isNavBarOpen
  );
  const dispatch = useAppDispatch();
  const lenis = useRef<Lenis | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (isNavBarOpen) {
      lenis.current?.stop();
    } else {
      lenis.current?.start();
    }
  }, [isNavBarOpen]);

  useEffect(() => {
    lenis.current?.stop();
    setTimeout(() => {
      lenis.current?.start();
    }, 5000);
  }, []);

  useLayoutEffect(() => {
    if (lenis.current) lenis.current!.scrollTo(0, { immediate: true });
  }, [pathname, searchParams, lenis]);

  useLayoutEffect(() => {
    lenis.current = new Lenis();
    lenis.current.scrollTo(0, { immediate: true });
    dispatch(setLenis(lenis.current));

    function raf(time: number) {
      lenis.current!.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.current!.destroy();
      lenis.current = null;
      dispatch(setLenis(null));
    };
  }, [dispatch]);
  return null;
};
