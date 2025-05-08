"use client";

import { useInView } from "motion/react";
import { useEffect, useRef } from "react";

type Props = {
  src: string;
  poster: string;
};

const Video = ({ src, poster }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      video.play();
    } else {
      video.pause();
    }
  }, [isInView]);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      playsInline
      poster={poster}
      loop
      muted
    />
  );
};

export default Video;
