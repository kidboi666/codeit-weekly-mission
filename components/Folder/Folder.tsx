import React, { useEffect } from "react";
import { COMBINED_FOLDER_NAME } from "@/constants/strings";
import { getAllLinkList, getLinkList } from "@/redux/actions/link";
import FolderOptionButton from "@/components/FolderOptionButton/FolderOptionButton";
import Button from "../Button/Button";
import * as S from "./Folder.styled";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { FolderList } from "@/services/types";
import { openModal } from "@/redux/reducers/modal";
import { useRouter } from "next/router";
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
  const router = useRouter();

  const handleFetchLinkList = (folderId: number) => {
    // router.push(`/folder/${folderId}`);
    // dispatch(getLinkList({ userId: userId, folderId: folderItem.id }));
    // setCurrentFolder(folderItem.name);
    // setCurrentFolderId(folderItem.id);
  };

  const handleFetchAllLinkList = () => {
    // router.push("/folder/");
    // dispatch(getAllLinkList(userId));
    // setCurrentFolder(COMBINED_FOLDER_NAME);
  };

  // useEffect(() => {
  //   handleFetchAllLinkList();
  // }, []);

  return (
    <S.FolderLayout>
      <S.FolderContainer>
        <S.FolderBox>
          <Link href='/folder/'>
            <Button
              variant='folderButton'
              onClick={() => handleFetchAllLinkList()}
              text={COMBINED_FOLDER_NAME}
              selected={currentFolder}
            />
          </Link>
          {data.map((folderItem) => (
            <Link key={folderItem.id} href={`/folder/${folderItem.id}`}>
              <Button
                variant='folderButton'
                onClick={() => handleFetchLinkList(folderItem.id)}
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
