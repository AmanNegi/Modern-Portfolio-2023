const { colors } = import("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      grotesk: ["Grotesk", "Montserrat"]
    },
    extend: {
      colors: {
        ...colors,
        lightBackground: "#ffffff",
        semiDarkBackground: "#f5f0eb",
        darkBackground: "#f1d5ca",
        accentColor: "#cd505a",
        headingColor: "#444346",
        paragraphColor: "#000000",
      },
    },
  },
  plugins: [],
};
