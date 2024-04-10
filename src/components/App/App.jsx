import GlobalStyle from '../../styles/Global.styled';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

const App = ({ children }) => {
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
