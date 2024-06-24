import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api/linkbrary/v1/',
})

export const paperInstance = axios.create({
  baseURL: 'https://codeit-weekly-mission.vercel.app/api/',
})

const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken')
    const { data } = await axiosInstance.post(`auth/refresh-token`, {
      refresh_token: refreshToken,
    })
    localStorage.setItem('accessToken', data.accessToken)
    localStorage.setItem('refreshToken', data.refreshToken)
    return data
  } catch (error) {
    throw error
  }
}

axiosInstance.interceptors.request.use(
  async (config) => {
    const newConfig = { ...config }
    if (newConfig.headers['exclude-access-token']) {
      delete newConfig.headers['exclude-access-token']
      return newConfig
    }
    const accessToken = localStorage.getItem('accessToken')
    newConfig.headers.Authorization = `Bearer ${accessToken}`
    return newConfig
  },
  (error) => {
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config
    if (error.response?.status === 401 && !originalRequest.retry) {
      originalRequest.retry = true
      try {
        const { accessToken } = await refreshAccessToken()
        originalRequest.headers.Authorization = `Bearer ${accessToken}`
        return await axiosInstance(originalRequest)
      } catch (err) {
        return Promise.reject(err)
      }
    }
    return Promise.reject(error)
  },
)

export default axiosInstance
