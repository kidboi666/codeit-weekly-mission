import { ReactNode } from "react";
import GlobalStyle from "../../styles/Global.styled";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

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
