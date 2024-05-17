import * as S from "./Modal.styled";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { closeModal, putContents } from "@/redux/reducers/modal";
import { MODAL_COMPONENTS } from "./ModalTypes";

const Modal: React.FC = () => {
  const { contents, isOpen } = useAppSelector((state) => state.modal);
  const { title } = useAppSelector((state) => state.modal.contents);
  const dispatch = useAppDispatch();

  if (!isOpen) return null;

  const findModal = MODAL_COMPONENTS.find((modal) => {
    if (modal.contents.type === contents.type) {
      dispatch(putContents(modal.contents));
      return modal;
    }
  });

  const renderModal = () => {
    return findModal?.component;
  };

  return (
    <>
      <S.ScrollLock />
      <S.ModalLayout onClick={() => dispatch(closeModal())}>
        <S.ModalContainer onClick={(e) => e.stopPropagation()}>
          <S.StyledCloseButton variant='modal' onClick={() => dispatch(closeModal())} />
          <h3>{title}</h3>
          {renderModal()}
        </S.ModalContainer>
      </S.ModalLayout>
    </>
  );
};

export default Modal;
