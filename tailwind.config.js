const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        ageeza: {
          default: "#43b02a",
          lighter: "#58d13c",
          blue: "#2a86b0",
        },
      },
      fontFamily: {
        primary: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      flex: {
        1.6: "1.6 1.6 0%",
        2: "2 2 0%",
      },
    },
  },
  variants: {},
  plugins: [],
};
