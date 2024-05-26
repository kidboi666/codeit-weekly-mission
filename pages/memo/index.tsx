import {
  AddLink,
  AppLayout,
  Folder,
  MemoLayout,
  Search,
} from "@/src/components";
import MemoCard from "@/src/components/MemoCard/MemoCard";
import { useAppDispatch, useAppSelector } from "@/src/hooks/useApp";
import { getFolder } from "@/src/store/actions/folder";
import { getMemo } from "@/src/store/actions/memo";
import { Link } from "@/src/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MemoPage = () => {
  const [searchResult, setSearchResult] = useState<Link[] | string>([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const { id: userId } = useAppSelector((state) => state.auth.userInfo);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const fetchMemoList = async () => {
    dispatch(getMemo());
    dispatch(getFolder(userId));
  };

  useEffect(() => {
    if (userId) fetchMemoList();
  }, [userId]);

  useEffect(() => {
    if (!userId) router.push("/folder");
  }, [router, userId]);

  return (
    <AppLayout>
      <MemoLayout
        AddLink={<AddLink disabled={true} />}
        Search={
          <Search
            setSearchKeyword={setSearchKeyword}
            setSearchResult={setSearchResult}
            searchKeyword={searchKeyword}
          />
        }
        Folder={<Folder />}
        Memo={<MemoCard />}
      />
    </AppLayout>
  );
};

export default MemoPage;
