import { ReactNode, useEffect, useRef, useState } from "react";
import * as S from "./FolderLayout.styled";

interface FolderLayoutProps {
  AddLink: ReactNode;
  Search: ReactNode;
  Folder: ReactNode;
  Card: ReactNode;
}

const FolderLayout = ({ AddLink, Search, Folder, Card }: FolderLayoutProps) => {
  const [isInterSecting, setInterSecting] = useState(false);
  const targetRef = useRef<HTMLDivElement>();

  const callback = (entries: IntersectionObserverEntry[]) => {
    setTimeout(() => {
      setInterSecting(!entries[0].isIntersecting);
    }, 100);
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
    <>
      <S.FolderPageLayout>
        <S.HeaderSection ref={targetRef}>{AddLink}</S.HeaderSection>
        <S.SearchSection>{Search}</S.SearchSection>
        <S.FolderSection>{Folder}</S.FolderSection>
        <S.LinkSection>{Card}</S.LinkSection>
      </S.FolderPageLayout>
      <S.FooterAddLink $animation={isInterSecting}>{AddLink}</S.FooterAddLink>
    </>
  );
};

export default FolderLayout;
