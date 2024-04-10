import { useCallback, useEffect, useState } from 'react';
import { getAllLinksRequest, getLinksRequest } from '../../api';
import * as S from './Folder.styled';
import useAsync from '../../hooks/useAsync';
import FolderSelectButton from './FolderSelectButton.styled';
import FolderOptionButton from './FolderOptionButton';

const AllItems = ({ setLinks, onClick, currentFolder }) => {
  const { requestFunction: getAllLinks } = useAsync(getAllLinksRequest);
  const isActive = currentFolder === '전체' ? true : false;

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

  return (
    <FolderSelectButton $isActive={isActive} onClick={onChangeFolder}>
      전체
    </FolderSelectButton>
  );
};

const Item = ({ folder, onClick, setLinks, currentFolder }) => {
  const { requestFunction: getFolderLink } = useAsync(getLinksRequest);
  const isActive = folder.name === currentFolder ? true : false;

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

  return (
    <FolderSelectButton $isActive={isActive} onClick={onChangeFolder}>
      {folder.name}
    </FolderSelectButton>
  );
};

const Folder = ({ folders, setLinks }) => {
  const [folder, setFolder] = useState('');
  const [currentFolder, setCurrentFolder] = useState('');

  const onChangeFolderTitle = useCallback((value) => {
    setFolder(value);
    setCurrentFolder(value);
  }, []);

  return (
    <S.FolderLayout>
      <S.FolderContainer>
        <S.FolderBox>
          <AllItems
            currentFolder={currentFolder}
            setLinks={setLinks}
            onClick={onChangeFolderTitle}
          />
          {folders.map((item) => (
            <Item
              currentFolder={currentFolder}
              key={item.id}
              folder={item}
              onClick={onChangeFolderTitle}
              setLinks={setLinks}
            />
          ))}
        </S.FolderBox>
        <div>
          <S.AddButton>폴더 추가 +</S.AddButton>
        </div>
      </S.FolderContainer>
      <FolderOptionButton folderTitle={folder} />
    </S.FolderLayout>
  );
};

export default Folder;
