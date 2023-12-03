"use client";

import React from "react";
import styles from "./sosmed.module.scss";
import Image from "next/image";
import useWindowSize from "@/app/hooks/useWindowSize";
import { sosmed } from "@/app/data/sosmed";
import { motion } from "framer-motion";

const Sosmed = () => {
  const { width: windowWidth } = useWindowSize();
  const transition = {
    duration: 0.75,
    ease: [0.76, 0, 0.24, 1],
  };

  const overlay = {
    initial: { y: "100%" },
    visible: {
      y: 0,
      transition: transition,
    },
    hidden: {
      y: "100%",
      transition: transition,
    },
  };

  const perspective = {
    initial: { rotateX: 0 },
    hidden: {
      rotateX: 0,
      transition: transition,
    },
    visible: {
      rotateX: "90deg",
      transition: transition,
    },
  };

  const firstP = {
    initial: {
      opacity: 1,
      y: 0,
    },
    hidden: { opacity: 1, y: 0, transition: transition },
    visible: { opacity: 0, y: "-100%", transition: transition },
  };

  const secondP = {
    initial: {
      opacity: 0,
    },
    hidden: { opacity: 0, transition: transition },
    visible: {
      opacity: 1,
      transition: transition,
    },
  };

  return (
    <div className={styles.container}>
      {sosmed.map((item, index) => {
        return (
          <motion.button
            initial="initial"
            animate="hidden"
            whileHover="visible"
            whileFocus="visible"
            className={styles.box}
            key={item.nama + index}
            onClick={(e) => {
              e.preventDefault();
              window.open(item.link);
            }}
          >
            <motion.div className={styles.overlay} variants={overlay} />
            <div className={styles.inner}>
              <div className={styles.image_container}>
                <motion.div
                  className={styles.perspective}
                  variants={perspective}
                >
                  <motion.div variants={firstP} className={styles.image}>
                    <Image
                      src={item.icon}
                      alt={item.nama}
                      width={windowWidth! < 1024 ? 60 : 80}
                      height={windowWidth! < 1024 ? 60 : 80}
                    />
                  </motion.div>
                  <motion.div variants={secondP} className={styles.image}>
                    <Image
                      src={item.darkIcon}
                      alt={item.nama}
                      width={windowWidth! < 1024 ? 60 : 80}
                      height={windowWidth! < 1024 ? 60 : 80}
                    />
                  </motion.div>
                </motion.div>
              </div>
              <div className={styles.text_container}>
                <motion.div
                  className={styles.perspective}
                  variants={perspective}
                >
                  <motion.h1 variants={firstP}>{item.nama}</motion.h1>
                  <motion.h1 variants={secondP}>{item.nama}</motion.h1>
                </motion.div>
              </div>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
};

export default Sosmed;
