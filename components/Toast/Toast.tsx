"use client";

import { motion } from "framer-motion";
import React, { useEffect } from "react";
import styles from "./toast.module.scss";

type Props = {
  toastText: string;
  showToast: boolean;
  setShowToast: React.Dispatch<React.SetStateAction<boolean>>;
};

const Toast = ({ toastText, showToast, setShowToast }: Props) => {
  useEffect(() => {
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  }, [setShowToast, showToast]);

  return (
    <motion.div
      className={styles.toast_container}
      initial={{ y: -100 }}
      animate={{
        y: showToast ? 0 : -100,
        transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
      }}
    >
      <div className={styles.toast_wrapper}>
        <p>{toastText}</p>
      </div>
    </motion.div>
  );
};

export default Toast;
