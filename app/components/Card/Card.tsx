"use client";
import styles from "./card.module.scss";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import ArrowIcon from "../../assets/svg/ArrowRightIcon.svg";
import PlayIcon from "../../assets/svg/PlayIcon.svg";
import { DataFullstack } from "@/app/data/fullstack";
import useWindowSize from "@/app/hooks/useWindowSize";
import useAppDispatch from "@/app/hooks/useAppDispatch";
import { setVideoPlay, setVideoUrl } from "@/app/redux/features/videoPlayer";

type Props = {
  i: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
  item: DataFullstack;
};

const Card = ({ i, progress, range, targetScale, item }: Props) => {
  const dispatch = useAppDispatch();
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
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={styles.card}
      >
        <div className={styles.card__left}>
          <div className={styles.top}>
            <div className={styles.nama__project}>
              <h1>{item.nama}</h1>
              {item.icon && (
                <div className={styles.app__icon}>
                  <Image src={item.icon} width={10} height={10} alt="Icon" />
                </div>
              )}
            </div>
            <div className={styles.tag__container} ref={tagRef}>
              <motion.div
                className={
                  drag
                    ? `${styles.drag__container} ${styles.drag}`
                    : `${styles.drag__container}`
                }
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
                {item.tag.map((tag, i) => {
                  return (
                    <div
                      className={
                        drag ? `${styles.tag} ${styles.drag}` : `${styles.tag}`
                      }
                      key={i}
                    >
                      <p className={drag ? `${styles.drag}` : ""}>{tag}</p>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.deskripsi}>
              {item.deskripsi.map((des, i) => {
                return <p key={i}>{des}</p>;
              })}
            </div>
            <div className={styles.button__container}>
              {item.button &&
                item.button.map((button, index) => {
                  return (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(
                          button.link,
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }}
                    >
                      <p>{button.nama}</p>
                      <Image
                        src={ArrowIcon}
                        width={20}
                        height={20}
                        alt="Icon"
                      />
                    </button>
                  );
                })}
            </div>
          </div>
        </div>
        <div className={styles.card__right}>
          <motion.div
            className={styles.image_container}
            style={{
              scale: windowWidth! > 1024 ? imageScale : imageScaleMobile,
            }}
          >
            <Image
              src={item.foto!}
              alt="Image"
              fill
              style={{ objectFit: "cover" }}
            />
          </motion.div>
          {item.video && (
            <div
              onClick={() => {
                dispatch(setVideoUrl(item.video!));
                dispatch(setVideoPlay(true));
              }}
            >
              <div className={styles.play__text}>
                <p>Klik untuk memutar Video Demo</p>
              </div>
              <motion.div
                className={styles.play__button}
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
