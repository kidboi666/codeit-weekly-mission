import * as S from "@/src/styles/landingPage.styled";
import Image from "next/image";
import mainHeader from "@/public/images/main_header.png";
import mainLink from "@/public/images/main_link.png";
import mainFolder from "@/public/images/main_folder.png";
import mainShare from "@/public/images/main_share.png";
import mainSns from "@/public/images/main_sns.png";
import Link from "next/link";
import { AppLayout, Button, OverviewCard } from "@/src/components";
import { useAppSelector } from "@/src/hooks/useApp";
import { useEffect, useRef, useState } from "react";

const descriptionList = [
  {
    gradient: "link",
    span: "원하는 링크",
    lastH1: "를 저장하세요",
    p: "나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고 싶은 모든 것을 한 공간에 저장하세요.",
    imgSrc: mainLink,
  },
  {
    gradient: "folder",
    firstH1: "링크를 폴더로",
    span: "관리",
    lasH1: "하세요.",
    p: "나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.",
    imgSrc: mainFolder,
  },
  {
    gradient: "share",
    firstH1: "저장한 링크를",
    span: "공유",
    lastH1: "해 보세요.",
    p: "여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게 쉽고 빠르게 링크를 공유해 보세요.",
    imgSrc: mainShare,
  },
  {
    gradient: "sns",
    firstH1: "저장한 링크를",
    span: "검색",
    lastH1: "해 보세요.",
    p: "중요한 정보들을 검색으로 쉽게 찾아보세요.",
    imgSrc: mainSns,
  },
];

const LandingPage = () => {
  const [isInterSecting, setInterSecting] = useState(false);
  const { isLoggedIn } = useAppSelector((state) => state.auth);
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
    <AppLayout>
      <S.LandingPageLayout>
        <S.HeaderContainer>
          <S.HeaderBox $animation={isInterSecting} ref={targetRef}>
            <S.IntroWrap>
              <h1>
                <span className='text_gradient info_gradient'>
                  세상의 모든 정보
                </span>
                를<br />
              </h1>
              <h1>쉽게 저장하고 관리해 보세요.</h1>
            </S.IntroWrap>
            <S.LinkBox>
              <Link href={isLoggedIn ? "/folder" : "/signup"}>
                <Button variant='default' text='링크 추가하기' width='310px' />
              </Link>
            </S.LinkBox>
            <Image src={mainHeader} alt='' />
          </S.HeaderBox>
        </S.HeaderContainer>
        <S.SectionCotainer>
          {descriptionList.map((v, i) => (
            <div key={i}>
              <OverviewCard
                firstH1={v.firstH1 || ""}
                span={v.span}
                lastH1={v.lastH1}
                gradient={v.gradient}
                p={v.p}
                imgSrc={v.imgSrc}
                isEven={!!(i % 2)}
              />
            </div>
          ))}
        </S.SectionCotainer>
      </S.LandingPageLayout>
    </AppLayout>
  );
};

export default LandingPage;
