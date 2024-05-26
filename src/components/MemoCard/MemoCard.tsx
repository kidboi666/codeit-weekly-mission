import { useAppDispatch, useAppSelector } from "@/src/hooks/useApp";
import * as S from "./MemoCard.styled";
import calculateTime from "@/src/utils/calculateTime";
import { Memo } from "@/src/types";
import { deleteMemo } from "@/src/store/actions/memo";
import { openModal } from "@/src/store/reducers/modal";

const MemoCard = () => {
  const { data: memoList } = useAppSelector((state) => state.memo);
  const dispatch = useAppDispatch();

  return (
    <>
      {memoList?.map((memo: Memo) => (
        <S.CardLayout key={memo.id}>
          <S.CardContainer>
            <S.CloseButtonStyled
              variant={"outlined"}
              onClick={() =>
                dispatch(
                  openModal({
                    type: "deleteMemo",
                    props: { memoTitle: memo.title, memoId: memo.id },
                  }),
                )
              }
            />
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
