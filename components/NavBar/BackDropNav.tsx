"use client";

import useNavbarStore from "@/store/navbarStore";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./backDrop.module.scss";

const BackDropNav = () => {
  const isNavBarOpen = useNavbarStore((state) => state.isNavBarOpen);
  const closeNavBar = useNavbarStore((state) => state.closeNavBar);

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
          className={styles.container}
        />
      )}
    </AnimatePresence>
  );
};

export default BackDropNav;
