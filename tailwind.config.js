/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "flixx-small": "url('/src/assets/flixx-small.jpg')",
        "flixx-medium": "url('/src/assets/flixx-medium.jpg')",
        "flixx-large": "url('/src/assets/flixx-large.jpg')",
        "flixx-big": "url('/src/assets/flixx-big.jpg')",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
