import React from "react";
import styles from "./page.module.scss";
import HiddenNav from "./components/NavBar/HiddenNav";
import BackDropNav from "./components/NavBar/BackDropNav";
import NavBar from "./components/NavBar/NavBar";

type Props = {};

const page = (props: Props) => {
  return (
    <main className={styles.main}>
      <HiddenNav />
      <BackDropNav />
      <NavBar />
    </main>
  );
};

export default page;
