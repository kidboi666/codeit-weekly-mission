import { Button, Input } from "@/src/components";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/src/hooks/useApp";
import { getFolder, putFolder } from "@/src/store/actions/folder";
import { closeModal } from "@/src/store/reducers/modal";
import { openToast } from "@/src/store/reducers/toast";
import { ModalProps } from "../ModalTypes";
import { setCurrentFolder } from "@/src/store/reducers/folder";

const ChangeName = ({ title, text, variant }: ModalProps) => {
  const [folderName, setFolderName] = useState("");
  const { userInfo } = useAppSelector((state) => state.auth);
  const { currentFolder } = useAppSelector((state) => state.folder) || {};
  const dispatch = useAppDispatch();

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFolderName(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (folderName) {
      await dispatch(putFolder({ folderName, folderId: currentFolder.id }));
      dispatch(closeModal());
      dispatch(openToast({ type: "changeName" }));
      await dispatch(getFolder(userInfo.id));
      dispatch(setCurrentFolder({ name: folderName }));
    }
  };

  return (
    <>
      <h3>{title}</h3>
      <form onSubmit={onSubmit}>
        <Input
          value={folderName}
          onChange={onChangeInputValue}
          placeholder={currentFolder.name}
        />
        <Button variant={variant} text={text} type='submit' width='100%' />
      </form>
    </>
  );
};

export default ChangeName;
