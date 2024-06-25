import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Folder, AddLink, Search, AppLayout, Card, FolderLayout } from '@/src/components'
import { Link } from '@/src/types'
import useGetLink from '@/src/services/useFetch/link/useGetLink'
import useGetFolder from '@/src/services/useFetch/folder/useGetFolder'
import { useAppDispatch } from '@/src/hooks/useApp'
import { initCurrentFolder } from '@/src/store/reducers/folder'

const FolderPage = () => {
  const router = useRouter()
  const { folderId } = router.query
  const [searchResult, setSearchResult] = useState<Link[] | string>([])
  const [searchKeyword, setSearchKeyword] = useState('')
  const [folderList, folderPending, folderError] = useGetFolder()
  const [linkList, linkPending, linkError] = useGetLink(Number(folderId))
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!folderId) {
      dispatch(initCurrentFolder())
    }
  }, [folderId])

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
            <Card linkList={searchResult} folderList={folderList} />
          ) : (
            <Card linkList={linkList} folderList={folderList} />
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
