/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
        textPrimary: '#4A4A4A',
        textSecondary: '#547895',
        textMuted: '#6D6D6D',
        accentRed: '#D9534F',
        accentBlue: '#55BBCC',
        backgroundLight: '#F8F8F8',
        backgroundAlt: '#F4F1EE',
      },
      
    },
  },
  plugins: [],
}