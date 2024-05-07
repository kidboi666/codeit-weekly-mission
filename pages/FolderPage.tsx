import { useEffect, useState } from "react";
import * as S from "../styles/folderPage.styled";
import Search from "../components/Search/Search";
import AddLink from "../components/AddLink/AddLink";
import Folder from "../components/Folder/Folder";
import Card from "../components/Card/Card";
import { FolderLink } from "../services/types";
import AppLayout from "@/components/App/AppLayout";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import useAsync from "@/hooks/useAsync";
import { getFolderRequest } from "@/services/api";
import { getAllFolderList } from "@/redux/reducers/folderReducer";

const FolderPage = () => {
  const { requestFunction } = useAsync(getFolderRequest);
  const folderList = useSelector((state: RootState) => state.folder);
  const dispatch = useDispatch();
  const [links, setLinks] = useState<FolderLink[]>([]);
  const [searchResult, setSearchResult] = useState("");

  const getFolderFunc = async () => {
    const { data } = await requestFunction();
    if (!data) [];
    dispatch(getAllFolderList(data));
  };

  useEffect(() => {
    getFolderFunc();
  }, []);

  return (
    <AppLayout>
      <S.FolderPageLayout>
        <S.HeaderSection>
          <AddLink />
        </S.HeaderSection>
        <S.SearchSection>
          <Search links={links} setLinks={setLinks} searchResult={searchResult} setSearchResult={setSearchResult} />
        </S.SearchSection>
        <S.FolderSection>
          <Folder folderList={folderList} setLinks={setLinks} setSearchResult={setSearchResult} />
        </S.FolderSection>
        {links.length === 0 ? (
          <S.LinkSection $noneLinks>저장된 링크가 없습니다.</S.LinkSection>
        ) : (
          <S.LinkSection>
            {links.map((link: FolderLink) => (
              <Card key={link.id} link={link} folderList={folderList} />
            ))}
          </S.LinkSection>
        )}
      </S.FolderPageLayout>
    </AppLayout>
  );
};

export default FolderPage;
