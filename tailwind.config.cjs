/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#001C35',
        lightnavy: '#012b52',
        lightblue: '#47B5FF'
      },
      container: {
        center: true,
        padding: '100px',
      },
    },
    screens: {
      'mobile-xs': {max: '320px'},
      'mobile-md': {max: '375px'},
      'mobile-lg': {max: '450px'},
      'tablet' : {max: '740px'}
    },
  },
  plugins: [],
}
