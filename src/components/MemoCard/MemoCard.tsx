import { useAppSelector } from "@/src/hooks/useApp";
import * as S from "./MemoCard.styled";
import calculateTime from "@/src/utils/calculateTime";
import { Memo } from "@/src/types";

const MemoCard = () => {
  const { data: memoList } = useAppSelector((state) => state.memo);

  return (
    <>
      {memoList?.map((memo: Memo) => (
        <S.CardLayout key={memo.id}>
          <S.CardContainer>
            <S.CloseButtonStyled variant={"searchInput"} />
            <S.Title>{memo.title}</S.Title>
            <S.Content>{memo.content}</S.Content>
            <S.CreatedDate>{calculateTime(memo.createdAt)}</S.CreatedDate>
          </S.CardContainer>
        </S.CardLayout>
      ))}
    </>
  );
};

export default MemoCard;
