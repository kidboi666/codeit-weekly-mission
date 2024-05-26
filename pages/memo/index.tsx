import { AppLayout, Folder, MemoLayout, Search } from "@/src/components";
import MemoCard from "@/src/components/MemoCard/MemoCard";
import { Link } from "@/src/types";
import { useState } from "react";
import { CurrentFolderType } from "@/pages/folder/[[...folderId]]";

const MemoPage = () => {
  const [searchResult, setSearchResult] = useState<Link[] | string>([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentFolder, setCurrentFolder] = useState<CurrentFolderType>({
    name: "",
    id: 0,
  });

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
        Folder={
          <Folder
            currentFolder={currentFolder}
            setCurrentFolder={setCurrentFolder}
          />
        }
        Memo={<MemoCard />}
      />
    </AppLayout>
  );
};

export default MemoPage;
