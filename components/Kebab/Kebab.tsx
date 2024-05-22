import React from "react";
import kebobIcon from "../../assets/icons/kebab.svg";
import * as S from "./Kebab.styled";
import { useRouter } from "next/router";
import Image from "next/image";
import { useAppDispatch } from "@/hooks/useApp";
import { openModal } from "@/redux/reducers/modal";
import { COMBINED_FOLDER_NAME } from "@/constants/strings";
import { CurrentFolderType } from "@/pages/folder/[[...folderId]]";

interface KebabProps {
  linkId: number;
  linkTitle: string;
  linkUrl: string;
  currentFolder?: CurrentFolderType;
  setCurrentFolder?: React.Dispatch<React.SetStateAction<CurrentFolderType>>;
  toggle: () => void;
  showKebabMenu: boolean;
}

const Kebab = ({ linkId, linkTitle, linkUrl, currentFolder, setCurrentFolder, toggle, showKebabMenu }: KebabProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  if (!router.pathname.includes("/folder") || currentFolder?.name === COMBINED_FOLDER_NAME) {
    return null;
  }

  const onClickKebabButton = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    toggle();
  };

  const deleteLink = () => {
    dispatch(
      openModal({
        type: "deleteLink",
        props: { linkId, linkTitle, currentFolder },
      }),
    );
  };

  const addLinkToFolder = () => {
    dispatch(
      openModal({
        type: "addLinkToFolder",
        props: {
          linkId,
          linkUrl,
          currentFolder,
          setCurrentFolder,
        },
      }),
    );
  };

  return (
    <S.KebabLayout onClick={onClickKebabButton}>
      <Image src={kebobIcon} alt='케밥 버튼 아이콘' style={{ width: "100%" }} />
      {showKebabMenu && (
        <S.ModalLayout>
          <button type='button' onClick={deleteLink}>
            삭제하기
          </button>
          <button type='button' onClick={addLinkToFolder}>
            폴더 이동
          </button>
        </S.ModalLayout>
      )}
    </S.KebabLayout>
  );
};

export default Kebab;
