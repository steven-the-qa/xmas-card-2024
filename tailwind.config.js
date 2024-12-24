/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'christmas-green': '#1a472a',
        'christmas-red': {
          dark: '#8b0000',
          light: '#c41e3a',
          hover: '#e52d4b'
        }
      }
    },
  },
  plugins: [],
} 