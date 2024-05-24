import { useAppDispatch, useAppSelector } from "@/src/hooks/useApp";
import Image from "next/image";
import copyToClipboard from "@/src/utils/copyToClipboard";
import facebookIcon from "@/public/icons/facebook_icon.svg";
import linkIcon from "@/public/icons/link.svg";
import { KakaoButton } from "@/src/components";
import * as S from "@/src/components/Modal/ModalContents/ShareFolder.styled";
import { openToast } from "@/src/store/reducers/toast";
import { ModalProps } from "../ModalTypes";

const ShareFolder = ({ title }: ModalProps) => {
  const { currentFolder } = useAppSelector((state) => state.modal.props) || {};
  const dispatch = useAppDispatch();

  const onClick = () => {
    copyToClipboard(currentFolder.id);
    dispatch(openToast({ type: "copyUrl" }));
  };

  return (
    <>
      <h3>{title}</h3>
      <h4>{currentFolder.name}</h4>
      <S.ShareContainer>
        <KakaoButton />
        <div>
          <Image src={facebookIcon} alt={facebookIcon} />
          <p>페이스북</p>
        </div>
        <div onClick={onClick}>
          <Image src={linkIcon} alt={linkIcon} />
          <p>링크 복사</p>
        </div>
      </S.ShareContainer>
    </>
  );
};

export default ShareFolder;
