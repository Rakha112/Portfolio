import Form from "@/components/Form/Form";
import Sosmed from "@/components/SosialMedia/Sosmed";
import styles from "./footer.module.scss";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.container} id="contact">
      <Sosmed />
      <Form />
    </footer>
  );
};

export default Footer;
