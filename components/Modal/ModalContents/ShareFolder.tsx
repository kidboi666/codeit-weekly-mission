import { useAppSelector } from "@/hooks/useApp";
import Image from "next/image";
import copyToClipboard from "@/utils/copyToClipboard";
import facebookIcon from "@/assets/icons/facebook_icon.svg";
import linkIcon from "@/assets/icons/link.svg";
import KakaoButton from "@/components/KakaoButton/KakaoButton";
import styled from "styled-components";

const ShareContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  div {
    display: grid;
    grid-template-rows: 42px 15px;
    gap: 10px;
    place-items: center;
    cursor: pointer;

    p {
      font-size: 13px;
      line-height: 15px;
    }
  }
`;

const ToastContainer = styled.div`
  position: fixed;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 70;
`;

const ShareFolder: React.FC = () => {
  const { selectedFolderId, selectedFolder } = useAppSelector((state) => state.folder);

  return (
    <>
      <h4>{selectedFolder}</h4>
      <ShareContainer>
        <KakaoButton />
        <div>
          <Image src={facebookIcon} alt={facebookIcon} />
          <p>페이스북</p>
        </div>
        <div onClick={() => copyToClipboard(selectedFolderId)}>
          <Image src={linkIcon} alt={linkIcon} />
          <p>링크 복사</p>
        </div>
      </ShareContainer>
      {/* {isToast && (
        <S.ToastContainer>
          <Toast setToast={setToast} />
        </S.ToastContainer>
      )} */}
    </>
  );
};

export default ShareFolder;
