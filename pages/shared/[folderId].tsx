import { Search, Card, AppLayout, Owner, SharedLayout } from '@/src/components'
import { useState } from 'react'
import { Link } from '@/src/types'

const SharedPage = () => {
  const [searchResult, setSearchResult] = useState<Link[] | string>([])
  const [searchKeyword, setSearchKeyword] = useState('')
  return (
    <AppLayout>
      <SharedLayout
        Owner={<Owner profileImage="" userName="" folderName="" />}
        Search={
          <Search
            setSearchResult={setSearchResult}
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
          />
        }
        Card={searchResult.length >= 1 ? <Card linkList={searchResult} /> : <Card linkList={[]} />}
      />
    </AppLayout>
  )
}

export default SharedPage
