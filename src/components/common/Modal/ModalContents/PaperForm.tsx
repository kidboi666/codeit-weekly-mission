import { Button, Input } from '@/src/components'
import { ChangeEvent, FormEvent, useState } from 'react'
import { postPaper } from '@/src/services/paper'
import { useMutation } from '@tanstack/react-query'
import useFetchHandler from '@/src/hooks/useFetchHandler'
import ColorOption from '@/src/components/common/ColorOption/ColorOption'
import * as S from './PaperForm.styled'

export interface FormBodyType {
  name: string
  title: string
  content: string
  background: string
}

const PaperForm = () => {
  const [success, failure] = useFetchHandler()
  const [formBody, setFormBody] = useState<FormBodyType>({
    name: '',
    title: '',
    content: '',
    background: 'blue',
  })
  const colorVariation = ['blue', 'green', 'yellow', 'silver']
  const postPaperMutation = useMutation({
    mutationFn: (formBody: FormBodyType) => postPaper(formBody),
  })

  const handleChangeFormBody = (e: ChangeEvent<HTMLInputElement>) => {
    setFormBody({
      ...formBody,
      // eslint-disable-next-line @typescript-eslint/dot-notation
      [e.target['name']]: e.target.value,
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formBody.title && formBody.content && formBody.name) {
      try {
        postPaperMutation.mutate(formBody)
        success('페이퍼가 추가되었습니다.')
      } catch (err) {
        failure(err)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>페이퍼 추가</h3>
      <Input variant="outlined" name="name" onChange={handleChangeFormBody} placeholder="글쓴이" />
      <Input variant="outlined" name="title" onChange={handleChangeFormBody} placeholder="제목" />
      <S.PaperContentBox name="content" onChange={handleChangeFormBody} placeholder="내용" />
      <S.ColorOptionContainer>
        {colorVariation.map((color) => (
          <ColorOption
            key={color}
            background={color}
            formBody={formBody}
            setFormBody={setFormBody}
          />
        ))}
      </S.ColorOptionContainer>
      <Button variant="default" text="추가하기" width="100%" type="submit" />
    </form>
  )
}

export default PaperForm
