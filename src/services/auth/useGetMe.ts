import { useQuery } from '@tanstack/react-query'
import axios from '@/src/services/axiosInstance'
import camelcaseKeys from 'camelcase-keys'
import { useEffect, useState } from 'react'

const useGetMe = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const getMe = async () => {
    const { data } = await axios.get(`users`)
    return camelcaseKeys(data, { deep: true })
  }

  useEffect(() => {
    setAccessToken(localStorage.getItem('accessToken'))
  }, [])

  return useQuery({
    queryKey: ['me'],
    queryFn: getMe,
    enabled: !!accessToken,
    staleTime: 60 * 1000 * 30,
    gcTime: 60 * 1000 * 30,
    refetchOnWindowFocus: false,
  })
}

export default useGetMe
