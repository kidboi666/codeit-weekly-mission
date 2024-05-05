import * as S from "./Search.styled";
import searchIcon from "../../assets/icons/search.svg";
import { FolderLink } from "../../api/types";
import { useState } from "react";

interface SearchProps {
  links: FolderLink[];
  setLinks: React.Dispatch<React.SetStateAction<FolderLink[]>>;
  setSearchResult: React.Dispatch<React.SetStateAction<string>>;
  searchResult: string;
}

const Search: React.FC<SearchProps> = ({ links, setLinks, searchResult, setSearchResult }) => {
  const [keyword, setKeyword] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    setLinks([]);

    const result = links.filter((link) => {
      return link.title?.includes(keyword) || link.url?.includes(keyword) || link.description?.includes(keyword);
    });

    if (!result) return setLinks([]);
    setLinks(result);
    setSearchResult(keyword);
    setKeyword("");
  };

  const onChangeInputValue = (e: any) => {
    setKeyword(e.target.value);
  };

  const onIntializingInputValue = () => {
    setKeyword("");
  };

  return (
    <S.SearchLayout>
      <S.FormBox>
        <S.Form onSubmit={onSubmit}>
          <button>
            <img src={searchIcon} alt={"검색 돋보기 아이콘"} />
          </button>
          <S.StyledInput value={keyword} placeholder={"링크를 검색해 보세요."} onChange={onChangeInputValue} />
          {keyword && <S.StyledCloseButton variant={"searchInput"} onClick={onIntializingInputValue} />}
        </S.Form>
      </S.FormBox>
      {searchResult && (
        <S.SearchResultSection>
          <span>{searchResult}</span>
          <span>으로 검색한 결과입니다.</span>
        </S.SearchResultSection>
      )}
    </S.SearchLayout>
  );
};

export default Search;
