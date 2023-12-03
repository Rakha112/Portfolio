import React from "react";
import styles from "./page.module.scss";
import HiddenNav from "./components/NavBar/HiddenNav";
import BackDropNav from "./components/NavBar/BackDropNav";
import NavBar from "./components/NavBar/NavBar";
import SelamatDatang from "./sections/SelamatDatang/SelamatDatang";
import Me from "./sections/Me/Me";
import About from "./sections/About/About";
import Accordion from "./sections/Accordion/Accordion";
import TechStack from "./sections/TechStack/TechStack";
import Work from "./sections/Work/Work";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Footer from "./sections/Footer/Footer";

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
        <Footer />
      </div>
    </main>
  );
};

export default page;
