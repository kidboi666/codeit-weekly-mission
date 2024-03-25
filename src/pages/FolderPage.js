import './FolderPage.css';
import Search from '../components/Search';
import Card from '../components/Card';
import FolderOwner from '../components/FolderOwner';
import { useEffect, useState } from 'react';
import { getMockFolder } from '../api/api';
import useAsync from '../hooks/useAsync';

function FolderPage() {
  const [, , getUserFolder] = useAsync(getMockFolder);
  const [folder, setFolder] = useState([]);

  const getFolder = async () => {
    const result = await getUserFolder();
    if (!result) return;

    const {
      folder: { links },
    } = result;
    setFolder(links);
  };

  useEffect(() => {
    getFolder();
  }, []);

  return (
    <main className="main_wrap">
      <FolderOwner />
      <Search />
      <ul className="folder">
        {folder.map((item) => {
          const { createdAt, url, title, description, imageSource } = item;
          const initialValue = { createdAt, url, title, description, imageSource };
          return <Card key={item.id} initialValue={initialValue} preview={imageSource} />;
        })}
      </ul>
    </main>
  );
}

export default FolderPage;
