import VideoPlayer from "@/components/VideoPlayer";
import Welcome from "@/components/Welcome";
import About from "@/sections/About";
import Animation from "@/sections/Animation";
import Hero from "@/sections/Hero";
import Skills from "@/sections/Skills";
import Work from "@/sections/Work";

const page = () => {
  return (
    <main className="bg-warna-hitam">
      <Welcome />
      <Hero />
      <About />
      <Skills />
      <Animation />
      <Work />
      <VideoPlayer />
    </main>
  );
};

export default page;
