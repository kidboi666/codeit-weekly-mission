import styled, { css } from 'styled-components'
import { skeletonStyled } from '@/src/styles/animation'

const SkeletonFolderStyle = css`
  position: relative;
  overflow: hidden;
  height: 35px;
  border-radius: 5px;
  background-color: var(--gray4-color);

  &::after {
    ${skeletonStyled};
    width: 400px;
  }
`
export const SkeletonFolder1 = styled.div`
  width: 60px;
  ${SkeletonFolderStyle}
`
export const SkeletonFolder2 = styled.div`
  width: 100px;
  ${SkeletonFolderStyle}
`
export const SkeletonFolder3 = styled.div`
  width: 80px;
  ${SkeletonFolderStyle}
`
