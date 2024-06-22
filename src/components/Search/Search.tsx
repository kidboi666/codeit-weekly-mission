import searchIcon from '@/public/icons/search.svg'
import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { Input } from '@/src/components'
import { useAppSelector } from '@/src/hooks/useApp'
import { Link } from '@/src/types'
import { CARD_SECTION_MSG } from '@/src/constants/strings'
import * as S from './Search.styled'

interface SearchProps {
  setSearchResult: Dispatch<SetStateAction<Link[] | string>>
  searchKeyword: string
  setSearchKeyword: Dispatch<SetStateAction<string>>
}

const Search = ({ setSearchResult, searchKeyword, setSearchKeyword }: SearchProps) => {
  const [searchBody, setSearchBody] = useState('')
  const { data: linkList } = useAppSelector((state) => state.link)

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (!searchBody) return null

    const result = linkList.filter((link) => {
      return (
        link.title?.toLowerCase().includes(searchBody.toLowerCase()) ||
        link.url?.toLowerCase().includes(searchBody.toLowerCase()) ||
        link.description?.toLowerCase().includes(searchBody.toLowerCase())
      )
    })

    if (result.length === 0) {
      setSearchResult(CARD_SECTION_MSG.searchDataNotFound)
    } else {
      setSearchResult(result)
    }

    setSearchKeyword(searchBody)
    return setSearchBody('')
  }

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBody(e.target.value)
  }

  useEffect(() => {
    setSearchKeyword('')
    setSearchResult([])
  }, [linkList])

  return (
    <S.SearchLayout>
      <S.FormBox>
        <S.Form onSubmit={onSubmit}>
          <button type="button">
            <Image src={searchIcon} alt="검색 돋보기 아이콘" style={{ width: '100%' }} />
          </button>
          <Input
            value={searchBody}
            placeholder="링크를 검색해 보세요."
            onChange={onChangeInputValue}
            variant="search"
          />
          {searchBody && (
            <S.StyledCloseButton variant="searchInput" onClick={() => setSearchBody('')} />
          )}
        </S.Form>
      </S.FormBox>
      {searchKeyword && (
        <S.SearchResultSection>
          <span>{searchKeyword}</span>
          <span>으로 검색한 결과입니다.</span>
        </S.SearchResultSection>
      )}
    </S.SearchLayout>
  )
}

export default Search
