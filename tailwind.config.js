/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        catamaran: ["Catamaran", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"], // Add Bebas Neue font
        roboto: ["Roboto", "sans-serif"], // Add Bebas Neue font
        montserrat: ["Montserrat", "sans-serif"], // Add Bebas Neue font
      },
      colors: {
        primary: ["#ff5c35"],
        secondary: ["#b3361d"],
        primaryHover: ["#ffe8e4"],
        dark: ["#000104"],
        dark2: ["#3e4555"],
        light: ["#ffffff"],
      },
    },
  },
  plugins: [],
};
