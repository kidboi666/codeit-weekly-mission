import { useCallback, useEffect, useState } from 'react';
import { getAllLinkRequest, getLinkRequest } from '../api';
import * as S from './Folder.style';
import useAsync from '../hooks/useAsync';
import SortingButton from './SortingButton';
import FolderOption from './FolderOption';

const AllItems = ({ setLinks, onClick }) => {
  const [, , getAllLinks] = useAsync(getAllLinkRequest);

  const getLinks = useCallback(async () => {
    const result = await getAllLinks();
    if (!result) return;

    const { data } = result;
    setLinks(data);
  }, [getAllLinks, setLinks]);

  const onChangeFolder = useCallback(() => {
    getLinks();
    onClick('전체');
  }, [getLinks, onClick]);

  useEffect(() => {
    onChangeFolder();
  }, [onChangeFolder]);

  return <SortingButton onClick={onChangeFolder}>전체</SortingButton>;
};

const Item = ({ folder, onClick, setLinks }) => {
  const [, , getFolderLink] = useAsync(getLinkRequest);

  const getLinks = useCallback(
    async (id) => {
      const result = await getFolderLink(id);
      if (!result) return;

      const { data } = result;
      setLinks(data);
    },
    [getFolderLink, setLinks]
  );

  const onChangeFolder = () => {
    getLinks(folder.id);
    onClick(folder.name);
  };

  return <SortingButton onClick={onChangeFolder}>{folder.name}</SortingButton>;
};

const Folder = ({ folders, setLinks }) => {
  const [folder, setFolder] = useState('');

  const onChangeFolderTitle = useCallback((value) => {
    setFolder(value);
  }, []);

  return (
    <S.Wrap>
      <S.SortWrap>
        <S.SortDiv>
          <AllItems folder={folder} setLinks={setLinks} onClick={onChangeFolderTitle} />
          {folders.map((item) => (
            <Item key={item.id} folder={item} onClick={onChangeFolderTitle} setLinks={setLinks} />
          ))}
        </S.SortDiv>
        <div>
          <S.AddButton>폴더 추가 +</S.AddButton>
        </div>
      </S.SortWrap>
      <FolderOption folderTitle={folder} />
    </S.Wrap>
  );
};

export default Folder;
