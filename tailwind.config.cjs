/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ed1c24",
          50: "#fff1f2",
          100: "#ffdfe0",
          200: "#ffc5c7",
          300: "#ff9da1",
          400: "#ff656b",
          500: "#fe353d",
          600: "#ed1c24",
          700: "#c70e15",
          800: "#a41016",
          900: "#881418",
          950: "#4a0508",
        },
      },
      screens: {
        specialMD: "770px",
      },
    },
  },
  plugins: [],
};
