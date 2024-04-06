import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

const App = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default App;
