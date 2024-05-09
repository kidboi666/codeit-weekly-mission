import { useEffect } from "react";
import * as S from "../styles/folderPage.styled";
import Search from "../components/Search/Search";
import AddLink from "../components/AddLink/AddLink";
import Folder from "../components/Folder/Folder";
import Card from "../components/Card/Card";
import AppLayout from "@/components/App/AppLayout";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { useRouter } from "next/router";
import { getFolder } from "@/redux/actions/folder";

const FolderPage = () => {
  const { isLoggedIn, userInfo } = useAppSelector((state) => state.auth);
  const folderLength = useAppSelector((state) => state.folder.data.length);
  const linkList = useAppSelector((state) => state.link.data);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    dispatch(getFolder(userInfo.id));
  }, [folderLength]);

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
          {linkList?.length === 0 ? "해당되는 링크가 없습니다." : linkList?.map((v) => <Card key={v.id} link={v} />)}
        </S.LinkSection>
      </S.FolderPageLayout>
    </AppLayout>
  );
};

export default FolderPage;
