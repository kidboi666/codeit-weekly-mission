import React from "react";
import kebobIcon from "../../assets/icons/kebab.svg";
import * as S from "./Kebab.styled";
import { useRouter } from "next/router";
import Image from "next/image";
import { useAppDispatch } from "@/hooks/useApp";
import { openModal } from "@/redux/reducers/modal";
import { COMBINED_FOLDER_NAME } from "@/constants/strings";

interface KebabProps {
  linkId: number;
  linkTitle: string;
  linkUrl: string;
  currentFolder?: string;
  setCurrentFolder?: React.Dispatch<React.SetStateAction<string>>;
  currentFolderId?: number;
  setCurrentFolderId?: React.Dispatch<React.SetStateAction<number>>;
  toggle: () => void;
  showKebabMenu: boolean;
}

const Kebab = ({
  linkId,
  linkTitle,
  linkUrl,
  currentFolder,
  setCurrentFolder,
  currentFolderId,
  setCurrentFolderId,
  toggle,
  showKebabMenu,
}: KebabProps) => {
  const dispatch = useAppDispatch();
  const currentLocation = useRouter();

  if (currentLocation.pathname !== "/folderPage" || currentFolder === COMBINED_FOLDER_NAME) {
    return null;
  }

  const onClickKebabButton = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    toggle();
  };

  const onClickDeleteButton = () => {
    dispatch(
      openModal({
        type: "deleteLink",
        props: { linkId, linkTitle, currentFolder, currentFolderId },
      }),
    );
  };

  const onClickAddLinkToFolderButton = () => {
    dispatch(
      openModal({
        type: "addLinkToFolder",
        props: {
          linkId,
          linkUrl,
          currentFolder,
          setCurrentFolder,
          currentFolderId,
          setCurrentFolderId,
        },
      }),
    );
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
            폴더 이동
          </button>
        </S.ModalLayout>
      )}
    </S.KebabLayout>
  );
};

export default Kebab;
