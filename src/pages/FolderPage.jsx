import { useCallback, useEffect, useState } from 'react';
import { getFolderRequest } from '../api';
import * as S from './FolderPage.styled';
import useAsync from '../hooks/useAsync';
import Search from '../components/Search/Search';
import AddLink from '../components/AddLink/AddLink';
import Folder from '../components/Folder/Folder';
import Card from '../components/Card/Card';

function FolderPage() {
  const { requestFunction: getUserFolderList } = useAsync(getFolderRequest);
  const [folderList, setFolderList] = useState([]);
  const [links, setLinks] = useState([]);

  const getFolderList = useCallback(async () => {
    const result = await getUserFolderList();
    if (!result) return;

    const { data } = result;
    setFolderList(data);
  }, [getUserFolderList]);

  useEffect(() => {
    getFolderList();
  }, [getFolderList]);

  return (
    <S.FolderPageLayout>
      <S.HeaderBox>
        <AddLink />
      </S.HeaderBox>
      <Search />
      <S.FolderSection>
        <Folder folderList={folderList} setLinks={setLinks} />
      </S.FolderSection>
      {links.length === 0 ? (
        <S.LinkSection $noneLinks>저장된 링크가 없습니다.</S.LinkSection>
      ) : (
        <S.LinkSection>
          {links.map((link) => {
            return <Card key={link.id} link={link} folderList={folderList} />;
          })}
        </S.LinkSection>
      )}
    </S.FolderPageLayout>
  );
}

export default FolderPage;
