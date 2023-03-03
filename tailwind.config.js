/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    screens: {
      'small-pc': {'max': '1108px'},
      'big-tablet': {'max': '992px'},
      'tablet': {'max': '767px'},
      'phone': {'max': '600px'},
      'small-phone': {'max': '320px'},
    },

    fontFamily: {
      'sans': ['Josefin Sans', 'sans-serif']
    },

    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'purple': '#a21caf',
        'white': {
          'pure': '#ffffff',
          'secondary': '#F5F5F5'
        } ,
        'black': '#000000',
      },

    },
  },
  plugins: [],
};
