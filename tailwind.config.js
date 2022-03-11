module.exports = {
  content: ["./index.html", "./src/**/*.{css,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
