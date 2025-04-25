import Form from "@/components/Form";
import Sosmed from "@/components/Sosmed";

const Footer = () => {
  return (
    <footer
      className="flex h-full w-screen flex-col-reverse gap-4 p-4 lg:h-screen lg:w-screen lg:flex-row"
      id="contact"
    >
      <Sosmed />
      <Form />
    </footer>
  );
};

export default Footer;
