import BackDropNav from "@/components/NavBar/BackDropNav";
import HiddenNav from "@/components/NavBar/HiddenNav";
import NavBar from "@/components/NavBar/NavBar";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import styles from "./page.module.scss";
import About from "@/sections/About/About";
import Accordion from "@/sections/Accordion/Accordion";
import Footer from "@/sections/Footer/Footer";
import Foto from "@/sections/Fotografi/Foto";
import Me from "@/sections/Me/Me";
import SelamatDatang from "@/sections/SelamatDatang/SelamatDatang";
import TechStack from "@/sections/TechStack/TechStack";
import Work from "@/sections/Work/Work";

const page = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <SelamatDatang />
        <HiddenNav />
        <BackDropNav />
        <NavBar />
        <Me />
        <About />
        <Accordion />
        <TechStack />
        <Work />
        <VideoPlayer />
        <Foto />
        <Footer />
      </div>
    </main>
  );
};

export default page;
