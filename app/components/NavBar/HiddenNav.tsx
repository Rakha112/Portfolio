"use client";

import React from "react";
import styles from "./hiddenNav.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Close from "./Close";
import useAppSelector from "@/app/hooks/useAppSelector";
import useWindowSize from "@/app/hooks/useWindowSize";
import useAppDispatch from "@/app/hooks/useAppDispatch";
import { closeNavBar } from "@/app/redux/features/navbar";
import { useLenis } from "../LenisScroller/LenisScroller";

const HiddenNav = () => {
  const dispatch = useAppDispatch();
  const lenis = useLenis();
  const { width } = useWindowSize();
  const isNavBarOpen = useAppSelector(
    (state) => state.navbarReducer.isNavBarOpen
  );

  const transition = {
    duration: 0.75,
    ease: [0.76, 0, 0.24, 1],
  };

  const perspectiveText = {
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
    <AnimatePresence>
      {isNavBarOpen && (
        <motion.div
          className={styles.container}
          initial={{ x: width! < 600 ? width : 520, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: width! < 600 ? width : 520, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Close />
          <div className={styles.wrapper}>
            <motion.button
              initial="initial"
              animate="hidden"
              whileHover="visible"
              whileFocus="visible"
              onClick={() => {
                dispatch(closeNavBar());
                setTimeout(() => {
                  lenis?.scrollTo("#about", { duration: 3 });
                }, 500);
              }}
            >
              <motion.div
                className={styles.perspectiveText}
                variants={perspectiveText}
              >
                <motion.h1 variants={firstP}>About</motion.h1>
                <motion.h1 variants={secondP}>About</motion.h1>
              </motion.div>
            </motion.button>
            <motion.button
              initial="initial"
              animate="hidden"
              whileHover="visible"
              whileFocus="visible"
              onClick={() => {
                dispatch(closeNavBar());
                setTimeout(() => {
                  lenis?.scrollTo("#skills", { duration: 3 });
                }, 500);
              }}
            >
              <motion.div
                className={styles.perspectiveText}
                variants={perspectiveText}
              >
                <motion.h1 variants={firstP}>Skills</motion.h1>
                <motion.h1 variants={secondP}>Skills</motion.h1>
              </motion.div>
            </motion.button>
            <motion.button
              initial="initial"
              animate="hidden"
              whileHover="visible"
              whileFocus="visible"
              onClick={() => {
                dispatch(closeNavBar());
                setTimeout(() => {
                  lenis?.scrollTo("#works", { duration: 3 });
                }, 500);
              }}
            >
              <motion.div
                className={styles.perspectiveText}
                variants={perspectiveText}
              >
                <motion.h1 variants={firstP}>Works</motion.h1>
                <motion.h1 variants={secondP}>Works</motion.h1>
              </motion.div>
            </motion.button>
            <motion.button
              initial="initial"
              animate="hidden"
              whileHover="visible"
              whileFocus="visible"
              onClick={() => {
                dispatch(closeNavBar());
                setTimeout(() => {
                  lenis?.scrollTo("#contact", { duration: 3 });
                }, 500);
              }}
            >
              <motion.div
                className={styles.perspectiveText}
                variants={perspectiveText}
              >
                <motion.h1 variants={firstP}>Contact</motion.h1>
                <motion.h1 variants={secondP}>Contact</motion.h1>
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HiddenNav;
