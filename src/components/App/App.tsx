import { ReactNode } from 'react';
import GlobalStyle from '../../styles/Global.styled';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

interface Props {
  children: ReactNode;
}

const App = ({ children }: Props) => {
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
