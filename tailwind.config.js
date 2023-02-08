/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1000px",
    },
    extend: {
      boxShadow: {
        "3xl": "0 0 50px",
      },
      backgroundImage: {
        mainBg: "url('/src/assets/images/bg-pattern.svg')",
        circles: "url('/src/assets/images/pattern-circles.svg')",
      },
      colors: {
        softCyan: "hsl(174, 77%, 80%)",
        strongCyan: "hsl(174, 86%, 45%)",
        lightGrayishRed: "hsl(14, 92%, 95%)",
        lightRed: "hsl(15, 100%, 70%)",
        paleBlue: "hsl(226, 100%, 87%)",
        veryPaleBlue: "hsl(230, 100%, 99%)",
        lightGrayishBlue: "hsl(224, 65%, 95%)",
        lightGrayishBlueSecond: "hsl(223, 50%, 87%)",
        grayishBlue: "hsl(225, 20%, 60%)",
        desaturatedBlue: "hsl(227, 35%, 25%)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  "tailwindCSS.includeLanguages": {
    javascript: "javascript",
    html: "HTML",
  },
  "editor.quickSuggestions": {
    strings: true,
  },
  plugins: [],
};
