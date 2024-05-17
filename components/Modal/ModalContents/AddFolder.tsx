import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { postFolder } from "@/redux/actions/folder";
import { getLinkList } from "@/redux/actions/link";
import { setSelectedFolder } from "@/redux/reducers/folder";
import { closeModal } from "@/redux/reducers/modal";
import { openToast } from "@/redux/reducers/toast";
import { useState } from "react";

const AddFolder: React.FC = () => {
  const [folderName, setFolderName] = useState("");
  const { userInfo } = useAppSelector((state) => state.auth);
  const { data } = useAppSelector((state) => state.folder);
  const { text, variant } = useAppSelector((state) => state.modal.contents);
  const dispatch = useAppDispatch();

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFolderName(e.target.value);
  };

  const checkForDuplicates = () => {
    const result = data.some((folder) => folder.name === folderName);
    if (result) dispatch(openToast("duplicateFolderName"));
    return result;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (folderName && !checkForDuplicates()) {
      const res = await dispatch(postFolder(folderName));
      dispatch(closeModal());
      if (res.meta.requestStatus === "fulfilled") {
        dispatch(openToast("addFolder"));
        dispatch(getLinkList({ userId: userInfo.id, folderId: res.payload[0].id }));
        dispatch(
          setSelectedFolder({ selectedFolder: folderName, selectedFolderId: res.payload[0].id }),
        );
      }
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Input
          value={folderName}
          onChange={onChangeInputValue}
          placeholder='생성할 폴더 이름'
          width='100%'
        />
        <Button variant={variant} text={text} type='submit' width='100%' />
      </form>
    </>
  );
};

export default AddFolder;
