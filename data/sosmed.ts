import { StaticImageData } from "next/image";
import GithubDarkIcon from "../assets/svg/GithubDarkIcon.svg";
import GithubIcon from "../assets/svg/GithubIcon.svg";
import InstagramDarkIcon from "../assets/svg/InstagramDarkIcon.svg";
import InstagramIcon from "../assets/svg/InstagramIcon.svg";
import LinkedinDarkIcon from "../assets/svg/LinkedinDarkIcon.svg";
import LinkedinIcon from "../assets/svg/LinkedinIcon.svg";
import YoutubeDarkIcon from "../assets/svg/YoutubeDarkIcon.svg";
import YoutubeIcon from "../assets/svg/YoutubeIcon.svg";

export interface Sosmed {
  nama: string;
  icon: StaticImageData;
  darkIcon: StaticImageData;
  link: string;
}

export const sosmed: Sosmed[] = [
  {
    nama: "Github",
    icon: GithubIcon,
    darkIcon: GithubDarkIcon,
    link: "https://github.com/Rakha112",
  },
  {
    nama: "Linkedin",
    icon: LinkedinIcon,
    darkIcon: LinkedinDarkIcon,
    link: "https://www.linkedin.com/in/rakha-wibowo/",
  },
  {
    nama: "Youtube",
    icon: YoutubeIcon,
    darkIcon: YoutubeDarkIcon,
    link: "https://www.youtube.com/channel/UCUb0G_PXtgWV_TmuJXLFxRw",
  },
  {
    nama: "Instagram",
    icon: InstagramIcon,
    darkIcon: InstagramDarkIcon,
    link: "https://www.instagram.com/rakha_wibowo/",
  },
];
