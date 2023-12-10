"use client";

import React, { useRef, useState } from "react";
import styles from "./swiper.module.scss";
import { dataFotografi } from "@/app/data/fotografi";
import Image from "next/image";
import { motion } from "framer-motion";

const SwiperFoto = () => {
  const [drag, setDrag] = useState(false);
  const dragRef = useRef(null);
  return (
    <div className={styles.container} ref={dragRef}>
      <motion.div
        className={
          drag ? `${styles.wrapper} ${styles.drag}` : `${styles.wrapper}`
        }
        drag="x"
        dragConstraints={dragRef}
        onMouseDown={() => {
          setDrag(true);
        }}
        onMouseUp={() => {
          setDrag(false);
        }}
        onTapCancel={() => {
          setDrag(false);
        }}
      >
        {dataFotografi.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.nama}</h1>
              <div className={styles.foto_container}>
                {item.foto.map((foto, index) => {
                  return (
                    <div key={index} className={styles.foto_wrapper}>
                      <Image
                        draggable={false}
                        className={styles.foto}
                        src={foto}
                        alt={item.nama}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SwiperFoto;
