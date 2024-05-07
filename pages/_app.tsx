import { AppProps } from "next/app";
import store from "@/redux/store";
import { Provider } from "react-redux";
import GlobalStyle from "@/styles/global.styled";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Head>
        <title>Linkbrary</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
