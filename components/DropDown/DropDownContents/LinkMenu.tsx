import React from "react";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/hooks/useApp";
import * as S from "./LinkMenu.styled";
import { setSelectedLink } from "@/redux/reducers/link";
import { openModal } from "@/redux/reducers/modal";

interface LinkMenuProps {
  linkId: number;
  linkTitle: string;
  linkUrl: string;
}

const LinkMenu = ({ linkId, linkTitle, linkUrl }: LinkMenuProps) => {
  const dispatch = useAppDispatch();
  const currentLocation = useRouter();

  if (currentLocation.pathname !== "/folderPage") {
    return null;
  }

  const onClickDeleteButton = () => {
    dispatch(setSelectedLink({ linkId, linkTitle }));
    dispatch(openModal("deleteLink"));
  };

  const onClickAddLinkToFolderButton = () => {
    dispatch(setSelectedLink({ linkId, linkTitle, linkUrl }));
    dispatch(openModal("addLinkToFolder"));
  };

  return (
    <S.LinkMenuLayout>
      <button type='button' onClick={onClickDeleteButton}>
        삭제하기
      </button>
      <button type='button' onClick={onClickAddLinkToFolderButton}>
        폴더에 추가
      </button>
    </S.LinkMenuLayout>
  );
};

export default LinkMenu;
