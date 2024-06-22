import { ReactNode } from 'react'
import * as S from './SharedLayout.styled'

interface SharedLayoutProps {
  Owner: ReactNode
  Search: ReactNode
  Card: ReactNode
}

const SharedLayout = ({ Owner, Search, Card }: SharedLayoutProps) => {
  return (
    <S.SharedPageLayout>
      <S.OwnerSection>{Owner}</S.OwnerSection>
      <S.SearchSection>{Search}</S.SearchSection>
      <S.LinkSection>{Card}</S.LinkSection>
    </S.SharedPageLayout>
  )
}

export default SharedLayout
