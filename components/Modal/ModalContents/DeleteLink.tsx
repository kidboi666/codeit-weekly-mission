import Button from "@/components/Button/Button";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { deleteLink } from "@/redux/actions/link";

const DeleteLink: React.FC = () => {
  const { accessToken } = useAppSelector((state) => state.auth);
  const { selectedLinkId, selectedLinkTitle } = useAppSelector((state) => state.link);
  const { text, variant } = useAppSelector((state) => state.modal.contents);
  const dispatch = useAppDispatch();

  return (
    <>
      <h4>{selectedLinkTitle}</h4>
      <Button
        variant={variant}
        text={text}
        width={"100%"}
        onClick={() => dispatch(deleteLink({ accessToken, linkId: selectedLinkId }))}
      />
    </>
  );
};

export default DeleteLink;
