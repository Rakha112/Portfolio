import SwiperFoto from "@/components/Swiper/SwiperFoto";
import styles from "./foto.module.scss";

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
