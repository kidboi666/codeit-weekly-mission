import type { AppProps } from "next/app";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import GlobalStyle from "@/styles/Global.styled";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
