import * as S from "./Modal.styled";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { closeModal } from "@/redux/reducers/modal";
import { MODAL_COMPONENTS } from "./ModalTypes";

const Modal: React.FC = () => {
  const { type, isOpen } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  if (!isOpen) return null;

  const findModal = MODAL_COMPONENTS.get(type);

  if (!findModal) return null;

  return (
    <>
      <S.ScrollLock />
      <S.ModalLayout onClick={() => dispatch(closeModal())}>
        <S.ModalContainer onClick={(e) => e.stopPropagation()}>
          <S.StyledCloseButton variant='modal' onClick={() => dispatch(closeModal())} />
          {findModal}
        </S.ModalContainer>
      </S.ModalLayout>
    </>
  );
};

export default Modal;
