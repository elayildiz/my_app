module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#2E6F40',
        'sage-green': '#A8DDAC',
        'baby-pink': '#F7A7C1',
        'navy-blue': '#202A44',
        'lavender': '#967bb6',
        'dark-pink': '#AA336A',
      },
      fontFamily: {
        fairy: ['Dancing Script', 'cursive'], // Add Dancing Script font
      },
    },
  },
  plugins: [],
}
