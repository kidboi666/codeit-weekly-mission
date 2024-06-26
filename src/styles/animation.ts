import { css, keyframes } from 'styled-components'

export const fadeIn = keyframes`
  from {
    opacity: 0;  
  }
  to {
    opacity: 1;  
  }  
`

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
  opacity: 0;
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
