import Cursor from "@/components/Cursor";
import HiddenNav from "@/components/NavBar/HiddenNav";
import NavBar from "@/components/NavBar/NavBar";
import Welcome from "@/components/Welcome";
import Hero from "@/sections/Hero";

const page = () => {
  return (
    <main className="flex h-screen w-screen overflow-hidden font-geist">
      <Cursor />
      <NavBar />
      <HiddenNav />
      <Welcome />
      <Hero />
    </main>
  );
};

export default page;
