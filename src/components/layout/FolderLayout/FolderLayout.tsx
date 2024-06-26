import { ReactNode, useEffect, useRef, useState } from 'react'
import { Spinner } from '@/src/components'
import * as S from './FolderLayout.styled'
import { useAppSelector } from '@/src/hooks/useApp'

interface FolderLayoutProps {
  AddLink: ReactNode
  Search: ReactNode
  Folder: ReactNode
  Card: ReactNode
  Paper: ReactNode
  paperPending: boolean
  paperError: Error | null
  linkPending: boolean
  linkError: Error | null
  folderPending: boolean
  folderError: Error | null
}

const FolderLayout = ({
  AddLink,
  Search,
  Folder,
  Card,
  Paper,
  paperPending,
  paperError,
  linkPending,
  linkError,
  folderPending,
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
        <S.FolderSection>{folderPending ? <Spinner /> : <div>{Folder}</div>}</S.FolderSection>
        {currentFolder.id === 1 ? (
          <S.PaperSection>{paperPending ? <Spinner /> : <div>{Paper}</div>}</S.PaperSection>
        ) : (
          <S.LinkSection>{linkPending ? <Spinner /> : <div>{Card}</div>}</S.LinkSection>
        )}
      </S.FolderPageLayout>
      <S.FooterAddLink $animation={isInterSecting}>{AddLink}</S.FooterAddLink>
    </>
  )
}

export default FolderLayout
