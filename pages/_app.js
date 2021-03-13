import React from "react";
import App from "next/app";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { PersistGate } from "redux-persist/lib/integration/react";
import NavBar from "../components/NavBar";

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
class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore, persistor } = this.props;
    return (
      <Provider store={reduxStore}>
        <ChakraProvider theme={theme}>
          <PersistGate loading={null} persistor={persistor}>
            <NavBar />
            <Component {...pageProps} />
          </PersistGate>
        </ChakraProvider>
      </Provider>
    );
  }
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  // we can dispatch from here too
  ctx.reduxStore.dispatch({ type: "FOO", payload: "foo" });
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  return { pageProps };
};

export default withReduxStore(MyApp);
