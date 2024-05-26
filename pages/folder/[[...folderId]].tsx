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
import {
  initCurrentFolder,
  setCurrentFolder,
} from "@/src/store/reducers/folder";

export interface CurrentFolderType {
  name: string;
  id: number;
}

const FolderPage = () => {
  const [searchResult, setSearchResult] = useState<Link[] | string>([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const userId = useAppSelector((state) => state.auth.userInfo.id);
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
    userId ? fetchFolderList() : router.push("/signin");
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
