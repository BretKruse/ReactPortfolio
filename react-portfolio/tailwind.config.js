/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{html,jsx}'],
  darkmode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'serif'],
      }
    },
  },
  plugins: [],
}
