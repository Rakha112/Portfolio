import { StaticImageData } from "next/image";
import A1 from "../assets/images/A+/A+ (1).jpg";
import A2 from "../assets/images/A+/A+ (2).jpg";
import A3 from "../assets/images/A+/A+ (3).jpg";
import Koce1 from "../assets/images/Koce/Koce (1).jpg";
import Koce2 from "../assets/images/Koce/Koce (2).jpg";
import Koce3 from "../assets/images/Koce/Koce (3).jpg";
import Kopi1 from "../assets/images/Kopi/Kopi (1).jpg";
import Kopi2 from "../assets/images/Kopi/Kopi (2).jpg";
import Kopi3 from "../assets/images/Kopi/Kopi (3).jpg";
import MiDelima1 from "../assets/images/MiDelima/Mi Delima (1).jpg";
import MiDelima2 from "../assets/images/MiDelima/Mi Delima (2).jpg";
import MiDelima3 from "../assets/images/MiDelima/Mi Delima (3).jpg";
import Sewiwi1 from "../assets/images/Sewiwi/Sewiwi (1).jpg";
import Sewiwi2 from "../assets/images/Sewiwi/Sewiwi (2).jpg";
import Sewiwi3 from "../assets/images/Sewiwi/Sewiwi (3).jpg";

export interface DataFotografi {
  nama: string;
  foto: StaticImageData[];
}

export const dataFotografi: DataFotografi[] = [
  { nama: "Koce", foto: [Koce1, Koce2, Koce3] },
  { nama: "Sewiwi", foto: [Sewiwi1, Sewiwi2, Sewiwi3] },
  { nama: "A+", foto: [A1, A2, A3] },
  { nama: "Mi Delima", foto: [MiDelima1, MiDelima2, MiDelima3] },
  { nama: "Es Kopi", foto: [Kopi1, Kopi2, Kopi3] },
];
