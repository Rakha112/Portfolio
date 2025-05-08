"use client";

import useModalStore from "@/store/modal";
import { useLenis } from "lenis/react";
import { AnimatePresence, motion, Transition, Variants } from "motion/react";
import Link from "next/link";

const Modal = ({}) => {
  const lenis = useLenis();
  const isOpen = useModalStore((state) => state.isOpen);
  const slug = useModalStore((state) => state.slug);
  const src = useModalStore((state) => state.src);
  const poster = useModalStore((state) => state.poster);
  const youtube = useModalStore((state) => state.youtube);
  const title = useModalStore((state) => state.title);

  const setTitle = useModalStore((state) => state.setTitle);
  const setIsOpen = useModalStore((state) => state.setIsOpen);
  const setYoutube = useModalStore((state) => state.setYoutube);
  const setSlug = useModalStore((state) => state.setSlug);

  const handleClose = () => {
    setIsOpen(false);
    setTitle("");
    setYoutube(undefined);
    setSlug("");
    lenis?.start();
  };

  const transition: Transition = {
    duration: 0.75,
    ease: [0.76, 0, 0.24, 1],
  };

  const overlay: Variants = {
    initial: { height: "300%", y: "100%", borderRadius: "50%" },
    visible: {
      height: "100%",
      y: 0,
      borderRadius: 0,
      transition: transition,
    },
    hidden: {
      height: "300%",
      y: "100%",
      borderRadius: "50%",
      transition: transition,
    },
  };

  const firstP: Variants = {
    initial: {
      opacity: 1,
      y: 0,
      rotateX: 0,
    },
    hidden: { opacity: 1, y: 0, rotateX: 0, transition: transition },
    visible: {
      opacity: 0,
      y: "-100%",
      rotateX: "90deg",
      transition: transition,
    },
  };

  const secondP: Variants = {
    initial: {
      opacity: 0,
      y: "100%",
      rotateX: "-90deg",
    },
    hidden: {
      opacity: 0,
      y: "100%",
      rotateX: "-90deg",
      transition: transition,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: transition,
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="text-warna-putih fixed top-0 left-0 z-[91] flex h-full w-full items-center justify-center">
          <motion.div
            className="bg-warna-hitam border-warna-putih relative z-[93] flex w-[90%] max-w-md flex-col items-center justify-center rounded-lg border p-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
          >
            <div className="mb-4 h-auto w-[120px] overflow-hidden rounded-[20px] md:w-[240px]">
              <video
                poster={poster}
                loop
                autoPlay
                playsInline
                muted
                className="h-full w-full"
              >
                <source src={src} type="video/mp4" />
              </video>
            </div>
            <h1>{title}</h1>
            <div className="mt-4 flex items-center justify-center gap-4">
              <Link href={`animation/${slug}`} onClick={handleClose}>
                <motion.button
                  className="bg-warna-hitam text-warna-putih border-warna-putih relative flex cursor-pointer items-center justify-center overflow-hidden rounded-full border px-4 py-2"
                  initial="initial"
                  animate="hidden"
                  whileHover="visible"
                  whileFocus="visible"
                >
                  <motion.div
                    className="bg-warna-putih absolute z-0 w-full"
                    variants={overlay}
                  />
                  <div className="text-4 flex h-full w-full flex-col items-center justify-center transform-3d">
                    <motion.p className="pointer-events-none" variants={firstP}>
                      Source Code
                    </motion.p>
                    <motion.p
                      className="text-warna-hitam pointer-events-none absolute"
                      variants={secondP}
                    >
                      Source Code
                    </motion.p>
                  </div>
                </motion.button>
              </Link>
              {youtube && (
                <Link
                  href={youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClose}
                >
                  <motion.button
                    className="bg-warna-hitam text-warna-putih border-warna-putih relative flex cursor-pointer items-center justify-center overflow-hidden rounded-full border px-4 py-2"
                    initial="initial"
                    animate="hidden"
                    whileHover="visible"
                    whileFocus="visible"
                  >
                    <motion.div
                      className="bg-warna-putih absolute z-0 w-full"
                      variants={overlay}
                    />
                    <div className="text-4 flex h-full w-full flex-col items-center justify-center transform-3d">
                      <motion.p
                        className="pointer-events-none"
                        variants={firstP}
                      >
                        Video Tutorial
                      </motion.p>
                      <motion.p
                        className="text-warna-hitam pointer-events-none absolute"
                        variants={secondP}
                      >
                        Video Tutorial
                      </motion.p>
                    </div>
                  </motion.button>
                </Link>
              )}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            exit={{ opacity: 0 }}
            className="bg-warna-hitam fixed top-0 left-0 z-[92] flex h-full w-full"
            onClick={handleClose}
          />
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
