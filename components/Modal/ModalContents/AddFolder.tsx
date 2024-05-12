import Button from "@/components/Button/Button";
import { Input } from "@/components/Input/Input.styled";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { postFolder } from "@/redux/actions/folder";
import { closeModal } from "@/redux/reducers/modal";
import { openToast } from "@/redux/reducers/toast";
import { useState } from "react";

const AddFolder: React.FC = () => {
  const [folderName, setFolderName] = useState("");
  const { title, text, variant } = useAppSelector((state) => state.modal.contents);
  const accessToken = localStorage.getItem("accessToken");
  const dispatch = useAppDispatch();

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFolderName(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (folderName) {
      const res = await dispatch(postFolder({ folderName, token: accessToken }));
      if (res.meta.requestStatus === "fulfilled") {
        dispatch(closeModal());
        dispatch(openToast("addFolder"));
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
