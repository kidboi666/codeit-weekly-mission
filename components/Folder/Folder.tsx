import React, { useEffect } from "react";
import { COMBINED_FOLDER_NAME } from "@/constants/strings";
import { FolderOptionButton, Button } from "@/components";
import * as S from "./Folder.styled";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { openModal } from "@/redux/reducers/modal";
import { CurrentFolderType } from "@/pages/folder/[[...folderId]]";
import { useRouter } from "next/router";

interface FolderProps {
  currentFolder: CurrentFolderType;
  setCurrentFolder: React.Dispatch<React.SetStateAction<CurrentFolderType>>;
}

const Folder = ({ currentFolder, setCurrentFolder }: FolderProps) => {
  const { data: folderList } = useAppSelector((state) => state.folder);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const selectFolder = (folderName: string, folderId: number) => {
    setCurrentFolder({ name: folderName, id: folderId });
    router.push(`/folder/${folderId}`, undefined, { shallow: true });
  };

  const selectCombinedFolder = () => {
    setCurrentFolder({ name: COMBINED_FOLDER_NAME, id: 0 });
    router.push(`/folder`, undefined, { shallow: true });
  };

  useEffect(() => {
    selectCombinedFolder();
  }, []);

  return (
    <S.FolderLayout>
      <S.FolderContainer>
        <S.FolderBox>
          <Button
            variant="folderButton"
            onClick={() => selectCombinedFolder()}
            text={COMBINED_FOLDER_NAME}
            selected={currentFolder?.name}
          />
          {folderList.map((folder) => (
            <Button
              key={folder.id}
              variant="folderButton"
              onClick={() => selectFolder(folder.name, folder.id)}
              text={folder.name}
              selected={currentFolder?.name}
            />
          ))}
          <div onClick={() => dispatch(openModal({ type: "addFolder" }))}>
            <Button variant="addFolder" text="폴더 추가 +" />
          </div>
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
