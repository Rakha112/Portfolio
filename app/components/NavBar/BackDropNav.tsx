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
            backgroundColor: "#30303000",
          }}
          animate={{
            backgroundColor: "#303030b3",
          }}
          exit={{
            backgroundColor: "#30303000",
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
