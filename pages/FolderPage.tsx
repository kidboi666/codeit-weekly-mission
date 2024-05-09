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
import { useRouter } from "next/router";
import { getAllLinkList } from "@/redux/actions/link";

const FolderPage = () => {
  const [link, setLink] = useState<Link[]>([]);
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const linkList = useAppSelector((state) => state.link.data);
  const folderList = useAppSelector((state) => state.folder.data);
  const searchResult = useAppSelector((state) => state.link.searchResult);
  const searchKeyword = useAppSelector((state) => state.link.search);
  const userId = useAppSelector((state) => state.auth.userInfo.id);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onChangeLink = () => {
    if (!searchKeyword && searchResult.length === 0) {
      return setLink(linkList);
    }
    setLink(searchResult);
  };

  useEffect(() => {
    dispatch(getFolder(userId));
    dispatch(getAllLinkList(userId));
  }, []);

  useEffect(() => {
    if (!isLoggedIn) router.push("/");
  }, [isLoggedIn]);

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
          {link?.length === 0 ? "해당되는 링크가 없습니다." : link?.map((v) => <Card key={v.id} link={v} />)}
        </S.LinkSection>
      </S.FolderPageLayout>
    </AppLayout>
  );
};

export default FolderPage;
