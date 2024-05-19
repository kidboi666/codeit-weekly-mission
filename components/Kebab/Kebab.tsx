import React from "react";
import kebobIcon from "../../assets/icons/kebab.svg";
import useToggle from "../../hooks/useToggle";
import * as S from "./Kebab.styled";
import { useRouter } from "next/router";
import Image from "next/image";
import { useAppDispatch } from "@/hooks/useApp";
import { openModal } from "@/redux/reducers/modal";

interface KebabProps {
  linkId: number;
  linkTitle: string;
  linkUrl: string;
  toggle: () => void;
  showKebabMenu: boolean;
}

const Kebab = ({ linkId, linkTitle, linkUrl, toggle, showKebabMenu }: KebabProps) => {
  const dispatch = useAppDispatch();
  const currentLocation = useRouter();

  if (currentLocation.pathname !== "/folderPage") {
    return null;
  }

  const onClickKebabButton = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    toggle();
  };

  const onClickDeleteButton = () => {
    dispatch(openModal({ type: "deleteLink", props: { selectedLinkId: linkId, selectedLinkTitle: linkTitle } }));
  };

  const onClickAddLinkToFolderButton = () => {
    dispatch(openModal({ type: "addLinkToFolder", props: { selectedLinkUrl: linkUrl } }));
  };

  return (
    <S.KebabLayout onClick={onClickKebabButton}>
      <Image src={kebobIcon} alt='케밥 버튼 아이콘' style={{ width: "100%" }} />
      {showKebabMenu && (
        <S.ModalLayout>
          <button type='button' onClick={onClickDeleteButton}>
            삭제하기
          </button>
          <button type='button' onClick={onClickAddLinkToFolderButton}>
            폴더에 추가
          </button>
        </S.ModalLayout>
      )}
    </S.KebabLayout>
  );
};

export default Kebab;
