/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      flex: {
        2: "1.5 1.5 0%",
      },
      fontFamily: {
        sans: [
          '"Inter"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        primaryLow: "var(--primarylow)",
        primaryMedium: "var(--primarymid)",
        primaryHigh: "var(--primaryhigh)",
        secondaryLow: "var(--secondarylow)",
        secondaryMedium: "var(--secondarymid)",
        secondaryHigh: "var(--secondaryhigh)",
        tertiaryLow: "var(--tertiarylow)",
        tertiaryMedium: "var(--tertiarymid)",
        tertiaryHigh: "var(--tertiaryhigh)",
        white: "var(--white)",
        black: "var(--black)",
        grayLow: "var(--graylow)",
        grayMedium: "var(--graymid)",
        grayHigh: "var(--grayhigh)",
        danger: "var(--danger)",
        success: "var(--success)",
        warning: "var(--warning)",
        green: "#31564B",
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
