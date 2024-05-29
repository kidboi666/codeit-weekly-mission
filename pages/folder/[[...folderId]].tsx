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
import { getAllLinkList, getLinkList } from "@/src/store/actions/link";
import { getFolder } from "@/src/store/actions/folder";
import { useRouter } from "next/router";

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
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { folderId } = router.query;

  const fetchFolderList = () => {
    dispatch(getFolder(userId));
  };

  const fetchLinkList = () => {
    folderId
      ? dispatch(getLinkList({ userId, folderId: Number(folderId) }))
      : dispatch(getAllLinkList(userId));
  };

  useEffect(() => {
    if (!isLoggedIn) router.push("/");
    if (userId) fetchFolderList();
  }, [userId]);

  useEffect(() => {
    if (userId) fetchLinkList();
  }, [router, userId]);

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
