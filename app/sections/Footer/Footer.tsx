import React from "react";
import styles from "./footer.module.scss";
import Form from "@/app/components/Form/Form";
import Sosmed from "@/app/components/SosialMedia/Sosmed";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.container}>
      <Sosmed />
      <Form />
    </footer>
  );
};

export default Footer;
