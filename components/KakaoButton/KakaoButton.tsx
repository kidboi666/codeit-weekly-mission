import { useEffect } from "react";
import kakaoIcon from "../../assets/icons/kakao_icon.svg";
import Image from "next/image";

declare global {
  interface Window {
    Kakao: any;
  }
}

const KakaoButton: React.FC = () => {
  let kakao: any;
  if (window.Kakao) kakao = window.Kakao;
  const realUrl = `https://resilient-tapioca-37feb1.netlify.app`;

  useEffect(() => {
    kakao.cleanup();
    kakao.init("05390666a4347d840fba87466785c78e");
  }, []);

  const shareMessage = (e: any) => {
    kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "Linkbrary",
        description: "위클리미션",
        imageUrl: "https://5rolling.netlify.app/static/media/logo.c1f18ffcdc76df4e2e28b644ee3ae6fb.svg",
        link: {
          mobileWebUrl: realUrl,
          webUrl: realUrl,
        },
      },
      buttons: [
        {
          title: "웹에서 확인하기",
          link: {
            mobileWebUrl: realUrl,
            webUrl: realUrl,
          },
        },
      ],
    });
  };

  return (
    <div onClick={shareMessage}>
      <Image src={kakaoIcon} alt={kakaoIcon} />
      <p>카카오톡</p>
    </div>
  );
};

export default KakaoButton;
