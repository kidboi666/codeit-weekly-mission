import type { AppProps } from "next/app";
import GlobalStyle from "@/styles/Global.styled";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
