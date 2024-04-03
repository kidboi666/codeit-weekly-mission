import { useEffect, useState } from 'react';
import { getMockFolder } from '../api';
import useAsync from '../hooks/useAsync';
import Search from '../components/Search';
import Card from '../components/Card';
import AddLink from '../components/AddLink';
import SortSelector from '../components/SortSelector';
import FolderOption from '../components/FolderOption';
import * as S from './FolderPage.style';

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
    <S.MainWrap>
      <S.Header>
        <AddLink />
      </S.Header>
      <Search />
      <S.SortSection>
        <div>
          <SortSelector />
        </div>
      </S.SortSection>
      <S.OptionSection>
        <div>
          <FolderOption />
        </div>
      </S.OptionSection>
      <S.Folder>
        {folder.map((item) => {
          const { imageSource } = item;
          return <Card key={item.id} link={item} preview={imageSource} />;
        })}
      </S.Folder>
    </S.MainWrap>
  );
}

export default FolderPage;
