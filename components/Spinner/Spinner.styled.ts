import styled, { keyframes } from "styled-components";

export const SpinnerLayout = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  opacity: 0.8;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white-color);
`;

const rotate = keyframes`
0% {
  transform: rotate(0);
}

100% {
  transform: rotate(360deg);
}
`;

export const Spinner = styled.div`
  animation: ${rotate} 1.3s linear infinite;

  > img {
    width: 100px;
    height: 100px;
  }
`;
