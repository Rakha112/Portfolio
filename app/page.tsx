import Cursor from "@/components/Cursor";
import Welcome from "@/components/Welcome";
import Hero from "@/sections/Hero";

const page = () => {
  return (
    <main className="flex h-screen w-screen overflow-hidden font-geist">
      <Cursor />
      <Welcome />
      <Hero />
    </main>
  );
};

export default page;
