"use client";

import ArrowIcon from "@/assets/svg/ArrowRightIcon.svg";
import PlayIcon from "@/assets/svg/PlayIcon.svg";
import { Works } from "@/data/works";
import useWindowSize from "@/hooks/useWindowSize";
import useVideoPlayerStore from "@/store/videoPlayerStore";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

type Props = {
  i: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
  item: Works;
};

const Card = ({ i, progress, range, targetScale, item }: Props) => {
  const setVideoPlay = useVideoPlayerStore((state) => state.setVideoPlay);
  const setVideoUrl = useVideoPlayerStore((state) => state.setVideoUrl);
  const { width: windowWidth } = useWindowSize();
  const container = useRef(null);
  const tagRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const [drag, setDrag] = useState(false);

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const imageScaleMobile = useTransform(scrollYProgress, [0, 1], [1.3, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex h-screen items-center justify-center will-change-transform"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative top-[-25%] flex h-[80vh] w-[90vw] origin-top flex-col-reverse overflow-hidden rounded-3xl border border-warnaHitam bg-warnaHitamCerah will-change-transform lg:flex-row"
      >
        <div className="flex flex-1 flex-col justify-between lg:max-w-[50%]">
          <div className="ml-4 mt-4 lg:ml-8 lg:mt-8">
            <div className="flex gap-[10px]">
              <h1 className="cursor-default text-[60px] leading-none text-warnaPutih lg:text-[100px]">
                {item.name}
              </h1>
              {item.icon && (
                <div className="relative h-[40px] w-[40px] overflow-hidden rounded-[10px]">
                  <Image
                    className="h-[40px] w-[40px]"
                    src={item.icon}
                    width={10}
                    height={10}
                    alt="Icon"
                    priority
                  />
                </div>
              )}
            </div>
            <div className="mr-4" ref={tagRef}>
              <motion.div
                className={`flex w-fit flex-nowrap gap-[5px] ${drag ? "cursor-grabbing" : "cursor-grab"}`}
                drag="x"
                dragConstraints={tagRef}
                onMouseDown={() => {
                  setDrag(true);
                }}
                onMouseUp={() => {
                  setDrag(false);
                }}
                onTapCancel={() => {
                  setDrag(false);
                }}
              >
                {item.tags.map((tag, i) => {
                  return (
                    <div
                      className={`rounded-[100px] border border-warnaPutih px-4 py-1 ${drag ? "cursor-grabbing" : "cursor-grab"}`}
                      key={i}
                    >
                      <p
                        className={`whitespace-nowrap text-warnaPutih ${drag ? "cursor-grabbing" : "cursor-grab"}`}
                      >
                        {tag}
                      </p>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
          <div className="mb-4 ml-4 lg:mb-8 lg:ml-8">
            <div className="px-0 py-4">
              {item.description.map((des, i) => {
                return (
                  <p
                    className="cursor-default text-warnaPutih lg:text-[20px]"
                    key={i}
                  >
                    {des}
                  </p>
                );
              })}
            </div>
            <div className="flex gap-[10px]">
              {item.buttons &&
                item.buttons.map((button, index) => {
                  return (
                    <button
                      className="relative flex w-[120px] cursor-pointer items-center justify-between rounded-[20px] border border-warnaPutih py-2 pl-4 pr-2"
                      key={index}
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(
                          button.link,
                          "_blank",
                          "noopener,noreferrer",
                        );
                      }}
                    >
                      <p className="text-[16px] leading-none text-warnaPutih">
                        {button.name}
                      </p>
                      <Image
                        src={ArrowIcon}
                        width={20}
                        height={20}
                        alt="Icon"
                        priority
                      />
                    </button>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="relative flex flex-1 overflow-hidden">
          <motion.div
            className="relative w-full will-change-transform"
            style={{
              scale: windowWidth! > 1024 ? imageScale : imageScaleMobile,
            }}
          >
            <Image
              src={item.image!}
              alt="Image"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          {item.video && (
            <div
              onClick={() => {
                setVideoUrl(item.video!);
                setVideoPlay(true);
              }}
            >
              <div className="absolute bottom-[10px] left-[10px] flex cursor-pointer rounded-full bg-warnaHitamCerah px-4 py-1">
                <p className="text-[14px] leading-none text-warnaPutih">
                  Click to play Demo Video
                </p>
              </div>
              <motion.div
                className="absolute bottom-0 left-0 right-0 top-0 flex cursor-pointer items-center justify-center"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1,
                  transition: { ease: [0.22, 1, 0.36, 1] },
                }}
              >
                <Image src={PlayIcon} alt="Play" width={100} height={100} />
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
