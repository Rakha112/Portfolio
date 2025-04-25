import { MotionValue, motion, useTransform } from "framer-motion";

type Props = {
  item: string;
  index: number;
  beforeLength: number;
  scrollYProgress: MotionValue<number>;
  proportion: number;
};

const AboutText = ({
  item,
  index,
  beforeLength,
  scrollYProgress,
  proportion,
}: Props) => {
  const opacity = useTransform(
    scrollYProgress,
    [
      (index + beforeLength) * proportion,
      (index + 1 + beforeLength) * proportion,
    ],
    [0.2, 1],
  );

  return <motion.span style={{ opacity }}>{item}</motion.span>;
};

export default AboutText;
