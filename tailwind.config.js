/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        eggshell: "#F3E5D7",
        "dark-charcoal": "#312E2C",
        "wenge-brown": "#5F564D",
        "dark-raspberry": "#7A284E",
        "brandy-red": " #854632",
        snow: "#FFF7FB",
      },
      fontFamily: {
        "young-serif": "young-serif",
        outfit: "outfit",
      },
      fontSize: {
        "heading-l": [
          "40px",
          {
            lineHeight: "100%",
            fontWeight: 400,
          },
        ],
        "heading-m": [
          "28px",
          {
            lineHeight: "100%",
            fontWeight: 400,
          },
        ],
        "heading-s": [
          "20px",
          {
            fontWeight: 600,
            lineHeight: "100%",
          },
        ],
        "body-r": [
          "16px",
          {
            lineHeight: "150%",
            fontWeight: 400,
          },
        ],
      },
    },
  },
  plugins: [],
};
