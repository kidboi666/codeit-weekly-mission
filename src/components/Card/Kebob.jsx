import { useLocation } from 'react-router-dom';
import kebobIcon from '../../assets/icons/kebab.svg';
import useToggle from '../../hooks/useToggle';
import * as S from './Kebob.styled';
import { useState, useRef } from 'react';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';

const Kebob = ({ isDeleteModal, setDeleteModal, isAddModal, setAddModal }) => {
  const [value, toggle] = useToggle();
  const currentLocation = useLocation();

  if (currentLocation.pathname !== '/folder') {
    return;
  }

  const onClickKebobButton = (e) => {
    e.preventDefault();
    toggle();
  };

  const onModal = (setter) => {
    setter((prev) => !prev);
  };

  return (
    <S.KebobLayout onClick={onClickKebobButton}>
      <img src={kebobIcon} alt='케밥 버튼 아이콘' />
      {value && (
        <S.ModalLayout>
          <button type='button' onClick={() => onModal(setDeleteModal)}>
            삭제하기
          </button>
          <button type='button' onClick={() => onModal(setAddModal)}>
            폴더에 추가
          </button>
        </S.ModalLayout>
      )}
    </S.KebobLayout>
  );
};

export default Kebob;
