module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        tablet: "1110px", // custom screen
        "2xl": "1536px", // restore if needed
      },
    },
  },
  plugins: [],
};
