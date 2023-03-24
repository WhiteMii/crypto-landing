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
        "gradient-first": "#2600fc",
        "gradient-second": "#ff00ea",
        bg: "#0f051d",
        "green-500": "rgb(14, 203, 129)",
        "bg-box": "rgba(255, 255, 255, 0.05)",
      },

      fontFamily: {
        headingFont: ["Space Grotesk", "sans-serif"],
        commonFont: ["Noto Sans Georgian", "sans-serif"],
      },
      backgroundImage: {
        footer: "url('./assets/footer-bg.png')",
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
