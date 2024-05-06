import * as S from "./Modal.styled";
import { useState } from "react";
import { FolderList } from "../../pages/api/types";
import * as M from "./ModalContents";
/**
 *
 * @param {string} variant Button에 넘겨줄 프롭스, 버튼 색깔을 결정
 * @param {function} closeModal 모달을 종료할 setter함수
 * @param {string} currentCard 카드내부에 케밥으로 모달을 띄웠울시 받는 카드 이름
 * @param {string} currentFolder 폴더관련 버튼으로 모달을 띄웠을시 받는 폴더 이름
 * @param {object} folderList 폴더에 링크 추가시 출력할 폴더 리스트
 * @param {number} folderId 주소 복사시 사용될 url 프롭스
 * @param {function} setToast 토스트창을 띄울 boolean 프롭스
 * @returns {Element}
 */

interface ModalProps {
  variant: string;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentFolder?: string;
  currentCard?: string;
  folderList?: FolderList[];
  folderId?: number;
}

const Modal: React.FC<ModalProps> = ({ variant, closeModal, currentFolder, currentCard, folderList, folderId = 0 }) => {
  const [isToast, setToast] = useState(false);
  let title;
  let text;

  const closingModal = () => {
    closeModal(false);
  };

  switch (variant) {
    case "changeName":
      title = "폴더 이름 변경";
      text = "변경하기";
      variant = "default";
      break;
    case "addFolder":
      title = "폴더 추가";
      text = "추가하기";
      variant = "default";
      break;
    case "selectFolder":
      title = "폴더에 추가";
      text = "추가하기";
      variant = "default";
      break;
    case "addLink":
      title = "링크 추가";
      text = "추가하기";
      variant = "default";
      break;
    case "shareFolder":
      title = "폴더 공유";
      text = "";
      break;
    case "deleteFolder":
      title = "폴더 삭제";
      text = "삭제하기";
      break;
    case "deleteLink":
      title = "링크 삭제";
      text = "삭제하기";
      break;
  }

  return (
    <S.ModalLayout>
      <S.ModalContainer>
        <S.StyledCloseButton variant={"modal"} onClick={closingModal} />
        <h4>{title}</h4>
        <S.CurrentFolder>{currentFolder || currentCard}</S.CurrentFolder>

        {title === "폴더 추가" && <M.AddFolder variant={variant} text={text} />}
        {title === "링크 추가" && <M.AddLink variant={variant} text={text} />}
        {title === "폴더에 추가" && <M.LinkFolder variant={variant} text={text} folderList={folderList} />}
        {title === "폴더 공유" && <M.Share isToast={isToast} setToast={setToast} folderId={folderId} />}
        {title === "폴더 이름 변경" && <M.ChangeName currentFolder={currentFolder} variant={variant} text={text} />}
        {title === "폴더 삭제" && <M.Delete variant={variant} text={text} />}
        {title === "링크 삭제" && <M.Delete variant={variant} text={text} />}
      </S.ModalContainer>
    </S.ModalLayout>
  );
};

export default Modal;
