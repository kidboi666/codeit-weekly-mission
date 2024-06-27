import { Search, LinkCard, AppLayout, Owner, SharedLayout } from '@/src/components'
import { useState } from 'react'
import { Link } from '@/src/types'
import { useRouter } from 'next/router'
import useGetUser from '@/src/services/auth/useGetUser'
import useGetLink from '@/src/services/link/useGetLink'
import useGetFolderInfo from '@/src/services/folder/useGetFolderInfo'

const SharedPage = () => {
  const router = useRouter()
  const { folderId } = router.query
  const [searchResult, setSearchResult] = useState<Link[] | string>([])
  const [searchKeyword, setSearchKeyword] = useState('')
  const {
    data: folderInfo,
    isPending: folderInfoPending,
    error: folderInfoError,
  } = useGetFolderInfo(Number(folderId))
  const { data: linkList, isPending: linkPending, error: linkError } = useGetLink(Number(folderId))
  const {
    data: user,
    isPending: userPending,
    error: userError,
  } = useGetUser(folderInfo?.[0].userId)

  return (
    <AppLayout>
      <SharedLayout
        Owner={
          <Owner
            profileImage={user?.[0].imageSource}
            userName={user?.[0].name}
            folderName={folderInfo?.[0].name}
          />
        }
        Search={
          <Search
            linkList={linkList}
            setSearchResult={setSearchResult}
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
          />
        }
        Card={
          searchKeyword && searchResult.length >= 1 ? (
            <LinkCard linkList={searchResult} isLoading={linkPending} />
          ) : (
            <LinkCard linkList={linkList} isLoading={linkPending} />
          )
        }
        linkError={linkError}
        folderInfoPending={folderInfoPending}
        folderInfoError={folderInfoError}
        userPending={userPending}
        userError={userError}
      />
    </AppLayout>
  )
}

export default SharedPage
