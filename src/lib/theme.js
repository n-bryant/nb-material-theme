const { createMuiTheme } = require("@material-ui/core/styles");
const merge = require("lodash.merge");
const styles = require("./themeStyles");
const typography = require("./typography");
const palette = require("./palette");

/**
 * @param {Object} config to override props from the default MUI theme config [https://material-ui.com/customization/themes/]
 * @return {Function} function that accepts a config to be merged with default theme `styles` config
 */
module.exports = {
  createMuiTheme: function createTheme(config) {
    return createMuiTheme(merge(styles, config));
  },
  styles: styles,
  typography: typography,
  palette: palette
};
