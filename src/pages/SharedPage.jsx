import { useCallback, useEffect, useState } from 'react';
import useAsync from '../hooks/useAsync';
import { getMockFolderRequest } from '../api';
import Search from '../components/Search/Search';
import Card from '../components/Card/Card';
import FolderOwner from '../components/Folder/FolderOwner';
import * as S from './SharedPage.style';

const SharedPage = () => {
  const { requestFunction: getUserFolder } = useAsync(getMockFolderRequest);
  const [folder, setFolder] = useState([]);

  const getFolder = useCallback(async () => {
    const result = await getUserFolder();
    if (!result) return;

    const {
      folder: { links },
    } = result;
    setFolder(links);
  }, [getUserFolder]);

  useEffect(() => {
    getFolder();
  }, [getFolder]);

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
