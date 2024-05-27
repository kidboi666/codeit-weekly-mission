import { useAppDispatch, useAppSelector } from "@/src/hooks/useApp";
import { Button } from "@/src/components";
import { ModalProps } from "../ModalTypes";
import { deletePaper, getPaper } from "@/src/store/actions/paper";
import { openToast } from "@/src/store/reducers/toast";
import { closeModal } from "@/src/store/reducers/modal";

const DeletePaper = ({ title, text, variant }: ModalProps) => {
  const { paperId, paperTitle } =
    useAppSelector((state) => state.modal.props) || {};
  const dispatch = useAppDispatch();

  const onClick = async () => {
    await dispatch(deletePaper(paperId));
    dispatch(closeModal());
    openToast({ type: "deletePaper" });
    await dispatch(getPaper());
  };

  return (
    <>
      <h3>{title}</h3>
      <h4>{paperTitle}</h4>
      <Button variant={variant} text={text} width='100%' onClick={onClick} />
    </>
  );
};

export default DeletePaper;
