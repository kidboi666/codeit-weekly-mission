import React, { useEffect, useState } from "react";
import { COMBINED_FOLDER_NAME } from "@/constants/strings";
import { getAllLinkList, getLinkList } from "@/redux/actions/link";
import FolderOptionButton from "./FolderOptionButton";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import * as S from "./Folder.styled";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { FolderList } from "@/services/types";
import { setSelectedFolder } from "@/redux/reducers/folder";
import { openModal } from "@/redux/reducers/modal";

const Folder: React.FC = () => {
  const { data, selectedFolder } = useAppSelector((state) => state.folder);
  const userId = useAppSelector((state) => state.auth.userInfo.id);
  const dispatch = useAppDispatch();

  const handleFetchLinkList = (folderItem: FolderList) => {
    dispatch(getLinkList({ userId: userId, folderId: folderItem.id }));
    dispatch(setSelectedFolder({ selectedFolder: folderItem.name, selectedFolderId: folderItem.id }));
  };

  const handleFetchAllLinkList = () => {
    dispatch(getAllLinkList(userId));
    dispatch(setSelectedFolder({ selectedFolder: COMBINED_FOLDER_NAME }));
  };

  return (
    <S.FolderLayout>
      <S.FolderContainer>
        <S.FolderBox>
          <Button
            variant={"folderButton"}
            onClick={() => handleFetchAllLinkList()}
            text={COMBINED_FOLDER_NAME}
            selected={selectedFolder}
          />
          {data.map((folderItem) => (
            <Button
              key={folderItem.id}
              variant={"folderButton"}
              onClick={() => handleFetchLinkList(folderItem)}
              text={folderItem.name}
              selected={selectedFolder}
            />
          ))}
          <div onClick={() => dispatch(openModal("addFolder"))}>
            <Button variant={"addFolder"} text={"폴더 추가 +"} width={"95px"} />
          </div>
        </S.FolderBox>
      </S.FolderContainer>
      <FolderOptionButton />
    </S.FolderLayout>
  );
};

export default Folder;
