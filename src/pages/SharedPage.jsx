import { useEffect, useState } from 'react';
import useAsync from '../hooks/useAsync';
import { getMockFolder } from '../api';
import Search from '../components/Search';
import Card from '../components/Card';
import FolderOwner from '../components/FolderOwner';
import * as S from './SharedPage.style';

const SharedPage = () => {
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
    <S.MainWrap>
      <S.Header>
        <FolderOwner />
      </S.Header>
      <Search />
      <S.Folder>
        {folder.map((item) => {
          const { imageSource } = item;
          return <Card key={item.id} link={item} preview={imageSource} />;
        })}
      </S.Folder>
    </S.MainWrap>
  );
};

export default SharedPage;
