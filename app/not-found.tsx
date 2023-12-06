"use client";

import React from "react";
import styles from "./not-found.module.scss";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className={styles.page__wrap}>
      <div className={styles.error__container}>
        <div className={styles.error__content}>
          <h1>404</h1>
          <p>This page could not be found.</p>
          <Link href="/">Back home</Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
