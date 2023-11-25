"use client";

import { motion } from "framer-motion";
import React from "react";
import styles from "./halo.module.scss";

type Props = {};

const HaloText = (props: Props) => {
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
  const revealVariants = {
    initial: {
      y: 400,
    },
    animate: {
      y: [400, 0, 0, 0, 400],
      transition: {
        duration: 2,
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
  };
  const text = "halo!";
  const textArray = text.split("");
  return (
    <section className={styles.container}>
      <motion.h1
        className={styles.text}
        variants={containerVariant}
        initial="initial"
        animate="animate"
      >
        {textArray.map((v, i) => {
          return (
            <motion.span key={i} variants={revealVariants}>
              {v}
            </motion.span>
          );
        })}
      </motion.h1>
    </section>
  );
};

export default HaloText;
