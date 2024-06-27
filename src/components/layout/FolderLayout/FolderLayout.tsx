import { ReactNode, useEffect, useRef, useState } from 'react'
import { useAppSelector } from '@/src/hooks/useApp'
import * as S from './FolderLayout.styled'

interface FolderLayoutProps {
  AddLink: ReactNode
  Search: ReactNode
  Folder: ReactNode
  Card: ReactNode
  Paper: ReactNode
  paperError: Error | null
  linkError: Error | null
  folderError: Error | null
}

const FolderLayout = ({
  AddLink,
  Search,
  Folder,
  Card,
  Paper,
  paperError,
  linkError,
  folderError,
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

  if (linkError || folderError || paperError) {
    return '에러'
  }

  return (
    <>
      <S.FolderPageLayout>
        <S.HeaderSection ref={targetRef}>{AddLink}</S.HeaderSection>
        <S.SearchSection>{Search}</S.SearchSection>
        <S.FolderSection>
          <div>{Folder}</div>
        </S.FolderSection>
        {currentFolder.id === 1 ? (
          <S.PaperSection>
            <div>{Paper}</div>
          </S.PaperSection>
        ) : (
          <S.LinkSection>{Card}</S.LinkSection>
        )}
      </S.FolderPageLayout>
      <S.FooterAddLink $animation={isInterSecting}>{AddLink}</S.FooterAddLink>
    </>
  )
}

export default FolderLayout
