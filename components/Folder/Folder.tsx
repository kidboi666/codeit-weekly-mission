import React, { useCallback, useEffect, useState } from "react";
import { COMBINED_FOLDER_NAME } from "@/constants/strings";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { getAllLinkList, getLinkList } from "@/redux/actions/link";
import FolderOptionButton from "./FolderOptionButton";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import * as S from "./Folder.styled";

const Folder: React.FC = () => {
  const [currentFolder, setCurrentFolder] = useState("");
  const [currentFolderId, setCurrentFolderId] = useState(0);
  const [isModalTrigger, setModalTrigger] = useState(false);
  const folderList = useSelector((state: RootState) => state.folder.data);
  const dispatch = useDispatch();

  const onChangeFolderTitle = useCallback((name: string, id?: number) => {
    setCurrentFolder(name);
    if (id) {
      setCurrentFolderId(id);
    }
  }, []);

  const onChangeAllLinksFolder = useCallback(() => {
    dispatch(getAllLinkList());
    onChangeFolderTitle(COMBINED_FOLDER_NAME);
  }, []);

  const onChangeLinkFolder = useCallback((name: string, id: number) => {
    dispatch(getLinkList(id));
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
