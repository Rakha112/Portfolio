import Link from "next/link";

const NotFound = () => {
  return (
    <section className="bg-warna-hitam flex h-screen w-screen items-center justify-center">
      <div className="relative h-screen w-screen overflow-hidden p-4">
        <div className="bg-warna-putih flex h-full w-full flex-col items-center justify-center rounded-3xl">
          <h1
            style={{ fontSize: "clamp(10rem, 20vw + 1rem, 22rem)" }}
            className="text-warna-hitam leading-none font-bold"
          >
            404
          </h1>
          <p
            className="text-warna-hitam"
            style={{ fontSize: "clamp(1rem, 2vw + 1rem, 3rem)" }}
          >
            This page could not be found.
          </p>
          <Link
            className="border-b-warna-hitam text-warna-hitam cursor-pointer border-b-2 leading-none"
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
