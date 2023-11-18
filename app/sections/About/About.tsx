"use client";

import React, { useRef } from "react";
import styles from "./about.module.scss";
import Image from "next/image";
import ProfilePhoto from "../../assets/images/Profile.png";
import { useScroll } from "framer-motion";
import AboutText from "../../components/AboutText/AboutText";
type Props = {};

const About = (props: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const text = "Saya Farid Fawwaz Rakha Wibowo";
  const text2 = "Lulusan Teknik Elektro, IPK 3.86";
  const text3 = "Universitas Jenderal Soedirman";
  const text4 = "Berdomisili di Purwokerto, Indonesia";
  const text5 = "Saya memiliki minat pada Teknologi";
  const text6 = "Khususnya Web dan Mobile Application";
  const text7 = "dan memiliki hobi Food Fotografi";
  // Concatenate all text strings
  const allText =
    text +
    " " +
    text2 +
    " " +
    text3 +
    " " +
    text4 +
    " " +
    text5 +
    " " +
    text6 +
    " " +
    text7;

  // Calculate the total length
  const totalLength = allText.length;
  // Calculate the proportion by dividing 1 by the total length
  const proportion = 1 / totalLength;

  return (
    <section className={styles.container} ref={ref}>
      <div className={styles.wrapper}>
        <div className={styles.text__wrapper}>
          <p>
            {text.split("").map((item, index) => {
              // eslint-disable-next-line react/jsx-key
              return (
                <AboutText
                  key={item + index}
                  item={item}
                  index={index}
                  beforeLength={0}
                  scrollYProgress={scrollYProgress}
                  proportion={proportion}
                />
              );
            })}
          </p>
          <p>
            {text2.split("").map((item, index) => {
              // eslint-disable-next-line react/jsx-key
              return (
                <AboutText
                  key={item + index}
                  item={item}
                  index={index}
                  beforeLength={text.length}
                  scrollYProgress={scrollYProgress}
                  proportion={proportion}
                />
              );
            })}
          </p>
          <p>
            {text3.split("").map((item, index) => {
              // eslint-disable-next-line react/jsx-key
              return (
                <AboutText
                  key={item + index}
                  item={item}
                  index={index}
                  beforeLength={text2.length + text.length}
                  scrollYProgress={scrollYProgress}
                  proportion={proportion}
                />
              );
            })}
          </p>
          <p>
            {text4.split("").map((item, index) => {
              // eslint-disable-next-line react/jsx-key
              return (
                <AboutText
                  key={item + index}
                  item={item}
                  index={index}
                  beforeLength={text3.length + text2.length + text.length}
                  scrollYProgress={scrollYProgress}
                  proportion={proportion}
                />
              );
            })}
          </p>
          <p>
            {text5.split("").map((item, index) => {
              // eslint-disable-next-line react/jsx-key
              return (
                <AboutText
                  key={item + index}
                  item={item}
                  index={index}
                  beforeLength={
                    text4.length + text3.length + text2.length + text.length
                  }
                  scrollYProgress={scrollYProgress}
                  proportion={proportion}
                />
              );
            })}
          </p>
          <p>
            {text6.split("").map((item, index) => {
              // eslint-disable-next-line react/jsx-key
              return (
                <AboutText
                  key={item + index}
                  item={item}
                  index={index}
                  beforeLength={
                    text5.length +
                    text4.length +
                    text3.length +
                    text2.length +
                    text.length
                  }
                  scrollYProgress={scrollYProgress}
                  proportion={proportion}
                />
              );
            })}
          </p>
          <p>
            {text7.split("").map((item, index) => {
              // eslint-disable-next-line react/jsx-key
              return (
                <AboutText
                  key={item + index}
                  item={item}
                  index={index}
                  beforeLength={
                    text6.length +
                    text5.length +
                    text4.length +
                    text3.length +
                    text2.length +
                    text.length
                  }
                  scrollYProgress={scrollYProgress}
                  proportion={proportion}
                />
              );
            })}
          </p>
        </div>
        <Image src={ProfilePhoto} alt="Profile" className={styles.photo} />
      </div>
    </section>
  );
};

export default About;
