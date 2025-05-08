"use client";

import { motion } from "motion/react";

const TextAnimation2 = () => {
  return (
    <div className="py-8 md:py-12 lg:py-16">
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.4 }}
        className="bg-opacity-50 from-warna-putih font-geist bg-linear-to-b to-neutral-400 bg-clip-text text-center text-[1rem] leading-none font-medium text-transparent md:text-4xl lg:text-5xl"
      >
        This is a collection of component animations
      </motion.p>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.6 }}
        className="bg-opacity-50 from-warna-putih font-geist bg-linear-to-b to-neutral-400 bg-clip-text text-center text-[1rem] leading-none font-medium text-transparent md:text-4xl lg:text-5xl"
      >
        I have created in React Native
      </motion.p>
    </div>
  );
};

export default TextAnimation2;
