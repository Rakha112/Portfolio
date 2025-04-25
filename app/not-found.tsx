"use client";

import Link from "next/link";

const NotFound = () => {
  return (
    <section className="flex h-screen w-screen items-center justify-center bg-warnaHitam">
      <div className="relative h-screen w-screen overflow-hidden p-4">
        <div className="flex h-full w-full flex-col items-center justify-center rounded-3xl bg-warnaPutih">
          <h1
            style={{ fontSize: "clamp(10rem, 20vw + 1rem, 22rem)" }}
            className="font-bold leading-none text-warnaHitam"
          >
            404
          </h1>
          <p
            className="text-warnaHitam"
            style={{ fontSize: "clamp(1rem, 2vw + 1rem, 3rem)" }}
          >
            This page could not be found.
          </p>
          <Link
            className="cursor-pointer border-b-2 border-b-warnaHitam leading-none text-warnaHitam"
            style={{ fontSize: "clamp(1rem, 2vw + 1rem, 3rem)" }}
            href="/"
          >
            Back home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
