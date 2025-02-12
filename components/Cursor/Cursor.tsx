"use client";

import useWindowSize from "@/hooks/useWindowSize";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import styles from "./cursor.module.scss";

const Cursor = () => {
  const { width } = useWindowSize();
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  //Smooth out the mouse values
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: { clientX: number; clientY: number }) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX);
    mouse.y.set(clientY);
  };
  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {width! >= 1024 && (
        <motion.div
          style={{
            left: smoothMouse.x,
            top: smoothMouse.y,
          }}
          className={styles.container}
        />
      )}
    </>
  );
};

export default Cursor;
