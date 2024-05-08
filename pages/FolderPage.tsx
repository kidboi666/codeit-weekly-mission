import { useEffect } from "react";
import * as S from "../styles/folderPage.styled";
import Search from "../components/Search/Search";
import AddLink from "../components/AddLink/AddLink";
import Folder from "../components/Folder/Folder";
import Card from "../components/Card/Card";
import { Link } from "../services/types";
import AppLayout from "@/components/App/AppLayout";
import { useDispatch, useSelector } from "react-redux";
import { getFolder } from "@/redux/actions/folder";
import { RootState } from "@/redux/store";

const FolderPage = () => {
  const links = useSelector((state: RootState) => state.link.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFolder());
  }, []);

  return (
    <AppLayout>
      <S.FolderPageLayout>
        <S.HeaderSection>
          <AddLink />
        </S.HeaderSection>
        <S.SearchSection>
          <Search links={links} />
        </S.SearchSection>
        <S.FolderSection>
          <Folder />
        </S.FolderSection>
        {links.length === 0 ? (
          <S.LinkSection $noneLinks>저장된 링크가 없습니다.</S.LinkSection>
        ) : (
          <S.LinkSection>
            {links.map((link: Link) => (
              <Card key={link.id} link={link} />
            ))}
          </S.LinkSection>
        )}
      </S.FolderPageLayout>
    </AppLayout>
  );
};

export default FolderPage;
