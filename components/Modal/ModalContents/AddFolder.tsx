import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { postFolder } from "@/redux/actions/folder";
import { closeModal } from "@/redux/reducers/modal";
import { openToast } from "@/redux/reducers/toast";
import { useState } from "react";
import { ModalProps } from "../ModalTypes";

const AddFolder = ({ title, text, variant }: ModalProps) => {
  const [folderName, setFolderName] = useState("");
  const { data } = useAppSelector((state) => state.folder);
  const dispatch = useAppDispatch();

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFolderName(e.target.value);
  };

  const checkForDuplicates = () => {
    const result = data.some((folder) => folder.name === folderName);
    if (result) dispatch(openToast({ type: "duplicateFolderName" }));
    return result;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (folderName && !checkForDuplicates()) {
      const res = await dispatch(postFolder(folderName));
      dispatch(closeModal());
      if (res.meta.requestStatus === "fulfilled") {
        dispatch(openToast({ type: "addFolder" }));
      }
    }
  };

  return (
    <>
      <h3>{title}</h3>
      <form onSubmit={onSubmit}>
        <Input value={folderName} onChange={onChangeInputValue} placeholder='생성할 폴더 이름' width='100%' />
        <Button variant={variant} text={text} type='submit' width='100%' />
      </form>
    </>
  );
};

export default AddFolder;
