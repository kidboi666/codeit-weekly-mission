import React, { useCallback, useEffect, useState } from "react";
import { COMBINED_FOLDER_NAME } from "@/constants/strings";
import { RootState } from "@/redux/store";
import { getAllLinkList, getLinkList } from "@/redux/actions/link";
import FolderOptionButton from "./FolderOptionButton";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import * as S from "./Folder.styled";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { setSearchKeyword, setSearchResult } from "@/redux/reducers/link";

const Folder: React.FC = () => {
  const [currentFolder, setCurrentFolder] = useState("");
  const [currentFolderId, setCurrentFolderId] = useState(0);
  const [isModalTrigger, setModalTrigger] = useState(false);
  const folderList = useAppSelector((state: RootState) => state.folder.data);
  const dispatch = useAppDispatch();

  const onChangeFolderTitle = useCallback((name: string, id?: number) => {
    setCurrentFolder(name);
    if (id) {
      setCurrentFolderId(id);
    }
  }, []);

  const onChangeAllLinksFolder = useCallback(() => {
    dispatch(getAllLinkList());
    dispatch(setSearchResult([]));
    dispatch(setSearchKeyword(""));
    onChangeFolderTitle(COMBINED_FOLDER_NAME);
  }, []);

  const onChangeLinkFolder = useCallback((name: string, id: number) => {
    dispatch(getLinkList(id));
    dispatch(setSearchResult([]));
    dispatch(setSearchKeyword(""));
    onChangeFolderTitle(name, id);
  }, []);

  useEffect(() => {
    onChangeAllLinksFolder();
  }, []);

  return (
    <S.FolderLayout>
      <S.FolderContainer>
        <S.FolderBox>
          <Button
            variant={"folderButton"}
            selected={currentFolder}
            onClick={onChangeAllLinksFolder}
            text={COMBINED_FOLDER_NAME}
          />
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
