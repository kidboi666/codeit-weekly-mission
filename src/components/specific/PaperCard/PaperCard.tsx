import { useState } from 'react'
import { Paper } from '@/src/types'
import { openModal } from '@/src/store/reducers/modal'
import { useAppDispatch } from '@/src/hooks/useApp'
import DeletePaper from '@/src/components/common/Modal/ModalContents/DeletePaper'
import SkeletonPaperCard from '@/src/components/specific/PaperCard/SkeletonPaper'
import { CloseButton } from '@/src/components'
import formatDateTime from '@/src/utils/formatDateTime'
import * as S from './PaperCard.styled'

interface PaperProps {
  paper: Paper
  changeColor: (color: string) => string
  dispatch: any
}

interface PaperCardProps {
  paperList: Paper[]
  isLoading: boolean
}

const PaperCardItem = ({ paper, changeColor, dispatch }: PaperProps) => {
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
        <S.TopSection>
          <S.Title $showContent={showContent}>{paper.title}</S.Title>
          <S.Writer $showContent={showContent} $color={changeColor(paper.background)}>
            <p>✎ {paper.name}</p>
          </S.Writer>
        </S.TopSection>
        <S.CloseButtonSection $hoverContent={hoverContent} $color={changeColor(paper.background)}>
          <CloseButton
            variant="outlined"
            onClick={() =>
              dispatch(openModal(<DeletePaper paperTitle={paper.title} paperId={paper.id} />))
            }
          />
        </S.CloseButtonSection>
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
      return (
        <PaperCardItem key={paper.id} paper={paper} changeColor={changeColor} dispatch={dispatch} />
      )
    })
  )
}

export default PaperCard
