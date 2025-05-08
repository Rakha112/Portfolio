"use client";

import Card from "@/components/Card";
import { worksEng } from "@/data/works";
import useWindowSize from "@/hooks/useWindowSize";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const Work = () => {
  const { width: windowWidth } = useWindowSize();
  const ref = useRef(null);
  const ref2 = useRef(null);
  const n = 10;
  const array = Array.from({ length: n });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });
  const xMobile = useTransform(scrollYProgress, [0, 1], [0, -2000]);
  const xDesktop = useTransform(scrollYProgress, [0, 1], [0, -5000]);

  const { scrollYProgress: scrollYCard } = useScroll({
    target: ref2,
    offset: ["start start", "end end"],
  });
  return (
    <section className="h-full w-screen max-w-full" ref={ref}>
      <div className="mt-8 overflow-hidden will-change-transform">
        <motion.div
          className="flex items-center justify-center"
          style={{ x: windowWidth! > 1024 ? xDesktop : xMobile }}
        >
          {array.map((_, index) => {
            return (
              <h1
                className="text-warna-putih cursor-default text-[25vw] leading-none font-bold"
                key={index}
              >
                Works.
              </h1>
            );
          })}
        </motion.div>
      </div>
      <div className="h-full max-w-full" ref={ref2}>
        {worksEng.map((item, index) => {
          const targetScale = 1 - (worksEng.length - index) * 0.05;
          return (
            <Card
              key={`p_${index}`}
              i={index}
              item={item}
              progress={scrollYCard}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Work;
