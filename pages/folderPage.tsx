import { useEffect, useRef, useState } from "react";
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
import { getAllLinkList } from "@/redux/actions/link";
import { COMBINED_FOLDER_NAME } from "@/constants/strings";

const FolderPage = () => {
  const [isInterSecting, setInterSecting] = useState(false);
  const [linkStorage, setLinkStorage] = useState<Link[]>([]);
  const [searchResult, setSearchResult] = useState<Link[]>([]);
  const [noSearchResult, setNoSearchResult] = useState(false);
  const [currentFolder, setCurrentFolder] = useState("");
  const [currentFolderId, setCurrentFolderId] = useState(0);
  const { userInfo } = useAppSelector((state) => state.auth);
  const linkData = useAppSelector((state) => state.link.data);
  const folderDataLength = useAppSelector((state) => state.folder.data.length);
  const dispatch = useAppDispatch();
  const router = useRouter();
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
    const token = localStorage?.getItem("accessToken");
    if (!token) router.push("/");
    dispatch(getFolder(userInfo.id));
    dispatch(getAllLinkList(userInfo.id));
    setCurrentFolder(COMBINED_FOLDER_NAME);
  }, [userInfo, folderDataLength]);

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
          {noSearchResult ? (
            <div>검색 결과가 없습니다.</div>
          ) : linkStorage?.length === 0 ? (
            <div>저장된 링크가 없습니다.</div>
          ) : (
            linkStorage?.map((v) => (
              <div key={v.id}>
                <Card
                  link={v}
                  currentFolder={currentFolder}
                  setCurrentFolder={setCurrentFolder}
                  currentFolderId={currentFolderId}
                  setCurrentFolderId={setCurrentFolderId}
                />
              </div>
            ))
          )}
        </S.LinkSection>
      </S.FolderPageLayout>
      <S.FooterAddLink $animation={isInterSecting}>
        <AddLink />
      </S.FooterAddLink>
    </AppLayout>
  );
};

export default FolderPage;
