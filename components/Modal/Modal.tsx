import * as S from "./Modal.styled";
import { useState } from "react";
import * as M from "./ModalContents";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface ModalProps {
  variant: string;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentFolder?: string;
  currentCard?: string;
  folderId?: number;
}

const Modal: React.FC<ModalProps> = ({ variant, closeModal, currentFolder, currentCard, folderId = 0 }) => {
  const [isToast, setToast] = useState(false);
  const folderList = useSelector((state: RootState) => state.folder.data);
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

        {title === "폴더 추가" && <M.AddFolder variant={variant} text={text} closeModal={closingModal} />}
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
