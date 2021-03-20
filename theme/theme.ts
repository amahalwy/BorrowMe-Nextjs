import { extendTheme } from "@chakra-ui/react";
import components from "./components/index";
import colors from "./colors";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "rgb(238,238,238)",
      },
    },
  },
  colors,
  components,
});

export default theme;
