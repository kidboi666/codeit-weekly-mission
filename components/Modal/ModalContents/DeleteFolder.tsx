import Button from "@/components/Button/Button";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { deleteFolder, getFolder } from "@/redux/actions/folder";
import { getAllLinkList } from "@/redux/actions/link";
import { closeModal } from "@/redux/reducers/modal";
import { openToast } from "@/redux/reducers/toast";

const DeleteFolder: React.FC = () => {
  const { userInfo } = useAppSelector((state) => state.auth);
  const accessToken = localStorage.getItem("accessToken");
  const { selectedFolder, selectedFolderId } = useAppSelector((state) => state.folder);
  const { text, variant } = useAppSelector((state) => state.modal.contents);
  const dispatch = useAppDispatch();

  const onClick = async () => {
    const res = await dispatch(deleteFolder({ accessToken, folderId: selectedFolderId }));
    if (res.meta.requestStatus === "fulfilled") {
      dispatch(closeModal());
      dispatch(openToast("deleteFolder"));
      dispatch(getFolder(userInfo.id));
      dispatch(getAllLinkList(userInfo.id));
    }
  };

  return (
    <>
      <h4>{selectedFolder}</h4>
      <Button variant={variant} text={text} width={"100%"} onClick={onClick} />
    </>
  );
};

export default DeleteFolder;
