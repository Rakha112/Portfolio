"use client";

import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  link: string;
};

const Timer = ({ link }: Props) => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (timeLeft <= 0) {
      window.open(link, "_blank");
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [link, router, timeLeft]);

  if (timeLeft <= 0) {
    return (
      <p className="bg-opacity-50 from-warna-putih font-geist border-rad border-warna-putih rounded-full border bg-linear-to-b to-neutral-400 bg-clip-text p-2 text-center text-[0.8rem] leading-none font-bold text-transparent sm:text-[1.2rem] md:p-4 md:text-[1.5rem] lg:text-3xl xl:text-4xl">
        If you are not redirected, please{" "}
        <a className="cursor-pointer border-b" href={link} target="_blank">
          click here
        </a>
      </p>
    );
  }

  return (
    <motion.p
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.8 }}
      className="bg-opacity-50 from-warna-putih font-geist border-rad border-warna-putih rounded-full border bg-linear-to-b to-neutral-400 bg-clip-text p-2 text-center text-[0.8rem] leading-none font-bold text-transparent sm:text-[1.2rem] md:p-4 md:text-[1.5rem] lg:text-3xl xl:text-4xl"
    >
      You will be redirected to the source code in {timeLeft} seconds
    </motion.p>
  );
};

export default Timer;
