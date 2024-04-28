import { useCallback, useEffect, useState } from 'react';
import { getAllLinksRequest, getLinksRequest } from '../../api';
import * as S from './Folder.styled';
import useAsync from '../../hooks/useAsync';
import FolderOptionButton from './FolderOptionButton';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const ItemList = ({ setLinks, onClick, currentFolder }) => {
  const { requestFunction: getAllLinks } = useAsync(getAllLinksRequest);
  const isActive = currentFolder === '전체';

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
    <Button
      variant={'folderButton'}
      isActive={isActive}
      onClick={onChangeFolder}
      text={'전체'}
    />
  );
};

const Item = ({ folder, onClick, setLinks, currentFolder }) => {
  const { requestFunction: getFolderLink } = useAsync(getLinksRequest);
  const isActive = folder.name === currentFolder;

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
    onClick(folder.name, folder.id);
  };

  return (
    <Button
      variant={'folderButton'}
      isActive={isActive}
      onClick={onChangeFolder}
      text={folder.name}
    />
  );
};

const Folder = ({ folderList, setLinks }) => {
  const [folder, setFolder] = useState('');
  const [currentFolder, setCurrentFolder] = useState('');
  const [currentFolderId, setCurrentFolderId] = useState(0);
  const [isModalTrigger, setModalTrigger] = useState(false);

  const onChangeFolderTitle = useCallback((value, id) => {
    setFolder(value);
    setCurrentFolder(value);
    setCurrentFolderId(id);
  }, []);

  return (
    <S.FolderLayout>
      <S.FolderContainer>
        <S.FolderBox>
          <ItemList
            currentFolder={currentFolder}
            setLinks={setLinks}
            onClick={onChangeFolderTitle}
          />
          {folderList.map((folderItem) => (
            <Item
              currentFolder={currentFolder}
              key={folderItem.id}
              folder={folderItem}
              onClick={onChangeFolderTitle}
              setLinks={setLinks}
            />
          ))}
        </S.FolderBox>
        <div onClick={() => setModalTrigger((prev) => !prev)}>
          <Button variant={'addFolder'} text='폴더 추가' />
        </div>
      </S.FolderContainer>
      <FolderOptionButton folderTitle={folder} folderId={currentFolderId} />
      {isModalTrigger && (
        <Modal variant='addFolder' closeModal={setModalTrigger} />
      )}
    </S.FolderLayout>
  );
};

export default Folder;
