import * as S from './SkeletonPaper.styled'

const SkeletonPaperCard = () => {
  return (
    <S.PaperLayout>
      <S.PaperContainer>
        <S.Title />
        <S.Content />
        <S.TimeStamp />
      </S.PaperContainer>
    </S.PaperLayout>
  )
}

export default SkeletonPaperCard
