module.exports = {
  purge: {
    content: [
      './src/**/*.{js,jsx}',
      './index.html'
    ],
  },
  darkMode: false,
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      slate: '#191e29',
      primary: '#146369',
      secondary: '#024143',
    },
    fontFamily: {
      sans: ['ChakraPetch', 'sans-serif'],
      serif: ['serif'],
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
