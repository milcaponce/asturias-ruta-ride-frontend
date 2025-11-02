
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'ui-sans-serif', 'system-ui'],
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        brandGreen: '#82B245',
        brandDarkGreen: '#3C631F',
        accentBlue: '#55BBCC',
        accentRed: '#D9534F',
        backgroundLight: '#F8F8F8',
        backgroundAlt: '#F4F1EE',
        textPrimary: '#2E2E2E',
        textSecondary: '#4A6981',
        textMuted: '#6A6A6A',
      },
    },
  },
  plugins: [],
}