"use client";

import useWindowSize from "@/hooks/useWindowSize";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const WorkTogether = () => {
  const { width: windowWidth } = useWindowSize();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y11 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const y22 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0.2, 1], [0, 1]);

  return (
    <div className="bg-warna-hitam relative flex h-[200vh] flex-col" ref={ref}>
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center">
        <motion.h1
          className="font-geist text-warna-putih text-[3rem] leading-none font-bold sm:text-[6rem] md:text-[8rem] lg:text-[10rem] 2xl:text-[16rem]"
          style={{ y: (windowWidth ?? 0) < 1024 ? y11 : y1 }}
        >
          LET&apos;S WORK
        </motion.h1>
        <motion.p
          className="border-warna-putih font-geist text-warna-putih absolute rounded-full border px-4 py-2 text-[0.6rem] leading-none sm:text-[1rem] md:px-6 md:py-4 md:text-[1.25rem] lg:text-[1.8rem] 2xl:text-[2.5rem]"
          style={{ opacity }}
        >
          Feel free to reach out to me. I&apos;m always open to discuss new
          projects
        </motion.p>
        <motion.h1
          className="font-geist text-warna-putih text-[3rem] leading-none font-bold sm:text-[6rem] md:text-[8rem] lg:text-[10rem] 2xl:text-[16rem]"
          style={{ y: (windowWidth ?? 0) < 1024 ? y22 : y2 }}
        >
          TOGETHER
        </motion.h1>
      </div>
    </div>
  );
};

export default WorkTogether;
