import { useAppDispatch } from "@/src/hooks/useApp";
import * as S from "./PaperCard.styled";
import calculateTime from "@/src/utils/calculateTime";
import { Paper } from "@/src/types";
import { openModal } from "@/src/store/reducers/modal";
import { useState } from "react";

interface PaperCardProps {
  paper: Paper;
}

const PaperCard = ({ paper }: PaperCardProps) => {
  const [showContent, setShowContent] = useState(false);
  const dispatch = useAppDispatch();

  const changeColor = (color: string) => {
    return `var(--${color}-color)`;
  };

  return (
    <S.CardLayout
      $background={changeColor(paper.background)}
      onClick={() => setShowContent((prev) => !prev)}
      onMouseLeave={() => setShowContent(false)}
    >
      <S.CardContainer>
        <S.CloseButtonStyled
          variant={"outlined"}
          onClick={() =>
            dispatch(
              openModal({
                type: "deletePaper",
                props: { paperTitle: paper.title, paperId: paper.id },
              }),
            )
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
  );
};

export default PaperCard;
