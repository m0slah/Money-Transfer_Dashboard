/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        gray: {
          900: "#0f1112",
          800: "#151718",
          700: "#181A1E",
          400: "#55565C",
        },
        indigo: {
          400: "#927CFF",
          700: "#4D3E97",
        },
      },
      borderRadius: {
        10: "10px",
      },
    },
  },
  plugins: [],
};
