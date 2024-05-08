import styled from "styled-components";

export const Input = styled.input<{ $variant?: string }>`
  position: relative;
  padding: 15px 15px 15px 15px;
  box-sizing: border-box;
  border: none;
  background-color: #f5f5f5;
  border-radius: 10px;

  ${({ $variant }) =>
    $variant === "sign" &&
    `
    background-color: var(--white-color);
    border:1px solid var(--gray2-color);
  `}
`;
