import shareIcon from "../../assets/icons/share.svg";
import penIcon from "../../assets/icons/pen.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import * as S from "./FolderOptionButton.styled";
import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Image from "next/image";

interface FolderOptionButtonProps {
  folderTitle: string;
  folderId: number;
}

const FolderOptionButton: React.FC<FolderOptionButtonProps> = ({ folderTitle, folderId }) => {
  const [isShareModal, setShareModal] = useState(false);
  const [isDeleteModal, setDeleteModal] = useState(false);
  const [isChangeNameModal, setChangeNameModal] = useState(false);

  const onModal = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter((prev: boolean) => !prev);
  };

  return (
    <S.FolderOptionButtonLayout>
      <S.SelectedFolder>{folderTitle}</S.SelectedFolder>
      {folderTitle !== "전체" && (
        <S.OptionContainer>
          <S.OptionBox onClick={() => onModal(setShareModal)}>
            <Image src={shareIcon} alt={"공유버튼"} style={{ width: "18px" }} />
            공유
          </S.OptionBox>
          <S.OptionBox onClick={() => onModal(setChangeNameModal)}>
            <Image src={penIcon} alt={"이름변경버튼"} style={{ width: "18px" }} />
            이름 변경
          </S.OptionBox>
          <S.OptionBox onClick={() => onModal(setDeleteModal)}>
            <Image src={deleteIcon} alt={"삭제버튼"} style={{ width: "18px" }} />
            삭제
          </S.OptionBox>
        </S.OptionContainer>
      )}
      {isShareModal && (
        <Modal variant={"shareFolder"} closeModal={setShareModal} currentFolder={folderTitle} folderId={folderId} />
      )}
      {isDeleteModal && <Modal variant={"deleteFolder"} closeModal={setDeleteModal} currentFolder={folderTitle} />}
      {isChangeNameModal && (
        <Modal variant={"changeName"} closeModal={setChangeNameModal} currentFolder={folderTitle} />
      )}
    </S.FolderOptionButtonLayout>
  );
};

export default FolderOptionButton;
