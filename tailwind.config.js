module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],

  theme: {
    extend: {
      fontFamily: {
        'Roboto': ['Roboto', 'Arial', 'sans-serif']
      },
      spacing: {
        '14': '3.5rem',
        '18': '4.5rem',
        '68': '16rem',
        '92': '23rem'
      }
    },
  },

}
