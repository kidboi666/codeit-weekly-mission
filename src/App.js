import { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { getMockUser, getMockFolder } from './api';

function App() {
  const [profile, setProfile] = useState([]);
  const [folder, setFolder] = useState([]);
  const [star, setStar] = useState('');

  const getUser = async () => {
    let result;
    try {
      result = await getMockUser();
    } catch (error) {
      console.error(error);
    }
    setProfile(result);
  };

  const getFolder = async () => {
    let result;
    try {
      result = await getMockFolder();
    } catch (error) {
      console.error(error);
    }
    const {
      folder: { links },
      folder: { name },
    } = result;
    setFolder(links);
    setStar(name);
  };

  useEffect(() => {
    getUser();
    getFolder();
  }, []);

  return (
    <div className="App">
      <Header profile={profile} star={star} />
      <Main folder={folder} />
      <Footer />
    </div>
  );
}

export default App;
