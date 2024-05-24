import React, { useState } from "react";
import kebobIcon from "@/assets/icons/kebab.svg";
import * as S from "./Kebab.styled";
import { useRouter } from "next/router";
import Image from "next/image";
import { COMBINED_FOLDER_NAME } from "@/constants/strings";
import { CurrentFolderType } from "@/pages/folder/[[...folderId]]";
import { DropDown } from "@/components";

interface KebabProps {
  currentFolder?: CurrentFolderType;
  setCurrentFolder?: React.Dispatch<React.SetStateAction<CurrentFolderType>>;
  linkId: number;
  linkTitle: string;
  linkUrl: string;
}

const Kebab = ({
  currentFolder,
  setCurrentFolder,
  linkId,
  linkTitle,
  linkUrl,
}: KebabProps) => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  if (
    !router.pathname.includes("/folder") ||
    currentFolder?.name === COMBINED_FOLDER_NAME
  ) {
    return null;
  }

  const onClickKebab = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOpen((prev) => !prev);
  };

  return (
    <S.KebabLayout onClick={onClickKebab} onMouseLeave={() => setOpen(false)}>
      <Image
        src={kebobIcon}
        alt='케밥 버튼 아이콘'
        style={{ width: "100%" }}
      />
      <DropDown
        variant='editCard'
        isOpen={isOpen}
        setOpen={setOpen}
        onClick={onClickKebab}
        props={{ linkId, linkTitle, linkUrl, currentFolder, setCurrentFolder }}
      />
    </S.KebabLayout>
  );
};

export default Kebab;
