"use client";

import { motion } from "framer-motion";
import React, { useEffect } from "react";

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
      className="absolute bottom-0 left-0 right-0 top-0 z-[3] flex flex-col items-center"
      initial={{ y: -100 }}
      animate={{
        y: showToast ? 0 : -100,
        transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
      }}
    >
      <div className="mt-4 max-w-[50rem] rounded-full bg-warnaPutih p-4">
        <p className="leading-none text-warnaHitam">{toastText}</p>
      </div>
    </motion.div>
  );
};

export default Toast;
