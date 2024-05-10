import shareIcon from "../../assets/icons/share.svg";
import penIcon from "../../assets/icons/pen.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import * as S from "./FolderOptionButton.styled";
import React from "react";
import Image from "next/image";
import { COMBINED_FOLDER_NAME } from "@/constants/strings";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { openModal } from "@/redux/reducers/modal";

const FolderOptionButton: React.FC = () => {
  const folderTitle = useAppSelector((state) => state.folder.selectedFolder);
  const dispatch = useAppDispatch();

  return (
    <S.FolderOptionButtonLayout>
      <S.SelectedFolder>{folderTitle}</S.SelectedFolder>
      {folderTitle !== COMBINED_FOLDER_NAME && (
        <S.OptionContainer>
          <S.OptionBox onClick={() => dispatch(openModal("shareFolder"))}>
            <Image src={shareIcon} alt={"공유버튼"} style={{ width: "18px" }} />
            공유
          </S.OptionBox>
          <S.OptionBox onClick={() => dispatch(openModal("changeName"))}>
            <Image src={penIcon} alt={"이름변경버튼"} style={{ width: "18px" }} />
            이름 변경
          </S.OptionBox>
          <S.OptionBox onClick={() => dispatch(openModal("deleteFolder"))}>
            <Image src={deleteIcon} alt={"삭제버튼"} style={{ width: "18px" }} />
            삭제
          </S.OptionBox>
        </S.OptionContainer>
      )}
    </S.FolderOptionButtonLayout>
  );
};

export default FolderOptionButton;
