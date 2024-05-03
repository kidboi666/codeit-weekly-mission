import shareIcon from "../../assets/icons/share.svg";
import penIcon from "../../assets/icons/pen.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import * as S from "./FolderOptionButton.styled";
import React, { useState } from "react";
import Modal from "../Modal/Modal";

interface FolderOptionButtonProps {
  folderTitle: string;
  folderId: number;
}

const FolderOptionButton: React.FC<FolderOptionButtonProps> = ({
  folderTitle,
  folderId,
}) => {
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
            <S.OptionIcon src={shareIcon} />
            공유
          </S.OptionBox>
          <S.OptionBox onClick={() => onModal(setChangeNameModal)}>
            <S.OptionIcon src={penIcon} />
            이름 변경
          </S.OptionBox>
          <S.OptionBox onClick={() => onModal(setDeleteModal)}>
            <S.OptionIcon src={deleteIcon} />
            삭제
          </S.OptionBox>
        </S.OptionContainer>
      )}
      {isShareModal && (
        <Modal
          variant={"shareFolder"}
          closeModal={setShareModal}
          currentFolder={folderTitle}
          folderId={folderId}
        />
      )}
      {isDeleteModal && (
        <Modal
          variant={"deleteFolder"}
          closeModal={setDeleteModal}
          currentFolder={folderTitle}
        />
      )}
      {isChangeNameModal && (
        <Modal
          variant={"changeName"}
          closeModal={setChangeNameModal}
          currentFolder={folderTitle}
        />
      )}
    </S.FolderOptionButtonLayout>
  );
};

export default FolderOptionButton;
