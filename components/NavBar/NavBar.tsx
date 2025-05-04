"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";
import { useLenis } from "lenis/react";
import { useCallback, useEffect, useRef, useState } from "react";
import Ham from "./Ham";
import Magnetic from "./Magnetic";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const blurValue = useTransform(scrollYProgress, [0, 0.01], [0, 12]);
  const blur = useMotionTemplate`blur(${blurValue}px)`;
  const lenis = useLenis();
  const [direction, setDirection] = useState(0);

  const prevDirectionRef = useRef<null | number>(null);
  const handleScroll = useCallback(({ direction }: { direction: number }) => {
    if (prevDirectionRef.current !== direction) {
      setDirection(direction);
      prevDirectionRef.current = direction;
    }
  }, []);

  useEffect(() => {
    if (lenis) {
      lenis.on("scroll", handleScroll);
    }

    // Cleanup function to remove the event listener
    return () => {
      if (lenis) {
        lenis.off("scroll", handleScroll);
      }
    };
  }, [lenis, handleScroll]);

  return (
    <motion.nav
      className="fixed top-0 right-[0.8rem] left-[0.8rem] z-51 mt-4 flex items-center justify-between rounded-full p-4 will-change-transform"
      style={{ backdropFilter: blur, WebkitBackdropFilter: blur }}
      initial={{ y: pathname === "/animation" ? 0 : -300 }}
      animate={{ y: direction === 0 || direction === -1 ? 0 : -200 }}
      transition={{
        delay: direction === 0 ? 3.5 : 0,
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Magnetic>
        <div className="font-geist text-warna-putih text-[clamp(1.5rem,1.5vw+1rem,3.125rem)]">
          <div className="pointer-events-auto absolute right-0 left-0 h-full w-full hover:scale-150" />
          <h1 className="font-geist font-bold">Rakha Wibowo.</h1>
        </div>
      </Magnetic>
      <Ham />
    </motion.nav>
  );
};

export default NavBar;
