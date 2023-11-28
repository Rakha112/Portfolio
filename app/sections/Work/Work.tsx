"use client";

import React, { useRef } from "react";
import styles from "./work.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import useWindowSize from "@/app/hooks/useWindowSize";
import { dataFullstack } from "@/app/data/fullstack";
import Card from "@/app/components/Card/Card";

type Props = {};

const Work = (props: Props) => {
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
    <section className={styles.container} ref={ref}>
      <div className={styles.moving_text}>
        <motion.div
          className={styles.text}
          style={{ x: windowWidth! > 1024 ? xDesktop : xMobile }}
        >
          {array.map((_, index) => {
            return <h1 key={index}>Works.</h1>;
          })}
        </motion.div>
      </div>
      <div className={styles.card_container} ref={ref2}>
        {dataFullstack.map((item, index) => {
          const targetScale = 1 - (dataFullstack.length - index) * 0.05;
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
