const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        primary: "#FE3D56",
        secondary: "#4B5563", // gray-600 as secondary color
        darkBg: "#0F172A", // gray-900 as dark background color
        darkCard: "#1E293B",
        darkModal: "#334155",
        customRing: "#00984b",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
