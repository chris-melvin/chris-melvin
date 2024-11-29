module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFEEF2",
        secondary: "#13233F",
        background: "#0E192F",
        accent: "#BA2D0B",
      },
      gridTemplateColumns: {
        autofit: "repeat(auto-fit, minmax(375px, 1fr))",
        auto: "repeat(auto-fill, minmax(375px, 1fr))",
      },
      boxShadow: {
        focus: "0 0 5px rgba(81, 203, 238, 1);",
      },
    },
  },
  plugins: [],
};
