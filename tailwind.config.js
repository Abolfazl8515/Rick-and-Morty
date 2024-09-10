/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "320px",
      },
      colors: {
        main: "#c2410c",
        hover: "#ea580c",
        primary: "#374151",
      },
    },
  },
  plugins: [],
};
