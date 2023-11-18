import React from "react";
import styles from "./page.module.scss";
import HiddenNav from "./components/NavBar/HiddenNav";
import BackDropNav from "./components/NavBar/BackDropNav";
import NavBar from "./components/NavBar/NavBar";
import Me from "./sections/Me/Me";
import About from "./sections/About/About";
import Accordion from "./sections/Accordion/Accordion";
type Props = {};

const page = (props: Props) => {
  return (
    <main className={styles.main}>
      <HiddenNav />
      <BackDropNav />
      <NavBar />
      <Me />
      <About />
      <Accordion />
    </main>
  );
};

export default page;
