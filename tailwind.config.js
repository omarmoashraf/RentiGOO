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
          primary_text: "#0f2027",
          secondary_text: "#cccccc",
        },
        dark: {
          background: "#0f2027",
          nav_icons:"#ffffff",
          links_icons:"#ffffff",
          header_spaces: "#203a43",
          secondary: "#2c5364",
          Buttons: "#00c6ff",
          header_text: "#ffffff",
          secondary_text: "#cccccc",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
});
