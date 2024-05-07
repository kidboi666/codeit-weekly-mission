import * as S from "./Card.styled";
import blankLogo from "@/assets/icons/blank_logo.svg";
import calculateTime from "@/utils/calculateTime";
import formatDate from "@/utils/formatDate";
import Star from "./Star";
import Kebab from "./Kebab";
import { useState } from "react";
import Modal from "@/components/Modal/Modal";
import { FolderLink, FolderList } from "@/services/types";
import Image from "next/image";

interface Props {
  link: FolderLink;
}

const Card: React.FC<Props> = ({ link }) => {
  const [isDeleteModal, setDeleteModal] = useState(false);
  const [isAddModal, setAddModal] = useState(false);
  const timeDelta = formatDate(link.createdAt);
  const createdDate = calculateTime(link.createdAt);

  return (
    <S.CardLayout>
      <S.CardLinkContainer href={link.url} target='_blank' rel='noreferrer'>
        <S.CardImgContainer>
          <Star />
          {link.imageSource ? (
            <S.CardImg src={link.imageSource} alt={link.title} />
          ) : (
            <S.BlankImgBox>
              <Image src={blankLogo} alt={link.title} style={{ width: "100%" }} />
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
      {isDeleteModal && <Modal variant={"deleteLink"} closeModal={setDeleteModal} currentCard={link.title} />}
      {isAddModal && <Modal variant={"selectFolder"} closeModal={setAddModal} currentCard={link.title} />}
    </S.CardLayout>
  );
};

export default Card;
