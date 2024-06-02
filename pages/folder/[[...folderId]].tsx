import { useEffect, useState } from "react";
import {
  Folder,
  AddLink,
  Search,
  AppLayout,
  Card,
  FolderLayout,
} from "@/src/components";
import { useAppDispatch, useAppSelector } from "@/src/hooks/useApp";
import { Link } from "@/src/types";
import { getLinkList } from "@/src/store/actions/link";
import { getFolder } from "@/src/store/actions/folder";
import { useRouter } from "next/router";
import { userInfoAccess } from "@/src/store/actions/auth";

export interface CurrentFolderType {
  name: string;
  id: number;
}

const FolderPage = () => {
  const [searchResult, setSearchResult] = useState<Link[] | string>([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const {
    userInfo: { id: userId },
    isLoggedIn,
  } = useAppSelector((state) => state.auth);
  const { data: linkList } = useAppSelector((state) => state.link);
  const { data: folderList } = useAppSelector((state) => state.folder);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { folderId } = router.query;

  const initPage = async () => {
    const token = localStorage.getItem("accessToken");
    if (token && !isLoggedIn) {
      await dispatch(userInfoAccess());
    } else {
      router.push("/");
    }
  };

  const fetchFolderList = () => {
    folderList.length === 0 && dispatch(getFolder(userId));
  };

  const fetchLinkList = () => {
    dispatch(getLinkList({ userId, folderId: Number(folderId) }));
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchFolderList();
    } else {
      initPage();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) fetchLinkList();
  }, [folderId, isLoggedIn]);

  return (
    <AppLayout>
      <FolderLayout
        AddLink={<AddLink />}
        Search={
          <Search
            setSearchResult={setSearchResult}
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
          />
        }
        Folder={<Folder />}
        Card={
          searchKeyword && searchResult.length >= 1 ? (
            <Card linkList={searchResult} />
          ) : (
            <Card linkList={linkList} />
          )
        }
      />
    </AppLayout>
  );
};

export default FolderPage;
