/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      helvetica: ["Helvetica Now Text", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      rubik: ["Rubik", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        fondo: "url('./public/icons/fondo.svg')",
      },
      boxShadow: {
        "3d": "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".hide-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".hide-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
