import Button from "@/components/Button/Button";
import { Input } from "@/components/Input/Input.styled";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { postFolder } from "@/redux/actions/folder";
import { closeModal } from "@/redux/reducers/modal";
import { useState } from "react";

const AddFolder: React.FC = () => {
  const [folderName, setFolderName] = useState("");
  const { title, text, variant } = useAppSelector((state) => state.modal.contents);
  const token = useAppSelector((state) => state.auth.accessToken);
  const dispatch = useAppDispatch();

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFolderName(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (folderName) {
      const res = await dispatch(postFolder({ folderName, token }));
      if (res.meta.requestStatus === "fulfilled") {
        dispatch(closeModal());
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
