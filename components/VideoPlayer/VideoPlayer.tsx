"use client";

import useVideoPlayerStore from "@/store/videoPlayerStore";
import { useCallback, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import styles from "./videoPlayer.module.scss";
import { useLenis } from "lenis/react";
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
    [videoPlay, setVideoPlay, setVideoUrl]
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
        <div className={styles.video__container}>
          <div className={styles.video}>
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
            className={styles.backdrop}
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
