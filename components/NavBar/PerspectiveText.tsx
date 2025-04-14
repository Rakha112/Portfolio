import { motion, Variants } from "framer-motion";

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
      className="flex h-full w-full flex-col items-center justify-center font-geist font-bold leading-tight [transform-style:preserve-3d]"
      variants={perspectiveText}
    >
      <motion.h1
        variants={firstVariant}
        className="pointer-events-none my-4 cursor-pointer text-[clamp(3.5rem,10vw,80px)] uppercase text-warnaHitam"
      >
        {text}
      </motion.h1>
      <motion.h1
        variants={secondVariant}
        className="pointer-events-none absolute my-4 cursor-pointer text-[clamp(3.5rem,10vw,80px)] uppercase text-warnaHitam [transform-origin:bottom_center] [transform:rotateX(-90deg)_translateY(50px)]"
      >
        {text}
      </motion.h1>
    </motion.div>
  );
}
