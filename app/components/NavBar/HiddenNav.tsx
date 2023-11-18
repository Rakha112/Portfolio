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
      y: 200,
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
  };
  const revealVariants2 = {
    initial: {
      y: 0,
    },
    animate: {
      y: -200,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
  };
  const about = "about";
  const aboutSplit = about.split("");
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
            <button
              onClick={() => {
                dispatch(closeNavBar());
                setTimeout(() => {
                  lenis?.scrollTo("#about", { duration: 3 });
                }, 500);
              }}
            >
              <h1>About</h1>
            </button>
            <button
              onClick={() => {
                dispatch(closeNavBar());
                setTimeout(() => {
                  lenis?.scrollTo("#work", { duration: 3 });
                }, 500);
              }}
            >
              <h1>Work</h1>
            </button>
            <button
              onClick={() => {
                dispatch(closeNavBar());
                setTimeout(() => {
                  lenis?.scrollTo("#contact", { duration: 3 });
                }, 500);
              }}
            >
              <h1>Contact</h1>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HiddenNav;
