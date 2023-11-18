"use client";

import React from "react";
import CloseIcon from "../../assets/svg/Close.svg";
import Image from "next/image";
import styles from "./close.module.scss";
import Magnetic from "../Magnetic/Magnetic";
import useAppDispatch from "@/app/hooks/useAppDispatch";
import { closeNavBar } from "@/app/redux/features/navbar";

const Close = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      <Magnetic>
        <button
          className={styles.wrapper}
          onClick={() => {
            dispatch(closeNavBar());
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
