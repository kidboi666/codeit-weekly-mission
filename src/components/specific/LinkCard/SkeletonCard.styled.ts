import styled from 'styled-components'
import { skeletonStyled } from '@/src/styles/animation'

export const CardDescriptionContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 20px;
`

export const CardLayout = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s;
`

export const CardLinkContainer = styled.a`
  display: grid;
  grid-template-rows: 200px 134px;
  height: 100%;

  @media (max-width: 767px) {
    grid-template-rows: 192px 135px;
  }
`

export const CardImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  background-color: var(--gray4-color);
  &::after {
    ${skeletonStyled}
  }
`

export const CreatedDate = styled.p`
  position: relative;
  overflow: hidden;
  width: 100px;
  height: 24px;
  border-radius: 20px;
  background-color: var(--gray4-color);
  &::after {
    ${skeletonStyled}
  }
`

export const Title = styled.p`
  position: relative;
  overflow: hidden;
  width: 230px;
  height: 24px;
  border-radius: 20px;
  background-color: var(--gray4-color);
  &::after {
    ${skeletonStyled}
  }
`

export const TimeStamp = styled.p`
  position: relative;
  overflow: hidden;
  width: 90px;
  height: 24px;
  border-radius: 20px;
  background-color: var(--gray4-color);
  &::after {
    ${skeletonStyled}
  }
`
