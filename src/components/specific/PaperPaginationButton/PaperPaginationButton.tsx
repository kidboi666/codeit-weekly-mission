import { Button } from '@/src/components'
import { useMemo } from 'react'
import { PAGE_LIMIT_MIN } from '@/src/constants/number'
import * as S from './PaperPaginationButton.styled'

interface PaperPageProps {
  currentPage: number
  setCurrentPage: (page: number) => void
  totalPage: number
}

const PaperPaginationButton = ({ currentPage, setCurrentPage, totalPage }: PaperPageProps) => {
  const displayNumbers = useMemo(() => {
    const startPage = Math.ceil(currentPage / PAGE_LIMIT_MIN - 1) * PAGE_LIMIT_MIN + 1
    return Array.from({ length: PAGE_LIMIT_MIN }).map((_, idx) => {
      if (idx + startPage <= totalPage) {
        return idx + startPage
      }
      return 0
    })
  }, [currentPage])

  return (
    <S.PageContainer>
      <Button
        variant="folderButton"
        text="이전"
        disabled={!currentPage}
        onClick={() =>
          setCurrentPage(
            currentPage <= totalPage && currentPage !== 1 ? currentPage - 1 : currentPage,
          )
        }
      />
      {displayNumbers.map((page) => {
        if (!page) return null
        return (
          <Button
            key={page}
            variant="folderButton"
            text={page}
            selected={currentPage}
            onClick={() => setCurrentPage(page)}
          />
        )
      })}
      <Button
        variant="folderButton"
        text="다음"
        onClick={() => setCurrentPage(currentPage < totalPage ? currentPage + 1 : currentPage)}
      />
    </S.PageContainer>
  )
}

export default PaperPaginationButton
