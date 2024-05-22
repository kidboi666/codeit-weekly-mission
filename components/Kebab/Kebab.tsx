import React from "react";
import kebobIcon from "../../assets/icons/kebab.svg";
import * as S from "./Kebab.styled";
import { useRouter } from "next/router";
import Image from "next/image";
import { useAppDispatch } from "@/hooks/useApp";
import { COMBINED_FOLDER_NAME } from "@/constants/strings";
import { CurrentFolderType } from "@/pages/folder/[[...folderId]]";
import { DropDown } from "@/components";

interface KebabProps {
  linkId: number;
  linkTitle: string;
  linkUrl: string;
  currentFolder?: CurrentFolderType;
  setCurrentFolder?: React.Dispatch<React.SetStateAction<CurrentFolderType>>;
}

const Kebab = ({ linkId, linkTitle, linkUrl, currentFolder, setCurrentFolder }: KebabProps) => {
  const router = useRouter();

  if (!router.pathname.includes("/folder") || currentFolder?.name === COMBINED_FOLDER_NAME) {
    return null;
  }

  const onClickKebab = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <S.KebabLayout onClick={onClickKebab}>
      <Image src={kebobIcon} alt='케밥 버튼 아이콘' style={{ width: "100%" }} />
      <DropDown variant='editCard' props={{ linkId, linkTitle, linkUrl, currentFolder, setCurrentFolder }} />
    </S.KebabLayout>
  );
};

export default Kebab;
