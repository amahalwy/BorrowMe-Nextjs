import { Provider } from "react-redux";
import { useStore } from "../redux/store/store";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const theme = extendTheme({
    styles: {
      global: {
        body: {
          bg: "white",
        },
      },
    },
    ////addd in custom breakpoints here
  });
  console.log(theme);
  return (
    // <Provider store={store}>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>

    // {/* </Provider> */}
  );
}
