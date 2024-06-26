import styled, { css } from 'styled-components'
import { slideDown, slideUp } from '@/src/styles/animation'

export const ToastLayout = styled.div<{ $isVisible: boolean }>`
  display: grid;
  grid-template-columns: 50px 236px 50px;
  height: 60px;
  position: fixed;
  overflow: hidden;
  bottom: 4%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 110;
  border-radius: 8px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
  color: var(--black-color);
  background-color: var(--white-color);

  ${({ $isVisible }) =>
    $isVisible !== undefined &&
    css`
      animation: ${$isVisible ? slideDown : slideUp} 0.3s;
    `}
`

export const CheckContainer = styled.div<{ $backgroundColor?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #75d701;
  color: var(--white-color);
  font-size: 25px;
  ${({ $backgroundColor }) =>
    $backgroundColor &&
    `
    background-color: var(--red-color);
  `};
`

export const CheckTextBox = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px 0 30px;
  color: inherit;
  font-size: 14px;
`

export const CloseIconButtonBox = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: rotate(90deg);
  }
`
