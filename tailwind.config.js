/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./public/index.html', './src/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    colors: {
      'primary':"#CC2D4A",
      'secondary':"#8FA206",
      'tertiary':"#61AEC9",
      'white': "#FFF",
      'black': "#000",
      'gray': "#E5E5E5",
      'gray-300': "#6b7280",
      'gray-700': "#374151",
      'gray-800': "#1F2937",
      'gray-900': "#1F2937 ",
      current: "currentColor",

    },
    
    fontFamily: { 
      Montserrat: ["Monserrat", "sans-serif"],
    },
      extend: {
        backgroundImage: {
          'sanFrancisco': "url('../img/sanFrancisco.jpg')",
          'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
          'yosemite': "url('../img/yosemite.jpg')",
          'LA': "url('../img/LA.jpg')",
          'seattle': "url('../img/seattle.jpg')",
          'new_york': "url('../img/new_york.jpg')",
          'norway': "url('../img/norway.jpg')",
          'sydney': "url('../img/sydney.jpg')",
          'miami': "url('../img/miami.jpg')",
          'switzerland': "url('../img/switzerland.jpg')",
          'bali': "url('../img/bali.jpg')",
          'norway': "url('../img/norway.jpg')",
          'chicago': "url('../img/chicago.jpg')",
          'europe': "url('../img/europe.jpg')",
          'iceland': "url('../img/iceland.jpg')",
          }
        },
      },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar-hide"),
  ],
};