"use client";

import useVideoPlayerStore from "@/store/videoPlayerStore";
import { useLenis } from "lenis/react";
import { useCallback, useEffect } from "react";
import ReactPlayer from "react-player/youtube";

function VideoPlayer() {
  const videoUrl = useVideoPlayerStore((state) => state.url);
  const videoPlay = useVideoPlayerStore((state) => state.play);
  const setVideoPlay = useVideoPlayerStore((state) => state.setVideoPlay);
  const setVideoUrl = useVideoPlayerStore((state) => state.setVideoUrl);
  const lenis = useLenis();
  const keyPress = useCallback(
    (e: { key: string }) => {
      if (e.key === "Escape" && videoPlay) {
        setVideoPlay(false);
        setVideoUrl("");
      }
    },
    [videoPlay, setVideoPlay, setVideoUrl],
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  useEffect(() => {
    if (videoPlay === true) {
      // document.body.style.overflow = "hidden";
      lenis?.stop();
    } else if (videoPlay === false) {
      // document.body.style.overflow = "unset";
      lenis?.start();
    }
  }, [lenis, videoPlay]);

  return (
    <>
      {videoPlay && (
        <div className="fixed top-0 z-50 flex h-screen w-screen items-center justify-center overflow-hidden">
          <div className="z-50 aspect-video w-[90vw] overflow-hidden lg:w-[80vw] lg:max-w-[1450px]">
            <ReactPlayer
              url={videoUrl}
              width={"100%"}
              height={"100%"}
              controls={true}
              loop
              playing={videoPlay}
            />
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 top-0 z-40 bg-[#303030b3]"
            onClick={() => {
              setVideoPlay(false);
              setVideoUrl("");
            }}
          />
        </div>
      )}
    </>
  );
}

export default VideoPlayer;
