import { useEffect, useState } from "react";
import useAsync from "../hooks/useAsync";
import { getMockFolderRequest } from "../services/api";
import Search from "../components/Search/Search";
import Card from "../components/Card/Card";
import FolderOwner from "../components/Folder/FolderOwner";
import * as S from "../styles/sharedPage.styled";
import { Link } from "../services/types";
import AppLayout from "@/components/App/AppLayout";

const SharedPage = () => {
  const { requestFunction: getUserFolder } = useAsync(getMockFolderRequest);
  const [folders, setFolder] = useState<Link[]>([]);
  const [searchResult, setSearchResult] = useState("");

  const getFolder = async () => {
    const {
      folder: { links },
    } = await getUserFolder();
    if (!links) return [];
    setFolder(links);
  };

  useEffect(() => {
    getFolder();
  }, []);

  return (
    <AppLayout>
      <S.SharedPageLayout>
        <S.HeaderBox>
          <FolderOwner />
        </S.HeaderBox>
        <Search />
        <S.FolderBox>
          {folders.map((link: Link) => {
            return <Card key={link.id} link={link} />;
          })}
        </S.FolderBox>
      </S.SharedPageLayout>
    </AppLayout>
  );
};

export default SharedPage;
