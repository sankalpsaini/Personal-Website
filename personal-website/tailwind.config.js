module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 1s linear 3',
      },
      colors: {
        'background_main': '#2D283E',
        'background_about': '#F7FBFF',
      },
    },
  },
  plugins: [],
  darkMode: "media",
}
