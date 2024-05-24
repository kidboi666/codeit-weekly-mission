import { useAppDispatch } from "@/hooks/useApp";
import * as S from "./EditCard.styled";
import { openModal } from "@/redux/reducers/modal";
import { CurrentFolderType } from "@/pages/folder/[[...folderId]]";

export interface EditCardProps {
  linkId?: number;
  linkTitle?: string;
  linkUrl?: string;
  currentFolder?: CurrentFolderType;
  setCurrentFolder?: React.Dispatch<React.SetStateAction<CurrentFolderType>>;
}

const EditCard = ({
  linkId,
  linkTitle,
  linkUrl,
  currentFolder,
  setCurrentFolder,
}: EditCardProps) => {
  const dispatch = useAppDispatch();

  const deleteLink = () => {
    dispatch(
      openModal({
        type: "deleteLink",
        props: { linkId, linkTitle, currentFolder },
      }),
    );
  };

  const addLinkToFolder = () => {
    dispatch(
      openModal({
        type: "addLinkToFolder",
        props: {
          linkId,
          linkUrl,
          currentFolder,
          setCurrentFolder,
        },
      }),
    );
  };

  return (
    <S.EditCardLayout>
      <button type='button' onClick={deleteLink}>
        삭제하기
      </button>
      <button type='button' onClick={addLinkToFolder}>
        폴더 이동
      </button>
    </S.EditCardLayout>
  );
};

export default EditCard;
