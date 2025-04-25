import React from "react";
import AboutText from "./AboutText";
import { MotionValue } from "framer-motion";

type AnimatedTextBlockProps = {
  texts: string[];
  scrollYProgress: MotionValue<number>;
  proportion: number;
};

const AnimatedTextBlock: React.FC<AnimatedTextBlockProps> = ({
  texts,
  scrollYProgress,
  proportion,
}) => {
  let cumulativeLength = 0;

  return (
    <>
      {texts.map((text, lineIndex) => {
        const line = (
          <p
            key={lineIndex}
            className="cursor-default font-geist text-[4.5vw] font-medium leading-none text-white lg:text-[3vw] 2xl:text-[58px]"
          >
            {text.split("").map((item, index) => (
              <AboutText
                key={`${item}-${index}`}
                item={item}
                index={index}
                beforeLength={cumulativeLength}
                scrollYProgress={scrollYProgress}
                proportion={proportion}
              />
            ))}
          </p>
        );
        cumulativeLength += text.length;
        return line;
      })}
    </>
  );
};

export default AnimatedTextBlock;
