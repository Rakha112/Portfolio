"use client";

import SkillGrid from "@/components/SkillGrid";
import { backEnd, frontEnd, tools } from "@/data/skills";
import useWindowSize from "@/hooks/useWindowSize";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const Skills = () => {
  const { width: windowWidth } = useWindowSize();
  const ref = useRef(null);
  const n = 10;
  const array = Array.from({ length: n });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });
  const xMobile = useTransform(scrollYProgress, [0, 1], [0, -2000]);
  const xDesktop = useTransform(scrollYProgress, [0, 1], [0, -5000]);
  return (
    <section className="h-auto w-screen max-w-full" ref={ref} id="skills">
      <div className="overflow-hidden">
        <motion.div
          className="flex items-center justify-center"
          style={{ x: windowWidth! > 1024 ? xDesktop : xMobile }}
        >
          {array.map((_, index) => {
            return (
              <h1
                className="font-geist text-warna-putih cursor-default text-[25vw] leading-none font-bold"
                key={index}
              >
                Skills.
              </h1>
            );
          })}
        </motion.div>
      </div>
      <div className="mx-auto h-auto max-w-[1920px]">
        <SkillGrid
          title="FrontEnd"
          items={frontEnd}
          windowWidth={windowWidth!}
        />
        <SkillGrid title="BackEnd" items={backEnd} windowWidth={windowWidth!} />
        <SkillGrid title="Tools" items={tools} windowWidth={windowWidth!} />
      </div>
    </section>
  );
};

export default Skills;
