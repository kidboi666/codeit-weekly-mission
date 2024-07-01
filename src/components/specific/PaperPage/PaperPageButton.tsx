import { Button } from '@/src/components'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { PAGE_LIMIT_MIN } from '@/src/constants/number'
import * as S from './PaperPageButton.styled'

interface PaperPageProps {
  paperPage: number
  setPaperPage: Dispatch<SetStateAction<number>>
  isPaperSuccess: boolean
  totalPage: number
  currentPage: number
}

const PaperPageButton = ({
  paperPage,
  setPaperPage,
  isPaperSuccess,
  totalPage,
  currentPage,
}: PaperPageProps) => {
  const [displayPageNumber, setDisplayPageNumber] = useState<number[]>([])
  const [tensPlacePage, setTensPlacePage] = useState<number>(0)

  const changeTensPlacePage = () => {
    const nextPage = Math.floor(currentPage / PAGE_LIMIT_MIN)
    if (tensPlacePage !== nextPage) {
      setTensPlacePage(nextPage)
    }
  }

  const createPage = () => {
    return new Array(PAGE_LIMIT_MIN).fill(0).map((v, i) => {
      let result
      if (!tensPlacePage) {
        result = i + 1
      } else {
        result = tensPlacePage * 10 + i
      }
      if (result <= totalPage) {
        return result
      }
      return 0
    })
  }

  useEffect(() => {
    const newPage = createPage()
    setDisplayPageNumber(newPage)
  }, [tensPlacePage, totalPage])

  useEffect(() => {
    changeTensPlacePage()
  }, [currentPage])

  return (
    <S.PageContainer>
      <Button
        variant="folderButton"
        text="이전"
        disabled={!paperPage}
        onClick={() =>
          setPaperPage((prevPage: number) => {
            if (prevPage <= totalPage && prevPage !== 1) {
              return prevPage - 1
            }
            return prevPage
          })
        }
      />
      {displayPageNumber?.map((page, idx) => {
        if (!page) return null
        if (displayPageNumber.length - 1 === idx) return <S.Dot key={page}>...</S.Dot>
        return (
          <Button
            key={page}
            variant="folderButton"
            text={page}
            selected={paperPage}
            onClick={() => setPaperPage(page)}
          />
        )
      })}
      <Button
        variant="folderButton"
        text="다음"
        onClick={() =>
          setPaperPage((prevPage) => {
            if (prevPage < totalPage) {
              return prevPage + 1
            }
            return prevPage
          })
        }
      />
    </S.PageContainer>
  )
}

export default PaperPageButton
