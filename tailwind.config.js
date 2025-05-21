/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // poppins fonts
        PoppinsBlack: "PoppinsBlack",
        PoppinsBlackItalic: "PoppinsBlackItalic",
        PoppinsBold: "PoppinsBold",
        PoppinsBoldItalic: "PoppinsBoldItalic",
        PoppinsExtraBold: "PoppinsExtraBold",
        PoppinsExtraBoldItalic: "PoppinsExtraBoldItalic",
        PoppinsExtraLight: "PoppinsExtraLight",
        PoppinsExtraLightItalic: "PoppinsExtraLightItalic",
        PoppinsItalic: "PoppinsItalic",
        PoppinsLight: "PoppinsLight",
        PoppinsLightItalic: "PoppinsLightItalic",
        PoppinsMedium: "PoppinsMedium",
        PoppinsMediumItalic: "PoppinsMediumItalic",
        PoppinsRegular: "PoppinsRegular",
        PoppinsSemiBold: "PoppinsSemiBold",
        PoppinsSemiBoldItalic: "PoppinsSemiBoldItalic",
        PoppinsThin: "PoppinsThin",
        PoppinsThinItalic: "PoppinsThinItalic",
      },
      // ======================= color ---------
      colors: {
        primary: "#23AA49",

        lowBlack: "#333333",
        secondaryText: "#5C5C5C",
        lowGreen: "#E4FFEB",
        lowRed: "#FFE5E5",
        lowOrange: "#FFF3EB",
        red: "#FF1818",
        whiteStat: "#F3F5F7",
        stateGreyGreen: "#EBF8FF",
        lowGray: "#F0F0F0",
      },
    },
  },
  plugins: [],
};
