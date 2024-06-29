import { ReactNode, useEffect, useRef, useState } from 'react'
import { useAppSelector } from '@/src/hooks/useApp'
import * as S from './FolderLayout.styled'

interface FolderLayoutProps {
  AddLink: ReactNode
  Search: ReactNode
  Folder: ReactNode
  FolderOption: ReactNode
  Card: ReactNode
  Paper: ReactNode
  PaperPage: ReactNode
}

const FolderLayout = ({
  AddLink,
  Search,
  Folder,
  FolderOption,
  Card,
  Paper,
  PaperPage,
}: FolderLayoutProps) => {
  const { currentFolder } = useAppSelector((state) => state.folder)
  const [isInterSecting, setInterSecting] = useState(false)
  const targetRef = useRef<HTMLDivElement>()

  const callback = (entries: IntersectionObserverEntry[]) => {
    setTimeout(() => {
      setInterSecting(!entries[0].isIntersecting)
    }, 100)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callback)

    if (targetRef.current) {
      observer.observe(targetRef.current)
    }
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current)
      }
    }
  }, [])

  return (
    <>
      <S.FolderPageLayout onDragOver={(e) => e.preventDefault()}>
        <S.HeaderSection ref={targetRef}>{AddLink}</S.HeaderSection>
        <S.SearchSection>{Search}</S.SearchSection>
        <S.FolderSection>
          <div>{Folder}</div>
        </S.FolderSection>
        <S.FolderOptionSection>{FolderOption}</S.FolderOptionSection>
        {currentFolder.id === 1 ? (
          <>
            <S.PaperSection>
              <div>{Paper}</div>
            </S.PaperSection>
            <S.PaperPageSection>
              <div>{PaperPage}</div>
            </S.PaperPageSection>
          </>
        ) : (
          <S.LinkSection>{Card}</S.LinkSection>
        )}
      </S.FolderPageLayout>
      {currentFolder.id !== 1 && (
        <S.FooterAddLink $animation={isInterSecting}>{AddLink}</S.FooterAddLink>
      )}
    </>
  )
}

export default FolderLayout
