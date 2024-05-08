import { useEffect, useState } from "react";
import * as S from "../styles/folderPage.styled";
import Search from "../components/Search/Search";
import AddLink from "../components/AddLink/AddLink";
import Folder from "../components/Folder/Folder";
import Card from "../components/Card/Card";
import { Link } from "../services/types";
import AppLayout from "@/components/App/AppLayout";
import { getFolder } from "@/redux/actions/folder";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";

const FolderPage = () => {
  const linkList = useAppSelector((state) => state.link.data);
  const searchResult = useAppSelector((state) => state.link.searchResult);
  const searchKeyword = useAppSelector((state) => state.link.search);
  const dispatch = useAppDispatch();
  const [link, setLink] = useState<Link[]>([]);

  const onChangeLink = () => {
    if (!searchKeyword && searchResult.length === 0) {
      return setLink(linkList);
    }
    setLink(searchResult);
  };

  useEffect(() => {
    dispatch(getFolder());
  }, []);

  useEffect(() => {
    onChangeLink();
  }, [linkList, searchResult, searchKeyword]);

  return (
    <AppLayout>
      <S.FolderPageLayout>
        <S.HeaderSection>
          <AddLink />
        </S.HeaderSection>
        <S.SearchSection>
          <Search />
        </S.SearchSection>
        <S.FolderSection>
          <Folder />
        </S.FolderSection>
        <S.LinkSection>
          {link.length === 0 ? "해당되는 링크가 없습니다." : link.map((v) => <Card key={v.id} link={v} />)}
        </S.LinkSection>
      </S.FolderPageLayout>
    </AppLayout>
  );
};

export default FolderPage;
