import { useState } from 'react'
import { Paper } from '@/src/types'
import { openModal } from '@/src/store/reducers/modal'
import calculateTime from '@/src/utils/calculateTime'
import { useAppDispatch } from '@/src/hooks/useApp'
import DeletePaper from '@/src/components/common/Modal/ModalContents/DeletePaper'
import SkeletonPaperCard from '@/src/components/specific/PaperCard/SkeletonPaper'
import * as S from './PaperCard.styled'

interface PaperCardProps {
  paperList: Paper[]
  isLoading: boolean
}

const PaperCard = ({ paperList, isLoading }: PaperCardProps) => {
  const [showContent, setShowContent] = useState(false)
  const dispatch = useAppDispatch()

  const changeColor = (color: string) => {
    return `var(--${color}-color)`
  }

  return isLoading ? (
    <>
      <SkeletonPaperCard />
      <SkeletonPaperCard />
      <SkeletonPaperCard />
    </>
  ) : (
    paperList?.map((paper) => (
      <S.PaperLayout
        key={paper.id}
        $background={changeColor(paper.background)}
        onClick={() => setShowContent((prev) => !prev)}
        onMouseLeave={() => setShowContent(false)}
      >
        <S.PaperContainer>
          <S.CloseButtonStyled
            variant="outlined"
            onClick={() =>
              dispatch(openModal(<DeletePaper paperTitle={paper.title} paperId={paper.id} />))
            }
          />
          <S.Title $showContent={showContent}>{paper.title}</S.Title>
          <S.Content $showContent={showContent}>{paper.content}</S.Content>
          {showContent ? (
            <S.TimeStamp>{calculateTime(paper.createdAt)}</S.TimeStamp>
          ) : (
            <S.TimeStamp>{paper.name}</S.TimeStamp>
          )}
        </S.PaperContainer>
      </S.PaperLayout>
    ))
  )
}

export default PaperCard
