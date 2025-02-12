"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { useRef } from "react";
import styles from "./me.module.scss";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

const Me = () => {
  const meRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: meRef,
    offset: ["start start", "end start"],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const x3 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className={styles.me} ref={meRef} id="about">
      <motion.h1
        initial={{ x: 300, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { delay: 2, duration: 1, ease: [0.22, 1, 0.36, 1] },
        }}
        style={{ x: x1 }}
      >
        Halo! saya{" "}
        <motion.span className={playfairDisplay.className}>Rakha</motion.span>
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
        <span className={playfairDisplay.className}>FullStack Developer</span>
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
        dan <span className={playfairDisplay.className}>Food Fotografer </span>
      </motion.h1>
    </section>
  );
};

export default Me;
