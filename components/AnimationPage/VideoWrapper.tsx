"use client";

import { videoSources } from "@/data/video";
import VideoDemo from "./VideoDemo";
import { motion } from "motion/react";

const VideoWrapper = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.8,
      }}
      className="grid grid-cols-2 gap-6 gap-y-10 md:grid-cols-3 md:gap-8 md:gap-y-12 lg:grid-cols-4"
    >
      {videoSources.map((video, index) => {
        return (
          <VideoDemo
            src={video.video}
            poster={video.poster}
            title={video.title}
            slug={video.slug}
            youtube={video.youtube}
            key={index}
          />
        );
      })}
    </motion.div>
  );
};

export default VideoWrapper;
