import { AppProps } from "next/app";
import GlobalStyle from "@/styles/global.styled";
import Head from "next/head";
import wrapper from "@/redux/store";
import { Provider } from "react-redux";
import { Modal, Toast, Spinner } from "@/components";
import Script from "next/script";

const LinkBrary = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <>
      <Script
        src='https://t1.kakaocdn.net/kakao_js_sdk/2.7.1/kakao.min.js'
        integrity='sha384-kDljxUXHaJ9xAb2AzRd59KxjrFjzHa5TAoFQ6GbYTCAG0bjM55XohjjDT7tDDC01'
        crossOrigin='anonymous'
      />
      <Provider store={store}>
        <Head>
          <title>Linkbrary</title>
        </Head>
        <GlobalStyle />
        <Modal />
        <Toast />
        <Spinner />
        <Component {...props.pageProps} />
      </Provider>
    </>
  );
};

export default LinkBrary;
