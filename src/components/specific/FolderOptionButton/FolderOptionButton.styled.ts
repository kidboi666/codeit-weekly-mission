import styled, { css, keyframes } from 'styled-components'

export const FolderOptionButtonLayout = styled.div`
  width: 1060px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1124px) {
    width: 700px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    width: 100%;
  }
`

export const SelectedFolder = styled.h1`
  align-self: flex-start;
  font-size: 24px;
  font-weight: 400;
`

export const OptionContainer = styled.div`
  display: flex;
  gap: 12px;
  color: var(--gray2-color);
  font-size: 14px;

  @media (max-width: 767px) {
    align-self: flex-end;
  }
`

export const OptionBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  cursor: pointer;
  padding: 5px 8px;
  border-radius: 8px;
  transition:
    color 0.3s,
    background 0.3s;

  &:hover {
    background-color: var(--primary-color);
    color: var(--white-color);
  }

  > img {
    width: 18px;
  }
`

const dragStyle = keyframes`
  from {
    transform: scale(0) translateX(-50%);
  }
  to {
    transform: scale(1) translateX(-50%);
  }
`

export const DraggingEventBox = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 600px;
  height: 600px;
  bottom: -15%;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
  gap: 2px;
  border-radius: 50%;
  background-color: rgba(0, 0, 130, 0.2);
  backdrop-filter: blur(8px);
  z-index: 200;
  animation: ${dragStyle} 0.3s ease-in-out;
`
const scaleAnimation = css`
  from {
    width: 300px;
    height: 300px;
  }
  to {
    width: 600px;
    height: 600px;
  }
`
export const BiggerButton = styled.button<{ $enterDrag: boolean; $deleteLoading?: boolean }>`
  border: none;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: var(--white-color);
  transition: all 0.3s;

  ${({ $enterDrag }) =>
    $enterDrag &&
    `
    background-color: var(--primary-color);
    width: 300px;
    height: 300px;
    
  `}
  ${({ $deleteLoading }) =>
    $deleteLoading &&
    `
      animation: ${scaleAnimation} 4s ease-in-out;
    `}
`
