/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'courgette': ['Courgette', 'serif'],
      },
      colors:{
        ECB390 : '#ECB390',
        FFF6DC: '#FFF6DC',
        searchBarColor: '#91C8E4',
        searchButtonColor: '#75C2F6'
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  plugins: [],
  corePlugins: {
    // ...
    backdropFilter: true,
  }
}

