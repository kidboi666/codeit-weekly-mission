import React, { useEffect } from "react";
import { COMBINED_FOLDER_NAME } from "@/src/constants/strings";
import { FolderOptionButton, Button } from "@/src/components";
import * as S from "./Folder.styled";
import { useAppDispatch, useAppSelector } from "@/src/hooks/useApp";
import { openModal } from "@/src/store/reducers/modal";
import { useRouter } from "next/router";
import { FolderList } from "@/src/types";
import { setCurrentFolder } from "@/src/store/reducers/folder";

const Folder = () => {
  const dispatch = useAppDispatch();
  const { data: folderList, currentFolder } = useAppSelector(
    (state) => state.folder,
  );
  const router = useRouter();

  const selectFolder = (folderName: string, folderId: number) => {
    dispatch(setCurrentFolder({ name: folderName, id: folderId }));
    router.push(`/folder/${folderId}`, undefined, { shallow: true });
  };

  const selectCombinedFolder = () => {
    dispatch(setCurrentFolder({ name: COMBINED_FOLDER_NAME, id: 0 }));
    router.push(`/folder`, undefined, { shallow: true });
  };

  const selectMemo = () => {
    dispatch(setCurrentFolder({ name: "메모장", id: 1 }));
    router.push(`/memo`, undefined, { shallow: true });
  };

  return (
    <S.FolderLayout>
      <S.FolderContainer>
        <S.FolderBox>
          <Button
            variant='folderButton'
            onClick={() => selectCombinedFolder()}
            text={COMBINED_FOLDER_NAME}
            selected={currentFolder?.name}
          />
          {folderList.map((folder: FolderList) => (
            <Button
              key={folder.id}
              variant='folderButton'
              onClick={() => selectFolder(folder.name, folder.id)}
              text={folder.name}
              selected={currentFolder?.name}
            />
          ))}
          <div onClick={() => dispatch(openModal({ type: "addFolder" }))}>
            <Button variant='addFolder' text='폴더 추가 +' />
          </div>
          <Button
            variant='memoButton'
            text='메모장'
            onClick={() => selectMemo()}
            selected={currentFolder.name}
          />
        </S.FolderBox>
      </S.FolderContainer>
      <FolderOptionButton
        currentFolder={currentFolder}
        setCurrentFolder={setCurrentFolder}
      />
    </S.FolderLayout>
  );
};

export default Folder;
