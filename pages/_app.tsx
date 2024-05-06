import type { AppProps } from "next/app";
import GlobalStyle from "@/styles/Global.styled";
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
