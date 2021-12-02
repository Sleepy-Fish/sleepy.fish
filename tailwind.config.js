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
      highlight: '#3fbd93',
      textprimary: '#09BAC3',
      href: '#C2A3FF',
    },
    fontFamily: {
      sans: ['ChakraPetch', 'sans-serif'],
      serif: ['serif'],
    },
    extend: {
      height: {
        header: '20vh',
        content: '60vh',
        footer: '20vh',
      },
    },
  },
  // prefix: like screen sizes md: or mouse actions hover:
  variants: {
    extend: {},
  },
  plugins: [],
}
