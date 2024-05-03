import React, { useCallback, useEffect, useState } from "react";
import { getAllLinksRequest, getLinksRequest } from "../../api";
import * as S from "./Folder.styled";
import useAsync from "../../hooks/useAsync";
import FolderOptionButton from "./FolderOptionButton";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { FolderLink, FolderList } from "../../api/types";

interface ItemListProps {
  setLinks: React.Dispatch<React.SetStateAction<FolderLink[]>>;
  onClick: (value: string, id?: number) => void;
  currentFolder: string;
}

const ItemList: React.FC<ItemListProps> = ({
  setLinks,
  onClick,
  currentFolder,
}) => {
  const { requestFunction: getAllLinks } = useAsync(getAllLinksRequest);
  const isActive = currentFolder === "전체";

  const getLinks = useCallback(async () => {
    const result = await getAllLinks();
    if (!result) return;

    const { data } = result;
    setLinks(data);
  }, [getAllLinks, setLinks]);

  const onChangeFolder = useCallback(() => {
    getLinks();
    onClick("전체");
  }, [getLinks, onClick]);

  useEffect(() => {
    onChangeFolder();
  }, [onChangeFolder]);

  return (
    <Button
      variant={"folderButton"}
      isActive={isActive}
      onClick={onChangeFolder}
      text={"전체"}
    />
  );
};

interface ItemProps {
  folder: FolderList;
  onClick: (value: string, id?: number) => void;
  setLinks: React.Dispatch<React.SetStateAction<FolderLink[]>>;
  currentFolder: string;
}

const Item: React.FC<ItemProps> = ({
  folder,
  onClick,
  setLinks,
  currentFolder,
}) => {
  const { requestFunction: getFolderLink } = useAsync(getLinksRequest);
  const isActive = folder.name === currentFolder;

  const getLinks = useCallback(
    async (id: number) => {
      const result = await getFolderLink(id);
      if (!result) return;

      const { data } = result;
      setLinks(data);
    },
    [getFolderLink, setLinks],
  );

  const onChangeFolder = () => {
    getLinks(folder.id);
    onClick(folder.name, folder.id);
  };

  return (
    <Button
      variant={"folderButton"}
      isActive={isActive}
      onClick={onChangeFolder}
      text={folder.name}
    />
  );
};

interface FolderProps {
  folderList: FolderList[];
  setLinks: React.Dispatch<React.SetStateAction<FolderLink[]>>;
}

const Folder: React.FC<FolderProps> = ({ folderList, setLinks }) => {
  const [folder, setFolder] = useState("");
  const [currentFolder, setCurrentFolder] = useState("");
  const [currentFolderId, setCurrentFolderId] = useState(0);
  const [isModalTrigger, setModalTrigger] = useState(false);

  const onChangeFolderTitle = useCallback((value: string, id?: number) => {
    setFolder(value);
    setCurrentFolder(value);
    if (id) {
      setCurrentFolderId(id);
    }
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
          <Button
            variant={"addFolder"}
            text='폴더 추가'
          />
        </div>
      </S.FolderContainer>
      <FolderOptionButton
        folderTitle={folder}
        folderId={currentFolderId}
      />
      {isModalTrigger && (
        <Modal
          variant='addFolder'
          closeModal={setModalTrigger}
        />
      )}
    </S.FolderLayout>
  );
};

export default Folder;