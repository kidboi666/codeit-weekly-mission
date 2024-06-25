import { QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default queryClient

/**
 * 전역에서 queryClient를 관리하여 nextjs의 fast refresh를 방지
 */
