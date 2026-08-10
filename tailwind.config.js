/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F8F6F3",
        warmgray: "#E8E5E0",
        stone: "#C9C3BB",
        mist: "#9C948A",
        brown: "#8B6548",
        darkbrown: "#6B3A2A",
        chocolate: "#3E2A1E",
        ink: "#1B1B1B",
        coal: "#111111",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      maxWidth: {
        content: "1440px",
      },
    },
  },
  plugins: [],
};
