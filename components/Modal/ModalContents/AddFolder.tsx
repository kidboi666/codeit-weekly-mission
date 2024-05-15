import Button from "@/components/Button/Button";
import { Input } from "@/components/Input/Input.styled";
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
  const { text, variant } = useAppSelector((state) => state.modal.contents);
  const dispatch = useAppDispatch();

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFolderName(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const accessToken = localStorage.getItem("accessToken");
    if (folderName) {
      const res = await dispatch(postFolder({ folderName, token: accessToken }));
      console.log(res.payload[0].id);
      if (res.meta.requestStatus === "fulfilled") {
        dispatch(closeModal());
        dispatch(openToast("addFolder"));
        dispatch(getLinkList({ userId: userInfo.id, folderId: res.payload[0].id }));
        dispatch(setSelectedFolder({ selectedFolder: folderName, selectedFolderId: res.payload[0].id }));
      }
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Input value={folderName} onChange={onChangeInputValue} placeholder={"생성할 폴더 이름"} width={"100%"} />
        <Button variant={variant} text={text} type={"submit"} width={"100%"} />
      </form>
    </>
  );
};

export default AddFolder;
