import React from "react";
import styles from "./page.module.scss";
import HaloText from "./components/HaloText";

type Props = {};

const page = (props: Props) => {
  return (
    <main className={styles.main}>
      <HaloText />
    </main>
  );
};

export default page;
