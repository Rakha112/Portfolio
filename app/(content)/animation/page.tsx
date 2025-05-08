import TextAnimation from "@/components/AnimationPage/TextAnimation";
import TextAnimation2 from "@/components/AnimationPage/TextAnimation2";
import VideoWrapper from "@/components/AnimationPage/VideoWrapper";

const Animation = () => {
  return (
    <div className="bg-warna-hitam relative z-50 h-auto max-w-full">
      <div className="mx-auto flex max-w-6xl flex-1 flex-col px-4 pt-36 sm:mt-0 sm:px-6 md:pt-36 lg:px-8">
        <TextAnimation />
        <TextAnimation2 />
        <VideoWrapper />
      </div>
    </div>
  );
};

export default Animation;
