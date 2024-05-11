import styled, { keyframes } from "styled-components";

export const SpinnerLayout = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  opacity: 1;
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
  position: fixed;
  z-index: 110;

  > img {
    animation: ${rotate} 1s linear infinite;
    width: 50px;
    height: 50px;
  }
`;
