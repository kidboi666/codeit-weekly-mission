import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
0% {
  transform: rotate(0);
}

100% {
  transform: rotate(360deg);
}
`

export const SpinnerBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 4px;
`

export const Spinner = styled.div`
  > img {
    animation: ${rotate} 1.4s linear infinite;
  }
`
