import { ReactNode, useEffect, useRef, useState } from 'react'
import { Spinner } from '@/src/components'
import * as S from './FolderLayout.styled'
import { SpinnerSize } from '@/src/components/common/Spinner/Spinner'

interface FolderLayoutProps {
  AddLink: ReactNode
  Search: ReactNode
  Folder: ReactNode
  Card: ReactNode
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
  linkPending,
  linkError,
  folderPending,
  folderError,
}: FolderLayoutProps) => {
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

  if (linkError || folderError) {
    return '에러'
  }

  return (
    <>
      <S.FolderPageLayout>
        <S.HeaderSection ref={targetRef}>{AddLink}</S.HeaderSection>
        <S.SearchSection>{Search}</S.SearchSection>
        <S.FolderSection>{folderPending ? <Spinner /> : <div>{Folder}</div>}</S.FolderSection>
        <S.LinkSection>{linkPending ? <Spinner /> : <div>{Card}</div>}</S.LinkSection>
      </S.FolderPageLayout>
      <S.FooterAddLink $animation={isInterSecting}>{AddLink}</S.FooterAddLink>
    </>
  )
}

export default FolderLayout
