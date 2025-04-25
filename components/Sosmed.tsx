"use client";

import { sosmed } from "@/data/sosmed";
import useWindowSize from "@/hooks/useWindowSize";
import { motion, Transition, Variants } from "framer-motion";
import Image from "next/image";

const Sosmed = () => {
  const { width: windowWidth } = useWindowSize();
  const transition: Transition = {
    duration: 0.75,
    ease: [0.76, 0, 0.24, 1],
  };

  const overlay: Variants = {
    initial: { y: "100%" },
    visible: {
      y: 0,
      transition: transition,
    },
    hidden: {
      y: "100%",
      transition: transition,
    },
  };

  const perspective: Variants = {
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

  const firstP: Variants = {
    initial: {
      opacity: 1,
      y: 0,
    },
    hidden: { opacity: 1, y: 0, transition: transition },
    visible: { opacity: 0, y: "-100%", transition: transition },
  };

  const secondP: Variants = {
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
    <div className="grid flex-1 grid-cols-2 gap-4">
      {sosmed.map((item, index) => {
        return (
          <motion.button
            initial="initial"
            animate="hidden"
            whileHover="visible"
            whileFocus="visible"
            className="relative z-[1] flex min-h-48 overflow-hidden rounded-2xl bg-warnaHitamCerah"
            key={item.nama + index}
            onClick={(e) => {
              e.preventDefault();
              window.open(item.link);
            }}
          >
            <motion.div
              className="absolute z-[-1] h-full w-full translate-y-full rounded-2xl bg-warnaPutih"
              variants={overlay}
            />
            <div className="flex h-full w-full flex-1 flex-col justify-between p-4">
              <div className="self-start">
                <motion.div
                  className="flex h-full w-full flex-col items-center justify-center [transform-style:preserve-3d]"
                  variants={perspective}
                >
                  <motion.div
                    variants={firstP}
                    className="pointer-events-none cursor-default"
                  >
                    <Image
                      src={item.icon}
                      alt={item.nama}
                      width={windowWidth! < 1024 ? 60 : 80}
                      height={windowWidth! < 1024 ? 60 : 80}
                    />
                  </motion.div>
                  <motion.div
                    variants={secondP}
                    className="pointer-events-none absolute cursor-default [transform-origin:bottom_center] [transform:rotateX(-90deg)_translateY(38px)]"
                  >
                    <Image
                      src={item.darkIcon}
                      alt={item.nama}
                      width={windowWidth! < 1024 ? 60 : 80}
                      height={windowWidth! < 1024 ? 60 : 80}
                    />
                  </motion.div>
                </motion.div>
              </div>
              <div className="self-end">
                <motion.div
                  className="flex h-full w-full flex-col items-center justify-center [transform-style:preserve-3d]"
                  variants={perspective}
                >
                  <motion.h1
                    className="pointer-events-none m-0 cursor-default text-2xl font-semibold leading-none text-warnaPutih lg:text-[2.5rem]"
                    variants={firstP}
                  >
                    {item.nama}
                  </motion.h1>
                  <motion.h1
                    className="pointer-events-none absolute m-0 cursor-default text-2xl font-semibold leading-none text-warnaHitam [transform-origin:bottom_center] [transform:rotateX(-90deg)_translateY(9px)] lg:text-[2.5rem]"
                    variants={secondP}
                  >
                    {item.nama}
                  </motion.h1>
                </motion.div>
              </div>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
};

export default Sosmed;
