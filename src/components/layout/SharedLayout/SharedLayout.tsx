import { ReactNode } from 'react'
import { Spinner } from '@/src/components'
import * as S from './SharedLayout.styled'

interface SharedLayoutProps {
  Owner: ReactNode
  Search: ReactNode
  Card: ReactNode
  linkError: Error | null
  folderInfoPending: boolean
  folderInfoError: Error | null
  userPending: boolean
  userError: Error | null
}

const SharedLayout = ({
  Owner,
  Search,
  Card,
  linkError,
  folderInfoPending,
  folderInfoError,
  userPending,
  userError,
}: SharedLayoutProps) => {
  if (linkError || folderInfoError || userError) {
    return '에러'
  }

  return (
    <S.SharedPageLayout>
      {folderInfoPending || userPending ? (
        <Spinner />
      ) : (
        <>
          <S.OwnerSection>{Owner}</S.OwnerSection>
          <S.SearchSection>{Search}</S.SearchSection>
          <S.LinkSection>{Card}</S.LinkSection>
        </>
      )}
    </S.SharedPageLayout>
  )
}

export default SharedLayout
