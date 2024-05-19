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
  selectedFolder: string;
  setSelectedFolder: React.Dispatch<React.SetStateAction<string>>;
  selectedFolderId: number;
  setSelectedFolderId: React.Dispatch<React.SetStateAction<number>>;
}

const Folder = ({ selectedFolder, setSelectedFolder, selectedFolderId, setSelectedFolderId }: FolderProps) => {
  const { data } = useAppSelector((state) => state.folder);
  const userId = useAppSelector((state) => state.auth.userInfo.id);
  const dispatch = useAppDispatch();

  const handleFetchLinkList = (folderItem: FolderList) => {
    dispatch(getLinkList({ userId: userId, folderId: folderItem.id }));
    setSelectedFolder(folderItem.name);
    setSelectedFolderId(folderItem.id);
  };

  const handleFetchAllLinkList = () => {
    dispatch(getAllLinkList(userId));
    setSelectedFolder(COMBINED_FOLDER_NAME);
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
            selected={selectedFolder}
          />
          {data.map((folderItem) => (
            <Button
              key={folderItem.id}
              variant='folderButton'
              onClick={() => handleFetchLinkList(folderItem)}
              text={folderItem.name}
              selected={selectedFolder}
            />
          ))}
          <div onClick={() => dispatch(openModal({ type: "addFolder" }))}>
            <Button variant='addFolder' text='폴더 추가 +' />
          </div>
        </S.FolderBox>
      </S.FolderContainer>
      <FolderOptionButton
        selectedFolder={selectedFolder}
        setSelectedFolder={setSelectedFolder}
        selectedFolderId={selectedFolderId}
      />
    </S.FolderLayout>
  );
};

export default Folder;
