import { ReactNode } from "react";
import * as S from "./PaperLayout.styled";

interface PaperLayoutProps {
  Search: ReactNode;
  Folder: ReactNode;
  Paper: ReactNode;
  AddLink: ReactNode;
}

const PaperLayout = ({ AddLink, Search, Folder, Paper }: PaperLayoutProps) => {
  return (
    <S.PaperPageLayout>
      <S.HeaderSection>{AddLink}</S.HeaderSection>
      <S.SearchSection>{Search}</S.SearchSection>
      <S.FolderSection>{Folder}</S.FolderSection>
      <S.LinkSection>{Paper}</S.LinkSection>
    </S.PaperPageLayout>
  );
};

export default PaperLayout;
