import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { getFolder, putFolder } from "@/redux/actions/folder";
import { closeModal } from "@/redux/reducers/modal";
import { openToast } from "@/redux/reducers/toast";

const ChangeName: React.FC = () => {
  const [folderName, setFolderName] = useState("");
  const { userInfo } = useAppSelector((state) => state.auth);
  const { text, variant } = useAppSelector((state) => state.modal.contents);
  const { selectedFolderId, selectedFolder } = useAppSelector((state) => state.folder);
  const dispatch = useAppDispatch();

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFolderName(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const accessToken = localStorage.getItem("accessToken");
    if (folderName) {
      const res = await dispatch(putFolder({ folderName: folderName, accessToken, folderId: selectedFolderId }));
      if (res.meta.requestStatus === "fulfilled") {
        dispatch(closeModal());
        dispatch(openToast("changeName"));
        dispatch(getFolder(userInfo.id));
      }
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
