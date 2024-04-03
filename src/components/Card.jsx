import * as S from './Card.style';
import blankLogo from '../assets/icons/blank_logo.svg';
import { calculatorTime, formatDate } from '../utils/CalculatorTime';
import Star from './Star';
import Kebob from './Kebob';

function Card({ link }) {
  const timeDelta = formatDate(link.createdAt ?? link.created_at);
  const createdDate = calculatorTime(link.createdAt ?? link.created_at);
  const preview = link.imageSource ?? link.image_source;

  return (
    <S.Li>
      <S.CardLink href={link.url} target="_blank" rel="noreferrer">
        <S.CardImgBox>
          <Star />
          {preview ? (
            <S.CardImg src={preview} alt={link.title} />
          ) : (
            <S.BlankImgHelper>
              <S.CardImg src={blankLogo} alt={link.title} />
            </S.BlankImgHelper>
          )}
        </S.CardImgBox>
        <S.CardDescription>
          <Kebob />
          <S.CreatedDate>{createdDate}</S.CreatedDate>
          <S.Title>{link.title}</S.Title>
          <S.TimeStamp>{timeDelta}</S.TimeStamp>
        </S.CardDescription>
      </S.CardLink>
    </S.Li>
  );
}

export default Card;
