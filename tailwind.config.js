/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        secondary: "#D3A518",
        lightPrimary: "#041C40",
        primary: "#03132B",
        deepBlue:"#020E20",

        neutral: {
          500: "#5E5E5E",
          600: "#363636",
          700: "#0E0E0E",
        },
      },
    },
  },
  plugins: [],
};
