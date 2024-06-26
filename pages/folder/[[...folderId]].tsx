import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Folder, AddLink, Search, AppLayout, Card, FolderLayout, PaperCard } from '@/src/components'
import { Link } from '@/src/types'
import useGetLink from '@/src/services/link/useGetLink'
import useGetFolder from '@/src/services/folder/useGetFolder'
import { useAppDispatch, useAppSelector } from '@/src/hooks/useApp'
import { initCurrentFolder } from '@/src/store/reducers/folder'
import useGetPaper from '@/src/services/paper/useGetPaper'

const FolderPage = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { folderId } = router.query
  const [searchResult, setSearchResult] = useState<Link[] | string>([])
  const [searchKeyword, setSearchKeyword] = useState('')
  const { isLoggedIn } = useAppSelector((state) => state.auth)
  const { data: folderList, isPending: folderPending, error: folderError } = useGetFolder()
  const { data: paperList, isPending: paperPending, error: paperError } = useGetPaper()
  const { data: linkList, error: linkError, isPending: linkPending } = useGetLink(Number(folderId))

  useEffect(() => {
    if (!folderId) {
      dispatch(initCurrentFolder())
    }
  }, [folderId])

  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (!isLoggedIn && !token) {
      router.push('/')
    }
  }, [isLoggedIn])

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
        Paper={<PaperCard paperList={paperList} />}
        paperPending={paperPending}
        paperError={paperError}
        linkPending={linkPending}
        linkError={linkError}
        folderPending={folderPending}
        folderError={folderError}
      />
    </AppLayout>
  )
}

export default FolderPage
