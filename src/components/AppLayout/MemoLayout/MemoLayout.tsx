import { ReactNode } from "react";
import * as S from "./MemoLayout.styled";

interface MemoLayoutProps {
  Search: ReactNode;
  Folder: ReactNode;
  Memo: ReactNode;
}

const MemoLayout = ({ Search, Folder, Memo }: MemoLayoutProps) => {
  return (
    <S.FolderPageLayout>
      <S.SearchSection>{Search}</S.SearchSection>
      <S.FolderSection>{Folder}</S.FolderSection>
      <S.LinkSection>{Memo}</S.LinkSection>
    </S.FolderPageLayout>
  );
};

export default MemoLayout;
