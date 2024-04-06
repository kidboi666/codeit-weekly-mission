import { useCallback, useEffect, useState } from 'react';
import { getFolderRequest } from '../api';
import * as S from './FolderPage.style';
import useAsync from '../hooks/useAsync';
import Search from '../components/Search/Search';
import AddLink from '../components/AddLink/AddLink';
import Folder from '../components/Folder/Folder';
import Card from '../components/Card/Card';

function FolderPage() {
  const { requestFunction: getUserFolder } = useAsync(getFolderRequest);
  const [folders, setFolders] = useState([]);
  const [links, setLinks] = useState([]);

  const getFolders = useCallback(async () => {
    const result = await getUserFolder();
    if (!result) return;

    const { data } = result;
    setFolders(data);
  }, [getUserFolder]);

  useEffect(() => {
    getFolders();
  }, [getFolders]);

  return (
    <S.FolderPageLayout>
      <S.HeaderBox>
        <AddLink />
      </S.HeaderBox>
      <Search />
      <S.FolderSection>
        <Folder folders={folders} setLinks={setLinks} />
      </S.FolderSection>
      {links.length === 0 ? (
        <S.Links $noneLinks>저장된 링크가 없습니다.</S.Links>
      ) : (
        <S.Links>
          {links.map((item) => {
            return <Card key={item.id} link={item} />;
          })}
        </S.Links>
      )}
    </S.FolderPageLayout>
  );
}

export default FolderPage;
