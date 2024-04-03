import { useCallback, useEffect, useState } from 'react';
import { getFolderRequest } from '../api';
import useAsync from '../hooks/useAsync';
import Search from '../components/Search';
import AddLink from '../components/AddLink';
import FolderOption from '../components/FolderOption';
import * as S from './FolderPage.style';
import Folder from '../components/Folder';

function FolderPage() {
  const [, , getUserFolder] = useAsync(getFolderRequest);
  const [folder, setFolder] = useState([]);
  const [card, setCard] = useState(null);

  const getFolder = useCallback(async () => {
    const result = await getUserFolder();
    if (!result) return;

    const { data } = result;
    setFolder(data);
    console.log(data);
  }, [getUserFolder]);

  useEffect(() => {
    getFolder();
  }, [getFolder]);

  return (
    <S.MainWrap>
      <S.Header>
        <AddLink />
      </S.Header>
      <Search />
      <S.SortSection>
        <Folder folder={folder} />
      </S.SortSection>
      <S.OptionSection>
        <div>
          <FolderOption />
        </div>
      </S.OptionSection>
      <S.Folder>
        {/* {folder.map((item) => {
          return <Folder key={item.id} data={item} />;
        })} */}
      </S.Folder>
    </S.MainWrap>
  );
}

export default FolderPage;
