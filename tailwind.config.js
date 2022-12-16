/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue': '#174159',
        'grey':
          '#D9D9D9',
        'lightBlue':
        "#3D7FA6",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      }, fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    }
      
    },
  },
  plugins: [],
}
