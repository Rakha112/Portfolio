"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styles from "./backDrop.module.scss";
import useAppSelector from "@/app/hooks/useAppSelector";
import useAppDispatch from "@/app/hooks/useAppDispatch";
import { closeNavBar } from "@/app/redux/features/navbar";

const BackDropNav = () => {
  const dispatch = useAppDispatch();
  const isNavBarOpen = useAppSelector(
    (state) => state.navbarReducer.isNavBarOpen
  );

  return (
    <AnimatePresence>
      {isNavBarOpen && (
        <motion.div
          onClick={() => {
            dispatch(closeNavBar());
          }}
          initial={{
            backgroundColor: "rgba(0,0,0,0)",
            backdropFilter: "blur(0px)",
            WebkitBackdropFilter: "blur(0px)",
          }}
          animate={{
            backgroundColor: "rgba(0,0,0,0.2)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
          exit={{
            backgroundColor: "rgba(0,0,0,0)",
            backdropFilter: "blur(0px)",
            WebkitBackdropFilter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={styles.container}
        />
      )}
    </AnimatePresence>
  );
};

export default BackDropNav;
