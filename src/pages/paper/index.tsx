import { AddLink, AppLayout, Folder, PaperLayout, Search, PaperCard } from '@/src/components'
import { useAppSelector } from '@/src/hooks/useApp'
import { getFolder } from '@/src/services/folder'
import { getPaper } from '@/src/services/paper'
import { Link } from '@/src/types'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

const PaperPage = () => {
  const [searchResult, setSearchResult] = useState<Link[] | string>([])
  const [searchKeyword, setSearchKeyword] = useState('')
  const { id: userId } = useAppSelector((state) => state.auth.userInfo)
  const router = useRouter()
  const { data: folderList, isPending: folderPending } = useQuery({
    queryKey: ['folders'],
    queryFn: getFolder,
  })
  const { data: paperList, isPending: paperPending } = useQuery({
    queryKey: ['papers'],
    queryFn: getPaper,
  })

  useEffect(() => {
    if (!userId) router.push('/folder')
  }, [router, userId])

  return (
    <AppLayout>
      <PaperLayout
        AddLink={<AddLink />}
        Search={
          <Search
            setSearchKeyword={setSearchKeyword}
            setSearchResult={setSearchResult}
            searchKeyword={searchKeyword}
          />
        }
        Folder={<Folder folderList={folderList} />}
        Paper={<PaperCard paperList={paperList} />}
        folderPending={folderPending}
        paperPending={paperPending}
      />
    </AppLayout>
  )
}

export default PaperPage
