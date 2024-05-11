import { useAppSelector } from "@/hooks/useApp";
import Image from "next/image";
import copyToClipboard from "@/utils/copyToClipboard";
import facebookIcon from "@/assets/icons/facebook_icon.svg";
import linkIcon from "@/assets/icons/link.svg";
import KakaoButton from "@/components/KakaoButton/KakaoButton";
import * as S from "@/components/Modal/ModalContents/ShareFolder.styled";

const ShareFolder: React.FC = () => {
  const { selectedFolderId, selectedFolder } = useAppSelector((state) => state.folder);

  return (
    <>
      <h4>{selectedFolder}</h4>
      <S.ShareContainer>
        <KakaoButton />
        <div>
          <Image src={facebookIcon} alt={facebookIcon} />
          <p>페이스북</p>
        </div>
        <div onClick={() => copyToClipboard(selectedFolderId)}>
          <Image src={linkIcon} alt={linkIcon} />
          <p>링크 복사</p>
        </div>
      </S.ShareContainer>
      {/* {isToast && (
        <S.ToastContainer>
          <Toast setToast={setToast} />
        </S.ToastContainer>
      )} */}
    </>
  );
};

export default ShareFolder;
