const WebFont = require("webfontloader");
const palette = require("./palette");

/**
 * This uses Google's font API, which will load from Google's CDN.
 * {@link https://github.com/typekit/webfontloader#google}
 */
WebFont.load({
  google: {
    families: ["Roboto:400,400i,500,500i,700,700i"]
  }
});

const fontFamily = "Roboto, Helvetica, Arial, sans-serif";
const fontSize = 14;
const lineHeight = 20;
const htmlFontSize = 16;

// Improves font rendering in supported browsers
const fontSmoothing = {
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale"
};

const fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};
const headingBaseStyles = Object.assign(
  {
    margin: "0",
    fontWeight: fontWeights.bold,
    letterSpacing: "normal"
  },
  fontSmoothing
);
const bodyBaseStyles = Object.assign(
  {
    margin: "0",
    fontWeight: fontWeights.regular,
    letterSpacing: "normal"
  },
  fontSmoothing
);
module.exports = Object.assign(
  {
    useNextVariants: true,
    fontFamily: fontFamily,
    fontSize: fontSize,
    htmlFontSize: htmlFontSize,
    lineHeight: lineHeight
  },
  fontWeights,
  {
    // Headings
    h1: Object.assign({}, headingBaseStyles, {
      fontSize: "24px",
      lineHeight: "33px"
    }),
    h2: Object.assign({}, headingBaseStyles, {
      fontSize: "20px",
      lineHeight: "28px",
      fontWeight: fontWeights.medium
    }),
    h3: Object.assign({}, headingBaseStyles, {
      fontSize: "18px",
      lineHeight: "25px"
    }),
    h4: Object.assign({}, headingBaseStyles, {
      fontSize: "16px",
      lineHeight: "23px",
      fontWeight: fontWeights.medium
    }),
    h5: Object.assign({}, headingBaseStyles, {
      fontSize: "14px",
      lineHeight: "20px"
    }),
    h6: Object.assign({}, headingBaseStyles, {
      fontSize: "12px",
      lineHeight: "17px"
    }),
    // Body Copy
    bodySmall: Object.assign({}, bodyBaseStyles, {
      fontSize: "12px",
      lineHeight: "17px"
    }),
    bodyDefault: Object.assign({}, bodyBaseStyles, {
      fontSize: "14px",
      lineHeight: "20px"
    }),
    bodyLarge: Object.assign({}, bodyBaseStyles, {
      fontSize: "16px",
      lineHeight: "23px"
    }),
    // Links
    link: Object.assign(
      {
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: fontWeights.bold,
        letterSpacing: "normal"
      },
      fontSmoothing,
      {
        color: palette.link.active,
        "&:active": {
          color: palette.link.active
        },
        "&:visited": {
          color: palette.link.visited
        },
        "&:hover": {
          color: palette.link.hover
        },
        "&:disabled": {
          color: palette.link.disabled
        }
      }
    ),
    // Buttons
    button: Object.assign(
      {
        fontSize: "15px",
        lineHeight: "21px",
        fontWeight: fontWeights.bold,
        letterSpacing: "0.25px"
      },
      fontSmoothing
    )
  }
);
