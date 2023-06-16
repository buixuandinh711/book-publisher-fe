/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      screens: {
        xl: "1170px",
        "2xl": "1170px",
      },
      padding: "16px",
      center: true,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      minHeight: {
        1: "1px",
        105: "105px",
        34: "34px",
        auto: "auto",
      },
      inset: {
        "6px": "6px",
        "5px": "5px",
      },
      spacing: {
        "6px": "6px",
        "5px": "5px",
        "10px": "10px",
      },
      borderWidth: {
        10: "10px",
        20: "20px",
      },
      width: {
        left70: "calc(100% - 70px)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      // strategy: "base", // only generate global styles
      strategy: "class", // only generate classes
    }),
  ],
};
