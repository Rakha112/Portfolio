"use client";

import { motion } from "motion/react";

const TextAnimation = () => {
  return (
    <div>
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
        className="bg-opacity-50 from-warna-putih font-geist bg-gradient-to-b to-neutral-400 bg-clip-text text-center text-5xl leading-none font-bold text-transparent transform-3d sm:text-7xl md:text-8xl lg:text-9xl"
      >
        React Native
      </motion.h1>

      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
        className="bg-opacity-50 from-warna-putih font-geist bg-gradient-to-b to-neutral-700 bg-clip-text text-center text-5xl leading-none font-bold text-transparent transform-3d sm:text-7xl md:text-8xl lg:text-9xl"
      >
        Animation
      </motion.h1>
    </div>
  );
};

export default TextAnimation;
