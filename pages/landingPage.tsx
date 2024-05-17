import * as S from "@/styles/landingPage.styled";
import Image from "next/image";
import mainHeader from "@/assets/images/main_header.png";
import mainLink from "@/assets/images/main_link.png";
import mainFolder from "@/assets/images/main_folder.png";
import mainShare from "@/assets/images/main_share.png";
import mainSns from "@/assets/images/main_sns.png";
import Link from "next/link";
import Button from "@/components/Button/Button";
import { useAppSelector } from "@/hooks/useApp";
import { useEffect, useRef, useState } from "react";

const LandingPage = () => {
  const [isInterSecting, setInterSecting] = useState(false);
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const targetRef = useRef();

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      setTimeout(() => {
        if (entry.isIntersecting) {
          setInterSecting(true);
        }
      }, 100);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <S.LandingPageLayout>
      <S.HeaderContainer>
        <S.HeaderBox $animation={isInterSecting} ref={targetRef}>
          <S.IntroWrap>
            <h1>
              <span className='text_gradient info_gradient'>세상의 모든 정보</span>를<br />
            </h1>
            <h1>쉽게 저장하고 관리해 보세요.</h1>
          </S.IntroWrap>
          <S.LinkBox>
            <Link href={isLoggedIn ? "/folderPage" : "/signUp"}>
              <Button variant={"default"} text={"링크 추가하기"} width={"310px"} />
            </Link>
          </S.LinkBox>
          <Image src={mainHeader} alt={""} />
        </S.HeaderBox>
      </S.HeaderContainer>
      <S.SectionCotainer>
        <S.CardContainer>
          <S.CardBox>
            <h1>
              <span className='text_gradient link_gradient'> 원하는 링크</span>를&nbsp;
              <S.Break />
              저장하세요.
            </h1>
            <p>
              나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고 싶은 모든 것을 한
              공간에 저장하세요.
            </p>
            <div>
              <Image src={mainLink} alt={""} />
            </div>
          </S.CardBox>
        </S.CardContainer>
        <S.CardContainer>
          <S.CardBox>
            <h1>
              링크를 폴더로
              <S.Break />
              <span className='text_gradient folder_gradient'> 관리</span>하세요.
            </h1>
            <p>나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.</p>
            <div>
              <Image src={mainFolder} alt={""} />
            </div>
          </S.CardBox>
        </S.CardContainer>
        <S.CardContainer>
          <S.CardBox>
            <h1>
              저장한 링크를
              <S.Break />
              <span className='text_gradient share_gradient'> 공유</span>해 보세요.
            </h1>
            <p>
              여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게 쉽고 빠르게 링크를
              공유해 보세요.
            </p>
            <div>
              <Image src={mainShare} alt={""} />
            </div>
          </S.CardBox>
        </S.CardContainer>
        <S.CardContainer>
          <S.CardBox>
            <h1>
              저장한 링크를
              <S.Break />
              <span className='text_gradient sns_gradient'> 검색</span>해 보세요.
            </h1>
            <p>중요한 정보들을 검색으로 쉽게 찾아보세요.</p>
            <div>
              <Image src={mainSns} alt={""} />
            </div>
          </S.CardBox>
        </S.CardContainer>
      </S.SectionCotainer>
    </S.LandingPageLayout>
  );
};

export default LandingPage;
