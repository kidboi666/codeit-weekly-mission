import { Button } from "@/src/components";
import { useAppDispatch, useAppSelector } from "@/src/hooks/useApp";
import { deleteFolder, getFolder } from "@/src/store/actions/folder";
import { getAllLinkList } from "@/src/store/actions/link";
import { closeModal } from "@/src/store/reducers/modal";
import { openToast } from "@/src/store/reducers/toast";
import { ModalProps } from "../ModalTypes";

const DeleteFolder = ({ title, text, variant }: ModalProps) => {
  const { userInfo } = useAppSelector((state) => state.auth);
  const { currentFolder } = useAppSelector((state) => state.modal.props) || {};
  const dispatch = useAppDispatch();

  const onClick = async () => {
    const res = await dispatch(deleteFolder(currentFolder.id));
    dispatch(closeModal());
    if (res.meta.requestStatus === "fulfilled") {
      dispatch(openToast({ type: "deleteFolder" }));
      dispatch(getFolder(userInfo.id));
      dispatch(getAllLinkList(userInfo.id));
    }
  };

  return (
    <>
      <h3>{title}</h3>
      <h4>{currentFolder.name}</h4>
      <Button variant={variant} text={text} width='100%' onClick={onClick} />
    </>
  );
};

export default DeleteFolder;
