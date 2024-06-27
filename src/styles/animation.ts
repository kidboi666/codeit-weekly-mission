import { css, keyframes } from 'styled-components'

export const fadeIn = keyframes`
  from {
    opacity: 0;  
  }
  to {
    opacity: 1;  
  }  
`

export const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const slideUp = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10%);
  }
`

export const skeletonAnimation = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100);
  }
`

export const skeletonStyled = css`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 1200px;
  height: 100%;
  background: linear-gradient(90deg, var(--gray4-color), var(--gray5-color), var(--gray4-color));
  animation: ${skeletonAnimation} 0.5s linear infinite;
`
