import './FolderPage.css';
import Search from '../components/Search';
import Card from '../components/Card';
import { useEffect, useState } from 'react';
import { getMockFolder } from '../api';
import useAsync from '../hooks/useAsync';
import AddLink from '../components/AddLink';
import SortSelector from '../components/SortSelector';
import FolderOption from '../components/FolderOption';
import styled from 'styled-components';

const Div = styled.div`
  width: 1060px;
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;

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
      <div className="main_header">
        <AddLink />
      </div>
      <Search />
      <SortSelector />
      <Div>
        <H1>유용한 글</H1>
        <FolderOption />
      </Div>
      <ul className="folder">
        {folder.map((item) => {
          const { imageSource } = item;
          return <Card key={item.id} link={item} preview={imageSource} />;
        })}
      </ul>
    </main>
  );
}

export default FolderPage;
