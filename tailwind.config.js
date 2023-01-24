/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      cfe: "#007cae",
      cfeBlue: {
        100: "#007cad"
      },
      stone: colors.stone,
      sky: colors.sky,
      violet: colors.violet,
    },
    extend: {},
  },
  plugins: [],
}
