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
      boxShadow: {
        focus: "0 0 5px rgba(81, 203, 238, 1);",
      },
    },
  },
  plugins: [],
};
