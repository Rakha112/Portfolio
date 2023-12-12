"use client";

import React, { useState } from "react";
import styles from "./form.module.scss";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import Toast from "../Toast/Toast";
import axios from "axios";
import Loader from "../Loader/Loader";
const GeistSans = localFont({ src: "../../assets/fonts/Geist-Regular.otf" });
const Form = () => {
  const [isNama, setIsNama] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPesan, setIsPesan] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");
  const [toastText, setToastText] = useState("");

  const transition = {
    duration: 0.75,
    ease: [0.76, 0, 0.24, 1],
  };

  const overlay = {
    initial: { height: "300%", y: "100%", borderRadius: "50%" },
    visible: {
      height: "100%",
      y: 0,
      borderRadius: 0,
      transition: transition,
    },
    hidden: {
      height: "300%",
      y: "100%",
      borderRadius: "50%",
      transition: transition,
    },
  };

  const perspectiveText = {
    initial: { rotateX: 0 },
    hidden: {
      rotateX: 0,
      transition: transition,
    },
    visible: {
      rotateX: "90deg",
      transition: transition,
    },
  };

  const firstP = {
    initial: {
      opacity: 1,
      y: 0,
    },
    hidden: { opacity: 1, y: 0, transition: transition },
    visible: { opacity: 0, y: "-100%", transition: transition },
  };

  const secondP = {
    initial: {
      opacity: 0,
    },
    hidden: { opacity: 0, transition: transition },
    visible: {
      opacity: 1,
      transition: transition,
    },
  };

  const handleSubmit = () => {
    const regex =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (nama === "" || email === "" || pesan === "") {
      setToastText("Form masih kosong, silahkan lengkapi!");
      setShowToast(true);
      return;
    }
    if (email !== "" && regex.test(email) === false) {
      setToastText("Email tidak valid");
      setShowToast(true);
      return;
    }
    setShowSpinner(true);
    axios
      .post(process.env.API_URL + "/send", {
        nama: nama,
        email: email,
        pesan: pesan,
      })
      .then((res) => {
        axios
          .post(process.env.API_URL + "/send/penerima", {
            nama: nama,
            email: email,
            pesan: pesan,
          })
          .then(() => {
            setShowSpinner(false);
            setToastText("Pesan Berhasil Terkirim");
            setShowToast(true);
            setNama("");
            setEmail("");
            setPesan("");
          })
          .catch((err) => {
            if (err.code === "ERR_NETWORK") {
              setShowSpinner(false);
              setToastText("Server Error");
              setShowToast(true);
            }
          });
      })
      .catch((err) => {
        if (err.code === "ERR_NETWORK") {
          setShowSpinner(false);
          setToastText("Server Error");
          setShowToast(true);
        }
      });
  };

  return (
    <div className={styles.container}>
      <Toast
        toastText={toastText}
        showToast={showToast}
        setShowToast={setShowToast}
      />
      <h1>Kirim Pesan</h1>
      <form>
        <motion.input
          className={GeistSans.className}
          type="text"
          name="nama"
          placeholder="Nama"
          value={nama}
          onChange={(e) => {
            setNama(e.target.value);
          }}
          onFocus={() => {
            setIsNama(true);
          }}
          onBlur={() => {
            setIsNama(false);
          }}
          initial={{ border: "2px solid #1d1d1d" }}
          whileFocus={{ border: "2px solid #f5f2ee" }}
          whileHover={{
            border: isNama ? "2px solid #f5f2ee" : "2px solid #f6f3ef80",
          }}
        />
        <motion.input
          className={GeistSans.className}
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          onFocus={() => {
            setIsEmail(true);
          }}
          onBlur={() => {
            setIsEmail(false);
          }}
          initial={{ border: "2px solid #1d1d1d" }}
          whileFocus={{ border: "2px solid #f5f2ee" }}
          whileHover={{
            border: isEmail ? "2px solid #f5f2ee" : "2px solid #f6f3ef80",
          }}
        />
        <motion.textarea
          className={GeistSans.className}
          cols={30}
          rows={5}
          name="pesan"
          placeholder="Pesan"
          value={pesan}
          onChange={(e) => {
            setPesan(e.target.value);
          }}
          onFocus={() => {
            setIsPesan(true);
          }}
          onBlur={() => {
            setIsPesan(false);
          }}
          initial={{ border: "2px solid #1d1d1d" }}
          whileFocus={{ border: "2px solid #f5f2ee" }}
          whileHover={{
            border: isPesan ? "2px solid #f5f2ee" : "2px solid #f6f3ef80",
          }}
        />
        <motion.button
          initial="initial"
          animate="hidden"
          whileHover="visible"
          whileFocus="visible"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {showSpinner ? (
            <Loader />
          ) : (
            <>
              <motion.div className={styles.overlay} variants={overlay} />
              <motion.div
                className={styles.perspectiveText}
                variants={perspectiveText}
              >
                <motion.p variants={firstP}>Kirim Pesan</motion.p>
                <motion.p variants={secondP}>Kirim Pesan</motion.p>
              </motion.div>
            </>
          )}
        </motion.button>
        <h3>Atau Email</h3>
        <motion.button
          initial="initial"
          animate="hidden"
          whileHover="visible"
          whileFocus="visible"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "mailto:rakhawibowo1998@gmail.com";
          }}
        >
          <motion.div className={styles.overlay} variants={overlay} />
          <motion.div
            className={styles.perspectiveText}
            variants={perspectiveText}
          >
            <motion.p variants={firstP}>rakhawibowo1998@gmail.com</motion.p>
            <motion.p variants={secondP}>rakhawibowo1998@gmail.com</motion.p>
          </motion.div>
        </motion.button>
      </form>
    </div>
  );
};

export default Form;
