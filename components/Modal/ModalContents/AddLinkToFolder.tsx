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
    /** 이동하려는 폴더 정보를 저장하는 함수 */
    setSelectedFolder({
      name: folderItem.name,
      id: folderItem.id,
    });
  };

  const onClickAddLink = async () => {
    const res = await dispatch(postLink({ url: linkUrl, folderId: selectedFolder.id }));
    dispatch(closeModal());

    /** 링크 추가 요청이 실패시 */
    if (res.meta.requestStatus === "rejected") {
      return dispatch(openToast({ type: "rejectedAddLink" }));
    }

    /** 링크 추가가 아니라 링크 이동일시 */
    if (linkId && currentFolder && res.meta.requestStatus === "fulfilled") {
      await dispatch(deleteLink(linkId)); // 이동 완료되었다면 현재 폴더에서 해당 링크 삭제
      await dispatch(getLinkList({ userId: userInfo.id, folderId: currentFolder.id })); // 현재 폴더 링크 리스트 다시 요청
      return dispatch(openToast({ type: "moveLink" }));
    }

    setLinkUrl("");
    dispatch(openToast({ type: "addLink" }));

    /** 현재 화면에 출력중인 폴더가 전체 폴더라면 */
    if (currentFolder?.name === COMBINED_FOLDER_NAME) {
      return dispatch(getAllLinkList(userInfo.id));
    }

    dispatch(getLinkList({ userId: userInfo.id, folderId: currentFolder?.id }));
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
