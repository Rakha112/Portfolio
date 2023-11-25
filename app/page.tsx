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
        <TechStack />
        <Accordion />
        <div style={{ height: "100vh", width: "100vw" }} />
        <div style={{ height: "100vh", width: "100vw" }} />
        <div style={{ height: "100vh", width: "100vw" }} />
      </div>
    </main>
  );
};

export default page;
