/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkBorder': "#2F3138",
        'darkBackground': "#212327",
        'lightBorder': "#E8E8E8",
        'lightBackground': "#F2F2F2",
      },
    },
  },
  plugins: [],
  darkMode:'class',
}

