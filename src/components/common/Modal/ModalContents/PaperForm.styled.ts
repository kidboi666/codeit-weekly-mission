import styled from 'styled-components'

export const PaperContentBox = styled.textarea<{ onChange: any }>`
  width: 100%;
  height: 100px;
  resize: none;
  position: relative;
  padding: 15px 15px 15px 15px;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
  background-color: var(--white-color);
  border: 1px solid var(--gray2-color);
  transition: box-shadow 0.2s;

  &:focus {
    box-shadow: 5px 5px 1px #d2d1ff;
    border: 1px solid var(--primary-color);
  }
`

export const ColorOptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin: 20px 0;
`
