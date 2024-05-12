import React from "react";
import kebobIcon from "../../assets/icons/kebab.svg";
import useToggle from "../../hooks/useToggle";
import * as S from "./Kebab.styled";
import { useRouter } from "next/router";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { openModal } from "@/redux/reducers/modal";
import { setSelectedLink } from "@/redux/reducers/link";

interface KebabProps {
  linkId: number;
  linkTitle: string;
}

const Kebab: React.FC<KebabProps> = ({ linkId, linkTitle }) => {
  const dispatch = useAppDispatch();
  const [value, toggle] = useToggle();
  const currentLocation = useRouter();

  if (currentLocation.pathname !== "/folderPage") {
    return null;
  }

  const onClickKebabButton = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    toggle();
  };

  const onClickDeleteButton = () => {
    dispatch(setSelectedLink({ linkId, linkTitle }));
    dispatch(openModal("deleteLink"));
  };

  const onClickAddLinkToFolderButton = () => {
    dispatch(setSelectedLink({ linkId, linkTitle }));
    dispatch(openModal("addLinkToFolder"));
  };

  return (
    <S.KebabLayout onClick={onClickKebabButton}>
      <Image src={kebobIcon} alt='케밥 버튼 아이콘' style={{ width: "100%" }} />
      {value && (
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
