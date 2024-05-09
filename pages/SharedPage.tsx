import Search from "../components/Search/Search";
import Card from "../components/Card/Card";
import FolderOwner from "../components/Folder/FolderOwner";
import * as S from "../styles/sharedPage.styled";
import { Link } from "../services/types";
import AppLayout from "@/components/App/AppLayout";

const SharedPage = () => {
  return (
    <AppLayout>
      <S.SharedPageLayout>
        <S.HeaderBox>
          <FolderOwner />
        </S.HeaderBox>
        <Search />
        <S.FolderBox>
          {folders?.map((link: Link) => {
            return <Card key={link.id} link={link} />;
          })}
        </S.FolderBox>
      </S.SharedPageLayout>
    </AppLayout>
  );
};

export default SharedPage;
