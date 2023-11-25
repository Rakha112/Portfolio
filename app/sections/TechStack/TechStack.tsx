"use client";

import React, { useRef } from "react";
import styles from "./stack.module.scss";
import { backEnd, frontEnd, tools } from "@/app/data/techStack";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import useWindowSize from "@/app/hooks/useWindowSize";

type Props = {};

const TechStack = (props: Props) => {
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
    <section className={styles.container} ref={ref}>
      <div className={styles.skill_wrap}>
        <motion.div
          className={styles.text}
          style={{ x: windowWidth! > 1024 ? xDesktop : xMobile }}
        >
          {array.map((_, index) => {
            return <h1 key={index}>Skills.</h1>;
          })}
        </motion.div>
      </div>
      <div className={styles.wrapper}>
        <h1>FrontEnd</h1>
        <div className={styles.box_wrap}>
          {frontEnd.map((item, index) => {
            return (
              <motion.div
                className={styles.box}
                key={item.name + index}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                    delay: windowWidth! < 600 ? 0 : 0.05 * index,
                  },
                }}
              >
                <div className={styles.inner}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={windowWidth! < 1024 ? 80 : 150}
                    height={windowWidth! < 1024 ? 80 : 150}
                  />
                  <div className={styles.text_container}>
                    <h1>{item.name}</h1>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <h1>BackEnd</h1>
        <div className={styles.box_wrap}>
          {backEnd.map((item, index) => {
            return (
              <motion.div
                className={styles.box}
                key={item.name + index}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                    delay: windowWidth! < 600 ? 0 : 0.05 * index,
                  },
                }}
              >
                <div className={styles.inner}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={windowWidth! < 1024 ? 80 : 150}
                    height={windowWidth! < 1024 ? 80 : 150}
                  />
                  <div className={styles.text_container}>
                    <h1>{item.name}</h1>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <h1>Tools</h1>
        <motion.div className={styles.box_wrap}>
          {tools.map((item, index) => {
            return (
              <motion.div
                className={styles.box}
                key={item.name + index}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                    delay: windowWidth! < 600 ? 0 : 0.05 * index,
                  },
                }}
              >
                <div className={styles.inner}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={windowWidth! < 1024 ? 80 : 150}
                    height={windowWidth! < 1024 ? 80 : 150}
                  />
                  <div className={styles.text_container}>
                    <h1>{item.name}</h1>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
