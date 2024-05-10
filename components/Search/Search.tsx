import * as S from "./Search.styled";
import searchIcon from "../../assets/icons/search.svg";
import { useState, useEffect } from "react";
import Image from "next/image";
import { setSearchResult, setSearchKeyword } from "@/redux/reducers/link";
import Input from "../Input/Input";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";

const Search: React.FC = () => {
  const [searchBody, setSearchBody] = useState("");
  const { searchKeyword } = useAppSelector((state) => state.link);
  const { data } = useAppSelector((state) => state.link);
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!searchBody) return null;
    dispatch(setSearchResult([]));

    const result = data.filter((link) => {
      return (
        link.title?.toLowerCase().includes(searchBody.toLowerCase()) ||
        link.url?.toLowerCase().includes(searchBody.toLowerCase()) ||
        link.description?.toLowerCase().includes(searchBody.toLowerCase())
      );
    });

    if (result.length === 0) {
      const stringResult = ["검색 결과가 없습니다."];
      return dispatch(setSearchResult(stringResult));
    }
    dispatch(setSearchResult(result));
    dispatch(setSearchKeyword(searchBody));
  };

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBody(e.target.value);
  };

  return (
    <S.SearchLayout>
      <S.FormBox>
        <S.Form onSubmit={onSubmit}>
          <button>
            <Image src={searchIcon} alt={"검색 돋보기 아이콘"} style={{ width: "100%" }} />
          </button>
          <Input
            value={searchBody}
            placeholder={"링크를 검색해 보세요."}
            onChange={onChangeInputValue}
            variant={"search"}
          />
          {searchBody && <S.StyledCloseButton variant={"searchInput"} onClick={() => setSearchBody("")} />}
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
