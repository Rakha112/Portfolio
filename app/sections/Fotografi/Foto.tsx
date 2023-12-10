import React from "react";
import styles from "./foto.module.scss";
import SwiperFoto from "@/app/components/Swiper/SwiperFoto";

const Foto = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Food Fotografi</h1>
      </div>
      <SwiperFoto />
      <h2>Swipe for more...</h2>
    </div>
  );
};

export default Foto;
