module.exports = {
  purge: {
    content: [
      './src/**/*.{js,jsx}',
      './index.html'
    ],
  },
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#146369',
        secondary: '#024143',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
