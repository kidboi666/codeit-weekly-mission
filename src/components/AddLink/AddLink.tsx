import * as S from "./AddLink.styled";
import LinkIcon from "@/public/icons/link.svg";
import React, { useState } from "react";
import Image from "next/image";
import { Button, Input } from "@/src/components";
import { useAppDispatch, useAppSelector } from "@/src/hooks/useApp";
import { openModal } from "@/src/store/reducers/modal";
import { openToast } from "@/src/store/reducers/toast";
import { CurrentFolderType } from "@/src/pages/folder/[[...folderId]]";

interface AddLinkProps {
  className?: string;
  currentFolder: CurrentFolderType;
}

const AddLink = ({ className, currentFolder }: AddLinkProps) => {
  const [linkUrl, setLinkUrl] = useState("");
  const { data: folderList } = useAppSelector((state) => state.folder);
  const dispatch = useAppDispatch();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (folderList.length === 0)
      return dispatch(openToast({ type: "firstAction" }));
    if (linkUrl) {
      return dispatch(
        openModal({
          type: "addLinkToFolder",
          props: { linkUrl, setLinkUrl, currentFolder },
        }),
      );
    }
    dispatch(openToast({ type: "nothingValue" }));
  };

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLinkUrl(e.target.value);
  };

  return (
    <S.AddLinkLayout className={className}>
      <S.FormBox onSubmit={onSubmit}>
        <S.InnerBox>
          <S.IconImgBox>
            <Image src={LinkIcon} alt='' />
          </S.IconImgBox>
          <Input
            value={linkUrl}
            onChange={onChangeInputValue}
            placeholder='링크를 추가해 보세요'
            variant='addLink'
          />
          <Button variant='addLink' text='추가하기' type='submit' />
        </S.InnerBox>
      </S.FormBox>
    </S.AddLinkLayout>
  );
};

export default AddLink;
