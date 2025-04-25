import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        warnaHitam: "var(--warna-hitam)",
        warnaHitamCerah: "var(--warna-hitam-cerah)",
        warnaPutih: "var(--warna-putih)",
      },
      fontFamily: {
        geist: ["var(--font-geist-sans)"],
      },
      animation: {
        rotation: "rotation 1s linear infinite",
      },
      keyframes: {
        rotation: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
