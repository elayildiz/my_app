module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#2E6F40', // Add forest green
        'sage-green': '#9C9F84',  // Add sage green
        'baby-pink': '#F7A7C1',   // Add baby pink
        'baby-blue': '#89CFF0', // Add baby blue
        'lavender': '#967bb6', // Add lavender
      },
      fontFamily: {
        fairy: ['Dancing Script', 'cursive'], // Add Dancing Script font
      },
    },
  },
  plugins: [],
}
