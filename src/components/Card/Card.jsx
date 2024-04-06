import * as S from './Card.style';
import blankLogo from '../../assets/icons/blank_logo.svg';
import { calculatorTime, formatDate } from '../../utils/CalculatorTime';
import Star from './Star';
import Kebob from './Kebob';

const Card = ({ link }) => {
  const timeDelta = formatDate(link.createdAt ?? link.created_at);
  const createdDate = calculatorTime(link.createdAt ?? link.created_at);
  const preview = link.imageSource ?? link.image_source;

  return (
    <S.CardLayout>
      <S.CardLinkContainer href={link.url} target="_blank" rel="noreferrer">
        <S.CardImgContainer>
          <Star />
          {preview ? (
            <S.CardImg src={preview} alt={link.title} />
          ) : (
            <S.BlankImgBox>
              <S.CardImg src={blankLogo} alt={link.title} />
            </S.BlankImgBox>
          )}
        </S.CardImgContainer>
        <S.CardDescriptionContainer>
          <Kebob />
          <S.CreatedDate>{createdDate}</S.CreatedDate>
          <S.Title>{link.title}</S.Title>
          <S.TimeStamp>{timeDelta}</S.TimeStamp>
        </S.CardDescriptionContainer>
      </S.CardLinkContainer>
    </S.CardLayout>
  );
};

export default Card;
