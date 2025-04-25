"use client";

import useNavbarStore from "@/store/navbarStore";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { useEffect } from "react";

const BackDropNav = () => {
  const lenis = useLenis();
  const isNavBarOpen = useNavbarStore((state) => state.isNavBarOpen);
  const closeNavBar = useNavbarStore((state) => state.closeNavBar);

  useEffect(() => {
    if (isNavBarOpen) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [isNavBarOpen, lenis]);

  return (
    <AnimatePresence>
      {isNavBarOpen && (
        <motion.div
          onClick={() => {
            closeNavBar();
          }}
          initial={{
            backgroundColor: "#30303000",
          }}
          animate={{
            backgroundColor: "#303030b3",
          }}
          exit={{
            backgroundColor: "#30303000",
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="bg-warnaHitam/0 fixed bottom-0 left-0 right-0 top-0 z-[11] will-change-transform"
        />
      )}
    </AnimatePresence>
  );
};

export default BackDropNav;
