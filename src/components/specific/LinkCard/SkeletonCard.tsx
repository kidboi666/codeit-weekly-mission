import * as S from './SkeletonCard.styled'

const SkeletonCard = () => {
  return (
    <S.CardLayout>
      <S.CardLinkContainer>
        <S.CardImgContainer />
        <S.CardDescriptionContainer>
          <S.CreatedDate />
          <S.Title />
          <S.TimeStamp />
        </S.CardDescriptionContainer>
      </S.CardLinkContainer>
    </S.CardLayout>
  )
}

export default SkeletonCard
