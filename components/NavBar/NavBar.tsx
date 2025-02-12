"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import Magnetic from "../Magnetic/Magnetic";
import Ham from "./Ham";
import styles from "./navBar.module.scss";
import { useLenis } from "lenis/react";

const NavBar = () => {
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
      className={styles.container}
      style={{ backdropFilter: blur, WebkitBackdropFilter: blur }}
      initial={{ y: -300 }}
      animate={{ y: direction === 0 || direction === -1 ? 0 : -200 }}
      transition={{
        delay: direction === 0 ? 3.5 : 0,
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
