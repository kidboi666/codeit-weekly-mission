import { Button } from "@/src/components";
import * as S from "./PaperForm.styled";
import { useState } from "react";
import { useAppDispatch } from "@/src/hooks/useApp";
import { getPaper, postPaper } from "@/src/store/actions/paper";
import { closeModal } from "@/src/store/reducers/modal";
import { openToast } from "@/src/store/reducers/toast";
import { ModalProps } from "../ModalTypes";

const PaperForm = ({ variant, title, text }: ModalProps) => {
  const dispatch = useAppDispatch();
  const [formBody, setFormBody] = useState({
    title: "",
    content: "",
    background: "blue",
  });

  const handleChangeFormBody = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormBody({
      ...formBody,
      [e.target["name"]]: e.target.value,
    });
  };

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormBody({
      ...formBody,
      background: e.target.value,
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(
      postPaper({
        title: formBody.title,
        content: formBody.content,
        background: formBody.background,
      }),
    );
    dispatch(closeModal());
    dispatch(openToast({ type: "postPaper" }));
    await dispatch(getPaper());
  };

  return (
    <>
      <h3>{title}</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor='title'>제목</label>
        <S.PaperTitleBox
          variant='outlined'
          name='title'
          onChange={handleChangeFormBody}
        />
        <label htmlFor='content'>내용</label>
        <S.PaperContentBox name='content' onChange={handleChangeFormBody} />
        <select onChange={handleChangeSelect}>
          <option value='blue'>파란색</option>
          <option value='yellow'>노란색</option>
          <option value='green'>초록색</option>
          <option value='silver'>은색</option>
        </select>
        <Button variant={variant} text={text} width='100%' type='submit' />
      </form>
    </>
  );
};

export default PaperForm;
