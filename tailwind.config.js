/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        navbar: "110px",
      },
      keyframes: {
        "transition-right": {
          "0%, 100%": { transform: "translateX(0px)" },
          "50% ": { transform: "translateX(10px)" },
        },
      },
      animation: {
        "transition-right": "transition-right 300ms ease-in-out ",
      },
    },
  },
  plugins: [],
};
