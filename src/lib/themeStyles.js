const typography = require("./typography");
const palette = require("./palette");

/**
 * default theme styles
 */
module.exports = {
  palette,
  typography,

  // 8px is used as a base spacing unit, defined here as
  // a Number rather than a String PX value so it can be multiplied easily.
  spacing: {
    unit: 8
  },

  // This fixes fatty fonts in Chrome and Firefox.
  overrides: {
    MuiTypography: {
      root: {
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale"
      }
    }
  },

  // Overrides for specific MUI component props
  // https://material-ui.com/customization/themes/#properties
  props: {}
};
