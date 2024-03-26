import Footer from './Footer';
import Nav from './Nav';

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
