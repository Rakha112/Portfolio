"use client";

import useWindowSize from "@/hooks/useWindowSize";
import useNavbarStore from "@/store/navbarStore";
import { useLenis } from "lenis/react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import Close from "./Close";
import { PerspectiveText } from "./PerspectiveText";

const HiddenNav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isNavBarOpen = useNavbarStore((state) => state.isNavBarOpen);
  const closeNavBar = useNavbarStore((state) => state.closeNavBar);
  const lenis = useLenis();
  const { width } = useWindowSize();

  const transition = {
    duration: 0.75,
    ease: [0.76, 0, 0.24, 1],
  };

  const perspectiveText = {
    initial: { rotateX: 0 },
    hidden: {
      rotateX: 0,
      transition: transition,
    },
    visible: {
      rotateX: "90deg",
      transition: transition,
    },
  };

  const firstP = {
    initial: {
      opacity: 1,
      y: 0,
    },
    hidden: { opacity: 1, y: 0, transition: transition },
    visible: { opacity: 0, y: "-100%", transition: transition },
  };

  const secondP = {
    initial: {
      opacity: 0,
    },
    hidden: { opacity: 0, transition: transition },
    visible: {
      opacity: 1,
      transition: transition,
    },
  };

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
          className="bg-warna-putih fixed top-[0.8rem] right-[0.8rem] bottom-[0.8rem] left-[0.8rem] z-53 rounded-[2rem] will-change-transform md:left-[unset] md:w-screen md:max-w-[500px]"
          initial={{ x: width! < 600 ? width : 520, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: width! < 600 ? width : 520, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Close />
          <div className="m-8">
            <motion.button
              initial="initial"
              animate="hidden"
              whileHover="visible"
              whileFocus="visible"
              className="cursor-pointer"
              onClick={() => {
                closeNavBar();
                if (pathname !== "/") {
                  router.push("/");
                }
                setTimeout(() => {
                  lenis?.scrollTo("#about", { duration: 3 });
                }, 500);
              }}
            >
              <PerspectiveText
                text="About"
                perspectiveText={perspectiveText}
                firstVariant={firstP}
                secondVariant={secondP}
              />
            </motion.button>
            <motion.button
              initial="initial"
              animate="hidden"
              whileHover="visible"
              whileFocus="visible"
              className="cursor-pointer"
              onClick={() => {
                closeNavBar();
                if (pathname !== "/") {
                  router.push("/");
                }
                setTimeout(() => {
                  lenis?.scrollTo("#skills", { duration: 3 });
                }, 500);
              }}
            >
              <PerspectiveText
                text="Skills"
                perspectiveText={perspectiveText}
                firstVariant={firstP}
                secondVariant={secondP}
              />
            </motion.button>
            <motion.button
              initial="initial"
              animate="hidden"
              whileHover="visible"
              whileFocus="visible"
              className="cursor-pointer"
              onClick={() => {
                closeNavBar();
                if (pathname !== "/") {
                  router.push("/");
                }
                setTimeout(() => {
                  lenis?.scrollTo("#works", { duration: 3 });
                }, 500);
              }}
            >
              <PerspectiveText
                text="Works"
                perspectiveText={perspectiveText}
                firstVariant={firstP}
                secondVariant={secondP}
              />
            </motion.button>
            <motion.button
              initial="initial"
              animate="hidden"
              whileHover="visible"
              whileFocus="visible"
              className="cursor-pointer"
              onClick={() => {
                closeNavBar();
                if (pathname !== "/") {
                  router.push("/");
                }
                setTimeout(() => {
                  lenis?.scrollTo("#contact", { duration: 3 });
                }, 500);
              }}
            >
              <PerspectiveText
                text="Contact"
                perspectiveText={perspectiveText}
                firstVariant={firstP}
                secondVariant={secondP}
              />
            </motion.button>
            <Link href={"/animation"}>
              <motion.button
                initial="initial"
                animate="hidden"
                whileHover="visible"
                whileFocus="visible"
                className="cursor-pointer"
                onClick={closeNavBar}
              >
                <PerspectiveText
                  text="Animation"
                  perspectiveText={perspectiveText}
                  firstVariant={firstP}
                  secondVariant={secondP}
                />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HiddenNav;
