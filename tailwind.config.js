/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ["Poor Story","Poppins", "Arial", "sans-serif"],
        poor: ["Poor Story", "cursive"],
      }
    },
  },
  plugins: [],
}
