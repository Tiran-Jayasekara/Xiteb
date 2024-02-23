/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bodoni-italic': ['BodoniStd-BookItalic', 'serif'],
        
      },
      colors: {
        customPurple: '#77328b',
      },
    },
  },
  plugins: [],
});

