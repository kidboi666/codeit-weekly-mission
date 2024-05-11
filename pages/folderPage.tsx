import { useEffect, useState } from "react";
import * as S from "../styles/folderPage.styled";
import Search from "../components/Search/Search";
import AddLink from "../components/AddLink/AddLink";
import Folder from "../components/Folder/Folder";
import Card from "../components/Card/Card";
import AppLayout from "@/components/App/AppLayout";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { useRouter } from "next/router";
import { getFolder } from "@/redux/actions/folder";
import { Link } from "@/services/types";
import { initializeSelectedFolder } from "@/redux/reducers/folder";
import { getAllLinkList } from "@/redux/actions/link";

const FolderPage = () => {
  const { isLoggedIn, userInfo } = useAppSelector((state) => state.auth);
  const { data, searchResult, noSearchResult } = useAppSelector((state) => state.link);
  const [linkStorage, setLinkStorage] = useState<Link[]>([]);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    setLinkStorage(data);
  }, [data]);

  useEffect(() => {
    if (searchResult.length >= 1) {
      setLinkStorage(searchResult);
    }
  }, [searchResult]);

  useEffect(() => {
    dispatch(getFolder(userInfo.id));
    dispatch(getAllLinkList(userInfo.id));
    dispatch(initializeSelectedFolder());
  }, []);

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
          {noSearchResult
            ? "검색 결과가 없습니다."
            : linkStorage?.length === 0
            ? "해당되는 링크가 없습니다."
            : linkStorage?.map((v) => <Card key={v.id} link={v} />)}
        </S.LinkSection>
      </S.FolderPageLayout>
    </AppLayout>
  );
};

export default FolderPage;
