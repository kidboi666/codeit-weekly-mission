import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { getFolder, putFolder } from "@/redux/actions/folder";
import { closeModal } from "@/redux/reducers/modal";
import { openToast } from "@/redux/reducers/toast";
import { ModalProps } from "../ModalTypes";

const ChangeName = ({ title, text, variant }: ModalProps) => {
  const [folderName, setFolderName] = useState("");
  const { userInfo } = useAppSelector((state) => state.auth);
  const { currentFolder, currentFolderId, setCurrentFolder } = useAppSelector((state) => state.modal.props) || {};
  const dispatch = useAppDispatch();

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFolderName(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (folderName) {
      const res = await dispatch(putFolder({ folderName: folderName, folderId: currentFolderId }));
      dispatch(closeModal());
      if (res.meta.requestStatus === "fulfilled") {
        dispatch(openToast("changeName"));
        await dispatch(getFolder(userInfo.id));
        setCurrentFolder(folderName);
      }
    }
  };

  return (
    <>
      <h3>{title}</h3>
      <form onSubmit={onSubmit}>
        <Input value={folderName} onChange={onChangeInputValue} placeholder={currentFolder} />
        <Button variant={variant} text={text} type='submit' width='100%' />
      </form>
    </>
  );
};

export default ChangeName;
