import { paperInstance } from '@/src/services/axiosInstance'
import camelcaseKeys from 'camelcase-keys'
import { FormBodyType } from '@/src/components/common/Modal/ModalContents/PaperForm'

export const getPaper = async () => {
  const { data } = await paperInstance.get(`paper`)

  return camelcaseKeys(data.data, { deep: true })
}

export const deletePaper = async (paperId: number) => {
  return paperInstance.delete(`paper/${paperId}`)
}

export const postPaper = async (formbody: FormBodyType) => {
  const { data } = await paperInstance.post(`paper`, formbody)

  return camelcaseKeys(data.data, { deep: true })
}
