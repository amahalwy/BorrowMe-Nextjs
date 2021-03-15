import { extendTheme } from "@chakra-ui/react";
import components from "./components/index";
import colors from "./colors";

const theme = extendTheme({
  colors,
  components,
});

export default theme;
