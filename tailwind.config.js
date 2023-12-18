/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#183D3D",
        secondary: "#5C8374",
        dark: "#222222",
      },
    },
  },
  plugins: [],
};
