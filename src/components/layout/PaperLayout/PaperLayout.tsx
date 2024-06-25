import { ReactNode } from 'react'
import { Spinner } from '@/src/components'
import * as S from './PaperLayout.styled'

interface PaperLayoutProps {
  Search: ReactNode
  Folder: ReactNode
  Paper: ReactNode
  AddLink: ReactNode
  folderPending: boolean
  paperPending: boolean
}

const PaperLayout = ({
  AddLink,
  Search,
  Folder,
  Paper,
  folderPending,
  paperPending,
}: PaperLayoutProps) => {
  return (
    <S.PaperPageLayout>
      <S.HeaderSection>{AddLink}</S.HeaderSection>
      <S.SearchSection>{Search}</S.SearchSection>
      <S.FolderSection>{folderPending ? <Spinner /> : <div>{Folder}</div>}</S.FolderSection>
      <S.LinkSection>{paperPending ? <Spinner /> : <div>{Paper}</div>}</S.LinkSection>
    </S.PaperPageLayout>
  )
}

export default PaperLayout
