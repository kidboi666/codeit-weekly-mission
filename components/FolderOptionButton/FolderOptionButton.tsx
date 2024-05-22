import shareIcon from "@/assets/icons/share.svg";
import penIcon from "@/assets/icons/pen.svg";
import deleteIcon from "@/assets/icons/delete.svg";
import * as S from "./FolderOptionButton.styled";
import React from "react";
import Image from "next/image";
import { COMBINED_FOLDER_NAME } from "@/constants/strings";
import { useAppDispatch } from "@/hooks/useApp";
import { openModal } from "@/redux/reducers/modal";

interface FolderOptionButtonProps {
  currentFolder: string;
  currentFolderId: number;
  setCurrentFolder: React.Dispatch<React.SetStateAction<string>>;
}
const FolderOptionButton = ({ currentFolder, setCurrentFolder, currentFolderId }: FolderOptionButtonProps) => {
  const dispatch = useAppDispatch();

  return (
    <S.FolderOptionButtonLayout>
      <S.SelectedFolder>{currentFolder}</S.SelectedFolder>
      {currentFolder !== COMBINED_FOLDER_NAME && (
        <S.OptionContainer>
          <S.OptionBox
            onClick={() => dispatch(openModal({ type: "shareFolder", props: { currentFolderId, currentFolder } }))}
          >
            <Image src={shareIcon} alt={"공유버튼"} />
            공유
          </S.OptionBox>
          <S.OptionBox
            onClick={() =>
              dispatch(openModal({ type: "changeName", props: { currentFolderId, currentFolder, setCurrentFolder } }))
            }
          >
            <Image src={penIcon} alt={"이름변경버튼"} />
            이름 변경
          </S.OptionBox>
          <S.OptionBox
            onClick={() => dispatch(openModal({ type: "deleteFolder", props: { currentFolderId, currentFolder } }))}
          >
            <Image src={deleteIcon} alt={"삭제버튼"} />
            삭제
          </S.OptionBox>
        </S.OptionContainer>
      )}
    </S.FolderOptionButtonLayout>
  );
};

export default FolderOptionButton;
