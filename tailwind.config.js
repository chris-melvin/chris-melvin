module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D62828",
        primarylight: "#D628283D",
        secondary: "#224E65",
        background: "#003049",
      },
      gridTemplateColumns: {
        autofit: "repeat(auto-fit, minmax(375px, 1fr))",
      },
      dropShadow: {
        error: "0 5px 5px 0 #cc0000",
      },
    },
  },
  plugins: [],
};
