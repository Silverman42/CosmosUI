const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './dist/**/*.html',
    './pages/**/*.{js,jsx,ts,tsx,vue}',
    './components/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
      },
      fontFamily: {
        sans: ['Inter UI Regular', 'system-ui'],
        serif: ['ui-serif', 'Georgia'],
        'sans-bold': ['Inter UI Bold', 'SFMono-Regular'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
