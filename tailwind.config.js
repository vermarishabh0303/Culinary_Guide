/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'popi': ['Poppins', 'sans-serif'],
        'robo': ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: 'rgb(247, 247, 195)', // Light cream color for stats
        primaryDark: '#1d4ed8', // blue-700 equivalent
        secondary: '#f4ede4', // Peach/cream background
      },
      animation: {
        'carousel': 'carousel 30s linear infinite',
        'carousel-reverse': 'carousel-reverse 30s linear infinite',
      },
      keyframes: {
        carousel: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'carousel-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
} 