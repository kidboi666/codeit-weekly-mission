import Button from "@/components/Button/Button";
import { COMBINED_FOLDER_NAME } from "@/constants/strings";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { deleteLink, getAllLinkList, getLinkList } from "@/redux/actions/link";
import { closeModal } from "@/redux/reducers/modal";
import { openToast } from "@/redux/reducers/toast";
import { ModalProps } from "../ModalTypes";

const DeleteLink: React.FC<ModalProps> = ({ title, text, variant }) => {
  const { userInfo } = useAppSelector((state) => state.auth);
  const { selectedLinkId, selectedLinkTitle } = useAppSelector((state) => state.link);
  const { selectedFolder, selectedFolderId } = useAppSelector((state) => state.folder);
  const dispatch = useAppDispatch();

  const onClick = async () => {
    if (selectedLinkId) {
      const res = await dispatch(deleteLink(selectedLinkId));
      dispatch(closeModal());
      if (res.meta.requestStatus === "fulfilled") {
        dispatch(openToast("deleteLink"));
        if (selectedFolder === COMBINED_FOLDER_NAME) {
          return dispatch(getAllLinkList(userInfo.id));
        }
        dispatch(
          getLinkList({
            userId: userInfo.id,
            folderId: selectedFolderId,
          }),
        );
      }
    }
  };

  return (
    <>
      <h3>{title}</h3>
      <h4>{selectedLinkTitle}</h4>
      <Button variant={variant} text={text} width='100%' onClick={onClick} />
    </>
  );
};

export default DeleteLink;
