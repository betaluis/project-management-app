module.exports = { content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'heading': '#444',
        'text': '#999',
        'primary': '#8d69f1',
        'highlight': '#d13267',
        'bg-color': '#f4f4f4'
      }
    },
    fontFamily: {
      "poppins": ["Poppins, sans-serif"],
    },
    fontSize: {
      'sm': '1rem',
      'base': "1.1rem",
    }
  },
  plugins: [],
}
