"use client";

import useNavbarStore from "@/store/navbarStore";
import Image from "next/image";
import CloseIcon from "../../assets/svg/Close.svg";
import Magnetic from "./Magnetic";

const Close = () => {
  const closeNavBar = useNavbarStore((state) => state.closeNavBar);

  return (
    <div className="flex w-full justify-end p-4">
      <Magnetic>
        <button
          className="bg-warna-hitam flex h-12 w-12 items-center justify-center rounded-full"
          onClick={() => {
            closeNavBar();
          }}
        >
          <div className="pointer-events-auto absolute top-0 left-0 h-full w-full hover:scale-50" />
          <Image src={CloseIcon} alt="Close" width={30} height={30} />
        </button>
      </Magnetic>
    </div>
  );
};

export default Close;
