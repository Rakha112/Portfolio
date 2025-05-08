"use client";

import { motion } from "motion/react";

const TextAnimation3 = () => {
  return (
    <div className="flex flex-col gap-2 py-8 md:py-12 lg:py-16">
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
        className="bg-opacity-50 from-warna-putih font-geist bg-linear-to-b to-neutral-400 bg-clip-text text-center text-[0.8rem] leading-none font-bold text-transparent sm:text-[1.5rem] md:text-[1.6rem] lg:text-4xl xl:text-[2.7rem]"
      >
        Hey! I&apos;m a freelance{" "}
        <span
          className={`border-rad border-warna-putih sm rounded-full border px-2 sm:px-3 md:px-4 lg:px-6`}
        >
          React
        </span>{" "}
        and{" "}
        <span
          className={`border-rad border-warna-putih sm rounded-full border px-2 sm:px-3 md:px-4 lg:px-6`}
        >
          React Native
        </span>{" "}
        developer
      </motion.p>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.4 }}
        className="bg-opacity-50 from-warna-putih font-geist bg-linear-to-b to-neutral-400 bg-clip-text text-center text-[0.8rem] leading-none font-bold text-transparent sm:text-[1.5rem] md:text-[1.6rem] lg:text-4xl xl:text-[2.7rem]"
      >
        I&apos;m always open to discussing new projects
      </motion.p>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.6 }}
        className="bg-opacity-50 from-warna-putih font-geist bg-linear-to-b to-neutral-400 bg-clip-text text-center text-[0.8rem] leading-none font-bold text-transparent sm:text-[1.5rem] md:text-[1.6rem] lg:text-4xl xl:text-[2.7rem]"
      >
        feel free to contact me anytime!
      </motion.p>
    </div>
  );
};

export default TextAnimation3;
