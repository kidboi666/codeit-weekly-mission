import { FormEvent, useState } from 'react'
import { Button, Input } from '@/src/components'
import useFetchHandler from '@/src/hooks/useFetchHandler'
import ColorOption from '@/src/components/common/ColorOption/ColorOption'
import useInput from '@/src/hooks/useInput'
import usePostPaper from '@/src/services/useFetch/paper/usePostPaper'
import * as S from './PaperForm.styled'

const PaperForm = () => {
  const { mutate, isPending } = usePostPaper()
  const [success, failure] = useFetchHandler()
  const [name, onChangeName] = useInput('')
  const [title, onChangeTitle] = useInput('')
  const [content, onChangeContent] = useInput('')
  const [background, setBackground] = useState('blue')
  const colorVariation = ['blue', 'green', 'yellow', 'silver']

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name && title && content) {
      mutate(
        { name, title, content, background },
        {
          onSuccess: () => success('페이퍼가 추가되었습니다.'),
          onError: (error) => failure(error),
        },
      )
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>페이퍼 추가</h3>
      <Input variant="outlined" value={name} onChange={onChangeName} placeholder="글쓴이" />
      <Input variant="outlined" value={title} onChange={onChangeTitle} placeholder="제목" />
      <S.PaperContentBox value={content} onChange={onChangeContent} placeholder="내용" />
      <S.ColorOptionContainer>
        {colorVariation.map((color) => (
          <ColorOption
            key={color}
            background={color}
            formBody={background}
            setFormBody={setBackground}
          />
        ))}
      </S.ColorOptionContainer>
      <Button variant="default" text="추가하기" width="100%" type="submit" isPending={isPending} />
    </form>
  )
}

export default PaperForm
