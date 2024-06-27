import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
  Folder,
  AddLink,
  Search,
  AppLayout,
  LinkCard,
  FolderLayout,
  PaperCard,
} from '@/src/components'
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
  const { data: folderList, isPending: folderPending } = useGetFolder()
  const { data: paperList, isPending: paperPending } = useGetPaper()
  const { data: linkList, isPending: linkPending } = useGetLink(Number(folderId))

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
        Folder={<Folder folderList={folderList} isLoading={folderPending} />}
        Card={
          searchKeyword && searchResult.length >= 1 ? (
            <LinkCard linkList={searchResult} folderList={folderList} isLoading={linkPending} />
          ) : (
            <LinkCard linkList={linkList} folderList={folderList} isLoading={linkPending} />
          )
        }
        Paper={<PaperCard paperList={paperList} isLoading={paperPending} />}
      />
    </AppLayout>
  )
}

export default FolderPage
