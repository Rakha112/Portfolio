"use client";

import useWindowSize from "@/hooks/useWindowSize";
import useNavbarStore from "@/store/navbarStore";
import Image from "next/image";
import HamIcon from "../../assets/svg/Ham.svg";
import Magnetic from "./Magnetic";

const Ham = () => {
  const { width } = useWindowSize();
  const openNavBar = useNavbarStore((state) => state.openNavBar);

  const onClick = () => {
    openNavBar();
  };

  return (
    <Magnetic>
      <button
        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-warnaPutih lg:h-16 lg:w-16"
        onClick={onClick}
      >
        <div className="pointer-events-auto absolute left-0 top-0 h-full w-full hover:scale-150" />
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
