import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f5f0e8",
        ink: "#342d26",
        moss: "#68775b",
        burgundy: "#704642",
        beige: "#d9c7af"
      },
      boxShadow: {
        paper: "0 12px 30px rgba(53, 43, 34, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
