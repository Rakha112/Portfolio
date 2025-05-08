import Form from "@/components/Footer/Form";
import Sosmed from "@/components/Footer/Sosmed";
import WorkTogether from "@/components/Footer/WorkTogether";

const Footer = () => {
  return (
    <footer className="z-40 flex h-full flex-col" id="contact">
      <WorkTogether />
      <div className="bg-warna-hitam flex flex-col-reverse justify-center gap-4 p-4 lg:h-screen lg:flex-row">
        <Sosmed />
        <Form />
      </div>
    </footer>
  );
};

export default Footer;
