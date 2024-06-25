import { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from 'react'

type UseInputReturn<T> = [
  T,
  (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  Dispatch<SetStateAction<T>>,
]

const useInput = <T extends string | number>(initialValue: T): UseInputReturn<T> => {
  const [value, setValue] = useState<T>(initialValue)

  const handler = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value as T)
  }, [])

  return [value, handler, setValue]
}

export default useInput
