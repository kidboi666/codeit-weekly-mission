import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import * as S from "./AddLinkToFolder.styled";
import Button from "@/components/Button/Button";
import { FolderList } from "@/services/types";
import { getLinkList, postLink } from "@/redux/actions/link";
import { closeModal } from "@/redux/reducers/modal";
import { openToast } from "@/redux/reducers/toast";
import { ModalProps } from "../ModalTypes";
import { useState } from "react";

const AddLinkToFolder = ({ title, text, variant }: ModalProps) => {
  const { data } = useAppSelector((state) => state.folder);
  const [selectedFolderForAddLink, setSelectedFolderForAddLink] = useState({
    folderName: "",
    folderId: 0,
  });
  const { selectedLinkUrl } = useAppSelector((state) => state.link);
  const { userInfo } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleSelectedFolder = (folderItem: FolderList) => {
    setSelectedFolderForAddLink({
      folderName: folderItem.name,
      folderId: folderItem.id,
    });
  };

  const onClick = async () => {
    const res = await dispatch(postLink({ url: selectedLinkUrl, folderId: selectedFolderForAddLink.folderId }));
    dispatch(closeModal());
    if (res.meta.requestStatus === "fulfilled") {
      dispatch(openToast("addLinkToFolder"));
      dispatch(getLinkList({ userId: userInfo.id, folderId: selectedFolderForAddLink.folderId }));
    }
  };

  return (
    <>
      <h3>{title}</h3>
      <S.FolderList>
        {data?.map((folder) => (
          <S.FolderListItem
            key={folder.id}
            $isActive={folder.name === selectedFolderForAddLink.folderName}
            onClick={() => handleSelectedFolder(folder)}
          >
            <S.ItemName>{folder.name}</S.ItemName>
            <S.ItemLinkCount>{folder.link.count}개 링크</S.ItemLinkCount>
            <S.CheckIcon $isActive={folder.name === selectedFolderForAddLink.folderName}>✓</S.CheckIcon>
          </S.FolderListItem>
        ))}
      </S.FolderList>
      <Button variant={variant} text={text} width='100%' onClick={onClick} />
    </>
  );
};

export default AddLinkToFolder;
