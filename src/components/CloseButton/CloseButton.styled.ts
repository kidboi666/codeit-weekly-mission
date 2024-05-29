import styled from "styled-components";

export const CloseButton = styled.div<{ $variant: string }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;

  ${({ $variant }) =>
    $variant === "modal" &&
    `
    background-color: #e7effb;
  `}

  ${({ $variant }) =>
    $variant === "searchInput" &&
    `
    background-color: #ccd5e3;
  `}


  ${({ $variant }) =>
    $variant === "outlined" &&
    `
    transition: transform 0.3s;
    &:hover {
      transform: rotate(45deg);
    }
  `}
`;
