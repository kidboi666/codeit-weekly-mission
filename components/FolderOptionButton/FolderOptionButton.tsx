import shareIcon from "@/assets/icons/share.svg";
import penIcon from "@/assets/icons/pen.svg";
import deleteIcon from "@/assets/icons/delete.svg";
import * as S from "./FolderOptionButton.styled";
import React from "react";
import Image from "next/image";
import { COMBINED_FOLDER_NAME } from "@/constants/strings";
import { useAppDispatch } from "@/hooks/useApp";
import { openModal } from "@/redux/reducers/modal";
import { CurrentFolderType } from "@/pages/folder/[[...folderId]]";

interface FolderOptionButtonProps {
  currentFolder: CurrentFolderType;
  setCurrentFolder: React.Dispatch<React.SetStateAction<CurrentFolderType>>;
}
const FolderOptionButton = ({
  currentFolder,
  setCurrentFolder,
}: FolderOptionButtonProps) => {
  const dispatch = useAppDispatch();

  const handleShareFolder = () => {
    dispatch(openModal({ type: "shareFolder", props: { currentFolder } }));
  };

  const handleChangeName = () => {
    dispatch(openModal({ type: "changeName", props: { currentFolder, setCurrentFolder } }));
  };

  const handleDeleteFolder = () => {
    dispatch(openModal({ type: "deleteFolder", props: { currentFolder } }));
  };

  return (
    <S.FolderOptionButtonLayout>
      <S.SelectedFolder>{currentFolder?.name}</S.SelectedFolder>
      {currentFolder?.name !== COMBINED_FOLDER_NAME && (
        <S.OptionContainer>
          <S.OptionBox onClick={handleShareFolder}>
            <Image src={shareIcon} alt={"공유버튼"} />
            공유
          </S.OptionBox>
          <S.OptionBox onClick={handleChangeName}>
            <Image src={penIcon} alt={"이름변경버튼"} />
            이름 변경
          </S.OptionBox>
          <S.OptionBox onClick={handleDeleteFolder}>
            <Image src={deleteIcon} alt={"삭제버튼"} />
            삭제
          </S.OptionBox>
        </S.OptionContainer>
      )}
    </S.FolderOptionButtonLayout>
  );
};

export default FolderOptionButton;
