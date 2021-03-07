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
  });
  return (
    // <Provider store={store}>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>

    // {/* </Provider> */}
  );
}
