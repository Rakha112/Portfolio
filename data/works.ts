import { StaticImageData } from "next/image";
import Catetin from "../assets/images/Catetin.png";
import CatetinIcon from "../assets/images/CatetinIcon.png";
import Cuaca from "../assets/images/Cuaca.png";
import CuacaIcon from "../assets/images/CuacaIcon.png";
import Koce from "../assets/images/Koce.png";
import LifeFitConnect from "../assets/images/LifeFitConnect.png";
import Youtube from "../assets/images/Youtube.png";

export interface Works {
  name: string;
  tags: string[];
  description: string[];
  icon?: StaticImageData;
  buttons?: { name: string; link: string }[];
  video?: string;
  image: StaticImageData;
}

export const worksID: Works[] = [
  {
    name: "Youtube Channel",
    tags: ["FrontEnd", "React Native", "Animation"],
    buttons: [
      {
        name: "Youtube",
        link: "https://www.youtube.com/channel/UCUb0G_PXtgWV_TmuJXLFxRw",
      },
      {
        name: "Github",
        link: "https://github.com/Rakha112/react-native-animation",
      },
    ],
    description: [
      "Youtube Channel saya",
      "berisi tutorial membuat Komponen",
      "dan Animasinya pada React Native",
    ],
    image: Youtube,
  },
  {
    name: "Cuaca",
    tags: ["FrontEnd", "ReactJS", "React Native"],
    description: [
      "Cuaca App merupakan",
      "aplikasi yang berfungsi mencari informasi",
      "Cuaca di Kota yang ada di Indonesia",
    ],
    icon: CuacaIcon,
    buttons: [
      { name: "Web", link: "https://cuaca.rakhawibowo.com/" },
      {
        name: "Android",
        link: "https://drive.google.com/file/d/1Bb9RDqRAfzBdxB7siR5FZeYSmGGPfFqn/view?usp=share_link",
      },
    ],
    video: "https://youtu.be/RcwD1bV0c0Q",
    image: Cuaca,
  },
  {
    name: "Catetin",
    tags: ["FullStack", "ReactJS", "React Native", "ExpressJS", "MySQL"],
    description: [
      "Catetin App merupakan",
      "aplikasi yang berfungsi untuk Mencatat",
      "apapun yang anda inginkan",
    ],
    icon: CatetinIcon,
    buttons: [
      { name: "Web", link: "https://catetin.rakhawibowo.com/" },
      {
        name: "Android",
        link: "https://drive.google.com/file/d/1SS4XVmfiDIwaGnVzAnKkokvkmGOVWVEk/view?usp=share_link",
      },
    ],
    video: "https://youtu.be/OBcxXWdQuL4",
    image: Catetin,
  },
  {
    name: "Life Fit Connect",
    tags: ["FullStack", "React Native", "NestJS", "MySQL", "Prisma"],
    description: [
      "Life Fit Connect App merupakan",
      "aplikasi Reminder minum obat",
      "dan Tracking jogging",
    ],
    image: LifeFitConnect,
  },
  {
    name: "Koce Delivery",
    tags: ["FullStack", "React Native", "ExpressJs", "MySQL"],
    description: [
      "Koce Delivery App merupakan",
      "aplikasi Pesan Antar untuk Restoran",
      "Korean Chicken Express (Koce)",
    ],
    image: Koce,
  },
];

export const worksEng: Works[] = [
  {
    name: "Youtube Channel",
    tags: ["FrontEnd", "React Native", "Animation"],
    buttons: [
      {
        name: "Youtube",
        link: "https://www.youtube.com/channel/UCUb0G_PXtgWV_TmuJXLFxRw",
      },
      {
        name: "Github",
        link: "https://github.com/Rakha112/react-native-animation",
      },
    ],
    description: [
      "My Youtube Channel",
      "contains tutorials on creating components",
      "and animations in React Native",
    ],
    image: Youtube,
  },
  {
    name: "Cuaca",
    tags: ["FrontEnd", "ReactJS", "React Native"],
    description: [
      "Cuaca App is",
      "an app that provides weather information",
      "for cities across Indonesia",
    ],
    icon: CuacaIcon,
    buttons: [
      { name: "Web", link: "https://cuaca.rakhawibowo.com/" },
      {
        name: "Android",
        link: "https://drive.google.com/file/d/1Bb9RDqRAfzBdxB7siR5FZeYSmGGPfFqn/view?usp=share_link",
      },
    ],
    video: "https://youtu.be/RcwD1bV0c0Q",
    image: Cuaca,
  },
  {
    name: "Catetin",
    tags: ["FullStack", "ReactJS", "React Native", "ExpressJS", "MySQL"],
    description: [
      "Catetin App is",
      "an app that lets you take notes",
      "on anything you want",
    ],
    icon: CatetinIcon,
    buttons: [
      { name: "Web", link: "https://catetin.rakhawibowo.com/" },
      {
        name: "Android",
        link: "https://drive.google.com/file/d/1SS4XVmfiDIwaGnVzAnKkokvkmGOVWVEk/view?usp=share_link",
      },
    ],
    video: "https://youtu.be/OBcxXWdQuL4",
    image: Catetin,
  },
  {
    name: "Life Fit Connect",
    tags: ["FullStack", "React Native", "NestJS", "MySQL", "Prisma"],
    description: [
      "Life Fit Connect App is",
      "a medicine reminder and",
      "jogging tracker app",
    ],
    image: LifeFitConnect,
  },
  {
    name: "Koce Delivery",
    tags: ["FullStack", "React Native", "ExpressJs", "MySQL"],
    description: [
      "Koce Delivery App is",
      "a food delivery application for the restaurant",
      "Korean Chicken Express (Koce)",
    ],
    image: Koce,
  },
];
