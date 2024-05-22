import React from "react";
import { COMBINED_FOLDER_NAME } from "@/constants/strings";
import { FolderOptionButton, Button } from "@/components";
import * as S from "./Folder.styled";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { openModal } from "@/redux/reducers/modal";
import Link from "next/link";

interface FolderProps {
  currentFolder: string;
  setCurrentFolder: React.Dispatch<React.SetStateAction<string>>;
  currentFolderId: number;
  setCurrentFolderId: React.Dispatch<React.SetStateAction<number>>;
}

const Folder = ({ currentFolder, setCurrentFolder, currentFolderId, setCurrentFolderId }: FolderProps) => {
  const { data } = useAppSelector((state) => state.folder);
  const dispatch = useAppDispatch();

  const selectFolder = (folderName: string, folderId: number) => {
    setCurrentFolder(folderName);
    setCurrentFolderId(folderId);
  };

  const selectCombinedFolder = () => {
    setCurrentFolder(COMBINED_FOLDER_NAME);
  };

  return (
    <S.FolderLayout>
      <S.FolderContainer>
        <S.FolderBox>
          <Link href='/folder'>
            <Button
              variant='folderButton'
              onClick={() => selectCombinedFolder()}
              text={COMBINED_FOLDER_NAME}
              selected={currentFolder}
            />
          </Link>
          {data.map((folderItem) => (
            <Link key={folderItem.id} href={`/folder/${folderItem.id}`}>
              <Button
                variant='folderButton'
                onClick={() => selectFolder(folderItem.name, folderItem.id)}
                text={folderItem.name}
                selected={currentFolder}
              />
            </Link>
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
