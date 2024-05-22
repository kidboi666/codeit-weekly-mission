import Button from "@/components/Button/Button";
import { COMBINED_FOLDER_NAME } from "@/constants/strings";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { deleteLink, getAllLinkList, getLinkList } from "@/redux/actions/link";
import { closeModal } from "@/redux/reducers/modal";
import { openToast } from "@/redux/reducers/toast";
import { ModalProps } from "../ModalTypes";

const DeleteLink = ({ title, text, variant }: ModalProps) => {
  const { userInfo } = useAppSelector((state) => state.auth);
  const { linkId, linkTitle, currentFolder } = useAppSelector((state) => state.modal.props) || {};
  const dispatch = useAppDispatch();

  const onClick = async () => {
    if (linkId) {
      const res = await dispatch(deleteLink(linkId));
      dispatch(closeModal());
      if (res.meta.requestStatus === "fulfilled") {
        dispatch(openToast({ type: "deleteLink" }));
        if (currentFolder === COMBINED_FOLDER_NAME) {
          return dispatch(getAllLinkList(userInfo.id));
        }
        dispatch(
          getLinkList({
            userId: userInfo.id,
            folderId: currentFolder.id,
          }),
        );
      }
    }
  };

  return (
    <>
      <h3>{title}</h3>
      <h4>{linkTitle}</h4>
      <Button variant={variant} text={text} width='100%' onClick={onClick} />
    </>
  );
};

export default DeleteLink;
