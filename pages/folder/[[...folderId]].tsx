import { useState } from 'react'
import { Folder, AddLink, Search, AppLayout, Card, FolderLayout } from '@/src/components'
import { Link } from '@/src/types'
import { getAllLinkList, getLinkList } from '@/src/services/link'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import useMyFolder from '@/src/components/layout/FolderLayout/dataFetching/useMyFolder'

const FolderPage = () => {
  const [searchResult, setSearchResult] = useState<Link[] | string>([])
  const [searchKeyword, setSearchKeyword] = useState('')
  const [folderList, folderPending, folderError] = useMyFolder()
  const router = useRouter()
  const { folderId } = router.query
  const {
    data: linkList,
    isPending: linkPending,
    error: linkError,
  } = useQuery({
    queryKey: ['links', folderId],
    queryFn: () => {
      if (!folderId) {
        return getAllLinkList()
      }
      return getLinkList(Number(folderId))
    },
  })

  return (
    <AppLayout>
      <FolderLayout
        AddLink={<AddLink folderList={folderList} />}
        Search={
          <Search
            linkList={linkList}
            setSearchResult={setSearchResult}
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
          />
        }
        Folder={<Folder folderList={folderList} />}
        Card={
          searchKeyword && searchResult.length >= 1 ? (
            <Card linkList={searchResult} />
          ) : (
            <Card linkList={linkList} />
          )
        }
        linkPending={linkPending}
        linkError={linkError}
        folderPending={folderPending}
        folderError={folderError}
      />
    </AppLayout>
  )
}

export default FolderPage
