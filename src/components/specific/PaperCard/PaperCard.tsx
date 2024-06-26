import { useState } from 'react'
import { Paper } from '@/src/types'
import { openModal } from '@/src/store/reducers/modal'
import calculateTime from '@/src/utils/calculateTime'
import { useAppDispatch } from '@/src/hooks/useApp'
import DeletePaper from '@/src/components/common/Modal/ModalContents/DeletePaper'
import * as S from './PaperCard.styled'

interface PaperCardProps {
  paperList: Paper[]
}

const PaperCard = ({ paperList }: PaperCardProps) => {
  const [showContent, setShowContent] = useState(false)
  const dispatch = useAppDispatch()

  const changeColor = (color: string) => {
    return `var(--${color}-color)`
  }

  return paperList.map((paper) => (
    <S.CardLayout
      key={paper.id}
      $background={changeColor(paper.background)}
      onClick={() => setShowContent((prev) => !prev)}
      onMouseLeave={() => setShowContent(false)}
    >
      <S.CardContainer>
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
      </S.CardContainer>
    </S.CardLayout>
  ))
}

export default PaperCard
