/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      colors: {
        "primary-500": "#f3f2f4",
        "secondary-500": "linear-gradient(25deg, #2600fc, #ff00ea)",
        "bg-500": "#0f051d",
        "green-500": "rgb(14, 203, 129)",
      },

      fontFamily: {
        headingFont: ["Space Grotesk", "sans-serif"],
        commonFont: ["Noto Sans Georgian", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
