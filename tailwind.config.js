/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#8BC34A',
        secondary: '#E0E0E0',
        text: '#333333',
        lightText: '#FFFFFF',
        background: '#F5F5F5',
      },
      fontFamily: {
        'pacifico': ['Pacifico-Regular'],
      },

    },
  },
  plugins: [],
}