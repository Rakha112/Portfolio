"use client";

import { dataFotografi } from "@/data/fotografi";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./swiper.module.scss";

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
                {item.foto.map((foto, indexx) => {
                  return (
                    <div key={indexx} className={styles.foto_wrapper}>
                      <Image
                        draggable={false}
                        className={styles.foto}
                        src={foto}
                        alt={item.nama}
                        placeholder="blur"
                        priority
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
