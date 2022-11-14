/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'heading': '#444',
        'text': '#999',
        'primary': '#8d69f1',
        'highlight': '#d13267',
        'background': '#f4f4f4',
      },
      fontFamily: {
        poppins: ["Poppins", 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
