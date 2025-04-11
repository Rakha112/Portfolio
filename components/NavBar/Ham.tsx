"use client";

import useWindowSize from "@/hooks/useWindowSize";
import useNavbarStore from "@/store/navbarStore";
import Image from "next/image";
import HamIcon from "../../assets/svg/Ham.svg";
import styles from "./ham.module.scss";
import Magnetic from "./Magnetic";

const Ham = () => {
  const { width } = useWindowSize();
  const openNavBar = useNavbarStore((state) => state.openNavBar);

  const onClick = () => {
    openNavBar();
  };

  return (
    <Magnetic>
      <button className={styles.ham} onClick={onClick}>
        <div className={styles.bounds} />
        <Image
          priority
          src={HamIcon}
          alt="Ham"
          width={width! >= 1024 ? 30 : 25}
          height={width! >= 1024 ? 30 : 25}
        />
      </button>
    </Magnetic>
  );
};

export default Ham;
