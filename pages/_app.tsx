import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Box, ChakraProvider } from "@chakra-ui/react";
import NavBar from "../components/NavBar/NavBar";
import theme from "../theme/theme";
import { useStore } from "../redux/store";
import "../styles.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Box h="100%">
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <NavBar />
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    </Box>
  );
};

export default MyApp;
