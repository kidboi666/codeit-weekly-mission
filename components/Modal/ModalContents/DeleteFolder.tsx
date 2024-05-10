import Button from "@/components/Button/Button";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { deleteFolder } from "@/redux/actions/folder";

const DeleteFolder: React.FC = () => {
  const { accessToken } = useAppSelector((state) => state.auth);
  const { selectedFolder, selectedFolderId } = useAppSelector((state) => state.folder);
  const { text, variant } = useAppSelector((state) => state.modal.contents);
  const dispatch = useAppDispatch();
  return (
    <>
      <h4>{selectedFolder}</h4>
      <Button
        variant={variant}
        text={text}
        width={"100%"}
        onClick={() => dispatch(deleteFolder({ accessToken: accessToken, folderId: selectedFolderId }))}
      />
    </>
  );
};

export default DeleteFolder;
