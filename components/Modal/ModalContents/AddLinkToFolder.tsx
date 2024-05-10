import { useAppSelector } from "@/hooks/useApp";
import * as S from "./AddLinkToFolder.styled";
import Button from "@/components/Button/Button";

const AddLinkToFolder: React.FC = () => {
  const folderList = useAppSelector((state) => state.folder.data);
  const { variant, text } = useAppSelector((state) => state.modal.contents);

  return (
    <>
      <S.FolderList>
        {folderList?.map((folder) => (
          <S.FolderListItem key={folder.id}>
            <S.ItemName>{folder.name}</S.ItemName>
            <S.ItemLinkCount>{folder.link.count}개 링크</S.ItemLinkCount>
          </S.FolderListItem>
        ))}
      </S.FolderList>
      <Button variant={variant} text={text} width={"100%"} />
    </>
  );
};

export default AddLinkToFolder;
