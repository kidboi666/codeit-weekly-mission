import * as S from "./Search.styled";
import searchIcon from "../../assets/icons/search.svg";
import { Link } from "../../services/types";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setSearchResult, setSearchKeyword } from "@/redux/reducers/link";
import { RootState } from "@/redux/store";

interface SearchProps {
  links: Link[];
}

const Search: React.FC<SearchProps> = ({ links }) => {
  const [keyword, setKeyword] = useState("");
  const searchKeyword = useSelector((state: RootState) => state.link.search);
  const data = useSelector((state: RootState) => state.link.data);
  const searchResult = useSelector((state: RootState) => state.link.searchResult);
  const dispatch = useDispatch();

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(setSearchResult([]));

    const result = links.filter((link) => {
      return link.title?.includes(keyword) || link.url?.includes(keyword) || link.description?.includes(keyword);
    });

    if (!result) return dispatch(setSearchResult([]));
    dispatch(setSearchResult(result));
    dispatch(setSearchKeyword(keyword));
    setKeyword("");
  };

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const onIntializingInputValue = () => {
    setKeyword("");
  };

  useEffect(() => {
    if (data !== searchResult) {
      dispatch(setSearchKeyword(""));
    }
  }, [data]);

  return (
    <S.SearchLayout>
      <S.FormBox>
        <S.Form onSubmit={onSubmit}>
          <button>
            <Image src={searchIcon} alt={"검색 돋보기 아이콘"} style={{ width: "100%" }} />
          </button>
          <S.StyledInput value={keyword} placeholder={"링크를 검색해 보세요."} onChange={onChangeInputValue} />
          {keyword && <S.StyledCloseButton variant={"searchInput"} onClick={onIntializingInputValue} />}
        </S.Form>
      </S.FormBox>
      {searchKeyword && (
        <S.SearchResultSection>
          <span>{searchKeyword}</span>
          <span>으로 검색한 결과입니다.</span>
        </S.SearchResultSection>
      )}
    </S.SearchLayout>
  );
};

export default Search;
