import { useEffect, useState } from "react";
import useAsync from "../hooks/useAsync";
import { getMockFolderRequest } from "../api";
import Search from "../components/Search/Search";
import Card from "../components/Card/Card";
import FolderOwner from "../components/Folder/FolderOwner";
import * as S from "./SharedPage.styled";
import { FolderLink } from "../api/types";

const SharedPage = () => {
  const { requestFunction: getUserFolder } = useAsync(getMockFolderRequest);
  const [folders, setFolder] = useState([]);

  const getFolder = async () => {
    const result = await getUserFolder();
    if (!result) return;

    const {
      folder: { links },
    } = result;
    setFolder(links);
  };

  useEffect(() => {
    getFolder();
  }, []);

  return (
    <S.SharedPageLayout>
      <S.HeaderBox>
        <FolderOwner />
      </S.HeaderBox>
      <Search />
      <S.FolderBox>
        {folders.map((link: FolderLink) => {
          return (
            <Card
              key={link.id}
              link={link}
            />
          );
        })}
      </S.FolderBox>
    </S.SharedPageLayout>
  );
};

export default SharedPage;
