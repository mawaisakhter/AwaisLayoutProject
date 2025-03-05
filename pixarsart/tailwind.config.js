/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'light-move': 'lightMove 3s ease-in-out infinite',
      },
      colors: {
        primary: "#1E40AF", 
        secondary: "#9333EA", 
        accent: "#F59E0B", 
        dark: "#121212", 
        light: "#F3F4F6", 
        LimeGreen: "#B1D627"
      },
      keyframes: {
        lightMove: {
          '0%': { transform: 'rotate(-20deg)' },
          '50%': { transform: 'rotate(20deg)' },
          '100%': { transform: 'rotate(-20deg)' },
        },
      },
    },
  },
  plugins: [],
}
