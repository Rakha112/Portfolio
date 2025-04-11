"use client";

import useNavbarStore from "@/store/navbarStore";
import Image from "next/image";
import CloseIcon from "../../assets/svg/Close.svg";
import styles from "./close.module.scss";
import Magnetic from "./Magnetic";

const Close = () => {
  const closeNavBar = useNavbarStore((state) => state.closeNavBar);

  return (
    <div className={styles.container}>
      <Magnetic>
        <button
          className={styles.wrapper}
          onClick={() => {
            closeNavBar();
          }}
        >
          <div className={styles.bounds} />
          <Image src={CloseIcon} alt="Close" width={30} height={30} />
        </button>
      </Magnetic>
    </div>
  );
};

export default Close;
