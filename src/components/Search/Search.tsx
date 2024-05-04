import * as S from "./Search.styled";
import searchIcon from "../../assets/icons/search.svg";
import { FolderLink } from "../../api/types";
import { useState } from "react";

interface SearchProps {
  links: FolderLink[];
  setLinks: React.Dispatch<React.SetStateAction<FolderLink[]>>;
}

const Search: React.FC<SearchProps> = ({ links, setLinks }) => {
  const [keyword, setKeyword] = useState("");
  const [temp, setTemp] = useState<FolderLink[]>([]);

  const onSubmit = (e: any) => {
    e.preventDefault();
    setLinks([]);
    setTemp([]);

    const result = links.filter((link) => {
      return link.title?.includes(keyword) || link.url?.includes(keyword) || link.description?.includes(keyword);
    });

    if (!result) return setLinks([]);
    setLinks(result);
  };

  const onChangeInputValue = (e: any) => {
    setKeyword(e.target.value);
  };

  return (
    <S.SearchLayout>
      <S.FormBox>
        <S.Form onSubmit={onSubmit}>
          <button>
            <img src={searchIcon} alt={"검색 돋보기 아이콘"} />
          </button>
          <input id={"search"} placeholder={"링크를 검색해 보세요."} onChange={onChangeInputValue} />
        </S.Form>
      </S.FormBox>
    </S.SearchLayout>
  );
};

export default Search;
