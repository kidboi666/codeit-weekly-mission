import styled, { keyframes } from "styled-components";

const rotate = keyframes`
0% {
  transform: rotate(0);
}

100% {
  transform: rotate(360deg);
}
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  animation: ${rotate} 1.3s linear infinite;
`;
