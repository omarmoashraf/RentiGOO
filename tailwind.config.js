const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#ffffff",
          Buttons: "#0072ff",
          secondary: "#00c6ff",
          text: "#0f2027",
          gray: "#cccccc",
        },
        dark: {
          background: "#0f2027",
          primary: "#203a43",
          secondary: "#2c5364",
          accent: "#0072ff",
          text: "#ffffff",
          gray: "#cccccc",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
});
