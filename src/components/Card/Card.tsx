import * as S from "./Card.styled";
import blankLogo from "../../assets/icons/blank_logo.svg";
import { calculateTime, formatDate } from "../../utils/CalculateTime";
import Star from "./Star";
import Kebab from "./Kebab";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { FolderLink, FolderList } from "../../api/types";

interface Props {
  link: FolderLink;
  folderList?: FolderList[];
}

const Card: React.FC<Props> = ({ link, folderList }) => {
  const [isDeleteModal, setDeleteModal] = useState(false);
  const [isAddModal, setAddModal] = useState(false);
  const timeDelta = formatDate(link.createdAt);
  const createdDate = calculateTime(link.createdAt);
  const preview = link.imageSource;

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
          <Kebab setDeleteModal={setDeleteModal} setAddModal={setAddModal} />
          <S.CreatedDate>{createdDate}</S.CreatedDate>
          <S.Title>{link.title}</S.Title>
          <S.TimeStamp>{timeDelta}</S.TimeStamp>
        </S.CardDescriptionContainer>
      </S.CardLinkContainer>
      {isDeleteModal && (
        <Modal
          variant={"deleteLink"}
          closeModal={setDeleteModal}
          currentCard={link.title}
        />
      )}
      {isAddModal && (
        <Modal
          variant={"selectFolder"}
          closeModal={setAddModal}
          currentCard={link.title}
          folderList={folderList}
        />
      )}
    </S.CardLayout>
  );
};

export default Card;
