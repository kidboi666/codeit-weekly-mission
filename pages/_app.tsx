import { AppProps } from "next/app";
import { store } from "@/store/";
import { Provider } from "react-redux";
import GlobalStyle from "@/styles/global.styled";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Linkbrary</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
