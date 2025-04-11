"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Welcome = () => {
  const text = "WELCOME";

  const textArray = text.split("");
  // Reveal Text Container Variant
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
  // Reveal Text  Variant
  const revealVariants = {
    initial: {
      y: 500,
    },
    animate: {
      y: [500, 0, 0, 500],
      transition: {
        duration: 2,
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
  };

  const [show, setSHow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSHow(false);
    }, 2000);
  }, []);

  return (
    <>
      {show && (
        <div className="flex h-screen w-screen items-center justify-center bg-warnaHitam">
          <motion.div
            variants={containerVariant}
            initial={"initial"}
            animate={"animate"}
            className="flex w-screen flex-row items-center justify-center overflow-hidden"
          >
            {textArray.map((letter, index) => (
              <motion.span
                key={index}
                variants={revealVariants}
                className="font-geist text-[18vw] font-extrabold text-warnaPutih"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Welcome;
