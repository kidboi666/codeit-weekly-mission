import { QueryClient } from '@tanstack/react-query'

const queryCLient = new QueryClient()

export default queryCLient
/**
 * 전역에서 queryClient를 관리하여 nextjs의 fast refresh를 방지
 */
