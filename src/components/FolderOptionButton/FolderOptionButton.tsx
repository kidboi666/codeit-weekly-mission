import shareIcon from "@/public/icons/share.svg";
import penIcon from "@/public/icons/pen.svg";
import deleteIcon from "@/public/icons/delete.svg";
import * as S from "./FolderOptionButton.styled";
import React from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/src/hooks/useApp";
import { openModal } from "@/src/store/reducers/modal";
import { useRouter } from "next/router";

const FolderOptionButton = () => {
  const { currentFolder } = useAppSelector((state) => state.folder);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { folderId } = router.query;

  return (
    <S.FolderOptionButtonLayout>
      <S.SelectedFolder>{currentFolder?.name}</S.SelectedFolder>
      {folderId && (
        <S.OptionContainer>
          <S.OptionBox
            onClick={() => dispatch(openModal({ type: "shareFolder" }))}
          >
            <Image src={shareIcon} alt={"공유버튼"} />
            공유
          </S.OptionBox>
          <S.OptionBox
            onClick={() => dispatch(openModal({ type: "changeName" }))}
          >
            <Image src={penIcon} alt={"이름변경버튼"} />
            이름 변경
          </S.OptionBox>
          <S.OptionBox
            onClick={() => dispatch(openModal({ type: "deleteFolder" }))}
          >
            <Image src={deleteIcon} alt={"삭제버튼"} />
            삭제
          </S.OptionBox>
        </S.OptionContainer>
      )}
      {router.pathname === "/memo" && (
        <S.OptionContainer>
          <S.OptionBox
            onClick={() => dispatch(openModal({ type: "newMemoForm" }))}
          >
            ✚ 새 메모
          </S.OptionBox>
        </S.OptionContainer>
      )}
    </S.FolderOptionButtonLayout>
  );
};

export default FolderOptionButton;
