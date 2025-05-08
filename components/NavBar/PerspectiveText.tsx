import { motion, Variants } from "motion/react";

interface PerspectiveTextProps {
  text: string;
  firstVariant: Variants;
  secondVariant: Variants;
  perspectiveText: Variants;
}

export function PerspectiveText({
  text,
  firstVariant,
  secondVariant,
  perspectiveText,
}: PerspectiveTextProps) {
  return (
    <motion.div
      className="font-geist flex h-full w-full flex-col items-center justify-center leading-tight font-bold [transform-style:preserve-3d]"
      variants={perspectiveText}
    >
      <motion.h1
        variants={firstVariant}
        className="text-warna-hitam pointer-events-none my-4 cursor-pointer text-[clamp(3.5rem,10vw,80px)] uppercase"
      >
        {text}
      </motion.h1>
      <motion.h1
        variants={secondVariant}
        className="text-warna-hitam pointer-events-none absolute my-4 [transform-origin:bottom_center] [transform:rotateX(-90deg)_translateY(50px)] cursor-pointer text-[clamp(3.5rem,10vw,80px)] uppercase"
      >
        {text}
      </motion.h1>
    </motion.div>
  );
}
