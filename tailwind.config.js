module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'primary': '#AD7F62',
      'call': '#283C61',
    },
    extend: {
      backgroundImage: {
        'hero': "url('Images/background.png')",
        'overlay': "url('Images/overlay.png')",
      },
    },
  },
  plugins: [],
}