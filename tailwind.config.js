/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'system-ui', 'sans-serif'],
      nunito: ['Nunito Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        cobg: '#060C20',
        cotx: '#fff',
        primary: {500: '#ed5a00',},
        night: {
          50: '#e4e4eb',
          100: '#bbbace',
          200: '#e4e4eb',
          300: '#66658c',
          400: '#e4e4eb',
          500: '#112259',
          600: '#112259',
          700: '#060C20',
          800: '#040917',
          900: '#130030',
        },
      },
    },
  },
  plugins: [],
}

