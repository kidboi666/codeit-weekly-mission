import Button from "../Button/Button";
import Input from "../Input/Input";
import * as S from "./Modal.styled";
import cancelIcon from "../../assets/icons/cancel.svg";
import kakaoIcon from "../../assets/icons/kakao_icon.svg";
import facebookIcon from "../../assets/icons/facebook_icon.svg";
import linkIcon from "../../assets/icons/link.svg";
import copyUrl from "../../utils/clipboard";
import { useState } from "react";
import Toast from "../Toast/Toast";
import { FolderList } from "../../api/types";
/**
 *
 * @param {string} variant Button에 넘겨줄 프롭스, 버튼 색깔을 결정
 * @param {string} placeholder Input에 넘겨줄 프롭스,
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
  placeholder?: string;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentFolder?: string;
  currentCard?: string;
  folderList?: FolderList[];
  folderId?: number;
}

const Modal: React.FC<ModalProps> = ({
  variant,
  placeholder = "내용 입력",
  closeModal,
  currentFolder,
  currentCard,
  folderList,
  folderId = 0,
}) => {
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
        <S.CloseButton onClick={closingModal}>
          <img
            src={cancelIcon}
            alt='취소이미지'
          />
        </S.CloseButton>
        <h4>{title}</h4>
        <S.CurrentFolder>{currentFolder || currentCard}</S.CurrentFolder>

        {title === "폴더에 추가" ? (
          <>
            <S.FolderList>
              {folderList?.map((folder) => (
                <S.FolderListItem key={folder.id}>
                  <S.ItemName>{folder.name}</S.ItemName>
                  <S.ItemLinkCount>{folder.link.count}개 링크</S.ItemLinkCount>
                </S.FolderListItem>
              ))}
            </S.FolderList>
          </>
        ) : (
          variant !== "deleteFolder" &&
          variant !== "deleteLink" && <Input placeholder={placeholder} />
        )}
        <Button
          variant={variant}
          text={text}
        />
        {title === "폴더 공유" && (
          <S.ShareContainer>
            <div>
              <img
                src={kakaoIcon}
                alt={kakaoIcon}
              />
              <p>카카오톡</p>
            </div>
            <div>
              <img
                src={facebookIcon}
                alt={facebookIcon}
              />
              <p>페이스북</p>
            </div>
            <div onClick={() => copyUrl(setToast, folderId)}>
              <img
                src={linkIcon}
                alt={linkIcon}
              />
              <p>링크 복사</p>
            </div>
            {isToast && (
              <S.ToastContainer>
                <Toast callback={() => setToast(false)} />
              </S.ToastContainer>
            )}
          </S.ShareContainer>
        )}
      </S.ModalContainer>
    </S.ModalLayout>
  );
};

export default Modal;
