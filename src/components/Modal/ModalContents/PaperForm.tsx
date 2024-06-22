import { Button, Input } from '@/src/components'
import React, { useState } from 'react'
import { useAppDispatch } from '@/src/hooks/useApp'
import { getPaper, postPaper } from '@/src/store/actions/paper'
import { closeModal } from '@/src/store/reducers/modal'
import { openToast } from '@/src/store/reducers/toast'
import { ModalProps } from '../ModalTypes'
import * as S from './PaperForm.styled'
import ColorOption from '../../ColorOption/ColorOption'

const PaperForm = ({ variant, title, text }: ModalProps) => {
  const dispatch = useAppDispatch()
  const [formBody, setFormBody] = useState({
    name: '',
    title: '',
    content: '',
    background: 'blue',
  })
  const colorVariation = ['blue', 'green', 'yellow', 'silver']

  const handleChangeFormBody = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormBody({
      ...formBody,
      // eslint-disable-next-line @typescript-eslint/dot-notation
      [e.target['name']]: e.target.value,
    })
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formBody.title && formBody.content && formBody.name) {
      await dispatch(
        postPaper({
          name: formBody.name,
          title: formBody.title,
          content: formBody.content,
          background: formBody.background,
        }),
      )
      dispatch(closeModal())
      dispatch(openToast({ type: 'postPaper' }))
      await dispatch(getPaper())
    } else {
      dispatch(openToast({ type: 'wrongPaper' }))
    }
  }

  return (
    <>
      <h3>{title}</h3>
      <form onSubmit={onSubmit}>
        <Input
          variant="outlined"
          name="name"
          onChange={handleChangeFormBody}
          placeholder="글쓴이"
        />
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
        <Button variant={variant} text={text} width="100%" type="submit" />
      </form>
    </>
  )
}

export default PaperForm
