import { useAppDispatch, useAppSelector } from "@/src/hooks/useApp";
import Button from "../../Button/Button";
import { ModalProps } from "../ModalTypes";
import { deleteMemo, getMemo } from "@/src/store/actions/memo";
import { openToast } from "@/src/store/reducers/toast";
import { closeModal } from "@/src/store/reducers/modal";

const DeleteMemo = ({ title, text, variant }: ModalProps) => {
  const { memoId, memoTitle } =
    useAppSelector((state) => state.modal.props) || {};
  const dispatch = useAppDispatch();

  const onSubmit = async () => {
    await dispatch(deleteMemo(memoId));
    dispatch(closeModal());
    openToast({ type: "deleteMemo" });
    await dispatch(getMemo());
  };

  return (
    <>
      <h3>{title}</h3>
      <h4>{memoTitle}</h4>
      <Button variant={variant} text={text} width='100%' onClick={onSubmit} />
    </>
  );
};

export default DeleteMemo;
