import { useEffect, useState } from 'react'
import { Folder, AddLink, Search, AppLayout, Card, FolderLayout } from '@/src/components'
import { useAppDispatch, useAppSelector } from '@/src/hooks/useApp'
import { Link } from '@/src/types'
import { getAllLinkList, getLinkList } from '@/src/services/link'
import { getFolder } from '@/src/services/folder'
import { useRouter } from 'next/router'
import { userInfoAccess } from '@/src/services/auth'
import { useQuery } from '@tanstack/react-query'

const FolderPage = () => {
  const [searchResult, setSearchResult] = useState<Link[] | string>([])
  const [searchKeyword, setSearchKeyword] = useState('')
  const { isLoggedIn } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { folderId } = router.query
  const {
    data: folderList,
    isPending: folderPending,
    error: folderError,
  } = useQuery({
    queryKey: ['folders'],
    queryFn: getFolder,
    staleTime: 60 * 1000,
    gcTime: 60 * 1000 * 10,
  })
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

  const initPage = async () => {
    const token = localStorage.getItem('accessToken')
    if (token && !isLoggedIn) {
      await dispatch(userInfoAccess())
    } else {
      await router.push('/')
    }
  }

  useEffect(() => {
    if (!isLoggedIn) {
      initPage()
    }
  }, [isLoggedIn])

  return (
    <AppLayout>
      <FolderLayout
        AddLink={<AddLink />}
        Search={
          <Search
            setSearchResult={setSearchResult}
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
          />
        }
        Folder={<Folder folderList={folderList} isPending={folderPending} error={folderError} />}
        Card={
          searchKeyword && searchResult.length >= 1 ? (
            <Card linkList={searchResult} isPending={linkPending} error={linkError} />
          ) : (
            <Card linkList={linkList} isPending={linkPending} error={linkError} />
          )
        }
      />
    </AppLayout>
  )
}

export default FolderPage
