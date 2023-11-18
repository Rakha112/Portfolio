"use client";

import React from "react";
import Magnetic from "../Magnetic/Magnetic";
import styles from "./ham.module.scss";
import Image from "next/image";
import HamIcon from "../../assets/svg/Ham.svg";
import useAppDispatch from "@/app/hooks/useAppDispatch";
import { openNavBar } from "@/app/redux/features/navbar";
import useWindowSize from "@/app/hooks/useWindowSize";

const Ham = () => {
  const { width } = useWindowSize();
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(openNavBar());
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
