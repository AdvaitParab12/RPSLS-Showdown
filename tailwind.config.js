/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Game", "sans-serif"],
      },
      screens: {
        "h-600": { raw: "(min-height: 720px)" },
      },
    },
  },
  plugins: [],
};
