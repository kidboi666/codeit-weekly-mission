import { Search, Card, AppLayout, Owner, SharedLayout } from "@/components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Link } from "@/services/types";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { getSharedFolder } from "@/redux/actions/folder";
import { getSharedUserInfo } from "@/redux/actions/auth";
import { getLinkList } from "@/redux/actions/link";

const SharedPage = () => {
  const [searchResult, setSearchResult] = useState<Link[] | string>([]);
  const { data } = useAppSelector((state) => state.link);
  const { sharedUserInfo } = useAppSelector((state) => state.auth);
  const { sharedFolder } = useAppSelector((state) => state.folder);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { folderId } = router.query;

  const fetchSharePageData = async () => {
    const resFolder = await dispatch(getSharedFolder(Number(folderId)));
    const resUser = await dispatch(getSharedUserInfo(resFolder.payload[0].userId));
    if (folderId && resUser) dispatch(getLinkList({ userId: resFolder.payload[0].userId, folderId: Number(folderId) }));
  };

  useEffect(() => {
    if (folderId) fetchSharePageData();
  }, [folderId]);

  return (
    <AppLayout>
      <SharedLayout
        Owner={
          <Owner
            profileImage={sharedUserInfo.imageSource}
            userName={sharedUserInfo.name}
            folderName={sharedFolder.name}
          />
        }
        Search={<Search setSearchResult={setSearchResult} />}
        Card={searchResult.length >= 1 ? <Card linkList={searchResult} /> : <Card linkList={data} />}
      />
    </AppLayout>
  );
};

export default SharedPage;
