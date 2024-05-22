import { useEffect, useState } from "react";
import { Folder, AddLink, Search, AppLayout, Card, FolderLayout } from "@/components";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { Link } from "@/services/types";
import { getAllLinkList, getLinkList } from "@/redux/actions/link";
import { COMBINED_FOLDER_NAME } from "@/constants/strings";
import { getFolder } from "@/redux/actions/folder";
import { useRouter } from "next/router";

export interface CurrentFolderType {
  name: string;
  id: number;
}

const FolderPage = () => {
  const [searchResult, setSearchResult] = useState<Link[]>([]);
  const [currentFolder, setCurrentFolder] = useState<CurrentFolderType>({
    name: COMBINED_FOLDER_NAME,
    id: 0,
  });
  const userId = useAppSelector((state) => state.auth.userInfo.id);
  const { data } = useAppSelector((state) => state.link);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { folderId } = router.query;

  const getFolderFetch = () => {
    dispatch(getFolder(userId));
  };

  const getLinkFetch = () => {
    folderId
      ? dispatch(getLinkList({ userId, folderId: Number(folderId) }))
      : dispatch(getAllLinkList(userId));
  };

  useEffect(() => {
    if (userId) getFolderFetch();
  }, [userId]);

  useEffect(() => {
    if (userId) getLinkFetch();
  }, [router, userId]);

  return (
    <AppLayout>
      <FolderLayout
        AddLink={<AddLink />}
        Search={<Search setSearchResult={setSearchResult} />}
        Folder={<Folder currentFolder={currentFolder} setCurrentFolder={setCurrentFolder} />}
        Card={
          searchResult.length >= 1 ? <Card linkList={searchResult} /> : <Card linkList={data} />
        }
      />
    </AppLayout>
  );
};

export default FolderPage;
