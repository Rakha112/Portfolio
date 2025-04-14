import Cursor from "@/components/Cursor";
import HiddenNav from "@/components/NavBar/HiddenNav";
import NavBar from "@/components/NavBar/NavBar";
import Welcome from "@/components/Welcome";
import About from "@/sections/About";
import Hero from "@/sections/Hero";

const page = () => {
  return (
    <main className="relative flex max-w-[100vw] flex-col items-center justify-center bg-warnaHitam">
      <div className="flex max-w-[1920px] flex-col items-center justify-center">
        <Cursor />
        <NavBar />
        <HiddenNav />
        <Welcome />
        <Hero />
        <About />
      </div>
    </main>
  );
};

export default page;
