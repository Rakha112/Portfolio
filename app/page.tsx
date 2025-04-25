import Cursor from "@/components/Cursor";
import BackDropNav from "@/components/NavBar/BackDropNav";
import HiddenNav from "@/components/NavBar/HiddenNav";
import NavBar from "@/components/NavBar/NavBar";
import VideoPlayer from "@/components/VideoPlayer";
import Welcome from "@/components/Welcome";
import About from "@/sections/About";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Skills from "@/sections/Skills";
import Work from "@/sections/Work";

const page = () => {
  return (
    <main className="relative flex max-w-[100vw] flex-col items-center justify-center bg-warnaHitam">
      <div className="flex flex-col items-center justify-center">
        <Cursor />
        <NavBar />
        <HiddenNav />
        <Welcome />
        <Hero />
        <About />
        <Skills />
        <Work />
        <Footer />
        <BackDropNav />
        <VideoPlayer />
      </div>
    </main>
  );
};

export default page;
