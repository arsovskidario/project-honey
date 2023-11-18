/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cfb491: '#cfb491',
        starsBrown: '#BD871F',
        productWhite: '#FFF8EE',
        btnHover: '#edd4b3'
      },
    },
    screens: {
      ...defaultTheme.screens,
      'xs': {'max': '335px'},
      'md': '783px',
    },
  },
  plugins: [],
}