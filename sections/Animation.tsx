"use client";

import Video from "@/components/Video";
import { miniVideo } from "@/data/miniVideo";
import {
  animate,
  motion,
  Transition,
  useMotionValue,
  Variants,
} from "motion/react";
import Link from "next/link";
import { useEffect } from "react";
import useMeasure from "react-use-measure";

const Animation = () => {
  const [ref, { width }] = useMeasure();

  const xTrans = useMotionValue(0);

  useEffect(() => {
    const firstPosition = -width / 2 - 8;
    const controls = animate(xTrans, [0, firstPosition], {
      ease: "linear",
      duration: 60,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    return controls.stop;
  }, [xTrans, width]);

  const transition: Transition = {
    duration: 0.75,
    ease: [0.76, 0, 0.24, 1],
  };

  const overlay: Variants = {
    initial: { height: "300%", y: "100%", borderRadius: "50%" },
    visible: {
      height: "100%",
      y: 0,
      borderRadius: 0,
      transition: transition,
    },
    hidden: {
      height: "300%",
      y: "100%",
      borderRadius: "50%",
      transition: transition,
    },
  };

  const firstP: Variants = {
    initial: {
      opacity: 1,
      y: 0,
      rotateX: 0,
    },
    hidden: { opacity: 1, y: 0, rotateX: 0, transition: transition },
    visible: {
      opacity: 0,
      y: "-100%",
      rotateX: "90deg",
      transition: transition,
    },
  };

  const secondP: Variants = {
    initial: {
      opacity: 0,
      y: "100%",
      rotateX: "-90deg",
    },
    hidden: {
      opacity: 0,
      y: "100%",
      rotateX: "-90deg",
      transition: transition,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: transition,
    },
  };

  return (
    <section className="my-16 flex max-w-screen flex-col items-center overflow-hidden">
      <div className="mb-4 flex flex-col">
        <h1 className="bg-opacity-50 from-warna-putih font-geist bg-gradient-to-b to-neutral-400 bg-clip-text text-center text-5xl leading-none font-bold text-transparent transform-3d sm:text-7xl md:text-[6.5rem] lg:text-[8rem] xl:text-[10rem]">
          React Native
        </h1>
        <h1 className="bg-opacity-50 from-warna-putih font-geist bg-gradient-to-b to-neutral-700 bg-clip-text text-center text-5xl leading-none font-bold text-transparent transform-3d sm:text-7xl md:text-[6.5rem] lg:text-[8rem] xl:text-[10rem]">
          Animation
        </h1>
      </div>
      <Link href={"animation"}>
        <motion.button
          className="bg-warna-hitam text-warna-putih border-warna-putih relative mt-4 mb-8 flex cursor-pointer items-center justify-center overflow-hidden rounded-full border px-4 py-2 lg:px-8 lg:py-4"
          initial="initial"
          animate="hidden"
          whileHover="visible"
          whileFocus="visible"
        >
          <motion.div
            className="bg-warna-putih absolute z-0 w-full"
            variants={overlay}
          />
          <div className="flex h-full w-full flex-col items-center justify-center text-xl transform-3d lg:text-3xl">
            <motion.p className="pointer-events-none" variants={firstP}>
              See More
            </motion.p>
            <motion.p
              className="text-warna-hitam pointer-events-none absolute"
              variants={secondP}
            >
              See More
            </motion.p>
          </div>
        </motion.button>
      </Link>

      <motion.div
        className="flex gap-4 self-start"
        ref={ref}
        style={{ x: xTrans }}
      >
        {[...miniVideo, ...miniVideo].map((video, index) => {
          return (
            <div
              key={index}
              className="h-full w-[159px] overflow-hidden rounded-xl md:w-[200px] md:rounded-2xl lg:w-[250px] lg:rounded-3xl xl:w-[280px]"
            >
              <Video poster={video.poster} src={video.video} />
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Animation;
