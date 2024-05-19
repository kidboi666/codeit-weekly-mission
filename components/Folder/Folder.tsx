import React, { useEffect, useState } from "react";
import { COMBINED_FOLDER_NAME } from "@/constants/strings";
import { getAllLinkList, getLinkList } from "@/redux/actions/link";
import FolderOptionButton from "@/components/FolderOptionButton/FolderOptionButton";
import Button from "../Button/Button";
import * as S from "./Folder.styled";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { FolderList } from "@/services/types";
import { openModal } from "@/redux/reducers/modal";

interface FolderProps {
  currentFolder: string;
  setCurrentFolder: React.Dispatch<React.SetStateAction<string>>;
  currentFolderId: number;
  setCurrentFolderId: React.Dispatch<React.SetStateAction<number>>;
}

const Folder = ({ currentFolder, setCurrentFolder, currentFolderId, setCurrentFolderId }: FolderProps) => {
  const { data } = useAppSelector((state) => state.folder);
  const userId = useAppSelector((state) => state.auth.userInfo.id);
  const dispatch = useAppDispatch();

  const handleFetchLinkList = (folderItem: FolderList) => {
    dispatch(getLinkList({ userId: userId, folderId: folderItem.id }));
    setCurrentFolder(folderItem.name);
    setCurrentFolderId(folderItem.id);
  };

  const handleFetchAllLinkList = () => {
    dispatch(getAllLinkList(userId));
    setCurrentFolder(COMBINED_FOLDER_NAME);
  };

  useEffect(() => {
    handleFetchAllLinkList();
  }, []);

  return (
    <S.FolderLayout>
      <S.FolderContainer>
        <S.FolderBox>
          <Button
            variant='folderButton'
            onClick={() => handleFetchAllLinkList()}
            text={COMBINED_FOLDER_NAME}
            selected={currentFolder}
          />
          {data.map((folderItem) => (
            <Button
              key={folderItem.id}
              variant='folderButton'
              onClick={() => handleFetchLinkList(folderItem)}
              text={folderItem.name}
              selected={currentFolder}
            />
          ))}
          <div onClick={() => dispatch(openModal({ type: "addFolder" }))}>
            <Button variant='addFolder' text='폴더 추가 +' />
          </div>
        </S.FolderBox>
      </S.FolderContainer>
      <FolderOptionButton
        currentFolder={currentFolder}
        setCurrentFolder={setCurrentFolder}
        currentFolderId={currentFolderId}
      />
    </S.FolderLayout>
  );
};

export default Folder;
