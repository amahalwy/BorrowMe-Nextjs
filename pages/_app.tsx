import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import App from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { wrapper } from "../redux/store";
import withRedux from "next-redux-wrapper";
import { store } from "../redux/store";

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
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    console.log(pageProps);
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <NavBar />
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    );
  }
}

const makeStore = () => store;
export default withRedux(makeStore)(MyApp);

// const WrappedApp: React.FC<AppProps> = ({ Component, pageProps }) => {
//   return (
//     <ChakraProvider theme={theme}>
//       <NavBar />
//       <Component {...pageProps} />
//     </ChakraProvider>
//   );
// };

// export default wrapper.withRedux(WrappedApp);

//   render() {
//     const { Component, pageProps, reduxStore, persistor } = this.props;
//     return (
//       <Provider store={reduxStore}>
//         <ChakraProvider theme={theme}>
//           <PersistGate loading={null} persistor={persistor}>
//             <NavBar />
//             <Component {...pageProps} />
//           </PersistGate>
//         </ChakraProvider>
//       </Provider>
//     );
//   }
// }

// export default withReduxStore(MyApp);
