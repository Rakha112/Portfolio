"use client";

import useWindowSize from "@/hooks/useWindowSize";
import useModalStore from "@/store/modal";
import { useLenis } from "lenis/react";
import { animate, motion, useMotionValue } from "motion/react";
import { useEffect, useRef } from "react";
import { useInView } from "motion/react";

type VideoDemoProps = {
  src: string;
  poster: string;
  title: string;
  slug: string;
  youtube?: string;
};

const VideoDemo = ({ src, poster, title, slug, youtube }: VideoDemoProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  const setIsOpen = useModalStore((state) => state.setIsOpen);
  const setSlug = useModalStore((state) => state.setSlug);
  const setYoutube = useModalStore((state) => state.setYoutube);
  const setTitle = useModalStore((state) => state.setTitle);
  const setPoster = useModalStore((state) => state.setPoster);
  const setSrc = useModalStore((state) => state.setSrc);

  const lenis = useLenis();
  const { width: windowWidth } = useWindowSize();
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoInView = useInView(videoRef, { once: true });

  const y = useMotionValue(0);

  useEffect(() => {
    if (windowWidth === undefined || windowWidth > 1024) return;

    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      video.play();
    } else {
      video.pause();
    }
  }, [windowWidth, isInView]);

  useEffect(() => {
    if (windowWidth === undefined || windowWidth <= 1024) return;

    const video = videoRef.current;
    if (video) {
      video.pause();
    }
  }, [windowWidth]);

  const handleMouseEnter = () => {
    if (windowWidth !== undefined && windowWidth >= 1024) {
      videoRef.current?.play();
      animate(y, 18, { duration: 0.1 });
    }
  };

  const handleMouseLeave = () => {
    if (windowWidth !== undefined && windowWidth >= 1024) {
      videoRef.current?.pause();
      animate(y, 0, { duration: 0.1 });
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    lenis?.stop();
    setSlug(slug);
    setYoutube(youtube);
    setTitle(title);
    setPoster(poster);
    setSrc(src);
  };

  return (
    <motion.div
      onClick={handleOpen}
      ref={ref}
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: videoInView ? 1 : 0, y: videoInView ? 0 : 100 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <video
        ref={videoRef}
        className="w-full cursor-pointer overflow-hidden rounded-2xl object-cover transition-all lg:hover:scale-110"
        autoPlay
        muted
        loop
        preload="metadata"
        poster={poster}
        draggable={false}
        playsInline
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <source src={src} type="video/mp4" />
      </video>
      <motion.p
        className="font-geist text-warna-putih pt-4 text-base"
        style={{ y }}
      >
        {title}
      </motion.p>
    </motion.div>
  );
};

export default VideoDemo;
