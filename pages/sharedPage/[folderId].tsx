import Search from "@/components/Search/Search";
import Card from "@/components/Card/Card";
import * as S from "@/styles/sharedPage.styled";
import AppLayout from "@/components/App/AppLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Link } from "@/services/types";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { getSharedFolder } from "@/redux/actions/folder";
import { getSharedUserInfo } from "@/redux/actions/auth";
import { getLinkList } from "@/redux/actions/link";

const SharedPage = () => {
  const [linkStorage, setLinkStorage] = useState<Link[]>([]);
  const [searchResult, setSearchResult] = useState<Link[]>([]);
  const [noSearchResult, setNoSearchResult] = useState(false);
  const { data } = useAppSelector((state) => state.link);
  const { sharedUserInfo } = useAppSelector((state) => state.auth);
  const { sharedFolder } = useAppSelector((state) => state.folder);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { folderId } = router.query;

  useEffect(() => {
    if (folderId) {
      dispatch(getSharedFolder(Number(folderId)));
    }
  }, [folderId]);

  useEffect(() => {
    if (sharedFolder.userId) {
      dispatch(getSharedUserInfo(sharedFolder.userId));
    }
  }, [sharedFolder]);

  useEffect(() => {
    if (sharedFolder.id && sharedFolder.userId) {
      dispatch(getLinkList({ userId: sharedFolder.userId, folderId: sharedFolder.id }));
    }
  }, [sharedUserInfo]);

  useEffect(() => {
    if (searchResult.length >= 1) {
      return setLinkStorage(searchResult);
    }
    setLinkStorage(data);
  }, [data, searchResult]);

  return (
    <AppLayout>
      <S.SharedPageLayout>
        <S.HeaderBox>
          <S.OwnerLayoutList>
            <li>
              <S.OwnerImg src={sharedUserInfo?.imageSource} alt='프로필 이미지' />
            </li>
            <li>
              <S.OwnerName>{sharedUserInfo?.name}</S.OwnerName>
            </li>
            <li>
              <S.Star>{sharedFolder?.name}</S.Star>
            </li>
          </S.OwnerLayoutList>
        </S.HeaderBox>
        <Search setSearchResult={setSearchResult} setNoSearchResult={setNoSearchResult} />
        <S.LinkSection>
          {noSearchResult ? (
            <div>검색 결과가 없습니다.</div>
          ) : linkStorage?.length === 0 ? (
            <div>해당되는 링크가 없습니다.</div>
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
