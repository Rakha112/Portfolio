import Form from "@/components/Footer/Form";
import Sosmed from "@/components/Footer/Sosmed";
import WorkTogether from "@/components/Footer/WorkTogether";

const Footer = () => {
  return (
    <footer className="flex h-full w-screen flex-col" id="contact">
      <WorkTogether />
      <div className="flex flex-col-reverse gap-4 bg-warnaHitam p-4 lg:h-screen lg:w-screen lg:flex-row">
        <Sosmed />
        <Form />
      </div>
    </footer>
  );
};

export default Footer;
