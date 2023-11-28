"use client";

import React, { useCallback, useEffect } from "react";
import styles from "./videoPlayer.module.scss";
import ReactPlayer from "react-player/youtube";
import useAppDispatch from "@/app/hooks/useAppDispatch";
import useAppSelector from "@/app/hooks/useAppSelector";
import { setVideoPlay, setVideoUrl } from "@/app/redux/features/videoPlayer";
import { useLenis } from "../LenisScroller/LenisScroller";
function VideoPlayer() {
  const dispatch = useAppDispatch();
  const videoUrl = useAppSelector((state) => state.videoPlayerReducer.url);
  const videoPlay = useAppSelector((state) => state.videoPlayerReducer.play);
  const lenis = useLenis();
  const keyPress = useCallback(
    (e: { key: string }) => {
      if (e.key === "Escape" && videoPlay) {
        dispatch(setVideoPlay(false));
        dispatch(setVideoUrl(""));
      }
    },
    [dispatch, videoPlay]
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
              dispatch(setVideoPlay(false));
              dispatch(setVideoUrl(""));
            }}
          />
        </div>
      )}
    </>
  );
}

export default VideoPlayer;
