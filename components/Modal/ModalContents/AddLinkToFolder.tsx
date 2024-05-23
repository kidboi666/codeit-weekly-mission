import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import * as S from "./AddLinkToFolder.styled";
import Button from "@/components/Button/Button";
import { FolderList } from "@/services/types";
import { deleteLink, getAllLinkList, getLinkList, postLink } from "@/redux/actions/link";
import { closeModal } from "@/redux/reducers/modal";
import { openToast } from "@/redux/reducers/toast";
import { ModalProps } from "../ModalTypes";
import { useEffect, useState } from "react";
import { getFolder } from "@/redux/actions/folder";
import { COMBINED_FOLDER_NAME } from "@/constants/strings";

const AddLinkToFolder = ({ title, text, variant }: ModalProps) => {
  const [selectedFolder, setSelectedFolder] = useState({
    name: "",
    id: 0,
  });
  const { data: folderList } = useAppSelector((state) => state.folder);
  const { linkUrl, setLinkUrl } = useAppSelector((state) => state.modal.props) || {}; // 링크 추가만을 위해 건네준 프롭스 (링크 주소와 세터함수)
  const { linkId, currentFolder } = useAppSelector((state) => state.modal.props) || {}; // 링크를 다른 폴더로 옮기려 건네준 프롭스 (이동하려는 링크 아이디와 현재 폴더 정보(이름,아이디))
  const { userInfo } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleSelectedFolder = (folderItem: FolderList) => {
    setSelectedFolder({
      name: folderItem.name,
      id: folderItem.id,
    });
  };

  const handleLinkAddition = async () => {
    const res = await dispatch(postLink({ url: linkUrl, folderId: selectedFolder.id }));
    dispatch(closeModal());
    if (res.meta.requestStatus === "rejected") dispatch(openToast({ type: "rejectedAddLink" }));
    setLinkUrl("");
    dispatch(openToast({ type: "addLink" }));
    refreshLinkList();
  };

  const handleLinkMove = async () => {
    await dispatch(postLink({ url: linkUrl, folderId: selectedFolder.id }));
    dispatch(closeModal());
    await dispatch(deleteLink(linkId)); // 이동 완료되었다면 현재 폴더에서 해당 링크 삭제
    dispatch(openToast({ type: "moveLink" }));
    refreshLinkList();
  };

  const refreshLinkList = () => {
    if (linkId && currentFolder) {
      dispatch(getLinkList({ userId: userInfo.id, folderId: currentFolder?.id }));
    } else if (currentFolder?.name === COMBINED_FOLDER_NAME) {
      dispatch(getAllLinkList(userInfo.id));
    }
  };

  const onClickAddLink = () => {
    if (linkId && currentFolder) {
      handleLinkMove();
    } else {
      handleLinkAddition();
    }
  };

  useEffect(() => {
    dispatch(getFolder(userInfo.id));
  }, []);

  return (
    <>
      <h3>{title}</h3>
      <S.FolderList>
        {folderList?.map((folder) => {
          if (folder.id === currentFolder?.id) return null;
          return (
            <S.FolderListItem
              key={folder.id}
              $isActive={folder.name === selectedFolder.name}
              onClick={() => handleSelectedFolder(folder)}
            >
              <S.ItemName>{folder.name}</S.ItemName>
              <S.ItemLinkCount>{folder.link?.count || "0"}개 링크</S.ItemLinkCount>
              <S.CheckIcon $isActive={folder.name === selectedFolder.name}>✓</S.CheckIcon>
            </S.FolderListItem>
          );
        })}
      </S.FolderList>
      <Button variant={variant} text={text} width='100%' onClick={onClickAddLink} />
    </>
  );
};

export default AddLinkToFolder;
