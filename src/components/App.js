import Footer from './Footer';
import Nav from './Nav';

function App({ children }) {
  return (
    <div className="App">
      <Nav />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default App;
