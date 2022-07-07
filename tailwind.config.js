/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Lato: "Lato",
        Marisa: "Marisa"
      },
    },
    letterSpacing:{
      widepro: "0.2rem",
      widepromax: "1rem"
    }
  },
  variants: {
    fill: ['hover', 'focus'], // this line does the trick
  },
  plugins: [],
}
