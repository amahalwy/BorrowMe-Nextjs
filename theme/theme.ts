import { extendTheme } from "@chakra-ui/react";
import components from "./components/index";
import colors from "./colors";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
  "450px": "450px",
  "500px": "500px",
});

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "rgb(238,238,238)",
        height: "100vh",
      },
      "#__next": {
        height: "100%",
      },
    },
  },
  colors,
  components,
  breakpoints,
});

export default theme;
