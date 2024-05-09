import { AppProps } from "next/app";
import GlobalStyle from "@/styles/global.styled";
import Head from "next/head";
import wrapper from "@/redux/store";

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

export default wrapper.withRedux(App);
