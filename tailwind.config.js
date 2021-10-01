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
    },
    fontFamily: {
      sans: ['ChakraPetch', 'sans-serif'],
      serif: ['serif'],
    },
    extend: {
      spacing: {
        'header-m': '110px',
        'header-d': '150px',
      },
      keyframes: {
        'scroll-x': {
            '0%': {
              'background-position': '0% 0%',
            },
            '50%': {
              'background-position': '50% 50%',
          },
            '100%': {
                'background-position': '100% 100%',
            },
        }
        },
        animation: {
            'scroll-x': 'scroll-x 1s linear infinite',
        }
    },
  },
  // prefix: like screen sizes md: or mouse actions hover:
  variants: {
    extend: {},
  },
  plugins: [],
}
