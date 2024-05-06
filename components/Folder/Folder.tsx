import React, { useCallback, useEffect, useState } from "react";
import { getAllLinksRequest, getLinksRequest } from "../../pages/api";
import * as S from "./Folder.styled";
import useAsync from "../../hooks/useAsync";
import FolderOptionButton from "./FolderOptionButton";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { FolderLink, FolderList } from "../../pages/api/types";

interface FolderProps {
  folderList: FolderList[];
  setLinks: React.Dispatch<React.SetStateAction<FolderLink[]>>;
  setSearchResult: React.Dispatch<React.SetStateAction<string>>;
}

const Folder: React.FC<FolderProps> = ({ folderList, setLinks, setSearchResult }) => {
  const [currentFolder, setCurrentFolder] = useState("");
  const [currentFolderId, setCurrentFolderId] = useState(0);
  const [isModalTrigger, setModalTrigger] = useState(false);
  const { requestFunction: allLinksRequest } = useAsync(getAllLinksRequest);
  const { requestFunction: LinkRequest } = useAsync(getLinksRequest);

  const getAllLinks = async () => {
    const { data } = await allLinksRequest();
    if (!data) return [];
    setLinks(data);
  };

  const getLink = async (id: number) => {
    const { data } = await LinkRequest(id);
    if (!data) return [];
    setLinks(data);
  };

  const onChangeFolderTitle = useCallback((name: string, id?: number) => {
    setCurrentFolder(name);
    setSearchResult("");
    if (id) {
      setCurrentFolderId(id);
    }
  }, []);

  const onChangeAllLinksFolder = useCallback(() => {
    getAllLinks();
    onChangeFolderTitle("전체");
  }, []);

  const onChangeLinkFolder = useCallback((name: string, id: number) => {
    getLink(id);
    onChangeFolderTitle(name, id);
  }, []);

  useEffect(() => {
    onChangeAllLinksFolder();
  }, []);

  return (
    <S.FolderLayout>
      <S.FolderContainer>
        <S.FolderBox>
          <Button variant={"folderButton"} selected={currentFolder} onClick={onChangeAllLinksFolder} text={"전체"} />
          {folderList.map((folderItem) => (
            <Button
              key={folderItem.id}
              variant={"folderButton"}
              selected={currentFolder}
              onClick={() => onChangeLinkFolder(folderItem.name, folderItem.id)}
              text={folderItem.name}
            />
          ))}
        </S.FolderBox>
        <div onClick={() => setModalTrigger((prev) => !prev)}>
          <Button variant={"addFolder"} text='폴더 추가' />
        </div>
      </S.FolderContainer>
      <FolderOptionButton folderTitle={currentFolder} folderId={currentFolderId} />
      {isModalTrigger && <Modal variant='addFolder' closeModal={setModalTrigger} />}
    </S.FolderLayout>
  );
};

export default Folder;
