"use client";

import AnimatedTextBlock from "@/components/AnimatedAboutText";
import { useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import ProfilePhoto from "../assets/images/Profile.png";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const texts = [
    "I'm Farid Fawwaz Rakha Wibowo",
    "A freelance React & React Native developer",
    "With 2+ years of experience",
    "Expert in smooth, eye catching animations",
    "Based in Purwokerto, Indonesia",
    "With a passion for tech, web & mobile apps",
    "And a hobby in food photography",
  ];

  // Concatenate all text strings
  const allText = texts.join(" ");

  // Calculate the total length
  const totalLength = allText.length;
  // Calculate the proportion by dividing 1 by the total length
  const proportion = 1 / totalLength;

  return (
    <section className="relative h-[300vh] w-screen" ref={ref}>
      <div className="sticky top-0 flex h-screen max-h-full w-screen flex-col-reverse items-center justify-center gap-8 overflow-hidden lg:flex-row-reverse">
        <div className="flex flex-col gap-[0.8rem] lg:gap-4">
          <AnimatedTextBlock
            texts={texts}
            scrollYProgress={scrollYProgress}
            proportion={proportion}
          />
        </div>
        <Image
          src={ProfilePhoto}
          alt="Profile"
          className="h-auto w-[60vw] max-w-[400px]"
        />
      </div>
    </section>
  );
};

export default About;
