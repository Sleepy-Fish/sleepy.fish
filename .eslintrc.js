module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    node: true,
  },
  globals: {},
  extends: [
    "airbnb",
  ],
  plugins: ["react"],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/prefer-default-export': 'off',
    'max-len': 'off',
    'no-unused-vars': 'warn',
    'react/prop-types': ['off'],
  },
}
