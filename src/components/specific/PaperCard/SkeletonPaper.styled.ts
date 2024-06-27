import styled, { css } from 'styled-components'
import { skeletonStyled, slideDown } from '@/src/styles/animation'

export const PaperLayout = styled.li`
  min-width: 60px;
  width: ${() => Math.floor(Math.random() * 350)}px;
  position: relative;
  border-radius: 20px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  padding: 15px 20px;
  background-color: var(--white-color);
  transition: all 0.3s;
  animation: ${slideDown} 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 20px 25px 0px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }
`

export const PaperContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const textLine = css`
  position: relative;
  overflow: hidden;
  height: 20px;
  border-radius: 20px;
  background-color: var(--gray4-color);

  &::after {
    ${skeletonStyled}
  }
`

export const Title = styled.p`
  width: 50px;
  ${textLine}
`

export const Content = styled.p`
  width: ${() => Math.floor(Math.random() * 100 + 10)}px;
  ${textLine}
`
export const TimeStamp = styled.p`
  width: 90px;
  ${textLine}
`
