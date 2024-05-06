import { AppProps } from "next/app";
import { store } from "@/store/";
import { Provider } from "react-redux";
import GlobalStyle from "@/styles/Global.styled";
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
