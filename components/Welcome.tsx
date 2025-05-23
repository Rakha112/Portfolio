"use client";

import { motion } from "motion/react";
import { useLenis } from "lenis/react";
import { useEffect, useLayoutEffect, useState } from "react";
import useAnimationStore from "@/store/animationStore";

const Welcome = () => {
  const hasAnimated = useAnimationStore((state) => state.hasAnimated);
  const [show, setSHow] = useState(true);
  const lenis = useLenis();

  const text = "WELCOME";

  const textArray = text.split("");
  // Reveal Text Container Variant
  const containerVariant = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.04,
        staggerDirection: 1,
      },
    },
  };
  // Reveal Text  Variant
  const revealVariants = {
    initial: {
      y: 500,
    },
    animate: {
      y: [500, 0, 0, 500],
      transition: {
        duration: 2,
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setSHow(false);
    }, 2000);
  }, []);

  useLayoutEffect(() => {
    setTimeout(() => {
      lenis?.stop();
    }, 1);
    setTimeout(() => {
      lenis?.start();
    }, 5000);
  }, [lenis]);

  return (
    <>
      {show && (
        // <section className="flex h-screen w-screen max-w-[1920px] items-center justify-center overflow-hidden">
        <section className="fixed top-0 z-2 flex h-screen max-h-full w-screen max-w-full flex-col items-center justify-center overflow-hidden">
          <motion.div
            variants={containerVariant}
            initial={hasAnimated ? false : "initial"}
            animate={"animate"}
            className="flex w-screen flex-row items-center justify-center overflow-hidden"
          >
            {textArray.map((letter, index) => (
              <motion.span
                key={index}
                variants={revealVariants}
                className="font-geist text-warna-putih text-[18vw] font-extrabold"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </section>
      )}
    </>
  );
};

export default Welcome;
