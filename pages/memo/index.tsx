import { AppLayout, Folder, MemoLayout, Search } from "@/src/components";
import MemoCard from "@/src/components/MemoCard/MemoCard";
import { useAppDispatch } from "@/src/hooks/useApp";
import { getMemo } from "@/src/store/actions/memo";
import { Link } from "@/src/types";
import { useEffect, useState } from "react";

const MemoPage = () => {
  const [searchResult, setSearchResult] = useState<Link[] | string>([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const dispatch = useAppDispatch();

  const fetchMemoList = async () => {
    dispatch(getMemo());
  };

  useEffect(() => {
    fetchMemoList();
  }, []);

  return (
    <AppLayout>
      <MemoLayout
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
