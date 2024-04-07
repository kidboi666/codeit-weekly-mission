import { useCallback, useEffect, useState } from 'react';
import useAsync from '../hooks/useAsync';
import { getMockFolderRequest } from '../api';
import Search from '../components/Search/Search';
import Card from '../components/Card/Card';
import FolderOwner from '../components/Folder/FolderOwner';
import * as S from './SharedPage.style';

const SharedPage = () => {
  const { requestFunction: getUserFolder } = useAsync(getMockFolderRequest);
  const [folders, setFolder] = useState([]);

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
    <S.SharedPageLayout>
      <S.HeaderBox>
        <FolderOwner />
      </S.HeaderBox>
      <Search />
      <S.FolderBox>
        {folders.map((item) => {
          return <Card key={item.id} link={item} />;
        })}
      </S.FolderBox>
    </S.SharedPageLayout>
  );
};

export default SharedPage;
