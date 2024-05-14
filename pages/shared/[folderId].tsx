import Search from "@/components/Search/Search";
import Card from "@/components/Card/Card";
import FolderOwner from "@/components/Folder/FolderOwner";
import * as S from "@/styles/sharedPage.styled";

import AppLayout from "@/components/App/AppLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Link } from "@/services/types";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { getLinkList, getSharedLink } from "@/redux/actions/link";

const SharedPage = () => {
  const [linkStorage, setLinkStorage] = useState<Link[]>([]);
  const { data, searchResult, noSearchResult } = useAppSelector((state) => state.link);
  const sharedUser = useAppSelector((state) => state?.link?.sharedUser?.[0]);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { folderId } = router.query;
  console.log(sharedUser);

  const handleFetch = async () => {
    const res = await dispatch(getSharedLink(Number(folderId)));
    if (res.meta.requestStatus === "fulfilled") {
      await dispatch(getLinkList({ userId: sharedUser?.userId, folderId: sharedUser?.id }));
    }
  };

  useEffect(() => {
    handleFetch();
  }, [folderId]);

  useEffect(() => {
    setLinkStorage(data);
  }, [data]);

  useEffect(() => {
    if (searchResult.length >= 1) {
      setLinkStorage(searchResult);
    }
  }, [searchResult]);

  return (
    <AppLayout>
      <S.SharedPageLayout>
        <S.HeaderBox>
          <FolderOwner />
        </S.HeaderBox>
        <Search />
        <S.LinkSection>
          {noSearchResult ? (
            <div>{"검색 결과가 없습니다."}</div>
          ) : linkStorage?.length === 0 ? (
            <div>{"해당되는 링크가 없습니다."}</div>
          ) : (
            linkStorage?.map((v) => (
              <div key={v.id}>
                <Card link={v} />
              </div>
            ))
          )}
        </S.LinkSection>
      </S.SharedPageLayout>
    </AppLayout>
  );
};

export default SharedPage;
