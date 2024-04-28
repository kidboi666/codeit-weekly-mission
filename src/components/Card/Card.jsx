import * as S from './Card.styled';
import blankLogo from '../../assets/icons/blank_logo.svg';
import { calculatorTime, formatDate } from '../../utils/CalculatorTime';
import Star from './Star';
import Kebab from './Kebab';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const Card = ({ link, folderList }) => {
  const timeDelta = formatDate(link.createdAt ?? link.created_at);
  const createdDate = calculatorTime(link.createdAt ?? link.created_at);
  const preview = link.imageSource ?? link.image_source;
  const [isDeleteModal, setDeleteModal] = useState(false);
  const [isAddModal, setAddModal] = useState(false);

  return (
    <S.CardLayout>
      <S.CardLinkContainer href={link.url} target='_blank' rel='noreferrer'>
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
          <Kebab
            currentCard={link.title}
            isDeleteModal={isDeleteModal}
            setDeleteModal={setDeleteModal}
            isAddModal={isAddModal}
            setAddModal={setAddModal}
          />
          <S.CreatedDate>{createdDate}</S.CreatedDate>
          <S.Title>{link.title}</S.Title>
          <S.TimeStamp>{timeDelta}</S.TimeStamp>
        </S.CardDescriptionContainer>
      </S.CardLinkContainer>
      {isDeleteModal && (
        <Modal
          variant={'deleteLink'}
          closeModal={setDeleteModal}
          currentCard={link.title}
        />
      )}
      {isAddModal && (
        <Modal
          variant={'addFolder'}
          closeModal={setAddModal}
          folderList={folderList}
        />
      )}
    </S.CardLayout>
  );
};

export default Card;
