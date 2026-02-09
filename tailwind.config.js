/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6a11cb",
        secondary: "#2575fc",
        accent: "#ff5858",
        darkBlue: "#191970",
        background: "#ffffff",
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
      }
    },
  },
  plugins: [],
}