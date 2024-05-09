import React, { useState } from "react";
import { COMBINED_FOLDER_NAME } from "@/constants/strings";
import { getAllLinkList, getLinkList } from "@/redux/actions/link";
import FolderOptionButton from "./FolderOptionButton";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import * as S from "./Folder.styled";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";

const Folder: React.FC = () => {
  const [isModalTrigger, setModalTrigger] = useState(false);
  const folderList = useAppSelector((state) => state.folder.data);
  const userId = useAppSelector((state) => state.auth.userInfo.id);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(getAllLinkList(userId));
  // }, []);

  return (
    <S.FolderLayout>
      <S.FolderContainer>
        <S.FolderBox>
          <Button
            variant={"folderButton"}
            onClick={() => dispatch(getAllLinkList(userId))}
            text={COMBINED_FOLDER_NAME}
          />
          {folderList.map((folderItem) => (
            <Button
              key={folderItem.id}
              variant={"folderButton"}
              onClick={() => dispatch(getLinkList({ userId: userId, folderId: folderItem.id }))}
              text={folderItem.name}
            />
          ))}
        </S.FolderBox>
        <div onClick={() => setModalTrigger((prev) => !prev)}>
          <Button variant={"addFolder"} text='폴더 추가 +' width={"95px"} />
        </div>
      </S.FolderContainer>
      <FolderOptionButton />
      {isModalTrigger && <Modal variant='addFolder' closeModal={setModalTrigger} />}
    </S.FolderLayout>
  );
};

export default Folder;
