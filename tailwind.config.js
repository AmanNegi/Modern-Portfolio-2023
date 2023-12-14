import colors from "tailwindcss/colors";

console.log(colors);
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        // lightBackground: "#ffffff",
        // semiDarkBackground: "#f5f0eb",
        // darkBackground: "#f1d5ca",
        // paragraphColor: "#000000",
        // borderColor: "#faefeb",
        // dividerColor: "#f7e4dd",

        // New Colors

        // bgColor: "#000000",
        // headingColor: "#fdfdfd",
        // subHeadingColor: "#b3b3b3",
        // accentColor: "#80ed99",
        // accentColor: "#4efca8",

        // bgColor: "#E3E2DF",
        // accentColor: "#3AAFA9",

        //* Shades: Dec 2023
        headingColor: "#17252A",
        semiDarkBackground: "#2B7A78",
        bgColor: "#3AAFA9",
        subHeadingColor: "#DEF2F1",
        accentColor: "#FEFFFF",

        darkShade: "#17252A",
        semiDarkShade: "#2B7A78",
        accentShade: "#3AAFA9",
        semiLightShade: "#DEF2F1",
        lightShade: "#FEFFFF",

        // specified colors:
        flowTextColor: "#17252A",
        socialsColor: "#FEFFFF",
        iconsColor: "#17252A",
        dividerColor: "#17252A",
        descriptionTextColor: "#17252A",
        buttonTextColor: "#FEFFFF",
      },
    },
  },
  plugins: [],
};
