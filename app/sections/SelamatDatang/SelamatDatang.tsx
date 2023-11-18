"use client";

import React, { useEffect, useState } from "react";
import styles from "./selamatDatang.module.scss";
import { motion } from "framer-motion";

type Props = {};

const SelamatDatang = (props: Props) => {
  const [show, setSHow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSHow(false);
    }, 2000);
  }, []);

  const text = "SELAMAT";
  const text2 = "DATANG";
  const textArray = text.split("");
  const textArray2 = text2.split("");
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
      y: 400,
    },
    animate: {
      y: [400, 0, 0, 400],
      transition: {
        duration: 2,
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
  };
  return (
    <>
      {/* Show only for 2 sec */}
      {show && (
        <section className={styles.container}>
          <div className={styles.text__container}>
            <motion.h1
              variants={containerVariant}
              initial={"initial"}
              animate={"animate"}
            >
              {textArray.map((v, i) => {
                return (
                  <motion.span key={i} variants={revealVariants}>
                    {v}
                  </motion.span>
                );
              })}
            </motion.h1>
            <motion.h1
              variants={containerVariant}
              initial={"initial"}
              animate={"animate"}
            >
              {textArray2.map((v, i) => {
                return (
                  <motion.span key={i} variants={revealVariants}>
                    {v}
                  </motion.span>
                );
              })}
            </motion.h1>
          </div>
        </section>
      )}
    </>
  );
};

export default SelamatDatang;
