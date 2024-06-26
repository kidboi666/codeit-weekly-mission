import { ReactNode } from 'react'
import { Spinner } from '@/src/components'
import * as S from './SharedLayout.styled'

interface SharedLayoutProps {
  Owner: ReactNode
  Search: ReactNode
  Card: ReactNode
  linkPending: boolean
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
  linkPending,
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
      {linkPending || folderInfoPending || userPending ? (
        <Spinner />
      ) : (
        <>
          <S.OwnerSection>{Owner}</S.OwnerSection>
          <S.SearchSection>{Search}</S.SearchSection>
          <S.LinkSection>
            <div>{Card}</div>
          </S.LinkSection>
        </>
      )}
    </S.SharedPageLayout>
  )
}

export default SharedLayout
