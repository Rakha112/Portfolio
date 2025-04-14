"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { useRef } from "react";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

const Hero = () => {
  const meRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: meRef,
    offset: ["start start", "end start"],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const x3 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      className="flex h-screen w-screen cursor-default flex-col items-center justify-center gap-6 bg-warnaHitam text-[8.5vw] leading-none text-warnaPutih md:gap-8 lg:gap-12 xl:gap-16"
      ref={meRef}
      id="about"
    >
      <motion.h1
        initial={{ x: 300, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { delay: 2, duration: 1, ease: [0.22, 1, 0.36, 1] },
        }}
        style={{ x: x1 }}
      >
        Hi! I&apos;m{" "}
        <span
          className={`${playfairDisplay.className} border-rad rounded-full border border-warnaPutih px-4 !italic lg:px-12`}
        >
          Rakha
        </span>
      </motion.h1>
      <motion.h1
        initial={{ x: -300, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { delay: 2.5, duration: 1, ease: [0.22, 1, 0.36, 1] },
        }}
        style={{ x: x2 }}
      >
        <span
          className={`${playfairDisplay.className} border-rad rounded-full border border-warnaPutih px-4 !italic lg:px-12`}
        >
          Freelance React
        </span>{" "}
        and
      </motion.h1>
      <motion.h1
        initial={{ x: 300, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { delay: 3, duration: 1, ease: [0.22, 1, 0.36, 1] },
        }}
        style={{ x: x3 }}
      >
        {" "}
        <span
          className={`${playfairDisplay.className} border-rad rounded-full border border-warnaPutih px-4 !italic lg:px-12`}
        >
          React Native Developer
        </span>
      </motion.h1>
    </section>
  );
};

export default Hero;
