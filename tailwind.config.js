/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#343a40',
        'light-gray': '#8d8d8d',
        'green-start': '#4c9404',
        'green-end': '#345c04',
        'custom-gray': '#8d8d8d',
        'custom-icon-bg': '#8d8d8d',
        'custom-icon-hover': '#33383b',
        'hover-blue': 'blue', // Customize this color if necessary
      },
    },
  },
  plugins: [],
}
