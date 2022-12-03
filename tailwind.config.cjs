/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'convergence' : ['Convergence', 'sans-serif'],
        'vazir' : ['Vazir', 'sans-serif']
      },height: {
        '90': '90%'
      },width: {
        '95' : '95%',
        '90' : '90%' ,
        '98' : '98%',
        '45' : '45%' 
      },colors: {
        'light-black' : '#0C0C0C',
        'light-black/70' : 'rgb(12 12 12 / 0.7)'
      }
    },
  },
  plugins: [],
}
