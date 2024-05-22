import { ReactNode, useEffect, useRef, useState } from "react";
import * as S from "@/styles/folderPage.styled";
import { Folder, AddLink, Search, AppLayout } from "@/components";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { Link } from "@/services/types";
import { getFolder } from "@/redux/actions/folder";
import { getAllLinkList } from "@/redux/actions/link";
import { COMBINED_FOLDER_NAME } from "@/constants/strings";
import FolderLinkList from "./[folderId]";

interface FolderPageProps {
  children: ReactNode;
}

const FolderPage = ({ children }: FolderPageProps) => {
  const [isInterSecting, setInterSecting] = useState(false);
  const [linkStorage, setLinkStorage] = useState<Link[]>([]);
  const [searchResult, setSearchResult] = useState<Link[]>([]);
  const [noSearchResult, setNoSearchResult] = useState(false);
  const [currentFolder, setCurrentFolder] = useState("");
  const [currentFolderId, setCurrentFolderId] = useState(0);
  const userId = useAppSelector((state) => state.auth.userInfo.id);
  const linkData = useAppSelector((state) => state.link.data);
  const dispatch = useAppDispatch();
  const targetRef = useRef<HTMLDivElement>();

  const callback = (entries: IntersectionObserverEntry[]) => {
    setTimeout(() => {
      setInterSecting(!entries[0].isIntersecting);
    }, 100);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (searchResult.length >= 1) {
      return setLinkStorage(searchResult);
    }
    setLinkStorage(linkData);
  }, [linkData, searchResult]);

  useEffect(() => {
    dispatch(getFolder(userId));
    dispatch(getAllLinkList(userId));
    setCurrentFolder(COMBINED_FOLDER_NAME);
  }, [userId]);

  useEffect(() => {
    if (searchResult.length >= 1) {
      return setLinkStorage(searchResult);
    }
    setLinkStorage(linkData);
  }, [linkData, searchResult]);

  return (
    <AppLayout>
      <S.FolderPageLayout>
        <S.HeaderSection ref={targetRef}>
          <AddLink />
        </S.HeaderSection>
        <S.SearchSection>
          <Search setSearchResult={setSearchResult} setNoSearchResult={setNoSearchResult} />
        </S.SearchSection>
        <S.FolderSection>
          <Folder
            currentFolder={currentFolder}
            setCurrentFolder={setCurrentFolder}
            currentFolderId={currentFolderId}
            setCurrentFolderId={setCurrentFolderId}
          />
        </S.FolderSection>
        <S.LinkSection>
          <FolderLinkList linkStorage={linkStorage} />
        </S.LinkSection>
      </S.FolderPageLayout>
      <S.FooterAddLink $animation={isInterSecting}>
        <AddLink />
      </S.FooterAddLink>
    </AppLayout>
  );
};

export default FolderPage;
