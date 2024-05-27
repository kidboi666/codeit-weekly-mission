import { useAppDispatch, useAppSelector } from "@/src/hooks/useApp";
import * as S from "./PaperCard.styled";
import calculateTime from "@/src/utils/calculateTime";
import { Paper } from "@/src/types";
import { openModal } from "@/src/store/reducers/modal";

const PaperCard = () => {
  const { data: paperList } = useAppSelector((state) => state.paper);
  const dispatch = useAppDispatch();

  const changeColor = (color: string) => {
    return `var(--${color}-color)`;
  };

  return (
    <>
      {paperList?.map((paper: Paper) => (
        <S.CardLayout
          key={paper.id}
          $background={changeColor(paper.background)}
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
            <S.Title>{paper.title}</S.Title>
            <S.Content>{paper.content}</S.Content>
            <S.CreatedDate>{calculateTime(paper.createdAt)}</S.CreatedDate>
          </S.CardContainer>
        </S.CardLayout>
      ))}
    </>
  );
};

export default PaperCard;
