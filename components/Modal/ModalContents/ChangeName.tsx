import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { putFolder } from "@/redux/actions/folder";

const ChangeName: React.FC = () => {
  const [folderName, setFolderName] = useState("");
  const { text, variant } = useAppSelector((state) => state.modal.contents);
  const { accessToken } = useAppSelector((state) => state.auth);
  const { selectedFolderId, selectedFolder } = useAppSelector((state) => state.folder);
  const dispatch = useAppDispatch();

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFolderName(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (folderName) {
      dispatch(putFolder({ folderName: folderName, accessToken: accessToken, folderId: selectedFolderId }));
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Input value={folderName} onChange={onChangeInputValue} placeholder={selectedFolder} />
      <Button variant={variant} text={text} type={"submit"} width={"100%"} />
    </form>
  );
};

export default ChangeName;
