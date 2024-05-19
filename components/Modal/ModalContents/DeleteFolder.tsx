import Button from "@/components/Button/Button";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { deleteFolder, getFolder } from "@/redux/actions/folder";
import { getAllLinkList } from "@/redux/actions/link";
import { closeModal } from "@/redux/reducers/modal";
import { openToast } from "@/redux/reducers/toast";
import { ModalProps } from "../ModalTypes";

const DeleteFolder = ({ title, text, variant }: ModalProps) => {
  const { userInfo } = useAppSelector((state) => state.auth);
  const { selectedFolder, selectedFolderId } = useAppSelector((state) => state.modal.props);
  console.log(selectedFolderId);
  const dispatch = useAppDispatch();

  const onClick = async () => {
    const res = await dispatch(deleteFolder(selectedFolderId));
    dispatch(closeModal());
    if (res.meta.requestStatus === "fulfilled") {
      dispatch(openToast("deleteFolder"));
      dispatch(getFolder(userInfo.id));
      dispatch(getAllLinkList(userInfo.id));
    }
  };

  return (
    <>
      <h3>{title}</h3>
      <h4>{selectedFolder}</h4>
      <Button variant={variant} text={text} width='100%' onClick={onClick} />
    </>
  );
};

export default DeleteFolder;
