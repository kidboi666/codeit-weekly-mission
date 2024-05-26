import shareIcon from "@/public/icons/share.svg";
import penIcon from "@/public/icons/pen.svg";
import deleteIcon from "@/public/icons/delete.svg";
import * as S from "./FolderOptionButton.styled";
import React from "react";
import Image from "next/image";
import { COMBINED_FOLDER_NAME } from "@/src/constants/strings";
import { useAppDispatch } from "@/src/hooks/useApp";
import { openModal } from "@/src/store/reducers/modal";
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
    dispatch(
      openModal({
        type: "changeName",
        props: { currentFolder, setCurrentFolder },
      }),
    );
  };

  const handleDeleteFolder = () => {
    dispatch(openModal({ type: "deleteFolder", props: { currentFolder } }));
  };

  return (
    <S.FolderOptionButtonLayout>
      <S.SelectedFolder>{currentFolder?.name}</S.SelectedFolder>
      {currentFolder?.name !== COMBINED_FOLDER_NAME &&
        currentFolder?.name !== "메모장" && (
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
