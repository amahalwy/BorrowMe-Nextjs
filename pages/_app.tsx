import React from "react";
import App, { AppInitialProps, AppContext } from "next/app";
import { ReactReduxContext, useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { wrapper } from "../redux/store";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import theme from "../theme/theme";
import { CLEAR_MODAL } from "../redux/actions/postingActions";
import "../styles.css";

const MyApp = ({ Component, pageProps }) => {
  const store: any = useStore();
  return (
    <>
      <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
        <ChakraProvider theme={theme}>
          <NavBar />
          <Component {...pageProps} />
        </ChakraProvider>
      </PersistGate>
    </>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  return {
    pageProps: {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
      pathname: ctx.pathname,
    },
  };
};

export default wrapper.withRedux(MyApp);
