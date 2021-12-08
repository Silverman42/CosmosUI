const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './dist/**/*.html',
    './pages/**/*.{js,jsx,ts,tsx,vue}',
    './components/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '320px',
      md: '576px',
      lg: '768px',
      xl: '1024px',
      '2xl': '1920px',
    },
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
