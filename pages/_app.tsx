import React from "react";
import { Provider, useStore } from "react-redux";
import { ChakraProvider, Box, Spinner } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { PersistGate } from "redux-persist/integration/react";
import theme from "../theme/theme";
import { wrapper } from "../redux/store";
import App from "next/app";
import { ReactReduxContext } from "react-redux";

export default wrapper.withRedux(({ Component, pageProps }) => {
  const store = useStore();
  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
      <ChakraProvider theme={theme}>
        <NavBar />
        <Component {...pageProps} />
      </ChakraProvider>
    </PersistGate>
  );
});
