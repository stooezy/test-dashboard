/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#545DFF',
        'primary-klikoo': '#989EFF',
        'primary-klikoo-80': '#F3F4FF',
        content: '#7A7A7A',
        sidebar: '#FCFCFF',
        error: '#E94948',
        success: '#36D189',
        caution: '#FFDC7D',
        dark: '#212121',
      },
      fontFamily: {
        sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('daisyui')],
};
