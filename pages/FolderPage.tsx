import { useEffect, useState } from "react";
import * as S from "../styles/folderPage.styled";
import Search from "../components/Search/Search";
import AddLink from "../components/AddLink/AddLink";
import Folder from "../components/Folder/Folder";
import Card from "../components/Card/Card";
import { Link } from "../services/types";
import AppLayout from "@/components/App/AppLayout";
import { useDispatch } from "react-redux";
import useAsync from "@/hooks/useAsync";
import { getFolderRequest } from "@/services/api";
import { getFolder } from "@/redux/reducers/folder";

const FolderPage = () => {
  const { requestFunction } = useAsync(getFolderRequest);
  const dispatch = useDispatch();
  const [links, setLinks] = useState<Link[]>([]);
  const [searchResult, setSearchResult] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await requestFunction();
      if (!data) [];
      dispatch(getFolder(data));
    })();
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
          <Folder setLinks={setLinks} setSearchResult={setSearchResult} />
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
