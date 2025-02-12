"use client";

import { motion } from "framer-motion";
import { Archivo_Black, Playfair_Display } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import CloseIcon from "../../assets/svg/Close.svg";
import styles from "./accordion.module.scss";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

const archivoBlack = Archivo_Black({ weight: "400", subsets: ["latin"] });

const Accordion = () => {
  const [isSertifikasiOpen, setIsSertifikasiOpen] = useState(false);
  const [isPelatihanOpen, setIsPelatihanOpen] = useState(false);

  const sertifikasiHandler = () => {
    if (isSertifikasiOpen === false) {
      setIsPelatihanOpen(false);
      setIsSertifikasiOpen(true);
    } else {
      setIsSertifikasiOpen(false);
    }
  };

  const pelatihanHandler = () => {
    if (isPelatihanOpen === false) {
      setIsSertifikasiOpen(false);
      setIsPelatihanOpen(true);
    } else {
      setIsPelatihanOpen(false);
    }
  };

  const cvHandler = () => {
    window.open(
      "https://drive.google.com/uc?export=download&id=1Tz5O0lycESioomhbOJmSZL4igb3xHwUF"
    );
  };

  return (
    <section className={styles.container}>
      <div className={styles.cv__wrapper}>
        <h1 className={archivoBlack.className}>Curriculum Vitae</h1>
        <button className={playfairDisplay.className} onClick={cvHandler}>
          <h1>Download</h1>
        </button>
      </div>
      <div className={styles.wrapper}>
        <button
          className={styles.title}
          aria-expanded={isSertifikasiOpen}
          onClick={sertifikasiHandler}
        >
          <h1 className={archivoBlack.className}>Sertifikasi</h1>
          <motion.div
            initial={{ rotate: "45deg" }}
            animate={{ rotate: isSertifikasiOpen ? "0deg" : "45deg" }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Image src={CloseIcon} alt="Icon" width={40} height={40} />
          </motion.div>
        </button>
        <motion.ul
          className={styles.list__container}
          initial={{ height: "0" }}
          animate={isSertifikasiOpen ? { height: "auto" } : { height: "0" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <li className={styles.list}>
            PCAP-Certified Associate in Python Programming, Python Institute
          </li>
        </motion.ul>
      </div>
      <div className={styles.wrapper}>
        <button
          className={styles.title}
          aria-expanded={isSertifikasiOpen}
          onClick={pelatihanHandler}
        >
          <h1 className={archivoBlack.className}>Pelatihan</h1>
          <motion.div
            initial={{ rotate: "45deg" }}
            animate={{ rotate: isPelatihanOpen ? "0deg" : "45deg" }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Image src={CloseIcon} alt="Icon" width={40} height={40} />
          </motion.div>
        </button>
        <motion.ul
          className={styles.list__container}
          initial={{ height: "0" }}
          animate={isPelatihanOpen ? { height: "auto" } : { height: "0" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <li className={styles.list}>Front End Fundamental oleh Dicoding</li>
          <li className={styles.list}>Back End Fundamental oleh Dicoding</li>
          <li className={styles.list}>Aplikasi Web Dengan React Dicoding</li>
          <li className={styles.list}>Big Data Using Python Oleh KOMINFO</li>
          <li className={styles.list}>Data Analisis oleh DQLab</li>
          <li className={styles.list}>Alibaba Cloud AI Forward oleh Alibaba</li>
          <li className={styles.list}>
            IoT Fundamentals: Big Data &amp; Analytics oleh Cisco Networking
            Academy
          </li>
          <li className={styles.list}>
            PCAP: Programming Essentials in Python oleh Cisco Networking Academy
          </li>
        </motion.ul>
      </div>
    </section>
  );
};

export default Accordion;
