import { useState } from 'react'
import { Paper } from '@/src/types'
import { openModal } from '@/src/store/reducers/modal'
import calculateTime from '@/src/utils/calculateTime'
import { useAppDispatch } from '@/src/hooks/useApp'
import DeletePaper from '@/src/components/common/Modal/ModalContents/DeletePaper'
import SkeletonPaperCard from '@/src/components/specific/PaperCard/SkeletonPaper'
import { CloseButton } from '@/src/components'
import * as S from './PaperCard.styled'
import formatDateTime from '@/src/utils/formatDateTime'

interface CardProps {
  paper: Paper
  changeColor: (color: string) => string
  dispatch: any
}

interface PaperCardProps {
  paperList: Paper[]
  isLoading: boolean
}

const Card = ({ paper, changeColor, dispatch }: CardProps) => {
  const [showContent, setShowContent] = useState(false)
  const [hoverContent, setHoverContent] = useState(false)
  return (
    <S.PaperLayout
      key={paper.id}
      $background={changeColor(paper.background)}
      onClick={() => setShowContent((prev) => !prev)}
      onMouseEnter={() => setHoverContent(true)}
      onMouseLeave={() => {
        setShowContent(false)
        setHoverContent(false)
      }}
    >
      <S.PaperContainer>
        <S.CloseButtonSection>
          <CloseButton
            variant="outlined"
            onClick={() =>
              dispatch(openModal(<DeletePaper paperTitle={paper.title} paperId={paper.id} />))
            }
          />
        </S.CloseButtonSection>
        <S.Writer $color={changeColor(paper.background)}>
          <p>✐ {paper.name}</p>
        </S.Writer>
        <S.Title $showContent={showContent}>{paper.title}</S.Title>
        <S.Content $showContent={showContent}>{paper.content}</S.Content>
      </S.PaperContainer>
      <S.TimeStamp $hoverContent={hoverContent} $color={changeColor(paper.background)}>
        {formatDateTime(paper.createdAt)}
      </S.TimeStamp>
    </S.PaperLayout>
  )
}

const PaperCard = ({ paperList, isLoading }: PaperCardProps) => {
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
    paperList?.map((paper) => {
      return <Card key={paper.id} paper={paper} changeColor={changeColor} dispatch={dispatch} />
    })
  )
}

export default PaperCard
