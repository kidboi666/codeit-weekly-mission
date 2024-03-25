import { useEffect, useState } from 'react';
import { getMockUser, getMockFolder } from '../api/api';

function User() {
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
    <>
      <Header profile={profile} star={star} />
      <Main />
    </>
  );
}

export default User;
