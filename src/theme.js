import { createMuiTheme } from "@material-ui/core/styles";
// import "typeface-pt-sans";

export default createMuiTheme({
  overrides: {
    MuiButton: {
      text: {
        fontWeight: "700",
      },
    },
  },
  typography: {
    fontFamily: '"PT Sans", sans-serif',
  },
  printPrimary: "0,26,107",
  printSecondary: "60,154,190",
  btl: "131,175,207",
  atl: "116,172,173",
  pop: "156,39,176",
  primary: "63,81,181",
  primaryLight: "216,220,241",
  primaryDark: "10,39,131",
  secondary: "33,33,33",
  secondaryLight: "108,108,108",
  border: "224,224,224",
  success: "67,160,71",
  warning: "255,160,0",
  error: "211,47,47",
  backgroundLight: "245,245,245",
  backgroundDark: "227,227,228",
  white: "255,255,255",
  black: "0,0,0",
  baseShadow:
    "rgba(0,0,0,0.2) 0px 3px 1px -2px, rgba(0,0,0,0.14) 0px 2px 2px 0px, rgba(0,0,0,0.12) 0px 1px 5px 0px",
  hoverShadow:
    "rgba(0,0,0,0.2) 0px 3px 3px -2px, rgba(0,0,0,0.14) 0px 3px 4px 0px, rgba(0,0,0,0.12) 0px 1px 20px 0px",
  filterShadow:
    "rgba(0,0,0,0.2) 0px 5px 5px -3px, rgba(0,0,0,0.14) 0px 8px 10px 1px, rgba(0,0,0,0.12) 0px 3px 14px 2px",
});
