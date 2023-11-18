"use client";

import React from "react";
import styles from "./navBar.module.scss";
import Magnetic from "../Magnetic/Magnetic";
import Ham from "./Ham";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

const NavBar = () => {
  const { scrollYProgress } = useScroll();
  const blurValue = useTransform(scrollYProgress, [0, 0.01], [0, 12]);
  const blur = useMotionTemplate`blur(${blurValue}px)`;

  return (
    <motion.nav
      className={styles.container}
      style={{ backdropFilter: blur, WebkitBackdropFilter: blur }}
      initial={{ y: -300 }}
      animate={{ y: 0 }}
      transition={{
        delay: 3.5,
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Magnetic>
        <div className={styles.name}>
          <div className={styles.bounds} />
          <h1>Rakha Wibowo.</h1>
        </div>
      </Magnetic>
      <Ham />
    </motion.nav>
  );
};

export default NavBar;
