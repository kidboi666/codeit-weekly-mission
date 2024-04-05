import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

function App({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default App;
