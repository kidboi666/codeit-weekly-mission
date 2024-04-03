import { useCallback, useEffect, useState } from 'react';
import { getFolderRequest } from '../api';
import * as S from './FolderPage.style';
import useAsync from '../hooks/useAsync';
import Search from '../components/Search';
import AddLink from '../components/AddLink';
import Folder from '../components/Folder';
import Card from '../components/Card';

function FolderPage() {
  const [, , getUserFolder] = useAsync(getFolderRequest);
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
    <S.MainWrap>
      <S.Header>
        <AddLink />
      </S.Header>
      <Search />
      <S.FolderSection>
        <Folder folders={folders} setLinks={setLinks} />
      </S.FolderSection>
      <S.Links>
        {links.length === 0
          ? '저장된 링크가 없습니다.'
          : links.map((item) => {
              return <Card key={item.id} link={item} />;
            })}
      </S.Links>
    </S.MainWrap>
  );
}

export default FolderPage;
