import { useStore } from "../redux/store/store";
import { Provider } from "react-redux";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import theme from "../theme/theme"
export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  console.log(theme)
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
