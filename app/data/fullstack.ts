import CuacaIcon from "../assets/images/CuacaIcon.png";
import Cuaca from "../assets/images/Cuaca.png";
import CatetinIcon from "../assets/images/CatetinIcon.png";
import Catetin from "../assets/images/Catetin.png";
import Youtube from "../assets/images/Youtube.png";
import LifeFitConnect from "../assets/images/LifeFitConnect.png";
import Koce from "../assets/images/Koce.png";
import { StaticImageData } from "next/image";

export interface DataFullstack {
  nama: string;
  tag: string[];
  deskripsi: string[];
  icon?: StaticImageData;
  button?: { nama: string; link: string }[];
  video?: string;
  foto: StaticImageData;
}

export const dataFullstack: DataFullstack[] = [
  {
    nama: "Youtube Channel",
    tag: ["FrontEnd", "React Native", "Animation"],
    button: [
      {
        nama: "Youtube",
        link: "https://www.youtube.com/channel/UCUb0G_PXtgWV_TmuJXLFxRw",
      },
      {
        nama: "Github",
        link: "https://github.com/Rakha112/react-native-animation",
      },
    ],
    deskripsi: [
      "Youtube Channel saya",
      "berisi tutorial membuat Komponen",
      "dan Animasinya pada React Native",
    ],
    foto: Youtube,
  },
  {
    nama: "Cuaca",
    tag: ["FrontEnd", "ReactJS", "React Native"],
    deskripsi: [
      "Cuaca App merupakan",
      "aplikasi yang berfungsi mencari informasi",
      "Cuaca di Kota yang ada di Indonesia",
    ],
    icon: CuacaIcon,
    button: [
      { nama: "Web", link: "https://cuaca.rakhawibowo.tech/" },
      {
        nama: "Android",
        link: "https://drive.google.com/file/d/1Bb9RDqRAfzBdxB7siR5FZeYSmGGPfFqn/view?usp=share_link",
      },
    ],
    video: "https://youtu.be/RcwD1bV0c0Q",
    foto: Cuaca,
  },
  {
    nama: "Catetin",
    tag: ["FullStack", "ReactJS", "React Native", "ExpressJS", "MySQL"],
    deskripsi: [
      "Catetin App merupakan",
      "aplikasi yang berfungsi untuk Mencatat",
      "apapun yang anda inginkan",
    ],
    icon: CatetinIcon,
    button: [
      { nama: "Web", link: "https://catetin.rakhawibowo.tech/" },
      {
        nama: "Android",
        link: "https://drive.google.com/file/d/1SS4XVmfiDIwaGnVzAnKkokvkmGOVWVEk/view?usp=share_link",
      },
    ],
    video: "https://youtu.be/OBcxXWdQuL4",
    foto: Catetin,
  },
  {
    nama: "Life Fit Connect",
    tag: [
      "Work In Progress",
      "FullStack",
      "React Native",
      "NestJS",
      "MySQL",
      "Prisma",
    ],
    deskripsi: [
      "Life Fit Connect App merupakan",
      "aplikasi Reminder minum obat",
      "dan Tracking jogging",
    ],
    foto: LifeFitConnect,
  },
  {
    nama: "Koce Delivery",
    tag: [
      "Work In Progress",
      "FullStack",
      "React Native",
      "ExpressJs",
      "MySQL",
    ],
    deskripsi: [
      "Koce Delivery App merupakan",
      "aplikasi Pesan Antar untuk Restoran",
      "Korean Chicken Express (Koce)",
    ],
    foto: Koce,
  },
];
