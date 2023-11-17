"use client";

import React, { useCallback, useState } from "react";
import styles from "./not-found.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

type Props = {};

const NotFound = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname(); // to use pathname as motion key

  const [show, setShow] = useState(true); // to handle mounting/unmounting

  const onDismiss = useCallback(() => {
    setShow(false);
    setTimeout(() => {
      router.back();
    }, 500); // 200ms, same as transition duration (0.2)
  }, [router]);

  return (
    <section className={styles.page__wrap}>
      <div className={styles.error__container}>
        <AnimatePresence>
          {show && (
            <motion.div
              key={pathname}
              className={styles.error__content}
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{ y: 50, opacity: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h1>404</h1>
              <p>This page could not be found.</p>
              <a onClick={onDismiss}>Back home</a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default NotFound;
