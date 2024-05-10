import { AppProps } from "next/app";
import GlobalStyle from "@/styles/global.styled";
import Head from "next/head";
import wrapper from "@/redux/store";
import { Provider } from "react-redux";
import Modal from "@/components/Modal/Modal";

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Linkbrary</title>
        </Head>
        <GlobalStyle />
        <Modal />
        <Component {...props.pageProps} />
      </Provider>
    </>
  );
};

export default App;
