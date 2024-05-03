import React from "react";
import kebobIcon from "../../assets/icons/kebab.svg";
import useToggle from "../../hooks/useToggle";
import * as S from "./Kebab.styled";
import { useLocation } from "react-router-dom";

interface Props {
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  setAddModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Kebab: React.FC<Props> = ({ setDeleteModal, setAddModal }) => {
  const [value, toggle] = useToggle();
  const currentLocation = useLocation();

  if (currentLocation.pathname !== "/folder") {
    return null;
  }

  const onClickKebabButton = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    toggle();
  };

  const onModalBox = (
    setter: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    setter((prev: boolean) => !prev);
  };

  return (
    <S.KebabLayout onClick={onClickKebabButton}>
      <img
        src={kebobIcon}
        alt='케밥 버튼 아이콘'
      />
      {value && (
        <S.ModalLayout>
          <button
            type='button'
            onClick={() => onModalBox(setDeleteModal)}
          >
            삭제하기
          </button>
          <button
            type='button'
            onClick={() => onModalBox(setAddModal)}
          >
            폴더에 추가
          </button>
        </S.ModalLayout>
      )}
    </S.KebabLayout>
  );
};

export default Kebab;
