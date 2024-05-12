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
  transition: all 0.2s;
`;

const rotate = keyframes`
0% {
  transform: rotate(0);
}

100% {
  transform: rotate(360deg);
}
`;

export const SpinnerBox = styled.div`
  position: fixed;
  top: 50px;
  left: 20px;
  display: flex;
  justify-content: center;
  padding: 10px 10px;
  width: 15px;
  height: 15px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: var(--primary-color);
`;

export const Spinner = styled.div`
  > img {
    animation: ${rotate} 1.4s linear infinite;
    width: 15px;
    height: 15px;
  }
`;
