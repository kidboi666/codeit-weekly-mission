import { ReactNode } from "react";
import GlobalStyle from "@/styles/Global.styled";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";

interface AppProps {
  children: ReactNode;
}

const App: React.FC<AppProps> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default App;
